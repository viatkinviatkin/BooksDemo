import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  lastName: DS.attr('string'),
  firstName: DS.attr('string'),
  middleName: DS.attr('string')
});

export let ValidationRules = {
  lastName: {
    descriptionKey: 'models.i-i-s-product-64396-speaker.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  firstName: {
    descriptionKey: 'models.i-i-s-product-64396-speaker.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-product-64396-speaker.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SpeakerE', 'i-i-s-product-64396-speaker', {
    lastName: attr('Last name', { index: 0 }),
    firstName: attr('First name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 })
  });

  modelClass.defineProjection('SpeakerL', 'i-i-s-product-64396-speaker', {
    lastName: attr('Last name', { index: 0 }),
    firstName: attr('First name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 })
  });
};
