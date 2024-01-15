const CategoriesRepository = require("../repositories/CategoriesRepository");
const CategoriesServices = require("../services/CategoriesServices");

const categoriesRepository = new CategoriesRepository();
const categoriesServices = new CategoriesServices(categoriesRepository);

class CategoriesController {
  async index(request, response) {
    const categories = await categoriesServices.index();

    return response.json(categories);
  }
}

module.exports = CategoriesController;
