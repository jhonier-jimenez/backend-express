import express from "express";
import morgan from "morgan";
import movieRouter from "./interfaces/routes/movieRoutes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", movieRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
