import axios from "axios";
import { u as user } from "./stores.js";
const camperpinsService = {
  baseUrl: "https://camperpins-hapi-1.onrender.com",
  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email,
          token: response.data.token
        });
        localStorage.camperpins = JSON.stringify({ email, token: response.data.token });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async logout() {
    user.set({
      email: "",
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("camperpins");
  },
  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName,
        lastName,
        email,
        password
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  },
  reload() {
    const camperpinsCredentials = localStorage.camperpins;
    if (camperpinsCredentials) {
      const savedUser = JSON.parse(camperpinsCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  },
  async getPins() {
    try {
      const response = await axios.get(this.baseUrl + "/api/pins");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getPin(pin) {
    try {
      const token = user.token;
      const response = await axios.get(this.baseUrl + "/api/pins/" + pin);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async getCategories() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categories");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async addPin(pin) {
    console.log("adding pin");
    try {
      let token;
      console.log("adding token");
      if (localStorage.camperpins) {
        token = JSON.parse(localStorage.camperpins).token;
      } else {
        token = user.token;
      }
      console.log("posting request");
      const response = await axios.post(this.baseUrl + "/api/pins", pin, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.status);
      return response.data;
    } catch (error) {
      return false;
    }
  },
  async updatePin(pinId, updates) {
    console.log("updating pin");
    try {
      let token;
      console.log("adding token");
      if (localStorage.camperpins) {
        token = JSON.parse(localStorage.camperpins).token;
      } else {
        token = user.token;
      }
      const response = await axios.patch(this.baseUrl + "/api/pins/" + pinId + "/updatepin", updates, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      console.log(response.status);
      return response.data;
    } catch (error) {
      return error;
    }
  },
  async addCategory(pinId, categoryObj) {
    console.log("adding category");
    try {
      const response = await axios.post(this.baseUrl + "/api/pins/" + pinId + "/categories", categoryObj);
      return response.data;
    } catch (error) {
      return false;
    }
  },
  async uploadImage(pinId, formData) {
    try {
      const response = await axios.post(this.baseUrl + "/api/pins/" + pinId + "/uploadimage", formData);
      console.log(response.status);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async removeImage(pinId) {
    console.log("removing pin image");
    try {
      let token;
      console.log("adding token");
      if (localStorage.camperpins) {
        token = JSON.parse(localStorage.camperpins).token;
      } else {
        token = user.token;
      }
      const response = await axios.put(this.baseUrl + "/api/pins/" + pinId + "/removeimage", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(`response: ${response}`);
      console.log(`response status: ${response.status}`);
      return true;
    } catch (error) {
      return error;
    }
  }
};
export {
  camperpinsService as c
};
