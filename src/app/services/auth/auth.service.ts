import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  isLogged: boolean;
    
  constructor(private _http: HttpClient ) { }

  login(username : string ,password : string){    
  
      this.body={
        email : username,
        password : password
      }
           return this._http.post<Login>(this.url+'/user/login', this.body, { headers: new HttpHeaders({'Authorization': 'Basic Z29uemFsbzpjb21tYW5kX3Vz'})});    
  }

  register(user: any){    
    return this._http.post<any>(this.url+'/user', user, { headers: new HttpHeaders({'Authorization': 'Basic Z29uemFsbzpjb21tYW5kX3Vz'})});    
}

  setLoggedUser(data){
    this.token = data.token;
    Cookie.set('user_token', data.token);
    sessionStorage.setItem('email', data.email);
  }

  getToken(){
    return this.token;
  }

  getUsuarioLogueado(): any{
    return Cookie.get('user_token');
  }

  isLoggedIn(){
    return this.isLogged;
  }

  logOut(){
    Cookie.delete('user_token')
  }

}


