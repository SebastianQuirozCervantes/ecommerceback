import CommonRepository from "./common";
import CategorySchema from '../schemas/category';
import { getRepository } from "typeorm";

class CategoryRepository extends CommonRepository {
    constructor(){
        super(CategorySchema);
        this.conn = getRepository(CategorySchema);
    }

    // Search for products with categories according to the search
    async getCategoriesWithProducts(query){
        let builder = this.conn
        .createQueryBuilder('category')
        .select([
            'category.id',
            'category.name',
            'product.id'
        ])
        .innerJoin('category.product'
            ,'product');

        if(query.description){
            builder = builder.andWhere('product.name like :description',{description: `%${query.description}%`})
        }
        builder = await builder.getMany();

        // Get the quantity of products by category
        builder.map((category) => {
            category.quantityProducts = category.product.length;
            delete category.product;
        })

        return builder;
    }
}


export default CategoryRepository;