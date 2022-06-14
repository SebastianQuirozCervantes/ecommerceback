import CommonRepository from "./common";
import ProductSchema from '../schemas/product';
import { getRepository } from "typeorm";

class ProductRepository extends CommonRepository {
    constructor(){
        super(ProductSchema);
        this.conn = getRepository(ProductSchema);
    }

    // Search products according to the search and category of the params
    async getProducts(query){
       const page = query.page || 1;
       const pageSize = 20;
       let builder = this.conn
       .createQueryBuilder('product')
       .select([
            'product.id',
            'product.name',
            'product.url_image',
            'product.price',
            'product.discount',
            'category'
       ])
       .innerJoin('product.category', 'category');

        if(query.description){
            builder = builder.andWhere('product.name like :description',{description: `%${query.description}%`})
        }
        
        if(query.category){
            if(query.category != 'Todos'){
                builder = builder.andWhere('category.id = :category',{ category: query.category})
            }
        }
        builder = builder
            .skip(( page - 1 ) * pageSize)
            .take(pageSize);
        let [products, total] = await Promise.all([builder.getMany(),builder.getCount()]);
        return [products, {"TotalProducts" : total, "Page" : page, "PageSize": pageSize}];
    }
}


export default ProductRepository;