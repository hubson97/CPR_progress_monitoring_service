import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatListModule } from '@angular/material/list';
//import { MatIconModule } from '@angular/material/icon';
//import { MatButtonModule } from '@angular/material/button';
//import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from '../../material/material.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './containers/settings-page/settings-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SettingsPageComponent
  ],
  imports: [
    //FormsModule,
    //MatFormFieldModule,
    //MatListModule,
    //MatIconModule,
    //MatButtonModule,
    //MatSelectModule,
    //ReactiveFormsModule,

    MaterialModule,
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
