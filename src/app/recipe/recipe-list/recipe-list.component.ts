import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "src/app/shared/model/recipe.model";
import { RecipeService } from './../../shared/services/recipe.service';

@Component({
  selector : 'app-recipe-list',
  templateUrl : './recipe-list.component.html',
  styleUrls : ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{

  recipeList : Recipe[] = [];

  // recipeList = [
  //   new Recipe('Pohe', 'A morning snack for a quick fill up', 'https://shwetainthekitchen.com/wp-content/uploads/2021/04/Poha-Recipe-500x500.jpg', '10'),
  //   new Recipe('Dosa', 'A south indian dish created with rice and udad dal batter', 'https://ranveerbrar.com/wp-content/uploads/2021/02/Masala-dosa-scaled.jpg', '20'),
  //   new Recipe('Dal Bati', 'A north maharashtrian snack for auspicious occasions', 'https://i.ytimg.com/vi/2YIM5-4XIHQ/maxresdefault.jpg', '180'),
  // ]
  // @Output() tellToParentRecipe = new EventEmitter();  //send data to recipe component

  constructor(private recipeServe : RecipeService){}
  ngOnInit(){
  //   this.recipeList = this.reipeServe.getRecipeList();
  // }
  // listenFromChild(itemData: any){
  //   //console.log('listenFromChild trigger', itemData);
  //   this.tellToParentRecipe.emit(itemData);
  // }
    this.recipeServe.recipeSub.subscribe((recipe : any)=>{
        this.recipeList = recipe
    })
  }
}
