import { Serializer as ДлительностьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-itog10-длительность';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДлительностьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
