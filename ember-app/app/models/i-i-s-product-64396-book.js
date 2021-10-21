import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import Builder from 'ember-flexberry-data/query/builder';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';

import {
  defineProjections,
  ValidationRules,
  Model as BookMixin
} from '../mixins/regenerated/models/i-i-s-product-64396-book';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, BookMixin, Validations, {


  isFileExist(){

    let orderItemObj=this.get('urlCover')
      if(orderItemObj){

        console.log('файл есть');
      }
    
    return orderItemObj
  },

  _averageBookScoreChanged: on('init', observer('averageCount', function() {
    once(this, '_averageBookScoreComputed');
  })),

  _averageBookScoreComputed() {
    let store = this.get('store');
    let builder = new Builder(store, 'i-i-s-product-64396-report');
    builder.selectByProjection('ReportE');
    let bookScoresList = [];
    // Присваиваем значение this к переменной self, так как this не доступна внутри промиса.
    let self = this;

    store.query('i-i-s-product-64396-report', builder.build())
      .then(function (reports) {
        reports.forEach(function(report) {
          
          let bookName = self.get('title')
          let reportBookName = report.get('book.title');
          if (bookName === reportBookName) {            
            // Добавляем существующие оценки по данной книге в один список
            let reportScore = Number(report.get('bookRating')) 
            bookScoresList.push(reportScore);            
          }
        });
        const bookScoresListSum = bookScoresList.reduce((total, score) => total + score, 0);

        let avg = (bookScoresListSum / bookScoresList.length).toFixed(2);
        const avgResult = isNaN(avg)? 0 : avg;
       
        
        self.set('averageCount', avgResult);
      })
  },
});

defineProjections(Model);

export default Model;
