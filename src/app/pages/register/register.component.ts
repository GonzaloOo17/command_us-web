import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SuccessmodalComponent } from 'src/app/components/ui/successmodal/successmodal.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user= {
    name: '',
    surname: '',
    email: '',
    password: '',
    role: 'OWNER',
    alias: ''
  }

  successModal: NgbModalRef;

  constructor(private _users: AuthService, private _modal: NgbModal, private _router: Router) { }

  ngOnInit(): void {
    
  }

  register(){
    this._users.register(this.user)
      .subscribe(data=>{
        console.log(data);
        this.successModal = this._modal.open(SuccessmodalComponent);
        setTimeout(() => {
          this.successModal.close();
          this._router.navigate(['/login']);
        }, 2000);
      })
  }

}
