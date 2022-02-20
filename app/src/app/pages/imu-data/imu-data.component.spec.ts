import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImuDataComponent } from './imu-data.component';

describe('ImuDataComponent', () => {
  let component: ImuDataComponent;
  let fixture: ComponentFixture<ImuDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImuDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImuDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
