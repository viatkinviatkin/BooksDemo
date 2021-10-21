import EditFormRoute from 'ember-flexberry/routes/edit-form';

export default EditFormRoute.extend({
  modelProjection: 'SpeakerE',
  modelName: 'i-i-s-product-64396-speaker',

  setupController(controller) {
    this._super(...arguments);
    controller._loadData();
  }
});
