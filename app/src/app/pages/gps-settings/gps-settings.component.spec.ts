import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsSettingsComponent } from './gps-settings.component';

describe('GpsSettingsComponent', () => {
  let component: GpsSettingsComponent;
  let fixture: ComponentFixture<GpsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpsSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
