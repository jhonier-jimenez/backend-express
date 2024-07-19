import { Movie } from "../models/movie";

export interface MovieRepository {
    create(movie:Movie): Promise<Movie>;
    getAll(): Promise<Movie[]>
}