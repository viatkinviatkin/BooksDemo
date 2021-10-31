import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';
import { StringPredicate,DatePredicate} from 'ember-flexberry-data/query/predicate';
import FilterOperator  from 'ember-flexberry-data/query/filter-operator'; 
export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'ClubMeetingL'
  */
  modelProjection: 'ClubMeetingL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-i-s-product-64396-club-meeting'
  */
  modelName: 'i-i-s-product-64396-club-meeting',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
  */
  developerUserSettings: computed(function() {
    return { IISProduct_64396ClubMeetingL: {} }
  }),
  setupController(controller, model) {
    this._super(...arguments);},
    actions:{
      objectListViewLimitPredicate(message){
        this.routeMethod();

      },
      refreshAction(){
        this.refresh();
      }
    },
     objectListViewLimitPredicate(options) {
       let methodOptions = Ember.merge({
         modelName: undefined,
         projectionName: undefined,
         params: undefined
       }, options);
       if (methodOptions.modelName === this.get('modelName') &&
           methodOptions.projectionName === this.get('modelProjection')) {

          let  limitFunction = this.get('controller.limitFunction');

            if (limitFunction) {
            //let limitFunction = limitFunctionText

        //      // let limitFunction = new StringPredicate('address').contains(limitFunctionText);
      
        //      console.log('я хукнулся на objectListViewLimitPredicate')
        //  // let currentPerPageValue = methodOptions.params ? methodOptions.params.perPage : undefined;
        //  //                     new StringPredicate('address').contains('п');
         return limitFunction;
       }
       return undefined;
     }},
    routeMethod(){
      console.log('достучался до метода роута!')
    }

    
 
});
