import { appRoutes } from "./routes";
import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

appRoutes(app);

export { app };
