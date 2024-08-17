import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { en, fr } from './Convert';

const { languageDetectorPlugin } = require('./Convert/languageDetectorPlugin');

const STORE_LANGUAGE_KEY = 'settings.lang';

const getLang = () => {
  let value = 'en';
  AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
    if (value) { value = language; }
  });
  console.log(value);
  return value;
};

const languageDetectorPlugin_ = {
  type: 'languageDetector',
  async: true,
  init: () => { },
  async detect(callback) {
    try {
      // get stored language from Async storage
      // put your own language detection logic here
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
        if (language) {
          // if language was stored before, use this language in the app
          console.log('lets get it 1', language);

          return callback(language);
        }
        // if language was not stored yet, use english
        console.log('lets get it', en);
        return callback('en');
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  async cacheUserLanguage(language) {
    try {
      // save a user's language choice in Async storage
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
      console.log('going for caching');
    } catch (error) {
      console.log(error);
    }
  },
};

const getDefaultLang = async () => {
  const storedLang = await AsyncStorage.getItem('lang');
};

const LanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    console.log('are you running?', callback);
    let lng = 'en';
    AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
      if (language) {
        // if language was stored before, use this language in the app
        console.log('lets get it 1', language);
        lng = language;
        return callback('fr');
      }
      return callback('en');
    });
  },
  init: () => {},
  cacheUserLanguage: () => {
    console.log('called cache');
  },
};
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

// i18n
//   .use(initReactI18next)
//   .use(languageDetectorPlugin)
//   .init({
//     resources,
//     //language to use if translations in user language are not available
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false, // not needed for react!!
//     },
//     react: {
//       useSuspense: false,
//     },
//   });

// export default i18n;

i18n.use(initReactI18next).use(languageDetectorPlugin_).init({
  resources,

  // fallback language is set to english
  fallbackLng: 'fr',

  // supportedLngs: ['en', 'fr'],
  //  lng:getLang(),
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
export default i18n;
