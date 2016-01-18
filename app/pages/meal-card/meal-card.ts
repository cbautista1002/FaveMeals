import {IONIC_DIRECTIVES} from 'ionic-framework/ionic';
import {Component, View, Input} from 'angular2/core';

@Component({
  selector: 'meal-card'
})
@View({
  templateUrl: 'build/pages/meal-card/meal-card.html',
  directives: [IONIC_DIRECTIVES]
})
export class MealCard{
  @Input() meal;

  constructor(){}

}