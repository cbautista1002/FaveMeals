import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Component} from 'angular2/core';

@Component({
  selector: 'meal-card',
  templateUrl: 'build/pages/meal-card/meal-card.html',
  directives: [IONIC_DIRECTIVES]

})
export class MealCard {
  constructor(){
  }
}