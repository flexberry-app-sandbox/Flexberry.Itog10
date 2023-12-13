import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПоДоговору: DS.attr('number'),
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  оказУсл: DS.hasMany('оказание-услуг', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  времяПоДоговору: {
    descriptionKey: 'models.расчет-оставшегося-времени.validations.времяПоДоговору.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доступно: {
    descriptionKey: 'models.расчет-оставшегося-времени.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.расчет-оставшегося-времени.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оказУсл: {
    descriptionKey: 'models.расчет-оставшегося-времени.validations.оказУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'расчет-оставшегося-времени', {
    времяПоДоговору: attr('Время по договору', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    использовано: attr('Использовано', { index: 2 }),
    оказУсл: hasMany('оказание-услуг', 'Оказанные услуги', {
      дата: attr('Дата', { index: 0 }),
      времяКонсульт: attr('Время консультаций', { index: 1 }),
      договор: belongsTo('i-i-s-itog10-договор', 'Договор', {
        номер: attr('Номер договора', { index: 3 })
      }, { index: 2 }),
      услуги: belongsTo('i-i-s-itog10-услуги', 'Услуги', {
        наименование: attr('Наименование услуги', { index: 5 }),
        затрВремя: belongsTo('затраченное-время', '', {
          наименование: attr('Затраченное время', { index: 6 })
        }, { index: -1, hidden: true })
      }, { index: 4 })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'расчет-оставшегося-времени', {
    времяПоДоговору: attr('Время по договору', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    использовано: attr('Использовано', { index: 2 })
  });
};
