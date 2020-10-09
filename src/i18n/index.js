import Vue from 'vue';
import VueI18n from 'vue-i18n';
import UserSettings from '@/modules/module.usersettings.js';

import LocaleEN from '@/i18n/en.json';

let userSettings = new UserSettings();

Vue.use(VueI18n);

let messages = {
    'en': LocaleEN
};

const i18n = new VueI18n({
    locale: userSettings.get('language'), // set locale
    fallbackLocale: 'en', // set fallback locale
    messages
});

export default i18n;
