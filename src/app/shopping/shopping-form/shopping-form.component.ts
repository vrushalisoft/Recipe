import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { Ingredient } from './../../shared/model/ingredient.model';
import { ShoppingService } from "src/app/shared/services/shopping.service";

@Component({
  selector : 'app-shopping-form',
  templateUrl : './shopping-form.component.html',
  styleUrls : ['./shopping-form.component.css']
})

export class ShoppingFormComponent implements OnInit{
  isNewIngredient : boolean = true;
  @ViewChild('myForm')  myFormObj : any;
  // @ViewChild('ingredName') ingredName : any;
  // @ViewChild('ingredBrand') ingredBrand : any;
  // @ViewChild('ingredQty') ingredQty : any;
  // @ViewChild('ingredPrice') ingredPrice : any;
  // @ViewChild('ingredImg') ingredImg : any;

  // @Output() tellToParentShopping = new EventEmitter();

  constructor(private shopServe : ShoppingService){  }
  ngOnInit(): void {

  }
  // createIngredient(){
  //   const newIng = new Ingredient(this.ingredName.nativeElement.value,
  //     this.ingredQty.nativeElement.value,
  //     this.ingredPrice.nativeElement.value,
  //     this.ingredBrand.nativeElement.value,
  //     this.ingredImg.nativeElement.value,);
  //     // this.tellToParentShopping.emit(newIng)
  //   this.shopServe.addNewIngredientToList(newIng)
  //   }

    onSubmit(){
      // console.log(this.myFormObj.value);
      let ing = this.myFormObj.value;
      let ingredObj = new Ingredient(ing.iName, ing.iQty, ing.iPrice, ing.iBrand, ing.iImg)
      console.log(ingredObj)
      if(this.isNewIngredient){
        this.shopServe.addNewIngredientToList(ingredObj);
      }
      this.myFormObj.reset();
    }

}
