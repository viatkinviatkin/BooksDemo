import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:check-url-cover-validator', 'Unit | Validator | check-url-cover-validator', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
