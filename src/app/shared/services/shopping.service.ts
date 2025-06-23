
import { BehaviorSubject, Subject } from "rxjs";
import { Ingredient } from "../model/ingredient.model";
import { EventEmitter } from '@angular/core';

export class ShoppingService{

  private shoppingDataList = [
    new Ingredient('Oil', 5, '135','Gemini', 'https://5.imimg.com/data5/IU/RM/SZ/SELLER-105049696/gemini-1lt-refined-sunflower-oil-mrp-140-1000x1000.jpg'),
    new Ingredient('Salt', 1, '20','Tata', 'https://www.justgotochef.com/img/1522753041-Tata-Salt-Logo.jpg'),
    new Ingredient('Turmeric', 3, '50','Ambari', 'https://m.media-amazon.com/images/I/818AUOzhTQL._SL1500_.jpg')
  ];

  // shoppingListEmitter = new EventEmitter();
  shopSub = new BehaviorSubject(this.shoppingDataList.slice());
  // shoppingListObs = new Subject()

  getShoppingList(){
    return this.shoppingDataList.slice();
  }

  addNewIngredientToList( newIngred : Ingredient){
    this.shoppingDataList.push(newIngred)
    console.log(this.shoppingDataList)
    // this.shoppingListEmitter.emit(this.shoppingDataList.slice())
    this.shopSub.next(this.shoppingDataList.slice())
  }
}
