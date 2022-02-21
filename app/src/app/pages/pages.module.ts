import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';

import { GpsDataComponent } from './gps-data/gps-data.component';
import { ImuDataComponent } from './imu-data/imu-data.component';
import { GpsSettingsComponent } from './gps-settings/gps-settings.component';
import { ImuSettingsComponent } from './imu-settings/imu-settings.component';
import { WebSettingsComponent } from './web-settings/web-settings.component';
import { WirelessSettingsComponent } from './wireless-settings/wireless-settings.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    GpsDataComponent,
    ImuDataComponent,
    GpsSettingsComponent,
    ImuSettingsComponent,
    WebSettingsComponent,
    WirelessSettingsComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LeafletModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    GpsDataComponent,
    ImuDataComponent,
    GpsSettingsComponent,
    ImuSettingsComponent,
    WebSettingsComponent,
    WirelessSettingsComponent,
    MainComponent,
  ]
})
export class PagesModule { }
