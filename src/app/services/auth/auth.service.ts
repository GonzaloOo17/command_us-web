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

  
    
  constructor(private _http: HttpClient ) { }

  login(username : string ,password : string){    
  
      this.body={
        email : username,
        password : password
      }
           return this._http.post<Login>(this.url+'/api/users/login', this.body,);    
  }

  setUsurioLogueado(usuario : Login){

    Cookie.set('usuarioRegistrado',usuario.user.name);
    Cookie.set('token', usuario.token);
    
  }

  getUsuarioLogueado(): any{
    
    console.log( Cookie.get('usuarioRegistrado'));
    return Cookie.get('usuarioRegistrado');
  }

  getAllUsers(){
    return this._http.get<GetAllUsers>(this.url+'/api/users');

  }
}


