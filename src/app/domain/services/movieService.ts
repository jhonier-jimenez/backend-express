import { Movie } from "../models/movie";
import { MovieRepository} from "../repositories/movieRepository"

export class MovieService {
  constructor(private movieRepository: MovieRepository) {
    this.movieRepository = movieRepository;
  }

  async createMovie(movie: Movie): Promise<Movie> {
    const createdMovie = await this.movieRepository.create(movie);
    return createdMovie;
  }

  async getAllMovies(): Promise<Movie[]> {
    const movies = await this.movieRepository.getAll();
    return movies;
  }
}
