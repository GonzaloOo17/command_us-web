import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Panel, Sensor,   GetPanels, GetSensors, SensorsByPanel } from 'src/app/interfaces/interfaces';
import { PanelsService} from '../../services/panels/panels.service';
import { Router } from '@angular/router';



@Component({
    selector: 'dashboard-cmp',
    // templateUrl: 'dashboard.component.html'
	templateUrl: 'tarjetas.html'
})

export class DashboardComponent implements OnInit{

   
    ngOnInit(){ 		          
			
			this.servicioPanels.getPanels()
			.subscribe((datos) => {
				console.log(datos);
				this.datosPaneles=datos;
				this.totalPaneles=this.datosPaneles.total;
				this.paneles=this.datosPaneles.panels;
				setTimeout(() =>{
					this.loading=false;
				}, 500);
				
			})	
			
			this.servicioPanels.getSensors()
			.subscribe((datos) => {
				console.log(datos);
				this.datosSensores = datos;
				this.totalSensores = this.datosSensores.total;
				this.sensores = this.datosSensores.sensors
			})
        
    }
	

	loading : boolean = true;

	datosPaneles : GetPanels;
	totalPaneles : number =0;
	paneles:  Panel[]=[];
	
	

	datosSensores: GetSensors;
	totalSensores: number=0;
	sensores : Sensor[]=[];

	datosSensoresByPanel : SensorsByPanel;
	totalSensoresByPanel : number = 0;
	sensoresByPanel : Sensor[]=[];

	

	panel_id: string;
	plus: boolean = true;

	userLogueado : string;

	constructor (	private servicioPanels : PanelsService, private router : Router){}
	

	mostrarPaneles(){		
		this.servicioPanels.getPanels()
			.subscribe((datos) => {
				console.log(datos);
				this.datosPaneles=datos;
				this.totalPaneles=this.datosPaneles.total;
				this.paneles=this.datosPaneles.panels;
				// console.log('Total paneles: '+ this.datosPaneles.total);
			})
	}	

	mostrarSensores(){		
		this.servicioPanels.getSensors()
			.subscribe((datos) => {
				console.log(datos);
				this.datosSensores=datos;
				this.totalSensores=this.datosSensores.total;
				this.sensores=this.datosSensores.sensors;
				// console.log('Total paneles: '+ this.datosPaneles.total);
			})
	}

	mostrarSensorsByPanel(panelId : string){		
		this.servicioPanels.getSensorsByPanel(panelId)
			.subscribe((datos) => {
				console.log(datos);
				this.datosSensoresByPanel=datos;
				this.totalSensoresByPanel=this.datosSensoresByPanel.total;
				this.sensoresByPanel=this.datosSensoresByPanel.sensors;			
			})
	}
	
	prueba(panelId : number){
		console.log("prueba superada ---- has pulsado en el panel "+panelId);
	}

	mostrarUsuarioLogueado():string{
		return Cookie.get('usuarioRegistrado');
	}
	

	pulsaPlus(panelId : string){

		console.log("panel seleccionado " + panelId);
		this.mostrarSensorsByPanel(panelId);
		this.panel_id=panelId;
		// console.log("sensores by id ", this.sensoresByPanel)
		if (this.plus) {
			this.plus=false;
		} else {
			this.plus=true;
		}
	
	}

	pulsaBotonTarjetas(panelId : string){
		console.log("panel seleccionado " + panelId);
		// this.mostrarSensorsByPanel(panelId);
		// this.panel_id=panelId;
		this.router.navigate([`./listasensores/${panelId}`]);
	}
    
}

