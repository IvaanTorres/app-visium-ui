import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en";
import de from "./locale/de";
import fr from "./locale/fr";
import { LOCALE } from "../../shared/constants/localstorage";
// import { getLocale } from "../../shared/services/languages/languages";

// async function initializeI18n() {
//   // Fetch the user's preferred locale from the database
//   const localeData = await getLocale();
//   let userLocale = "en"; // Default fallback

//   if ("data" in localeData) {
//     userLocale = localeData.data.locale;
//   }

//   // Initialize i18n with the user's preferred locale
//   i18n.use(initReactI18next).init({
//     resources: {
//       en: en,
//       de: de,
//       fr: fr
//     },
//     lng: userLocale
//   });
// }

// // Initialize i18n when the application starts
// initializeI18n();

// export default i18n;

const preferredLocale = localStorage.getItem(LOCALE) ?? 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    de: de,
    fr: fr
  },
  lng: preferredLocale,

});

export default i18n;
