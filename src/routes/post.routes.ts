import { Router } from "express";

import { PostController } from "../controllers/post.controller";

const routes = Router();

const postRoutes = () => {
  routes.post("", new PostController().create);

  routes.get("", new PostController().list);

  return routes;
};

export { postRoutes };
