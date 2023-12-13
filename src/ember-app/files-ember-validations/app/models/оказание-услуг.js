import {
  defineProjections,
  Model as ОказУслугMixin
} from '../mixins/regenerated/models/оказание-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОказУслугMixin, {
});

defineProjections(Model);

export default Model;
