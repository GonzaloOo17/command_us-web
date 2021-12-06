import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQRModalComponent } from './get-qr-modal.component';

describe('GetQRModalComponent', () => {
  let component: GetQRModalComponent;
  let fixture: ComponentFixture<GetQRModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQRModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQRModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
