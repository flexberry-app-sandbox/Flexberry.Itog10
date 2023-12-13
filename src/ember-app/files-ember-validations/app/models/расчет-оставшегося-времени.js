import {
  defineProjections,
  Model as РасчетОстВремMixin
} from '../mixins/regenerated/models/расчет-оставшегося-времени';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетОстВремMixin, {
});

defineProjections(Model);

export default Model;
