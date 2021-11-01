import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  speaker: DS.belongsTo('i-i-s-product-64396-speaker', { inverse: null, async: false })
});

export let ValidationRules = {
  speaker: {
    descriptionKey: 'models.i-i-s-product-64396-bt-speaker.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BtSpeakerE', 'i-i-s-product-64396-bt-speaker', {
    speaker: belongsTo('i-i-s-product-64396-speaker', '', {

    }, { index: 0 })
  });

  modelClass.defineProjection('BtSpeakerL', 'i-i-s-product-64396-bt-speaker', {
    speaker: belongsTo('i-i-s-product-64396-speaker', 'LastName', {
      lastName: attr('LastName', { index: 0 }),
      firstName: attr('FirstName', { index: 1 }),
      middleName: attr('MiddleName', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
