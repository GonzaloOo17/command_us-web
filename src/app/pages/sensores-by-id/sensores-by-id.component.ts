import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { SensorsByPanel } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PanelsService } from 'src/app/services/panels/panels.service';

@Component({
  selector: 'app-sensores-by-id',
  templateUrl: './sensores-by-id.component.html',
  styleUrls: ['./sensores-by-id.component.scss']
})
export class SensoresByIdComponent implements OnInit {

  datosSensoresById : SensorsByPanel;
	totalSensoresById : number = 0;
	sensoresById : SensorsByPanel[]=[];

	// sensorPedido : number=2;
  opcion : string;
  plus : boolean = true;

  constructor(
    private servicioPanels : PanelsService,
		private servicioAuth : AuthService
  ){
    // this.opcion=0;
  }


  ngOnInit(): void {

    this.servicioPanels.getSensorsByPanel(this.opcion)
    .subscribe((datos) => {
      console.log('dentro del sensores by id: ',datos);
      // this.datosSensoresById=datos;
      // this.totalSensoresById=this.datosSensoresById.total;
      // this.sensoresById=this.datosSensoresById.sensors;	
      		
      // console.log('Total paneles: '+ this.datosPaneles.total);
    },
    (error)=>{
      console.log('Ha ocurrido un error',error);
    })

  }

  mostrar(){
    this.servicioPanels.getSensorsByPanel(this.opcion)
    .subscribe((datos) => {
      // console.log('dentro del sensores by id: ',datos);
      // this.datosSensoresById=datos;
      // this.totalSensoresById=this.datosSensoresById.total;
      // this.sensoresById=this.datosSensoresById.sensors;			
      // // console.log('Total paneles: '+ this.datosPaneles.total);
    },
    (error)=>{
      console.log('Ha ocurrido un error',error);
    })
    console.log(this.opcion);
  }

  mostrarUsuarioLogueado():string{
		return Cookie.get('usuarioRegistrado');
	}
}
