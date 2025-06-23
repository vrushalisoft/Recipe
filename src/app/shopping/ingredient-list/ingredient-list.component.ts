import { Component, Input, OnInit } from "@angular/core";
import { Ingredient } from "src/app/shared/model/ingredient.model";
import { ShoppingService } from "src/app/shared/services/shopping.service";

@Component({
  selector : 'app-ingredient-list',
  templateUrl : './ingredient-list.component.html',
  styleUrls : ['./ingredient-list.component.css']
})

export class IngredientListComponent implements OnInit{

  // @Input() set newIngredSetter(catchedIngrdForm : any){
  //   if(catchedIngrdForm){
  //     this.ingredientList.push(catchedIngrdForm)
  //   }
  // };
  ingredientList  : Ingredient[] = [];

  constructor(private shopServe : ShoppingService){}

  ngOnInit(): void {
    this.ingredientList = this.shopServe.getShoppingList();
    this.shopServe.shopSub.subscribe({
      next : (updatedShoppingList : Ingredient[] | any) => {
      this.ingredientList = updatedShoppingList;
      }
    })

  }


}
