import prisma from "../database/client";
import { Movie } from "../../domain/models/movie";
import { MovieRepository } from "../../domain/repositories/movieRepository";

export class PrismaMovieRepository implements MovieRepository {
  async create(movie: Movie): Promise<Movie> {
    const createdMovie = await prisma.movie.create({ data: movie });
    return createdMovie;
  }

  async getAll(): Promise<Movie[]> {
    const movies = await prisma.movie.findMany();
    return movies;
  }
}
