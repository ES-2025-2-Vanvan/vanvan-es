
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AFONEOLX.js",
      "chunk-U2W2W7J3.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4DBVR362.js",
      "chunk-U2W2W7J3.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OMIB7Y3T.js",
      "chunk-U2W2W7J3.js"
    ],
    "route": "/register-driver-1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A5FZCLM2.js",
      "chunk-U2W2W7J3.js"
    ],
    "route": "/register-driver-2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-D473WP7Z.js",
      "chunk-W6X5NNVQ.js",
      "chunk-55IC6Y47.js",
      "chunk-IBTXRLNE.js",
      "chunk-U2W2W7J3.js"
    ],
    "route": "/buttons"
  },
  {
    "renderMode": 1,
    "redirectTo": "/admin/relatorios",
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-IWGKZEI5.js"
    ],
    "route": "/admin/relatorios"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-TXJS4DEQ.js",
      "chunk-JMVF53DM.js",
      "chunk-U2W2W7J3.js"
    ],
    "route": "/admin/motoristas"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-HVRPMXM4.js",
      "chunk-IBTXRLNE.js",
      "chunk-JMVF53DM.js"
    ],
    "route": "/admin/aprovar-motoristas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2HLMA5PR.js",
      "chunk-W6X5NNVQ.js",
      "chunk-55IC6Y47.js",
      "chunk-IBTXRLNE.js",
      "chunk-U2W2W7J3.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OZZUOZFQ.js",
      "chunk-55IC6Y47.js",
      "chunk-IBTXRLNE.js"
    ],
    "route": "/viagens"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Y5SCRWH4.js"
    ],
    "route": "/motorista"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1010, hash: 'db26d3c5910554883a7811734561b5a2538619cae04ff7f8a1cb9e996f7dbc48', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1550, hash: 'dd3d214a49bf7a67e6830435b3ccb62d639bea9005902bd0a8dc9c922a21ab61', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4792, hash: '0d300b62c96a562dec74de1ab875c92f87c9b1a72402bed1cb6a258d8fbba0b3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6114, hash: '949167b67f8651c69ed33dbbb558a33f2a71dd1d347e79403ef9919c5552007c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 8322, hash: '0a87237bafc890b23249074cbfbda47be3db2674894b1f5d0c50bd194fe571a6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'register-driver-2/index.html': {size: 276, hash: 'bccecf9b4112905d4dabd0ad44df9d587704028579d7278a4a451285ee31ae6a', text: () => import('./assets-chunks/register-driver-2_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 32815, hash: '6524baf86e70eb8189a41f3fa4c26fc94fcc4aa772b73c91b7fe949b603e24da', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'register-driver-1/index.html': {size: 7526, hash: '23b9fb8e0dd0e38d6011069b0bbf9e42eafbf11f30650087dd07a78bc6e56d0e', text: () => import('./assets-chunks/register-driver-1_index_html.mjs').then(m => m.default)},
    'buttons/index.html': {size: 29632, hash: 'd51ccf49ecb69dc38ba9e2ca6c6b4d19a65f221582a64ae61e00fc2ed852b154', text: () => import('./assets-chunks/buttons_index_html.mjs').then(m => m.default)}
  },
};
