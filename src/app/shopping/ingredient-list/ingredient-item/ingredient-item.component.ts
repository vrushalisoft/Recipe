import { Component, Input } from "@angular/core";

@Component({
  selector : 'app-ingredient-item',
  templateUrl : './ingredient-item.component.html',
  styleUrls : ['./ingredient-item.component.css']
})

export class IngredientItemComponent{
  @Input() ingredient: any;
}
