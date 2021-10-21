import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';
import DatePredicate from 'ember-flexberry-data/query/predicate';
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
    // predicateForFilter(filter) {
    //   if (filter.type === 'date') {
    //     return new DatePredicate(filter.name, filter.condition, filter.pattern, true);
    //   }
    
    //   return this._super(...arguments);
    // },
  developerUserSettings: computed(function() {
    return { IISProduct_64396ClubMeetingL: {} }
  }),
});
