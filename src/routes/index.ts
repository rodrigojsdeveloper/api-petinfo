import { usersRoutes } from "./users.routes";
import { Express } from "express";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
};

export { appRoutes };
