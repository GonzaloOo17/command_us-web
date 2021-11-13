import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModalComponent } from 'src/app/components/ui/loading-modal/loading-modal.component';
import { SuccessmodalComponent } from 'src/app/components/ui/successmodal/successmodal.component';
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

  modalLoad: NgbModalRef;
  successModal: NgbModalRef;

  constructor(private _user: UserService, private _route: ActivatedRoute, private _modal: NgbModal, private _router: Router) { }

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
    this._user.saveCard(this.restaurant, this.cardId, this.card)
      .subscribe(data=>{
        console.log(data);
        this.successModal = this._modal.open(SuccessmodalComponent);
        setTimeout(() => {
          this.successModal.close();
          this._router.navigate(['/admin/restaurant-detail', this.restaurant]);
        }, 1500);
      });
  }

}
