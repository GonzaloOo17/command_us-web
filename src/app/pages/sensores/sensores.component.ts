import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { GetSensors, Sensor, Sensors } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PanelsService } from 'src/app/services/panels/panels.service';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  // styleUrls: ['./sensores.component.scss']
})
export class SensoresComponent implements OnInit {

  loading : boolean = true;

	datosSensores: GetSensors;
	totalSensores: number=0;
	sensores : Sensor[]=[];

  lista : string[]=['hola','mundo','cruel'];

  constructor(
    private servicioPanels : PanelsService,
		private servicioAuth : AuthService
  ){}
  
  

  ngOnInit(): void {
    
    this.servicioPanels.getSensors()
    .subscribe((datos) => {
      console.log(datos);
      this.datosSensores=datos;
      this.totalSensores=this.datosSensores.total;
      this.sensores=this.datosSensores.sensors;
        
      for (let index = 0; index < this.sensores.length; index++) {
        const element = this.sensores[index];
        console.log(element);
        
      }
      setTimeout(() =>{
        this.loading=false;
      }, 1000);
       console.log(' sensores: '+ this.sensores.length);
    })
    
  }
    
  mostrarUsuarioLogueado():string{
		return Cookie.get('usuarioRegistrado');
	}



}
