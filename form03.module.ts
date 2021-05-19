import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form03PageRoutingModule } from './form03-routing.module';

import { Form03Page } from './form03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Form03PageRoutingModule
  ],
  declarations: [Form03Page]
})
export class Form03PageModule {}
