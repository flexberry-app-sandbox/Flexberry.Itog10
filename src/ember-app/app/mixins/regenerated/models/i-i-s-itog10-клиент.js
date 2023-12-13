import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idКлиента: DS.attr('number'),
  имя: DS.attr('string'),
  наимОрганизации: DS.attr('string'),
  номерТелефона: DS.attr('string'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  idКлиента: {
    descriptionKey: 'models.i-i-s-itog10-клиент.validations.idКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-itog10-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимОрганизации: {
    descriptionKey: 'models.i-i-s-itog10-клиент.validations.наимОрганизации.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-itog10-клиент.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-itog10-клиент.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-itog10-клиент.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-itog10-клиент', {
    idКлиента: attr('Id клиента', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    наимОрганизации: attr('Наименование организации', { index: 5 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-itog10-клиент', {
    idКлиента: attr('Id клиента', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    наимОрганизации: attr('Наименование организации', { index: 5 })
  });
};
