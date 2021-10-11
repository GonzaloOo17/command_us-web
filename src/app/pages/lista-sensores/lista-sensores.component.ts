import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Sensor, SensorsByPanel } from 'src/app/interfaces/interfaces';
import { PanelsService } from 'src/app/services/panels/panels.service';

@Component({
  selector: 'app-lista-sensores',
  templateUrl: './lista-sensores.component.html'
})
export class ListaSensoresComponent implements OnInit {

  loading : boolean = true;

  @Input() idPanel : string
  datosSensoresByPanel : SensorsByPanel;
	totalSensoresByPanel : number = 0;
	sensoresByPanel : Sensor[]=[];
  total : number =0;

  constructor (	private servicioPanels : PanelsService, 
                private activateRoute : ActivatedRoute,
                private router : Router){}

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {
      this.idPanel = params.panelId;
      console.log("muestra "+this.idPanel);   

        this.servicioPanels.getSensorsByPanel(this.idPanel)
        .subscribe((datos) => {
          console.log('dentro del sensores by id: ',datos);
          this.datosSensoresByPanel=datos;
          this.totalSensoresByPanel=this.datosSensoresByPanel.total;
          this.sensoresByPanel=this.datosSensoresByPanel.sensors;	
          setTimeout(() =>{
            this.loading=false;
          }, 500);
              
        },
        (error)=>{
          console.log('Ha ocurrido un error',error);
        })
     })
  }

  mostrarUsuarioLogueado():string{
		return Cookie.get('usuarioRegistrado');
	}
  
  muestraConm(panelId : string, sensorId : string){
		console.log("panel seleccionado " + panelId);
		// this.mostrarSensorsByPanel(panelId);
		// this.panel_id=panelId;
		this.router.navigate([`./listasensores/${panelId}/conm/${sensorId}`]);
	}
}
