import { usersRoutes } from "./users.routes";
import { loginRoutes } from "./login.routes";
import { Express } from "express";

const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/signin", loginRoutes());
};

export { appRoutes };
