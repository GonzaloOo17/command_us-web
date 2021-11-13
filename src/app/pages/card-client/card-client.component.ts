import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.scss']
})
export class CardClientComponent implements OnInit {

  cardId:string;
  restaurant:string;

  card;

  constructor(private _user: UserService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.cardId = this._route.snapshot.params.cardId;
    this.restaurant = this._route.snapshot.params.restaurantId;

    this._user.getCardById_Client(this.restaurant, this.cardId)
      .subscribe(data=>{
        console.log(data);
        this.card=data.products;
        
      });

  }

}
