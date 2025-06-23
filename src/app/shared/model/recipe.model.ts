export class Recipe {
  name : string;
  desc : string;
  imgPath : string;
  preparationTime : string

  constructor(rName : string, rDesc: string, rImg : string, rPrep : string){
    this.name = rName;
    this.desc = rDesc;
    this.imgPath = rImg;
    this.preparationTime = rPrep
  }
}
