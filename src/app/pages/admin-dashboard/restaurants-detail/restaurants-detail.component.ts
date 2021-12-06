import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GetQRModalComponent } from 'src/app/components/ui/get-qr-modal/get-qr-modal.component';
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

  qrModal: NgbModalRef;

  constructor(private _user: UserService, private _route: ActivatedRoute, private _modal: NgbModal) { }

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
    this.qrModal = this._modal.open(GetQRModalComponent, { size: 'lg' });
    this.qrModal.componentInstance.card=card;
    this.qrModal.componentInstance.restaurant=this.restaurantId;
    
  }

}
