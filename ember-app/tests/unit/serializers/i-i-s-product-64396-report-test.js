import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-product-64396-report', 'Unit | Serializer | i-i-s-product-64396-report', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-product-64396-report',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-product-64396-book',
    'model:i-i-s-product-64396-bt-book',
    'model:i-i-s-product-64396-club-meeting',
    'model:i-i-s-product-64396-report',
    'model:i-i-s-product-64396-speaker',
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
