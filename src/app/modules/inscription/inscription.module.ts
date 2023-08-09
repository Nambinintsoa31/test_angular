import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionFormComponent } from './components/inscription-form/inscription-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InscriptionFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InscriptionRoutingModule,
  ],
})
export class InscriptionModule {}
