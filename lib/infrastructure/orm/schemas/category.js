import { EntitySchema } from 'typeorm';

module.exports = new EntitySchema({
  name: 'category',
  tableName: `category`,
  columns: {
    id: {
      primary: true,
      type: 'int',
    },
    name: {
      type: 'varchar',
      default: null
    },
  },
  relations: {
    product: {
        type: 'one-to-many',
        target: 'product',
        inverseSide: 'category'
      },
  },
});
