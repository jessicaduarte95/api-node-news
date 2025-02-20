import express, { Application } from "express";
import { connectDB } from "./db/database";
import config from "config";
import cors from "cors";

import AuthRoute from "./routers/AuthRoute";
import UserRouters from "./routers/UsersRoute";
import LoginRouters from "./routers/LoginRoute";
import PostRouters from "./routers/PostService";

interface Server {
  host: string;
  port: number;
}

const app: Application = express();
app.use(express.json());

// Cors
app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Start Database
const server = config.get<Server>("server");
const PORT = server.port;
const HOST = server.host;

connectDB();

// Routers
app.use(AuthRoute);
app.use(UserRouters);
app.use(LoginRouters);
app.use(PostRouters);

app.listen(PORT, () => {
  console.log(`Server is running on https://${HOST}:${PORT}`);
});
