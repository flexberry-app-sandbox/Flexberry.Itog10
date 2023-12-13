import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISItog10ДирОтдПоРабСКлLForm from './forms/i-i-s-itog10-дир-отд-по-раб-с-кл-l';
import IISItog10ДлительностьLForm from './forms/i-i-s-itog10-длительность-l';
import IISItog10ДоговорLForm from './forms/i-i-s-itog10-договор-l';
import IISItog10ЗатрВремяLForm from './forms/i-i-s-itog10-затр-время-l';
import IISItog10КлиентLForm from './forms/i-i-s-itog10-клиент-l';
import IISItog10РасчетОстВремLForm from './forms/i-i-s-itog10-расчет-ост-врем-l';
import IISItog10УслугиLForm from './forms/i-i-s-itog10-услуги-l';
import IISItog10ДирОтдПоРабСКлEForm from './forms/i-i-s-itog10-дир-отд-по-раб-с-кл-e';
import IISItog10ДлительностьEForm from './forms/i-i-s-itog10-длительность-e';
import IISItog10ДоговорEForm from './forms/i-i-s-itog10-договор-e';
import IISItog10ЗатрВремяEForm from './forms/i-i-s-itog10-затр-время-e';
import IISItog10КлиентEForm from './forms/i-i-s-itog10-клиент-e';
import IISItog10РасчетОстВремEForm from './forms/i-i-s-itog10-расчет-ост-врем-e';
import IISItog10УслугиEForm from './forms/i-i-s-itog10-услуги-e';
import IISItog10ДлительностьModel from './models/i-i-s-itog10-длительность';
import IISItog10ДоговорModel from './models/i-i-s-itog10-договор';
import IISItog10КлиентModel from './models/i-i-s-itog10-клиент';
import IISItog10УслугиModel from './models/i-i-s-itog10-услуги';
import Директор отдела по работе с клиентамиModel from './models/директор-отдела-по-работе-с-клиентами';
import Затраченное времяModel from './models/затраченное-время';
import Оказание услугModel from './models/оказание-услуг';
import Расчет оставшегося времениModel from './models/расчет-оставшегося-времени';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog10-длительность': IISItog10ДлительностьModel,
    'i-i-s-itog10-договор': IISItog10ДоговорModel,
    'i-i-s-itog10-клиент': IISItog10КлиентModel,
    'i-i-s-itog10-услуги': IISItog10УслугиModel,
    'директор-отдела-по-работе-с-клиентами': Директор отдела по работе с клиентамиModel,
    'затраченное-время': Затраченное времяModel,
    'оказание-услуг': Оказание услугModel,
    'расчет-оставшегося-времени': Расчет оставшегося времениModel
  },

  'application-name': 'Itog10',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Itog10',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itog10',
          title: 'Itog10'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        прочее: {
          caption: 'Прочее',
          title: 'Прочее',
          'i-i-s-itog10-длительность-l': {
            caption: 'Длительность',
            title: ''
          },
          'i-i-s-itog10-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-itog10-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-itog10-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-itog10-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-itog10-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-itog10-договор-l': {
            caption: 'Договор',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-itog10-дир-отд-по-раб-с-кл-l': IISItog10ДирОтдПоРабСКлLForm,
    'i-i-s-itog10-длительность-l': IISItog10ДлительностьLForm,
    'i-i-s-itog10-договор-l': IISItog10ДоговорLForm,
    'i-i-s-itog10-затр-время-l': IISItog10ЗатрВремяLForm,
    'i-i-s-itog10-клиент-l': IISItog10КлиентLForm,
    'i-i-s-itog10-расчет-ост-врем-l': IISItog10РасчетОстВремLForm,
    'i-i-s-itog10-услуги-l': IISItog10УслугиLForm,
    'i-i-s-itog10-дир-отд-по-раб-с-кл-e': IISItog10ДирОтдПоРабСКлEForm,
    'i-i-s-itog10-длительность-e': IISItog10ДлительностьEForm,
    'i-i-s-itog10-договор-e': IISItog10ДоговорEForm,
    'i-i-s-itog10-затр-время-e': IISItog10ЗатрВремяEForm,
    'i-i-s-itog10-клиент-e': IISItog10КлиентEForm,
    'i-i-s-itog10-расчет-ост-врем-e': IISItog10РасчетОстВремEForm,
    'i-i-s-itog10-услуги-e': IISItog10УслугиEForm
  },

});

export default translations;
