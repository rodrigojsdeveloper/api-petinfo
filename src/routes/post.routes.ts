import { Router } from "express";

import { PostController } from "../controllers/post.controller";

import { tokenMiddleware } from "../middlewares/token.middleware";

const routes = Router();

const postRoutes = () => {
  routes.post("", tokenMiddleware, new PostController().create);

  routes.get("", tokenMiddleware, new PostController().list);

  routes.patch("/:id", tokenMiddleware, new PostController().update);

  routes.delete("/:id", tokenMiddleware, new PostController().delete);

  routes.get("/:id", tokenMiddleware, new PostController().view);

  return routes;
};

export { postRoutes };
