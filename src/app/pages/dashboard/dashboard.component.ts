import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Panel, Sensor,   GetPanels, GetSensors, SensorsByPanel } from 'src/app/interfaces/interfaces';
import { PanelsService} from '../../services/panels/panels.service';
import { Router } from '@angular/router';



@Component({
    selector: 'dashboard-cmp',
    // templateUrl: 'dashboard.component.html'
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

   
    ngOnInit(){ 		          
			
        
    }
	
	constructor (	private servicioPanels : PanelsService, private router : Router){}
	

	
    
}

