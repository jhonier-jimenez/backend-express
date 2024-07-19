import { Rating } from "@prisma/client";

export interface RatingRepository {
  create(rating: Rating): Promise<Rating>;
}
