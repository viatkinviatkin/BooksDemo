import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  book: DS.belongsTo('i-i-s-product-64396-book', { inverse: null, async: false })
});

export let ValidationRules = {
  book: {
    descriptionKey: 'models.i-i-s-product-64396-bt-book.validations.book.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BtBookE', 'i-i-s-product-64396-bt-book', {
    book: belongsTo('i-i-s-product-64396-book', 'Book', {
      title: attr('Title', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'title' })
  });

  modelClass.defineProjection('BtBookL', 'i-i-s-product-64396-bt-book', {
    book: belongsTo('i-i-s-product-64396-book', 'Title', {
      title: attr('Title', { index: 0 }),
      author: attr('Author', { index: 1 }),
      pagesCount: attr('Pages', { index: 2 }),
      urlCover: attr('UrlCover', { index: 3 }),
      urlDescription: attr('UrlDescription', { index: 4 }),
      tags: attr('UrlTags', { index: 5 }),
      averageRating: attr('AverageRating', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
