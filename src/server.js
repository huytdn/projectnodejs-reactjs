import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import configCors from "./config/cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import connection from "./config/connectDB";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8888;

configCors(app);

configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connection();

initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {});
