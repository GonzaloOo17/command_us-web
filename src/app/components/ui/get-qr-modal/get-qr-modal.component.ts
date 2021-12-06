import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-get-qr-modal',
  templateUrl: './get-qr-modal.component.html',
  styleUrls: ['./get-qr-modal.component.scss']
})
export class GetQRModalComponent implements OnInit {

  @Input()
  card;

  @Input()
  restaurant;

  nComedores;

  comedores: any[]=[];

  constructor(private _user: UserService) { }

  ngOnInit(): void {
    
  }

  getPDF(){
    console.log(this.comedores);

    this._user.getCardQR(this.restaurant, this.card, this.comedores)
      .subscribe(data=>{
        console.log(data);
        this.downlaodFile(data);
        
      }, err => console.error(err))
  }

  updatenComedores(){
    
    for (let i = 0; i < this.nComedores; i++) {
      if(this.comedores.length<this.nComedores){
        this.comedores.push({name:'',nMesas:''})
      }
      if(this.comedores.length>this.nComedores){
        this.comedores.splice(this.comedores.length-1,1)
      }
    }
  }

  downlaodFile(data: Blob){
    let downloadLink = document.createElement('a');
    let binaryData: Blob[] = [];
        binaryData.push(data);
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: 'application/octet-stream'}));
        
        downloadLink.setAttribute('download', 'PDF.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
  }

}
