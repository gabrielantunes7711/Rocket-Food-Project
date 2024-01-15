class CategoriesServices {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  async index() {
    const categories = await this.categoriesRepository.index();

    return categories;
  }
}

module.exports = CategoriesServices;
