import { Ireview } from "../Ireview";
import { IreviewContract } from "../contracts/IreviewContract";

export class Review implements Ireview {
  image: string;
  name: string;
  rating: number;
  opinion: string;
  date: string;

  constructor(IreviewContract: IreviewContract) {
    this.image = IreviewContract.image;
    this.name = IreviewContract.name;
    this.rating = IreviewContract.rating;
    this.opinion = IreviewContract.opinion;
    this.date = IreviewContract.date;
  }
}
