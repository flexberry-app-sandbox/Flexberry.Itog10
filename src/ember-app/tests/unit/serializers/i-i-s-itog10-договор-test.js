import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itog10-договор', 'Unit | Serializer | i-i-s-itog10-договор', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-itog10-договор',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-itog10-статус',
    'transform:i-i-s-itog10-тип-договора',
    'transform:i-i-s-itog10-услуга',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
