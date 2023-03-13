import { Router } from "express";

import { PostController } from "../controllers/post.controller";

const routes = Router();

const postRoutes = () => {
  routes.post("", new PostController().create);

  return routes;
};

export { postRoutes };
