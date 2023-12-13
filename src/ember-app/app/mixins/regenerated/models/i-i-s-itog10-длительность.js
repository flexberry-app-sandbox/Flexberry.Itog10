import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('string')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-itog10-длительность.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДлительностьE', 'i-i-s-itog10-длительность', {
    номер: attr('Длительность', { index: 0 })
  });

  modelClass.defineProjection('ДлительностьL', 'i-i-s-itog10-длительность', {
    номер: attr('Длительность', { index: 0 })
  });
};
