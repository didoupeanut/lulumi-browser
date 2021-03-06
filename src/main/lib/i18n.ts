import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { readFileSync } from 'fs';
import { app } from 'electron';
import * as path from 'path';

import enElement from 'element-ui/lib/locale/lang/en';
import zhElement from 'element-ui/lib/locale/lang/zh-CN';
import zhTWElement from 'element-ui/lib/locale/lang/zh-TW';

import * as enUS from '../../helper/i18n/en-US';
import * as zhCN from '../../helper/i18n/zh-CN';
import * as zhTW from '../../helper/i18n/zh-TW';

const langPath: string = path.join(app.getPath('userData'), 'lululmi-lang');

let lang: string;
try {
  lang = readFileSync(langPath, 'utf8');
} catch (event) {
  lang = '"en-US"';
}
lang = JSON.parse(lang);

Vue.use(VueI18n);

export default new VueI18n({
  locale: lang,
  messages: {
    'en-US': Object.assign(enElement, enUS.appMenu),
    'zh-CN': Object.assign(zhElement, zhCN.appMenu),
    'zh-TW': Object.assign(zhTWElement, zhTW.appMenu),
  },
});
