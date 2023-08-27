import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en";
import de from "./locale/de";
import fr from "./locale/fr";

i18n.use(initReactI18next).init({
 resources: {
  en: en,
  de: de,
  fr: fr
 }, // Where we're gonna put translations' files
 lng: "fr",     // Set the initial language of the App
});

export default i18n;