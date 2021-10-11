import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { Cookie } from 'ng2-cookies';

@Component({
    //moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{


    constructor(){}

    ngOnInit(){
    }

    signOut(){
      console.log('Borrar cookies');
      Cookie.deleteAll();
    }

}
