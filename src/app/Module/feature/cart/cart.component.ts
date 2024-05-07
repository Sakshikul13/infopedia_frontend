import { Component } from '@angular/core';
import { CartItemComponent } from "../../shared/cart-item/cart-item.component";
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    imports: [CartItemComponent,MatDividerModule,MatButtonModule]
})
export class CartComponent {
  constructor(private router:Router){}
  cart=[1,1,1];
}
