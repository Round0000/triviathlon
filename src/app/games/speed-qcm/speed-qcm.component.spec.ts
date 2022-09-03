import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedQcmComponent } from './speed-qcm.component';

describe('SpeedQcmComponent', () => {
  let component: SpeedQcmComponent;
  let fixture: ComponentFixture<SpeedQcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedQcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
