import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import ru from './ru.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: 'ru',
  fallbackLng: 'ru',
  resources: {
    es: es,
    en: en,
    fr: fr,
    ru: ru,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;