import prisma from "../database/client";
import { Rating } from "../../domain/models/rating";
import { RatingRepository } from "../../domain/repositories/ratingRepository";

export class PrismaRatingRepository implements RatingRepository {
  async create(rating: Rating): Promise<Rating> {
    const createdRating = await prisma.rating.create({ data: rating });
    return createdRating;
  }
}
