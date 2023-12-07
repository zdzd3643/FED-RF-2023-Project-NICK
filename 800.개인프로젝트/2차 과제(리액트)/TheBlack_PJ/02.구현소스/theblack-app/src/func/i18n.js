import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationKo from "../language/ko/translation.ko.json"
import TranslationEn from "../language/en/translation.en.json"
import TranslationJa from "../language/ja/translation.ja.json"
import TranslationCh from "../language/ch/translation.ch.json"

const resource = {
   en:{
     translations: TranslationEn
   },
   ko:{
     translations:TranslationKo
   },
   ja:{
     translations:TranslationJa
   },
   ch:{
     translations:TranslationCh
   },
 }

i18n
  .use(initReactI18next)
  .init({
    resources:resource,
    lng: "ko",
    fallbackLng: "ko",
    debug: true,
    defaultNS: "translations",
    ns: "translations",
    keySeparator: false,
    interpolation : {
      escapeValue: false
    }
  });

export default i18n;