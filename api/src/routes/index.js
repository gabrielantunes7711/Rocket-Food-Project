const { Router } = require("express");

const usersRoutes = require("./users.routes");
const sessionsRoutes = require("./sessions.routes");
const menuRoutes = require("./menu.routes");
const categoriesRoutes = require("./categories.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/menu", menuRoutes);
routes.use("/categories", categoriesRoutes);

module.exports = routes;
