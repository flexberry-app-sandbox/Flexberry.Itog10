import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.затраченное-время.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗатрВремяE', 'затраченное-время', {
    наименование: attr('Время', { index: 0 })
  });

  modelClass.defineProjection('ЗатрВремяL', 'затраченное-время', {
    наименование: attr('Время', { index: 0 })
  });
};
