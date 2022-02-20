import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list'; 

import { ToolbarComponent, BottomSheet } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    BottomSheet
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ComponentsModule { }
