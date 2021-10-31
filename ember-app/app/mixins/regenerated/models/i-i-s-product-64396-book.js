import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pagesCount: DS.attr('number'),
  urlCover: DS.attr('file'),
  urlDescription: DS.attr('string'),
  tags: DS.attr('string'),
  /**
    Non-stored property.

    @property averageRating
  */
  averageRating: DS.attr('decimal'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'averageRatingCompute' method in model class (outside of this mixin) if you want to compute value of 'averageRating' property.

    @method _averageRatingCompute
    @private
    @example
      ```javascript
      _averageRatingChanged: on('init', observer('averageRating', function() {
        once(this, '_averageRatingCompute');
      }))
      ```
  */
  _averageRatingCompute: function() {
    let result = (this.averageRatingCompute && typeof this.averageRatingCompute === 'function') ? this.averageRatingCompute() : null;
    this.set('averageRating', result);
  }
});

export let ValidationRules = {
  title: {
    descriptionKey: 'models.i-i-s-product-64396-book.validations.title.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  author: {
    descriptionKey: 'models.i-i-s-product-64396-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pagesCount: {
    descriptionKey: 'models.i-i-s-product-64396-book.validations.pagesCount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  urlCover: {
    descriptionKey: 'models.i-i-s-product-64396-book.validations.urlCover.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  urlDescription: {
    descriptionKey: 'models.i-i-s-product-64396-book.validations.urlDescription.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tags: {
    descriptionKey: 'models.i-i-s-product-64396-book.validations.tags.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  averageRating: {
    descriptionKey: 'models.i-i-s-product-64396-book.validations.averageRating.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-product-64396-book', {
    title: attr('Title', { index: 0 }),
    author: attr('Author', { index: 1 }),
    pagesCount: attr('Pages count', { index: 2 }),
    urlCover: attr('Url cover', { index: 3 }),
    urlDescription: attr('Url description', { index: 4 }),
    tags: attr('Tags', { index: 5 }),
    averageRating: attr('Average rating', { index: 6 })
  });

  modelClass.defineProjection('BookL', 'i-i-s-product-64396-book', {
    title: attr('Title', { index: 0 }),
    author: attr('Author', { index: 1 }),
    pagesCount: attr('Pages count', { index: 2 }),
    urlCover: attr('Url cover', { index: 3 }),
    urlDescription: attr('Url description', { index: 4 }),
    tags: attr('Tags', { index: 5 }),
    averageRating: attr('Average rating', { index: 6 })
  });
};
