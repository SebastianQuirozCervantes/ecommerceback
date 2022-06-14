import { EntitySchema } from 'typeorm';

// Define the product schema with typeorm with its attributes 
// and the name of the table that will go in the database
module.exports = new EntitySchema({
  name: 'product',
  tableName: `product`,
  columns: {
    id: {
      primary: true,
      type: 'int',
    },
    name: {
      type: 'varchar',
      default: null
    },
    url_image: {
      type: 'varchar',
      default: null
    },
    price: {
      type: 'float',
      default: null
    },
    discount: {
      type: 'int',
      default: null
    },
  },
  relations: {
    category: {
      type: 'many-to-one',
      target: 'category',
      joinColumn: {
        name: 'category',
      },
    },
  },
});
