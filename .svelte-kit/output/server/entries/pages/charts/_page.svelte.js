import { c as create_ssr_component, o as onDestroy, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { T as TitleBar } from "../../../chunks/TitleBar.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "frappe-charts";
const Base = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {
    labels: [],
    datasets: [{ values: [] }],
    yMarkers: {},
    yRegions: []
  } } = $$props;
  let { title = "" } = $$props;
  let { type = "line" } = $$props;
  let { height = 300 } = $$props;
  let { animate = true } = $$props;
  let { axisOptions = {} } = $$props;
  let { barOptions = {} } = $$props;
  let { lineOptions = {} } = $$props;
  let { tooltipOptions = {} } = $$props;
  let { colors = [] } = $$props;
  let { valuesOverPoints = 0 } = $$props;
  let { isNavigable = false } = $$props;
  let { maxSlices = 3 } = $$props;
  let chart = null;
  let chartRef;
  function ifChartThen(fn) {
    return function ifChart(...args) {
      if (chart) {
        return fn(...args);
      }
    };
  }
  const addDataPoint = ifChartThen((label, valueFromEachDataset, index) => chart.addDataPoint(label, valueFromEachDataset, index));
  const removeDataPoint = ifChartThen((index) => chart.removeDataPoint(index));
  const exportChart = ifChartThen(() => chart.export());
  const updateChart = ifChartThen((newData) => chart.update(newData));
  onDestroy(() => {
    chart = null;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.axisOptions === void 0 && $$bindings.axisOptions && axisOptions !== void 0)
    $$bindings.axisOptions(axisOptions);
  if ($$props.barOptions === void 0 && $$bindings.barOptions && barOptions !== void 0)
    $$bindings.barOptions(barOptions);
  if ($$props.lineOptions === void 0 && $$bindings.lineOptions && lineOptions !== void 0)
    $$bindings.lineOptions(lineOptions);
  if ($$props.tooltipOptions === void 0 && $$bindings.tooltipOptions && tooltipOptions !== void 0)
    $$bindings.tooltipOptions(tooltipOptions);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.valuesOverPoints === void 0 && $$bindings.valuesOverPoints && valuesOverPoints !== void 0)
    $$bindings.valuesOverPoints(valuesOverPoints);
  if ($$props.isNavigable === void 0 && $$bindings.isNavigable && isNavigable !== void 0)
    $$bindings.isNavigable(isNavigable);
  if ($$props.maxSlices === void 0 && $$bindings.maxSlices && maxSlices !== void 0)
    $$bindings.maxSlices(maxSlices);
  if ($$props.addDataPoint === void 0 && $$bindings.addDataPoint && addDataPoint !== void 0)
    $$bindings.addDataPoint(addDataPoint);
  if ($$props.removeDataPoint === void 0 && $$bindings.removeDataPoint && removeDataPoint !== void 0)
    $$bindings.removeDataPoint(removeDataPoint);
  if ($$props.exportChart === void 0 && $$bindings.exportChart && exportChart !== void 0)
    $$bindings.exportChart(exportChart);
  {
    updateChart(data);
  }
  return `<div${add_attribute("this", chartRef, 0)}></div>`;
});
const Base$1 = Base;
const ChartTemplate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { chartTitle = "" } = $$props;
  let { chartType = "" } = $$props;
  let { chartLabels = [] } = $$props;
  let { chartDatapoints = [] } = $$props;
  let data = { labels: [], datasets: [{ values: [] }] };
  if ($$props.chartTitle === void 0 && $$bindings.chartTitle && chartTitle !== void 0)
    $$bindings.chartTitle(chartTitle);
  if ($$props.chartType === void 0 && $$bindings.chartType && chartType !== void 0)
    $$bindings.chartType(chartType);
  if ($$props.chartLabels === void 0 && $$bindings.chartLabels && chartLabels !== void 0)
    $$bindings.chartLabels(chartLabels);
  if ($$props.chartDatapoints === void 0 && $$bindings.chartDatapoints && chartDatapoints !== void 0)
    $$bindings.chartDatapoints(chartDatapoints);
  return `<h1 class="title is-4">${escape(chartTitle)}</h1>
${validate_component(Base$1, "Chart").$$render($$result, { data, type: chartType }, {}, {})}`;
});
const PinsByCounty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let distinctCounties = [];
  let allCounties = [];
  return `${validate_component(ChartTemplate, "ChartTemplate").$$render(
    $$result,
    {
      chartTitle: "Pins by county",
      chartType: "bar",
      chartLabels: distinctCounties,
      chartDatapoints: allCounties
    },
    {},
    {}
  )}`;
});
const CampSpotChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let distinctCategories = [];
  let campType = [];
  return `${validate_component(ChartTemplate, "ChartTemplate").$$render(
    $$result,
    {
      chartTitle: "Camping spots",
      chartType: "donut",
      chartLabels: distinctCategories,
      chartDatapoints: campType
    },
    {},
    {}
  )}`;
});
const FreePaidChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let distinctCategories = [];
  let costType = [];
  return `${validate_component(ChartTemplate, "ChartTemplate").$$render(
    $$result,
    {
      chartTitle: "Paid vs Free locations",
      chartType: "pie",
      chartLabels: distinctCategories,
      chartDatapoints: costType
    },
    {},
    {}
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      subTitle: "Pin analytics",
      title: "Camperpins Inc."
    },
    {},
    {}
  )}</div>
  <div class="column">${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}</div></div>

<div class="columns"><div class="column has-text-centered">${validate_component(PinsByCounty, "PinsByCounty").$$render($$result, {}, {}, {})}</div>
  <div class="column has-text-centered">${validate_component(FreePaidChart, "FreePaidChart").$$render($$result, {}, {}, {})}</div></div>
<div class="columns"><div class="column has-text-centered">${validate_component(CampSpotChart, "CampSpotChart").$$render($$result, {}, {}, {})}</div>
  <div class="column has-text-centered"></div></div>`;
});
export {
  Page as default
};
