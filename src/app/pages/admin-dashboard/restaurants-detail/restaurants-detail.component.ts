import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-restaurants-detail',
  templateUrl: './restaurants-detail.component.html',
  styleUrls: ['./restaurants-detail.component.scss']
})
export class RestaurantsDetailComponent implements OnInit {

  cards: any[];
  restaurantId: string;
  qrImg;
  
  restaurant: any;

  constructor(private _user: UserService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurantId = this._route.snapshot.params.restaurantId;

    this._user.getRestaurantById(this.restaurantId)
      .subscribe(data=>{
        console.log(data);
        this.restaurant=data;
      })

    this._user.getCardsByRestaurant(this.restaurantId)
      .subscribe(data=>{
        console.log(data);
        this.cards  = data;
      })
  }

  getQR(card){
    this._user.getCardQR(this.restaurantId, card)
      .subscribe(data=>{
        console.log(data);
        this.qrImg=data.uri;
      })
  }

}
