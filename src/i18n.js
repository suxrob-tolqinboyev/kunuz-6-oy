import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      "title1": "O'zbekiston",
      "title2": "Sport",
      "title3": "Jahon",
      "title4": "Jamiyat",
    },
  },
  eng: {
    translation: {
      "title1": "Uzbekistan",
      "title2": "Sports",
      "title3": "World",
      "title4": "Society",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
