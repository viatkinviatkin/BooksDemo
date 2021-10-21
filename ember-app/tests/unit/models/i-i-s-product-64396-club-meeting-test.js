import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-product-64396-club-meeting', 'Unit | Model | i-i-s-product-64396-club-meeting', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-product-64396-book',
    'model:i-i-s-product-64396-club-meeting',
    'model:i-i-s-product-64396-report',
    'model:i-i-s-product-64396-speaker',
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
