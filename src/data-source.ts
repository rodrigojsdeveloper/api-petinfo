import { DataSource } from "typeorm";
import "reflect-metadata";

require("dotenv").config();

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        entities: [
          "src/entities/*.entity.{ts,js}",
          "dist/entities/*.entity.{ts,js}",
        ],
        synchronize: true,
      }
    : {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        synchronize: false,
        entities: [
          "src/entities/*.entity.{ts,js}",
          "dist/entities/*.entity.{ts,js}",
        ],
        migrations: ["src/migrations/*.{ts,js}", "dist/migrations/*.{ts,js}"],
      }
);

export { AppDataSource };
