import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { NoRecipeComponent } from './recipe/no-recipe/no-recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';

const routes: Routes = [
  { path : '' , redirectTo : '/recipe' ,pathMatch : 'full'},
  { path : 'recipe', component : RecipeComponent , children : [
    { path : '' , component : NoRecipeComponent },
    {path : 'new-recipe', component: RecipeFormComponent},
    { path : ':selectedRecipeIndex' , component : RecipeDetailsComponent},
    { path : ':selectedRecipeIndex/edit-recipe' , component : RecipeFormComponent}
  ] },
  { path : 'shopping', component : ShoppingComponent},
  { path : 'not-found' , component : PageNotFoundComponent},
  { path : '**' , redirectTo : "/not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
