import ListFormController from 'ember-flexberry/controllers/list-form';
import { StringPredicate,DatePredicate,SimplePredicate,DetailPredicate,ComplexPredicate} from 'ember-flexberry-data/query/predicate';
import FilterOperator  from 'ember-flexberry-data/query/filter-operator'; 
import Condition from 'ember-flexberry-data/query/condition';
import Controller, { inject} from '@ember/controller';
import FlexberryLookupMixin from 'ember-flexberry/mixins/flexberry-lookup-controller'
import Evented from '@ember/object/evented';


export default ListFormController.extend(Evented,
  FlexberryLookupMixin,
  {
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'i-i-s-product-64396-club-meeting-e'
   */
    limitFunction: undefined,
    lookupSettings: undefined,
    destroyHasManyRelationshipsOnModelDestroy: false,

  /**
    Controller to show lookup modal window.
    @property lookupController
    @type Controller
    @default LookupDialog
  */
  lookupController: inject('lookup-dialog'),



  editFormRoute: 'i-i-s-product-64396-club-meeting-e',
  init() {
    this._super(...arguments);
    this.set('lookupSettings', {
      controllerName: 'lookup-dialog',
      template: 'lookup-dialog',
      contentTemplate: 'lookup-dialog-content',
      loaderTemplate: 'loading'
    });
 
  },
  actions:{
    onButtonClick(){
      //let model =  this.get('model')
      let textFieldBookValue = this.get('bookValue')
      let textFieldSpeakerValue = this.get('speakerValue')
      //console.log(this.get('books').title)
      let filterPredicate = null;

      if(textFieldBookValue&&textFieldSpeakerValue){
        let sp1 = new SimplePredicate('book.title', FilterOperator.Eq, textFieldBookValue.title);
        let sp2 = new SimplePredicate('speaker.lastName', FilterOperator.Eq, textFieldSpeakerValue.lastName);
        let cp = new ComplexPredicate(Condition.And, sp1, sp2);
        filterPredicate = new DetailPredicate('report').all(cp)
      }
      else if(textFieldBookValue)
        filterPredicate =  new DetailPredicate('report').all('book.title', FilterOperator.Eq, textFieldBookValue.title)
      else if(textFieldSpeakerValue)
        filterPredicate = new DetailPredicate('report').all('speaker.lastName', FilterOperator.Eq, textFieldSpeakerValue.lastName)
     
       
      
      this.set('limitFunction', filterPredicate);
      this.send('refreshAction');
    },
    showLookupDialog(arg){
    
     arg.modelToLookup = this.get('model').objectAt(0)
   
      this._super(...arguments);
     
    },
    updateLookupValue(arg){

      switch(arg.componentName){
        case 'bookLookUp':
          this.set('bookValue',arg.newRelationValue.book)
          break;
        case 'speakerLookUp':
          this.set('speakerValue',arg.newRelationValue.speaker)
          break;

      }
    },
    removeLookupValue(arg){
      switch(arg.relationName){
        case 'btBook':
          this.set('bookValue', undefined)
          break;
        case 'btSpeaker':
          this.set('speakerValue',undefined)
          break;

      }
      this.send('onButtonClick')
      
    }


  },

  
});
