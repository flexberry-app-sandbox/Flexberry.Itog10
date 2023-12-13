import {
  defineProjections,
  Model as ДирОтдПоРабСКлMixin
} from '../mixins/regenerated/models/директор-отдела-по-работе-с-клиентами';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДирОтдПоРабСКлMixin, {
});

defineProjections(Model);

export default Model;
