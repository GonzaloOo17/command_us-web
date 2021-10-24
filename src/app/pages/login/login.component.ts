import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModalComponent } from 'src/app/components/ui/loading-modal/loading-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  respuestaLogin : Login;
  respuesta : boolean = false;
  noLogin = false;

  loadingModal: NgbModalRef;

  constructor(private _auth: AuthService
              , private router : Router, private _modal: NgbModal) { }

  ngOnInit(): void {
  }

  login(){

    this.loadingModal = this._modal.open(LoadingModalComponent);


    this._auth.login(this.username,this.password)
      .subscribe( (data) => {
      this.loadingModal.close();
      this.router.navigate(['./admin']);
      console.log(data);

    },
    (error) => {
      this.loadingModal.close();
      this.noLogin=true;
    }) 


  }

}
