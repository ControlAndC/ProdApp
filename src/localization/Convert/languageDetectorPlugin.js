import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_LANGUAGE_KEY = 'settings.lang';

const languageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  async detect(callback) {
    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
        if (language) {
          return callback(language);
        }
        return callback('en');
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  async cacheUserLanguage(language) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

module.exports = { languageDetectorPlugin };
