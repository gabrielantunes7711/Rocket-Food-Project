const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");
const upload = multer(uploadConfig.MULTER);
const MenuController = require("../controllers/MenuController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const menuRoutes = Router();
menuRoutes.use(ensureAuthenticated);

const menuController = new MenuController();

menuRoutes.get("/", menuController.index);
menuRoutes.get("/byCategories", menuController.index);
menuRoutes.get("/:id", menuController.show);
menuRoutes.post("/", upload.single("image"), menuController.create);
menuRoutes.put("/:id", upload.single("image"), menuController.update);
menuRoutes.delete("/:id", menuController.delete);

module.exports = menuRoutes;
