import { Router } from "express";

import { PostController } from "../controllers/post.controller";

const routes = Router();

const postRoutes = () => {
  routes.post("", new PostController().create);

  routes.get("", new PostController().list);

  routes.patch("/:id", new PostController().update);
  
  routes.delete("/:id", new PostController().delete);

  return routes;
};

export { postRoutes };
