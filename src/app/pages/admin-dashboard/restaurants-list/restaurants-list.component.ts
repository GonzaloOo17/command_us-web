import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {

  restaurants: any[] = [];

  

  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this._user.getRestaurantsByUser()
      .subscribe(data=>{
        console.log(data);
        this.restaurants=data;
      })

    
  }

}
