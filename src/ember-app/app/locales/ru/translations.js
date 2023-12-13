import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
import ДиректорОтделаПоРаботеСКлиентамиModel from './models/директор-отдела-по-работе-с-клиентами';
import ЗатраченноеВремяModel from './models/затраченное-время';
import ОказаниеУслугModel from './models/оказание-услуг';
import РасчетОставшегосяВремениModel from './models/расчет-оставшегося-времени';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog10-длительность': IISItog10ДлительностьModel,
    'i-i-s-itog10-договор': IISItog10ДоговорModel,
    'i-i-s-itog10-клиент': IISItog10КлиентModel,
    'i-i-s-itog10-услуги': IISItog10УслугиModel,
    'директор-отдела-по-работе-с-клиентами': ДиректорОтделаПоРаботеСКлиентамиModel,
    'затраченное-время': ЗатраченноеВремяModel,
    'оказание-услуг': ОказаниеУслугModel,
    'расчет-оставшегося-времени': РасчетОставшегосяВремениModel
  },

  'application-name': 'Itog10',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Itog10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itog10',
          title: 'Itog10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
