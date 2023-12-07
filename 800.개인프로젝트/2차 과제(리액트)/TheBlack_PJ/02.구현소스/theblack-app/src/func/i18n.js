import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

const availaleLanguages = ['ko', 'en', 'ja', 'ch']
const option ={
  order:['navigator', 'htmlTag', 'path', 'subdomail'],
  checkWhitelist:true
}

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    whitelist:availaleLanguages,
    debug: true,
    fallbackLng: "en",
    interpolation : {
      escapeValue: false,
    },
    resources: {
       ko:"ko",
       en:"en",
       ja:"ja",
       ch:"ch" 
    },
    detection:option,
    defaultNS: "translation",
    ns: "translation",
    saveMissing: true,
    keySeparator: false,
    react: {
      useSuspense: false,
    },
  });

export default i18n;