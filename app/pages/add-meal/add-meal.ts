import {IonicApp, Page, NavController, NavParams} from 'ionic-framework/ionic';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/add-meal/add-meal.html'
})
export class AddMealPage {
  constructor(nav: NavController, http: Http){
    this.nav = nav;
    this.http = http;

    this.restaurant = '';
    this.item = '';
    this.stars = '';
    this.info = '';
  }

  addNewMeal(){
    console.log('Clicked');
    let newMeal = JSON.stringify({
      restaurant: this.restaurant,
      item: this.item,
      stars: this.stars,
      info: this.info
    });
    this.http.post('http://node-js-151496.nitrousapp.com:3000/new', newMeal, {})
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
    this.stars = starNum;
  }
}
