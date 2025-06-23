import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  isNewRecipe : boolean = false;
  currentRecipeIndex : any;
  recipeForm : any;

  constructor(private activeRoute : ActivatedRoute, private router : Router, private recipeServe : RecipeService){}

  ngOnInit(): void {
      this.recipeForm = new FormGroup({
        rName : new FormControl('',Validators.required),
        rDesc : new FormControl('',[Validators.required, Validators.minLength(20)]),
        rImgPath : new FormControl('', Validators.required),
        rPrep : new FormControl('', Validators.required)
      })

      this.activeRoute.params.subscribe((param : Params) => {
        if(param['selectedRecipeIndex']){
          this.isNewRecipe = false;
          this.currentRecipeIndex = param['selectedRecipeIndex'];
          let currentRecipe = this.recipeServe.getRecipeObjWithIndex(+this.currentRecipeIndex);
          this.recipeForm.setValue({
            rName : currentRecipe.name,
            rDesc : currentRecipe.desc,
            rImgPath : currentRecipe.imgPath,
            rPrep : currentRecipe.preparationTime
          })
        } else{
          this.isNewRecipe = true
        }
      })
  }
  onSubmit(){
    // console.log(this.recipeForm.value)
    let rec = this.recipeForm.value;
    let recipeObj = new Recipe(rec.rName,  rec.rDesc, rec.rImgPath, rec.rPrep)
    if(this.isNewRecipe){
      this.recipeServe.addNewRecipe(recipeObj);
    }else{
      // update
      this.recipeServe.updateExistingRecipe(+this.currentRecipeIndex, recipeObj)
    }
    this.recipeForm.reset();
    this.router.navigate(['/recipe']);
  }
}
