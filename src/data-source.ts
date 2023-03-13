import { DataSource } from "typeorm";
import path from "path";

require("dotenv").config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  entities: [path.join(__dirname, "./entities/*.{ts,js}")],
  migrations: [path.join(__dirname, "./migrations/*.{ts,js}")],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });

export { AppDataSource };
