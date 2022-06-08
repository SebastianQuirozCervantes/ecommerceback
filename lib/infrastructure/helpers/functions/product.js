import productsDataJSON from '../../../application/use-cases/support/productsData.json'

import Product from '../../../application/domain/product';

export const getProductsByUser = function (idUser){
    let products = new Array();
    for(let i in productsDataJSON){
        if(productsDataJSON[i].user.id_user == idUser){
            products.push(new Product({validators: {}, ...productsDataJSON[i]}))
        }
    }
    return products;
}

export const deleteProductById = function(idProduct){
    let deletedProduct = null;
    for(let i in productsDataJSON){
        if(productsDataJSON[i].id_product == idProduct){
            deletedProduct = productsDataJSON[i];
            productsDataJSON.splice(i,1);
        }
    }
    return deletedProduct;
}

export const updateProductById = function(idProduct,product){
    for(let i in productsDataJSON){
        if(productsDataJSON[i].id_product == idProduct){
            product.id_product = idProduct;
            productsDataJSON[i] = product;
            return productsDataJSON[i];
        }
    }
    return null;
}

export const getProductById = function(idProduct){
    for(let i in productsDataJSON){
        if(productsDataJSON[i].id_product == idProduct){
            return productsDataJSON[i];
        }
    }
    return null;
}