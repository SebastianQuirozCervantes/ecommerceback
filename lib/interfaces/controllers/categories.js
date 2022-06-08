import QueryCategory from '../../application/use-cases/category/query-category';
import CategoryRepository from '../../infrastructure/orm/repositories/categories'

const getCategoriesWithProducts = async function (httpRequest) {
  const query = httpRequest.query;
  const categoryRepository = new CategoryRepository();
  const useCase = new QueryCategory({categoryRepository});

  const categories = await useCase.getCategoriesWithProducts(query);
  return {
    statusCode: 200,
    body: categories,
  };
};
module.exports = {
    getCategoriesWithProducts,
};
  