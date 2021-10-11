import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanelsService } from '../../services/panels/panels.service';
import { GetComm, Commutation } from '../../interfaces/interfaces';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-conmutaciones',
  templateUrl: './pruebas.html',
  styleUrls: ['./conmutaciones.component.scss']
})
export class ConmutacionesComponent implements OnInit {

  loading : boolean = true;

  TablaOnOff : string[]=[];
  tablaOn : number[]=[];
  tablaOff : number[]=[];
  // TablaOnOff : Date[]=[];

  idSensor : string;
  datosComm : GetComm
  totalComm : number =0;
  commutation : Commutation[] = [];


  constructor(private servicioPanels : PanelsService,
              private acivateRoute : ActivatedRoute) { }

  ngOnInit(): void {

    
    this.acivateRoute.params.subscribe( params => {
      console.log((params ))
      this.idSensor=params.sensorId;
      this.servicioPanels.getComm(this.idSensor)
        .subscribe(datos => {
          this.datosComm = datos;
          this.totalComm = datos.total;
          this.commutation = datos.commutations
          for (let i=0; this.commutation.length-1;i++){

            var day1 = new Date(this.commutation[i+1].timestamp).getTime();
            var day2 = new Date(this.commutation[i].timestamp).getTime();
            var dif = (day1-day2);
            // this.TablaOnOff[i]= new Date(dif);
            // console.log("tiempo dia 1 ",day1);
            // console.log("tiempo dia 2 ",day2);  
            // console.log("DIFERENCIA   "+dif);
            // console.log("Dia 1  "+new Date (day2));
            // console.log("dia 2  "+new Date (day1));
            // console.log("DIFERENCIA fecha  "+new Date (dif));
            // var tiempo = new Date(dif).toUTCString();
            // console.log ("tiempo"+tiempo);    
            // console.log ("tiempo tabla "+this.TablaOnOff[i]);

           this.TablaOnOff[i]= this.subtractDates(this.commutation[i+1].timestamp,this.commutation[i].timestamp);
           console.log ("tiempo tabla "+this.TablaOnOff[i]);  
           
           setTimeout(() =>{
            this.loading=false;
          }, 500);
          }
       
        },
        (error)=>{
          console.log("Ha ocurrido un error ",error)
        })   

    })
  }

  mostrarUsuarioLogueado():string{
		return Cookie.get('usuarioRegistrado');
	}


  subtractDates(date1, date2) {
    var difference_ms = new Date(date1).getTime() - new Date(date2).getTime();
    //take out milliseconds
    difference_ms = difference_ms / 1000;
    var seconds = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var minutes = Math.floor(difference_ms % 60);
    difference_ms = difference_ms / 60;
    var hours = Math.floor(difference_ms % 24);
    if (hours != 0)
      return hours + ':' + minutes.toString() + ':' + seconds.toString();
    else return '00:' + minutes.toString() + ':' + seconds.toString();
  }

}
