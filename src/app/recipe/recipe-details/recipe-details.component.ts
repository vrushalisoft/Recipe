import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "src/app/shared/services/recipe.service";

@Component({
  selector : 'app-recipe-details',
  templateUrl : './recipe-details.component.html',
  styleUrls : ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit{
  // @Input() currentRecipe : any;

  currentRecipe : any;
  constructor(private activeRoute : ActivatedRoute, private recipeServe : RecipeService){}

  ngOnInit() : void {
    this.activeRoute.params.subscribe((routeIndexParam : any) => {
      // console.log('Route Param' , routeIndexParam);
      this.currentRecipe = this.recipeServe.getRecipeObjWithIndex(+routeIndexParam.selectedRecipeIndex)
    })
  }
}
