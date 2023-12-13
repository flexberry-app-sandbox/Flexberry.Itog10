import {
  defineProjections,
  Model as ЗатрВремяMixin
} from '../mixins/regenerated/models/затраченное-время';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗатрВремяMixin, {
});

defineProjections(Model);

export default Model;
