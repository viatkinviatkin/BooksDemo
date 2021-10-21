import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  meetingDate: DS.attr('date'),
  report: DS.hasMany('i-i-s-product-64396-report', { inverse: 'clubMeeting', async: false })
});

export let ValidationRules = {
  meetingDate: {
    descriptionKey: 'models.i-i-s-product-64396-club-meeting.validations.meetingDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  report: {
    descriptionKey: 'models.i-i-s-product-64396-club-meeting.validations.report.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ClubMeetingE', 'i-i-s-product-64396-club-meeting', {
    meetingDate: attr('Meeting date', { index: 0 }),
    report: hasMany('i-i-s-product-64396-report', 'Report', {
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
    })
  });

  modelClass.defineProjection('ClubMeetingL', 'i-i-s-product-64396-club-meeting', {
    meetingDate: attr('Meeting date', { index: 0 })
  });
};
