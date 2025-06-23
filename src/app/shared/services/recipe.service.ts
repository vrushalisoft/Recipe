import { EventEmitter } from "@angular/core";
import { Recipe } from "../model/recipe.model";
import { BehaviorSubject } from "rxjs";

export class RecipeService {

  private recipeDataList : Recipe[] =  [
    new Recipe('Pohe', 'A morning snack for a quick fill up', 'https://shwetainthekitchen.com/wp-content/uploads/2021/04/Poha-Recipe-500x500.jpg', '10'),
    new Recipe('Dosa', 'A south indian dish created with rice and udad dal batter', 'https://ranveerbrar.com/wp-content/uploads/2021/02/Masala-dosa-scaled.jpg', '20'),
    new Recipe('Dal Bati', 'A north maharashtrian snack for auspicious occasions', 'https://i.ytimg.com/vi/2YIM5-4XIHQ/maxresdefault.jpg', '180'),
  ];

  // selectedRecipeHandler = new EventEmitter();

  recipeSub = new BehaviorSubject(this.recipeDataList.slice());

  getRecipeObjWithIndex(ind : number){
    return this.recipeDataList.slice()[ind];
  }
  // getRecipeList(){
  //   return this.recipeDataList.slice()
  // }

  addNewRecipe(rec : Recipe){
    this.recipeDataList.push(rec);
    this.recipeSub.next(this.recipeDataList.slice());
    console.log(this.recipeDataList);
  }

  updateExistingRecipe(recIndex : number, updateRecObj : any){
    this.recipeDataList[recIndex] = updateRecObj;
    this.recipeSub.next(this.recipeDataList.slice())
  }

}
