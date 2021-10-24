import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GetAllUsers, Login } from 'src/app/interfaces/interfaces';
import { Cookie } from 'ng2-cookies/ng2-cookies';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.baseUrl;
  private body = {
    email : "",
    password : ""
  };

  token:any;
    
  constructor(private _http: HttpClient ) { }

  login(username : string ,password : string){    
  
      this.body={
        email : username,
        password : password
      }
           return this._http.post<Login>(this.url+'/user/login', this.body,);    
  }

  setLoggedUser(data){
    console.log(data.token)
    this.token = data.token;
    Cookie.set('user_token', data.token);
  }

  getToken(){
    return this.token;
  }

  getUsuarioLogueado(): any{
    console.log( Cookie.get('usuarioRegistrado'));
    return Cookie.get('usuarioRegistrado');
  }

}


