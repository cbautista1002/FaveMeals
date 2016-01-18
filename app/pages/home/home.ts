import {Page, NavController} from 'ionic-framework/ionic';
import {MealCard} from '../meal-card/meal-card';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [MealCard]
})
export class HomePage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
