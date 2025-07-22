import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import dotenv from "dotenv";
dotenv.config();

const app = express();

configViewEngine(app);
initWebRoutes(app);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log("app dang chay tren cong" + PORT);
});
