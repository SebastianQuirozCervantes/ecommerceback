import usersDataJSON from '../../../application/use-cases/support/usersData.json';

export const foundUserByEmail = function (userData) {
    for(let user in usersDataJSON){
        if(usersDataJSON[user].email == userData.email){
            if(usersDataJSON[user].password == userData.password){
                return usersDataJSON[user];
            }else{
                return usersDataJSON[user].id_user;
            }
        }
    }
    return null;
};

export const getProductsByUser = function (idUser){
    let products = new Array();
    for(let i in productsDataJSON){
        if(productsDataJSON[i].user.id_user == idUser){
            products.push(new Product({validators: {}, ...productsDataJSON[i]}))
        }
    }
    return products;
}