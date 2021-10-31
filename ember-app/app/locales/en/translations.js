import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProduct_64396BookLForm from './forms/i-i-s-product-64396-book-l';
import IISProduct_64396BtBookLForm from './forms/i-i-s-product-64396-bt-book-l';
import IISProduct_64396ClubMeetingLForm from './forms/i-i-s-product-64396-club-meeting-l';
import IISProduct_64396SpeakerLForm from './forms/i-i-s-product-64396-speaker-l';
import IISProduct_64396BookEForm from './forms/i-i-s-product-64396-book-e';
import IISProduct_64396BtBookEForm from './forms/i-i-s-product-64396-bt-book-e';
import IISProduct_64396ClubMeetingEForm from './forms/i-i-s-product-64396-club-meeting-e';
import IISProduct_64396SpeakerEForm from './forms/i-i-s-product-64396-speaker-e';
import IISProduct_64396BookModel from './models/i-i-s-product-64396-book';
import IISProduct_64396BtBookModel from './models/i-i-s-product-64396-bt-book';
import IISProduct_64396ClubMeetingModel from './models/i-i-s-product-64396-club-meeting';
import IISProduct_64396ReportModel from './models/i-i-s-product-64396-report';
import IISProduct_64396SpeakerModel from './models/i-i-s-product-64396-speaker';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-product-64396-book': IISProduct_64396BookModel,
    'i-i-s-product-64396-bt-book': IISProduct_64396BtBookModel,
    'i-i-s-product-64396-club-meeting': IISProduct_64396ClubMeetingModel,
    'i-i-s-product-64396-report': IISProduct_64396ReportModel,
    'i-i-s-product-64396-speaker': IISProduct_64396SpeakerModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'product-64396': {
          caption: 'product-64396',
          title: 'product-64396',
          'i-i-s-product-64396-book-l': {
            caption: 'i-i-s-product-64396-book-l',
            title: 'i-i-s-product-64396-book-l'
          },
          'i-i-s-product-64396-club-meeting-l': {
            caption: 'i-i-s-product-64396-club-meeting-l',
            title: 'i-i-s-product-64396-club-meeting-l'
          },
          'i-i-s-product-64396-bt-book-l': {
            caption: 'i-i-s-product-64396-bt-book-l',
            title: 'i-i-s-product-64396-bt-book-l'
          },
          'i-i-s-product-64396-speaker-l': {
            caption: 'i-i-s-product-64396-speaker-l',
            title: 'i-i-s-product-64396-speaker-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-product-64396-book-l': IISProduct_64396BookLForm,
    'i-i-s-product-64396-bt-book-l': IISProduct_64396BtBookLForm,
    'i-i-s-product-64396-club-meeting-l': IISProduct_64396ClubMeetingLForm,
    'i-i-s-product-64396-speaker-l': IISProduct_64396SpeakerLForm,
    'i-i-s-product-64396-book-e': IISProduct_64396BookEForm,
    'i-i-s-product-64396-bt-book-e': IISProduct_64396BtBookEForm,
    'i-i-s-product-64396-club-meeting-e': IISProduct_64396ClubMeetingEForm,
    'i-i-s-product-64396-speaker-e': IISProduct_64396SpeakerEForm
  },

});

export default translations;
