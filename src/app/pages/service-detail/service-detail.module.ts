import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceDetailComponent } from './service-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ServiceDetailComponent }
    ])
  ]
})
export class ServiceDetailModule { } 