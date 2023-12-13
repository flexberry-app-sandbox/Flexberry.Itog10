import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idДиректора: DS.attr('string'),
  имя: DS.attr('string'),
  номерПаспорта: DS.attr('string'),
  номерТел: DS.attr('string'),
  отчество: DS.attr('string'),
  серияПаспорта: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  idДиректора: {
    descriptionKey: 'models.директор-отдела-по-работе-с-клиентами.validations.idДиректора.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.директор-отдела-по-работе-с-клиентами.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.директор-отдела-по-работе-с-клиентами.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТел: {
    descriptionKey: 'models.директор-отдела-по-работе-с-клиентами.validations.номерТел.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.директор-отдела-по-работе-с-клиентами.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.директор-отдела-по-работе-с-клиентами.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.директор-отдела-по-работе-с-клиентами.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДирОтдПоРабСКлE', 'директор-отдела-по-работе-с-клиентами', {
    idДиректора: attr('Id директора', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТел: attr('Номер тел', { index: 4 }),
    серияПаспорта: attr('Серия паспорта', { index: 5 }),
    номерПаспорта: attr('Номер паспорта', { index: 6 })
  });

  modelClass.defineProjection('ДирОтдПоРабСКлL', 'директор-отдела-по-работе-с-клиентами', {
    idДиректора: attr('Id директора', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТел: attr('Номер тел', { index: 4 }),
    серияПаспорта: attr('Серия паспорта', { index: 5 }),
    номерПаспорта: attr('Номер паспорта', { index: 6 })
  });
};
