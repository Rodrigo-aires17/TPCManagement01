import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form04PageRoutingModule } from './form04-routing.module';

import { Form04Page } from './form04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form04PageRoutingModule
  ],
  declarations: [Form04Page]
})
export class Form04PageModule {}
