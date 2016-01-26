import {NavController, NavParams, IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Meal} from './meal';


@Component({
  selector: 'meal-form',
  templateUrl: 'build/pages/add-meal/meal-form.component.html',
  directives: [IONIC_DIRECTIVES]
})
export class MealFormComponent{
  constructor(nav: NavController, http: Http){
    this.nav = nav;
    this.http = http;
    this.model = new Meal('', '', 0, '');
    this.restaurantList = [];
    this.getRestaurantList();
  }

  getRestaurantList(){
    this.http.get('http://192.241.242.29:3000/get-restaurants')
      .map(res => res.json())
      .subscribe(
        data => {
          this.restaurantList = data;
          console.log(this.restaurantList);
        },
        err => console.error('There was an error: ' + err);,
        () => console.log('Random Quote Complete')
      );
  }

  addNewMeal(){
    console.log('Clicked');
    // console.log(this.chosenRestaurant);

    // if(this.chosenRestaurant){
    //   this.model.restaurant = this.chosenRestaurant;
    // }

    console.log(this.model);

    this.http.post('http://192.241.242.29:3000/new', this.model.toJson(), {})
      .map(res => res.text())
      .subscribe(
        data => console.log(data),
        err => console.error(err),
        () => {
          console.log('Added new meal');
          this.nav.pop();
        }
      );
  }

  starred(starNum){
    console.log(starNum);
    this.model.stars = starNum;
  }

}