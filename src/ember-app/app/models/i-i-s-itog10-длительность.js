import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДлительностьMixin
} from '../mixins/regenerated/models/i-i-s-itog10-длительность';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДлительностьMixin, Validations, {
});

defineProjections(Model);

export default Model;
