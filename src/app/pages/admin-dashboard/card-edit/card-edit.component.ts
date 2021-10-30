import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {

  card: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addCategory(){
    console.log(this.card)
  }

  addProduct(category){
    console.log(this.card)
  }

  clickAddCategory(){
    this.card.push({ name: '', products: [ { name: '', price: '' } ] })
  }

  clickAddProduct(categoryName){
    this.card.find(c=>c.name==categoryName).products.push( { name: '', price: '' } );
  }

  changeCategoryName(value,category){
    
  }

  save(){
    console.log(this.card);
  }

}
