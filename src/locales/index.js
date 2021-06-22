import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

import messages from './modules.js';

const i18n = new VueI18n({
  locale: localStorage.lang || 'CN',  // 默认使用中文
  messages
})

export default i18n;