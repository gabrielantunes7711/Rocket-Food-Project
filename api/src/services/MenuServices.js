const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");
const diskStorage = new DiskStorage();

class MenuServices {
  constructor(menuRepository, menuCategoriesRepository, categoriesRepository) {
    this.menuRepository = menuRepository;
    this.menuCategoriesRepository = menuCategoriesRepository;
    this.categoriesRepository = categoriesRepository;
  }

  async index() {
    const menu = await this.menuRepository.index();

    return menu;
  }

  async orderByCategories() {
    const menu = await this.menuRepository.orderByCategories();

    return menu;
  }

  async show(id) {
    const menu = await this.menuRepository.getById(id);

    if (!menu) {
      throw new AppError("Prato não encontrado");
    }

    return menu;
  }

  async create({
    name,
    price,
    ingredients,
    description,
    categories,
    imageFilename,
  }) {
    if (!name || !price || !ingredients || !description || !categories) {
      throw new AppError("Favor informar todos os campos obrigatórios.");
    }

    const plateExists = await this.menuRepository.getByName(name);

    if (plateExists) {
      throw new AppError("Este prato já foi cadastrado.");
    }

    const ingredientsTreated = ingredients.join(",");
    const categoriesTreated = categories.join(",");

    const priceTreated = price
      .replace(",", ".")
      .match(/[\d.,]+/g)
      .join("");

    if (imageFilename) {
      await diskStorage.saveFile(imageFilename);
    }

    const data = {
      name,
      price: priceTreated,
      ingredients: ingredientsTreated,
      description,
      image: imageFilename,
      categories: categoriesTreated,
    };

    const plateId = await this.menuRepository.create(data);

    await this.menuCategoriesRepository.create({ categories, plateId });

    return plateId;
  }

  async update({
    id,
    name,
    price,
    ingredients,
    description,
    categories,
    imageFilename,
  }) {
    if (!name || !price || !ingredients || !description || !categories) {
      throw new AppError("Favor informar todos os campos obrigatórios.");
    }

    const ingredientsTreated = ingredients.join(",");
    const categoriesTreated = categories.join(",");
    const priceTreated = price
      .replace(",", ".")
      .match(/[\d.,]+/g)
      .join("");

    const currentImage = await this.menuRepository.getColumn("image", id);
    if (imageFilename && !imageFilename.includes(currentImage)) {
      if (currentImage && !currentImage.includes("Placeholder")) {
        await diskStorage.deleteFile(currentImage);
      }

      await diskStorage.saveFile(imageFilename);
    }

    if (!imageFilename && !currentImage.includes("Placeholder")) {
      await diskStorage.deleteFile(currentImage);
    }

    const data = {
      name,
      price: priceTreated,
      ingredients: ingredientsTreated,
      description,
      image: imageFilename,
      categories: categoriesTreated,
    };

    if (!imageFilename || imageFilename.includes("Placeholder")) {
      data.image = "platePlaceholder.jpg";
    }

    if (imageFilename && imageFilename.includes(currentImage)) {
      data.image = currentImage;
    }

    const plate = await this.menuRepository.update(data, id);

    await this.menuCategoriesRepository.deleteByPlateId(id);
    await this.menuCategoriesRepository.create({ categories, plateId: id });

    return plate;
  }

  async delete(id) {
    await this.menuRepository.delete(id);
  }
}

module.exports = MenuServices;
