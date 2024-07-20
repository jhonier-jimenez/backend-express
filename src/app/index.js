import express from "express";
import morgan from "morgan";
import movieRouter from "./interfaces/routes/movieRoutes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use("/api/v1", movieRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
