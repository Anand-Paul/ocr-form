import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: "en",
      ns: ["general", "home"],
      defaultNS: "general",
      debug: true,
      detection: {
        order: ["queryString", "cookie"],
        cache: ["cookie"]
      },
      interpolation: {
        escapeValue: false
      }
    },
    (err, t) => {
      if (err) {
        return console.log("something went wrong loading", err);
      }
      t("key");
    }
  );

export default i18n;
