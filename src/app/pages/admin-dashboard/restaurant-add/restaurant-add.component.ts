import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

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

  constructor( private _user: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this._user.createRestaurant(this.restaurant)
      .subscribe(data=>{
        console.log(data);
        this._router.navigate(['/admin']);
      })
  }


}
