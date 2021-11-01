import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {

  card: any[] = [];

  restaurant: string;
  cardId: string;

  constructor(private _user: UserService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cardId = this._route.snapshot.params.cardId;
    this.restaurant = this._route.snapshot.params.restaurantId;

    this._user.getCardById(this.restaurant, this.cardId)
      .subscribe(data=>{
        console.log(data);
        this.card=data.products;
      });
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
