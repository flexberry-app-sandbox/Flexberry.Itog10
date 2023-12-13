import { moduleForModel, test } from 'ember-qunit';

moduleForModel('оказание-услуг', 'Unit | Model | оказание-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-itog10-длительность',
    'model:i-i-s-itog10-договор',
    'model:i-i-s-itog10-клиент',
    'model:i-i-s-itog10-услуги',
    'model:директор-отдела-по-работе-с-клиентами',
    'model:затраченное-время',
    'model:оказание-услуг',
    'model:расчет-оставшегося-времени',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
