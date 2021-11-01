import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl;
  user='';

  headers = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + Cookie.get('user_token')
  })

  constructor(private _http: HttpClient, private  _auth: AuthService) { 
    this.headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('user_token')
    })
    this.setActiveUser(sessionStorage.getItem('email'));
  }

  reloadHeaders(){
    this.headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('user_token')
    })
  }

  setActiveUser(user){
    this.user = user;
  }

  getRestaurantsByUser(){
    return this._http.get<any>(this.url+'/user/' + this.user + '/restaurant', {headers: this.headers});
  }

  createRestaurant(restaurant){
    return this._http.post<any>(this.url+'/user/' + this.user + '/restaurant', restaurant, {headers: this.headers});
  }

  getCardsByRestaurant(restaurant){
    return this._http.get<any>(this.url+'/user/' + this.user + '/restaurant/' +  restaurant + '/card', {headers: this.headers});
  }

  getCardById(restaurant, cardId){
    return this._http.get<any>(this.url+'/user/' + this.user + '/restaurant/' +  restaurant + '/card/' + cardId, {headers: this.headers});
  }

  getRestaurantById(restaurant){
    return this._http.get<any>(this.url+'/user/' + this.user + '/restaurant/' +  restaurant, {headers: this.headers});
  }

}
