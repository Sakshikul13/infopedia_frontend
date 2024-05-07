import { Routes } from '@angular/router';
import { HomeComponent } from './Module/feature/home/home.component';
import { ProductsComponent } from './Module/feature/products/products.component';
import { CartComponent } from './Module/feature/cart/cart.component';
import { ProductDetailsComponent } from './Module/feature/product-details/product-details.component';
import { PaymentComponent } from './Module/feature/payment/payment.component';
import { PaymentSuccessComponent } from './Module/feature/payment-success/payment-success.component';
import { OrdersComponent } from './Module/feature/orders/orders.component';
import { AdminRoutingModule } from './Module/admin/admin-routing.module';

export const routes: Routes = [
    {'path':'admin',loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>m.AdminRoutingModule)},
    {'path':'',component:HomeComponent},
    {'path':'cart/payment/:id',component:PaymentComponent},
    {'path':':lavelOne/:lavelTwo/:lavelThree',component:ProductsComponent},
    {'path':'product',component:ProductsComponent},
    {'path':'cart',component:CartComponent},
    {'path':'product-details/:id',component:ProductDetailsComponent},
    {'path':'cart',component:CartComponent},
    {'path':'paymentSuccess',component:PaymentSuccessComponent},
    {'path':'account/orders',component:OrdersComponent},
    {'path':'cart',component:CartComponent},
    
    //all basic routings set
];
