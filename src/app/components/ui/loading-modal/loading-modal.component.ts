import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent implements OnInit {

  constructor(private _activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(){
    this._activeModal.close();
  }

}
