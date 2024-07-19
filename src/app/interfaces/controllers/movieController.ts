import {MovieService} from "../../domain/services/movieService"


class MovieController {
    constructor(private movieService:MovieService){
        this.movieService = movieService
    }

    async createMovie(req, res){
        const {title, category, releaseYear} = req.body
        if(!title || title.trim() == 0){
            return res.status(400).send("Title' must not be empty.")
        }
    }
}

export default MovieController