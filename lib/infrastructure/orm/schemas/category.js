import { EntitySchema } from 'typeorm';

// Define the category schema with typeorm with its attributes 
// and the name of the table that will go in the database
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
