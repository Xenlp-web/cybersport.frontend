import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
// Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка
  .use(LanguageDetector)
  // модуль инициализации
  .use(initReactI18next)
  .init({
    // Стандартный язык
    fallbackLng: 'ru',
    debug: false,
    // Распознавание и кэширование языковых кук
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    react: {
      useSuspense: false //   <---- this will do the magic
    },
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: 'https://web70.xenforce.ru/locales/{{lng}}/{{ns}}.json',

      // path to post missing resources
      addPath: 'https://web70.xenforce.ru/locales/add/{{lng}}/{{ns}}',

      crossDomain: true,
    }
  });

export default i18n;