import { Serializer as BtBookSerializer } from
  '../mixins/regenerated/serializers/i-i-s-product-64396-bt-book';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BtBookSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
