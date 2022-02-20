import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessSettingsComponent } from './wireless-settings.component';

describe('WirelessSettingsComponent', () => {
  let component: WirelessSettingsComponent;
  let fixture: ComponentFixture<WirelessSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirelessSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
