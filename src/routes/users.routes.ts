import { Router } from "express";

import { UserController } from "../controllers/user.controller";

import { tokenMiddleware } from "../middlewares/token.middleware";

const routes = Router();

const usersRoutes = () => {
  routes.post("/signup", new UserController().create);

  routes.get("/profile", tokenMiddleware, new UserController().create);

  return routes;
};

export { usersRoutes };
