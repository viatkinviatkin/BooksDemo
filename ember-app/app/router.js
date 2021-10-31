import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-product-64396-book-l');
  this.route('i-i-s-product-64396-book-e',
  { path: 'i-i-s-product-64396-book-e/:id' });
  this.route('i-i-s-product-64396-book-e.new',
  { path: 'i-i-s-product-64396-book-e/new' });
  this.route('i-i-s-product-64396-bt-book-l');
  this.route('i-i-s-product-64396-bt-book-e',
  { path: 'i-i-s-product-64396-bt-book-e/:id' });
  this.route('i-i-s-product-64396-bt-book-e.new',
  { path: 'i-i-s-product-64396-bt-book-e/new' });
  this.route('i-i-s-product-64396-club-meeting-l');
  this.route('i-i-s-product-64396-club-meeting-e',
  { path: 'i-i-s-product-64396-club-meeting-e/:id' });
  this.route('i-i-s-product-64396-club-meeting-e.new',
  { path: 'i-i-s-product-64396-club-meeting-e/new' });
  this.route('i-i-s-product-64396-speaker-l');
  this.route('i-i-s-product-64396-speaker-e',
  { path: 'i-i-s-product-64396-speaker-e/:id' });
  this.route('i-i-s-product-64396-speaker-e.new',
  { path: 'i-i-s-product-64396-speaker-e/new' });
});

export default Router;
