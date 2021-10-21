import EditFormController from 'ember-flexberry/controllers/edit-form';
import { inject as service } from '@ember/service';
import Builder from 'ember-flexberry-data/query/builder';
export default EditFormController.extend({
  parentRoute: 'i-i-s-product-64396-book-l',

  appState: service(),

  async _loadData() {
    this.get('appState').loading();
    let model = this.get('model')
    let title = model.get('title')
    let bookReports = []
    
    let store = this.get('store');

    let builder = new Builder (store, 'i-i-s-product-64396-report')
      .selectByProjection('ReportE')

    await store.query('i-i-s-product-64396-report', builder.build())
      .then((reports) => {
        reports.forEach((report) => {
          let book = report.get('book')
          let superTitle = book.get('title')
          if ( title === superTitle ) {
            let reportEv = report.get('urlVideo')
            bookReports.push(reportEv)
          }                      
        })
        model.set('bookReports', bookReports)
        this.get('appState').success()
      })
  }  

  
});
