import ListFormController from 'ember-flexberry/controllers/list-form';
import { StringPredicate,DatePredicate,SimplePredicate,DetailPredicate,ComplexPredicate} from 'ember-flexberry-data/query/predicate';
import FilterOperator  from 'ember-flexberry-data/query/filter-operator'; 
import Condition from 'ember-flexberry-data/query/condition';
export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'i-i-s-product-64396-club-meeting-e'
   */
    limitFunction: undefined,

    componentName:'aa',

  editFormRoute: 'i-i-s-product-64396-club-meeting-e',
  actions:{
    onButtonClick(){
      let textFieldBookValue = this.get('bookValue') 
      let textFieldSpeakerValue = this.get('speakerValue') 
      let filterPredicate = null;

      if(textFieldBookValue&&textFieldSpeakerValue){
        let sp1 = new SimplePredicate('book.title', FilterOperator.Eq, textFieldBookValue);
        let sp2 = new SimplePredicate('speaker.lastName', FilterOperator.Eq, textFieldSpeakerValue);
        let cp = new ComplexPredicate(Condition.And, sp1, sp2);
        filterPredicate = new DetailPredicate('report').all(cp)
      }
      else if(textFieldBookValue)
        filterPredicate =  new DetailPredicate('report').all('book.title', FilterOperator.Eq, textFieldBookValue)
      else if(textFieldSpeakerValue)
        filterPredicate = new DetailPredicate('report').all('speaker.lastName', FilterOperator.Eq, textFieldSpeakerValue)
     
       
      
      this.set('limitFunction', filterPredicate);
      this.send('refreshAction');
    }
  }
});
