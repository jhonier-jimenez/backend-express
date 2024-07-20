import { Router } from "express";
import { PrismaMovieRepository } from "../../infrastructure/repositories/prismaMovieRepository";
import { MovieService } from "../../domain/services/movieService";
import { MovieController } from "../controllers/movieController";

const movieRouter = Router();

const movieRepository = new PrismaMovieRepository();
const movieService = new MovieService(movieRepository);
const movieController = new MovieController(movieService);

movieRouter.post("/movies", (req, res, next) =>
  movieController.createMovie(req, res, next)
);
movieRouter.get("/movies", (req, res, next) =>
  movieController.getAllMovies(req, res, next)
);

export default movieRouter;
