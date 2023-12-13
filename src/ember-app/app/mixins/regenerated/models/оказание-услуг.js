import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('number'),
  дата: DS.attr('date'),
  договор: DS.belongsTo('i-i-s-itog10-договор', { inverse: null, async: false }),
  услуги: DS.belongsTo('i-i-s-itog10-услуги', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('расчет-оставшегося-времени', { inverse: 'оказУсл', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.оказание-услуг.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.оказание-услуг.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  договор: {
    descriptionKey: 'models.оказание-услуг.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуги: {
    descriptionKey: 'models.оказание-услуг.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.оказание-услуг.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказУслугE', 'оказание-услуг', {
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
  });
};
