import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    ProductsComponent,
    SharedModule,
    MatButtonModule
  ],
  exports:[
    HomeComponent,
    ProductsComponent,
  ]
})
export class FeatureModule { }
