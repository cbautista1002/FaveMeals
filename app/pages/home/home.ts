import {Page, NavController} from 'ionic-framework/ionic';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {MealCard} from '../meal-card/meal-card';
import {AddMealPage} from '../add-meal/add-meal';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [MealCard]
})
export class HomePage {
  constructor(nav: NavController, http: Http){
    this.nav = nav;
    this.http = http;
    this.mealList = [];
    this.getMeals();
  }

  onPageWillEnter(){
    console.log('onPageWillEnter() called');
    this.getMeals();
  }

  addNewMeal(){
    this.nav.push(AddMealPage);
  }

  getMeals(){
    this.http.get('http://192.241.242.29:3000/carlos/meals')
      .map(res => res.json())
      .subscribe(
        data => {
          this.mealList = data;
        },
        err => console.error('There was an error: ' + err);,
        () => console.log('Random Quote Complete')
      );
  }

}
