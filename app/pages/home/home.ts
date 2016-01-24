import {Page, NavController, Geolocation} from 'ionic-framework/ionic';
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
    this.getLocation();
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
    this.http.get('http://node-js-151496.nitrousapp.com:3000/carlos/meals')
      .map(res => res.json())
      .subscribe(
        data => {
          this.mealList = data;
        },
        err => console.error('There was an error: ' + err);,
        () => console.log('Random Quote Complete')
      );
  }

  getLocation(){
    let options = {timeout: 10000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      },
      options
    );
  }

}
