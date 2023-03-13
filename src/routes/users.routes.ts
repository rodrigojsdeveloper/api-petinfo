import { Router } from "express";

import { UserController } from "../controllers/user.controller";

const routes = Router();

const usersRoutes = () => {
  routes.post("/signup", new UserController().create);

  return routes;
};

export { usersRoutes };
