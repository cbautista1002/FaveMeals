import {IonicApp, Page, NavController, NavParams, Geolocation} from 'ionic-framework/ionic';
import 'rxjs/add/operator/map';
import {MealFormComponent} from './meal-form.component';


@Page({
  templateUrl: 'build/pages/add-meal/add-meal.html',
  directives: [MealFormComponent]
})
export class AddMealPage {
  constructor(nav: NavController){
    this.nav = nav;
    this.lat = 0;
    this.long = 0;
    this.getLocation();
  }

  getLocation(){
    let options = {timeout: 10000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      },
      (error) => {
        console.log(error;)
      },
      options
    );
  }

}
