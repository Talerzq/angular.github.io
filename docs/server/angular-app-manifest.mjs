
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Zadania/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Zadania"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 440, hash: 'de01c074e181e21624057ffa6c0f4fc4527acf3f80c201717ac822ccccbb01b3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '1e85ff52d2ea730384ed892f9b4f0088c7be65c1e12dd122ba4ba67e5dad5b96', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3503, hash: '2ecdfa0c2422fdb524ed99a7ad09f5013e13c6cd1ea8ebd4cee413961e7d212c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
