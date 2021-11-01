import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location} from '@angular/common';
import { Cookie } from 'ng2-cookies';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    //moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{

  navbarWhite = false;

    constructor(public _auth: AuthService, private router: Router){

      router.events.subscribe((val) => {
        // see also 
        if(val instanceof NavigationEnd){
          if(this.router.url.includes('login')){
            this.navbarWhite=true;
          } else this.navbarWhite=false;
        }
    });
    }

    ngOnInit(){
    }

    signOut(){
      console.log('Borrar cookies');
      Cookie.deleteAll();
    }

}
