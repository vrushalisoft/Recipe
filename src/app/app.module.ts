import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeService } from './shared/services/recipe.service';
import { IngredientItemComponent } from './shopping/ingredient-list/ingredient-item/ingredient-item.component';
import { IngredientListComponent } from './shopping/ingredient-list/ingredient-list.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingService } from './shared/services/shopping.service';
import { NoRecipeComponent } from './recipe/no-recipe/no-recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingFormComponent,
    IngredientListComponent,
    IngredientItemComponent,
    NoRecipeComponent,
    PageNotFoundComponent,
    RecipeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    // RecipeService,
    // ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
