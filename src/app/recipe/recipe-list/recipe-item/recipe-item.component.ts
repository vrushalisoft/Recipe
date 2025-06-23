import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RecipeService } from "src/app/shared/services/recipe.service";

@Component({
  selector : 'app-recipe-item',
  templateUrl : './recipe-item.component.html',
  styleUrls : ['./recipe-item.component.css']
})

export class RecipeItemComponent{
  @Input() item : any;
  @Input() recIndex : any;
  // @Output() tellToParentList = new EventEmitter();

  // constructor(private recipeServe : RecipeService){}

  // recipeItemClicked(){
  //   // console.log('recipeItemClicked trigger');
  //   // this.tellToParentList.emit()
  //   this.recipeServe.selectedRecipeHandler.emit(this.item)
  // }
}
