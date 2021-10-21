import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  reportDate: DS.attr('date'),
  bookRating: DS.attr('number'),
  urlPresentation: DS.attr('string'),
  urlVideo: DS.attr('string'),
  review: DS.attr('string'),
  book: DS.belongsTo('i-i-s-product-64396-book', { inverse: null, async: false }),
  speaker: DS.belongsTo('i-i-s-product-64396-speaker', { inverse: null, async: false }),
  clubMeeting: DS.belongsTo('i-i-s-product-64396-club-meeting', { inverse: 'report', async: false })
});

export let ValidationRules = {
  reportDate: {
    descriptionKey: 'models.i-i-s-product-64396-report.validations.reportDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  bookRating: {
    descriptionKey: 'models.i-i-s-product-64396-report.validations.bookRating.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true}),
        validator('number', {
          allowString: true,
          integer: true,
          gt: 0,
          lte: 6,
          message: 'Rating have to be in range 1 to 5'
        })
    ],
  },
  urlPresentation: {
    descriptionKey: 'models.i-i-s-product-64396-report.validations.urlPresentation.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  urlVideo: {
    descriptionKey: 'models.i-i-s-product-64396-report.validations.urlVideo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  review: {
    descriptionKey: 'models.i-i-s-product-64396-report.validations.review.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-product-64396-report.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  speaker: {
    descriptionKey: 'models.i-i-s-product-64396-report.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  clubMeeting: {
    descriptionKey: 'models.i-i-s-product-64396-report.validations.clubMeeting.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ReportE', 'i-i-s-product-64396-report', {
    reportDate: attr('Report date', { index: 0 }),
    bookRating: attr('Book rating', { index: 1 }),
    urlPresentation: attr('Url presentation', { index: 2 }),
    urlVideo: attr('Url video', { index: 3 }),
    review: attr('Review', { index: 4 }),
    book: belongsTo('i-i-s-product-64396-book', 'Book', {
      title: attr('Title', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'title' }),
    speaker: belongsTo('i-i-s-product-64396-speaker', 'Speaker', {
      lastName: attr('Last name', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'lastName' })
  });
};
