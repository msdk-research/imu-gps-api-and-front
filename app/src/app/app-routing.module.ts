import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GpsDataComponent } from './pages/gps-data/gps-data.component';
import { ImuDataComponent } from './pages/imu-data/imu-data.component';
import { GpsSettingsComponent } from './pages/gps-settings/gps-settings.component';
import { ImuSettingsComponent } from './pages/imu-settings/imu-settings.component';
import { WebSettingsComponent } from './pages/web-settings/web-settings.component';
import { WirelessSettingsComponent } from './pages/wireless-settings/wireless-settings.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'gps-data', component: GpsDataComponent },
  { path: 'imu-data', component: ImuDataComponent },
  { path: 'gps-settings', component: GpsSettingsComponent },
  { path: 'imu-settings', component: ImuSettingsComponent },
  { path: 'web-settings', component: WebSettingsComponent },
  { path: 'wireless-settings', component: WirelessSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
