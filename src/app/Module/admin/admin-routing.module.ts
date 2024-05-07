import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {'path':'',component:AdminComponent,children:[
    {'path':'',component:DashboardComponent},
    {'path':'products',component:AdminProductsComponent},    //will appear as /admin/products at it's child routing
    {'path':'orders',component:ViewOrdersComponent},
    {'path':'customers',component:CustomersComponent},
    {'path':'addProduct',component:AddProductComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
