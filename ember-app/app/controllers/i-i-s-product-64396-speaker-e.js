import EditFormController from 'ember-flexberry/controllers/edit-form';
import Builder from 'ember-flexberry-data/query/builder';
import { inject as service } from '@ember/service';


export default EditFormController.extend({
  parentRoute: 'i-i-s-product-64396-speaker-l',


  appState: service(),

  async _loadData() {
    this.get('appState').loading();
    let model = this.get('model')
    let lastName = model.get('lastName')
    let authorReports = []
    
    let store = this.get('store');

    let builder = new Builder (store, 'i-i-s-product-64396-report')
      .selectByProjection('ReportE')

    await store.query('i-i-s-product-64396-report', builder.build())
      .then((reports) => {
        reports.forEach((report) => {
          let speaker = report.get('speaker')
          let superLastName = speaker.get('lastName')
          if ( lastName === superLastName ) {
            let reportEv = report.get('urlVideo')
            authorReports.push(reportEv)
          }                      
        })
        model.set('authorReports', authorReports)
        this.get('appState').success();          
      })
  }  
});
