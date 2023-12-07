import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../language/en.json";
import ko from "../language/ko.json";
import ch from "../language/ch.json";
import ja from "../language/ja.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
      ja: {
        translation: ja,
      },
      ch: {
        translation: ch,
      },
    },
    lng: "ko-KR",
    fallbackLng: {
      "ko-KR": ["ko-KR"],
      default: ["en-US"],
    },
    debug: true,
    defaultNS: "translation",
    ns: "translation",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;