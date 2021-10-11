import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(private _auth: AuthService
              , private router : Router) { }

  ngOnInit(): void {
  }

  login(){

    // this._auth.login(this.username,this.password)
    //   .subscribe( (datos) => {
    //   this.respuestaLogin=datos;
    //   this._auth.setUsurioLogueado(datos); // Para guardar los datos del usuario logueado en activo
    //   this.noLogin=false;
      this.router.navigate(['./dashboard']);
    //   console.log('respuesta: '+ 'user: '+this.respuestaLogin.user.name + 'token: ' +this.respuestaLogin.token);

    // },
    // (error) => {
    //   console.log("usuario o contraseña no valida");
    //   this.noLogin=true;
    // }) 
    // console.log(this._auth.login(this.username,this.password).subscribe());

    // let respuesta  = this._auth.login(this.username,this.password)
    // if (respuesta){
    //   this.noLogin=false;
    //   this.router.navigate(['./dashboard']);
    // }else {
    //   this.noLogin=true;
    // }

  }

}
