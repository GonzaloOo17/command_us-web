import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoresByIdComponent } from './sensores-by-id.component';

describe('SensoresByIdComponent', () => {
  let component: SensoresByIdComponent;
  let fixture: ComponentFixture<SensoresByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensoresByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoresByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
