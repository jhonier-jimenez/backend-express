import { Rating } from "../models/rating";
import { RatingRepository } from "../repositories/ratingRepository";

export class RatingService {
  constructor(private ratingRepository: RatingRepository) {
    this.ratingRepository = ratingRepository;
  }

  async createRating(rating: Rating) {
    const createdRating = await this.ratingRepository.create(rating);
    return createdRating;
  }
}
