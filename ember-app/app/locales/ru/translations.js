import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProduct_64396BookLForm from './forms/i-i-s-product-64396-book-l';
import IISProduct_64396ClubMeetingLForm from './forms/i-i-s-product-64396-club-meeting-l';
import IISProduct_64396SpeakerLForm from './forms/i-i-s-product-64396-speaker-l';
import IISProduct_64396BookEForm from './forms/i-i-s-product-64396-book-e';
import IISProduct_64396ClubMeetingEForm from './forms/i-i-s-product-64396-club-meeting-e';
import IISProduct_64396SpeakerEForm from './forms/i-i-s-product-64396-speaker-e';
import IISProduct_64396BookModel from './models/i-i-s-product-64396-book';
import IISProduct_64396ClubMeetingModel from './models/i-i-s-product-64396-club-meeting';
import IISProduct_64396ReportModel from './models/i-i-s-product-64396-report';
import IISProduct_64396SpeakerModel from './models/i-i-s-product-64396-speaker';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-product-64396-book': IISProduct_64396BookModel,
    'i-i-s-product-64396-club-meeting': IISProduct_64396ClubMeetingModel,
    'i-i-s-product-64396-report': IISProduct_64396ReportModel,
    'i-i-s-product-64396-speaker': IISProduct_64396SpeakerModel
  },

  'application-name': 'Books club',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Books club',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Books club',
          title: 'Product_64396'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'books-club': {
          caption: 'Books club',
          title: 'Books club',
          'i-i-s-product-64396-book-l': {
            caption: 'Book',
            title: ''
          },
          'i-i-s-product-64396-club-meeting-l': {
            caption: 'Club meeting',
            title: ''
          },
          'i-i-s-product-64396-speaker-l': {
            caption: 'Speaker',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-product-64396-book-l': IISProduct_64396BookLForm,
    'i-i-s-product-64396-club-meeting-l': IISProduct_64396ClubMeetingLForm,
    'i-i-s-product-64396-speaker-l': IISProduct_64396SpeakerLForm,
    'i-i-s-product-64396-book-e': IISProduct_64396BookEForm,
    'i-i-s-product-64396-club-meeting-e': IISProduct_64396ClubMeetingEForm,
    'i-i-s-product-64396-speaker-e': IISProduct_64396SpeakerEForm
  },

});

export default translations;
