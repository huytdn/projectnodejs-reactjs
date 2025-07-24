import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {});
