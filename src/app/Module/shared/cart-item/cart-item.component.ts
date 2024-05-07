import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

removeCartItem() {
throw new Error('Method not implemented.');
}
updateCartItem(arg0: number) {
throw new Error('Method not implemented.');
}

}
