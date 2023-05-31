import * as server from '../entries/pages/pin/_slug_/_page.server.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/pin/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/pin/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.daf916b5.js","_app/immutable/chunks/index.95fb81be.js","_app/immutable/chunks/camperpins-service.63ffbdb3.js","_app/immutable/chunks/stores.5917ecde.js","_app/immutable/chunks/index.df179d79.js","_app/immutable/chunks/paths.1f6370cb.js","_app/immutable/chunks/index.a47ec209.js","_app/immutable/chunks/_commonjsHelpers.87174ba5.js","_app/immutable/chunks/MainNavigator.d41eaa6e.js","_app/immutable/chunks/TitleBar.297cac90.js","_app/immutable/chunks/data-mod.940d73b3.js"];
export const stylesheets = [];
export const fonts = [];
