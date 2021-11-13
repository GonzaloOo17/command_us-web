import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SuccessmodalComponent } from 'src/app/components/ui/successmodal/successmodal.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {

  card= {
    name: '',
    description: ''
  }

  restaurantId: string;

  successModal: NgbModalRef;

  constructor(private _users: UserService, private _route: ActivatedRoute, private _router: Router, private _modal: NgbModal) { }

  ngOnInit(): void {
    this.restaurantId = this._route.snapshot.params.restaurantId;
  }

  save(){
    console.log(this.card)
    this._users.createCard(this.restaurantId, this.card)
      .subscribe(data=>{
        console.log(data);
        this.successModal = this._modal.open(SuccessmodalComponent);
        setTimeout(() => {
          this.successModal.close();
          this._router.navigate(['/admin/restaurant-detail', this.restaurantId]);
        }, 2000);
      })
  }

}
