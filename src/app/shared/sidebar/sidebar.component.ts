import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { GetPanels, Panel } from 'src/app/interfaces/interfaces';
import { PanelsService } from 'src/app/services/panels/panels.service';
import { AuthService } from '../../services/auth/auth.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}



@Component({
    //moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    ngOnInit() {
        this.servicioPanels.getPanels()
			.subscribe((datos) => {
				console.log(datos);
				this.datosPaneles=datos;
				this.totalPaneles=this.datosPaneles.total;
				this.paneles=this.datosPaneles.panels;
			})	
        //this.menuItems = ROUTES.filter(menuItem => menuItem);
    }


    datosPaneles : GetPanels;
	totalPaneles : number =0;
	paneles:  Panel[]=[];

    constructor(private servicioAuth : AuthService, 
        private servicioPanels : PanelsService,
        private router : Router){}

    mostrarUsuarioLogueado():string{
		return Cookie.get('usuarioRegistrado');
	}
    
    logOut(){
        console.log('Borrar cookies');
        Cookie.deleteAll();
    }

    pulsaPanel(panelId: string){
        this.router.navigate([`./listasensores/${panelId}`]);

        // this.router.navigate(['./listasensores']);
    }
}
