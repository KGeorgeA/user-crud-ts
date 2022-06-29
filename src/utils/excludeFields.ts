import _ from 'lodash';

type ObjectType = Record<string, unknown>;
type Item = ObjectType[] | ObjectType;

const excludeFields = (
  item: Item,
  fieldsToExclude: string | string[],
): _.Omit<ObjectType, string>[] | _.Omit<ObjectType, string> => {
  if (Array.isArray(item)) {
    const filteredItems = _.map(item, (i) => {
      return _.omit(i, fieldsToExclude);
    });

    return filteredItems;
  }

  return _.omit(item, fieldsToExclude);
};

export default excludeFields;
