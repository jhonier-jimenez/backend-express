import { Request, Response, NextFunction } from "express";
import { MovieService } from "../../domain/services/movieService";

export class MovieController {
  constructor(private movieService: MovieService) {}

  async createMovie(req: Request, res: Response, next: NextFunction) {
    try {
      const movie = await this.movieService.createMovie(req.body);
      res.status(201).json(movie);
    } catch (error) {
      next(error);
    }
  }

  async getAllMovies(req: Request, res: Response, next: NextFunction) {
    try {
      const movies = await this.movieService.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }
}

