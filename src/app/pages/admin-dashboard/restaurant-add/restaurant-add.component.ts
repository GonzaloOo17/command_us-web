import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SuccessmodalComponent } from 'src/app/components/ui/successmodal/successmodal.component';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.scss']
})
export class RestaurantAddComponent implements OnInit {

  restaurant = {
    name: '',
    localization: '',
    description: '',
    type: ''
  }

  successModal: NgbModalRef;

  constructor( private _user: UserService, private _router: Router, private _modal: NgbModal) { }

  ngOnInit(): void {
  }

  save(){
    this._user.createRestaurant(this.restaurant)
      .subscribe(data=>{
        console.log(data);
        this.successModal = this._modal.open(SuccessmodalComponent);
        setTimeout(() => {
          this.successModal.close();
          this._router.navigate(['/admin']);
        }, 1500);
      })
  }


}
