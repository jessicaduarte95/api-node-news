import express, { Application } from "express";
import { connectDB } from "./db/database";
import config from "config";

import UserRouters from "./routers/UsersRoute";

interface Server {
  host: string;
  port: number;
}

const app: Application = express();
app.use(express.json());

// Start Database
const server = config.get<Server>("server");
const PORT = server.port;
const HOST = server.host;

connectDB();

// Routers
app.use(UserRouters);

app.listen(PORT, () => {
  console.log(`Server is running on https://${HOST}:${PORT}`);
});
