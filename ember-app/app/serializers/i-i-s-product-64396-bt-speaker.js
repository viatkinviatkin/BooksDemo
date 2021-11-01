import { Serializer as BtSpeakerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-product-64396-bt-speaker';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BtSpeakerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
