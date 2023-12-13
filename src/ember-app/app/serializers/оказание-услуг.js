import { Serializer as ОказУслугSerializer } from
  '../mixins/regenerated/serializers/оказание-услуг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОказУслугSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
