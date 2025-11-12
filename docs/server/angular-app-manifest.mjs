
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 440, hash: '9ccd17c71eeadec9696027887eaacdcd22ab318e03b673a6ab208c665b744d6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 953, hash: '0e3734d7e5fcb851ffa8182eb0c1d335a092b09827f2ef7833aa0ac974eda853', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3503, hash: '18522d43a1955b6b5542b1bdb86a3c932a4d5f414053d3857ef96149bc745aeb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
