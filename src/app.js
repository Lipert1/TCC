import express from "express";
import routes from "./routes.js";
import db from "../config/db.js";
import Logger from "../config/logger.js";
import morgan from "morgan";
import expressListEndpoints from 'express-list-endpoints';

const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(express.json());
app.use("/", routes);

app.listen(port, async () => {
  await db();

  Logger.info("App rodando na porta 3000 🔥");
});

const routesPrint = expressListEndpoints(app);

console.log('Routes:');
routesPrint.forEach((route) => {
  console.log(`Path: ${route.path}, Method: ${route.methods}`);
});
