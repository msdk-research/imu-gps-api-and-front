import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImuSettingsComponent } from './imu-settings.component';

describe('ImuSettingsComponent', () => {
  let component: ImuSettingsComponent;
  let fixture: ComponentFixture<ImuSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImuSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImuSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
