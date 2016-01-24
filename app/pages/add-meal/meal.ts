export class Meal{
  constructor(
    public restaurant: string;
    public item: string;
    public stars: number;
    public info?: string;
  ){
     this.restaurant = restaurant;
     this.item = item;
     this.stars = stars;
     this.info = info;
  }

  toJson(){
    return JSON.stringify({
      restaurant: this.restaurant,
      item: this.item,
      stars: this.stars,
      info: this.info
    });
  }
}