
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
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
      "chunk-6GGJE7OS.js",
      "chunk-DFGDHUEX.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZYXWE2EG.js",
      "chunk-DFGDHUEX.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5TPTLEXY.js",
      "chunk-DFGDHUEX.js"
    ],
    "route": "/register-driver-1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RUOMKD3P.js",
      "chunk-DFGDHUEX.js"
    ],
    "route": "/register-driver-2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MR6GA3HS.js",
      "chunk-WIB43YD4.js",
      "chunk-HJUCUTSC.js",
      "chunk-L7QAY5SB.js",
      "chunk-DFGDHUEX.js"
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
      "chunk-Z4MC454A.js"
    ],
    "route": "/admin/relatorios"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-7ZFPNRTD.js",
      "chunk-UAIQFYMP.js",
      "chunk-DFGDHUEX.js"
    ],
    "route": "/admin/motoristas"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-O5NHNKZC.js",
      "chunk-DFGDHUEX.js"
    ],
    "route": "/admin/clientes"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-EAI6DMZO.js",
      "chunk-L7QAY5SB.js",
      "chunk-UAIQFYMP.js"
    ],
    "route": "/admin/aprovar-motoristas"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HJ4AJ4HO.js",
      "chunk-WIB43YD4.js",
      "chunk-HJUCUTSC.js",
      "chunk-L7QAY5SB.js",
      "chunk-DFGDHUEX.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-BCVAAIXV.js",
      "chunk-HJUCUTSC.js",
      "chunk-L7QAY5SB.js"
    ],
    "route": "/viagens"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-6NMEWB7S.js"
    ],
    "route": "/motorista"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8716, hash: 'c46d16f6b1dfd13c3521e3094a8fc1c5ec71dd9b93b6ca1c24d51ccc58f0a9c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1303, hash: 'e5756d204c9b287486514e165cfe7fbf0a9d32a1dfee42d0cd5e1fb548162f13', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16843, hash: '81400d3c95bdec22bd8745eaab51092e0389f24bcbf57eec7bc61ab976875c1d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 49335, hash: '0967f10a1df9eeb527cd3d244b101b4e656211f913beca1a8d9dced255dd539c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'buttons/index.html': {size: 40529, hash: '4f26aa744d1d6a419251f15c22eb290eda660168d95c1acecd8f514442275cab', text: () => import('./assets-chunks/buttons_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 24339, hash: '2d567785f9ac1651fcb220aa5b869d1225cd974d14a158518d723ff33b7de731', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register-driver-2/index.html': {size: 276, hash: 'bccecf9b4112905d4dabd0ad44df9d587704028579d7278a4a451285ee31ae6a', text: () => import('./assets-chunks/register-driver-2_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 26540, hash: '24471197d2b788eb6f2a43928b917d2d9a1501e29664917462e98061a66060e8', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'register-driver-1/index.html': {size: 25594, hash: 'bd26ea13bdd90e9d169bda2d906d734934e4f9d211f0232c97031245daaff313', text: () => import('./assets-chunks/register-driver-1_index_html.mjs').then(m => m.default)},
    'styles-ACNBCXYL.css': {size: 47931, hash: '1kNcmeczkJU', text: () => import('./assets-chunks/styles-ACNBCXYL_css.mjs').then(m => m.default)}
  },
};
