import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any
  constructor(private router:Router){}
  navigate(){
    this.router.navigate([`/product-details/${this.product.id}`])

  }
  loggedInAsSeller: boolean = false; // have a variable to track whether the user is logged in as a seller
  isOwner: boolean = false; //have a variable to track whether the user is the owner of the document

  // Function to check if the user is logged in as a seller
  checkLoggedInAsSeller(): void {
    // Your logic to check if the user is logged in as a seller
    // Set loggedInAsSeller variable accordingly
  }

  // Function to check if the user is the owner of the document
  checkIsOwner(): void {
    // Your logic to check if the user is the owner of the document
    // Set isOwner variable accordingly
  }
  addToFavorites(): void {
    // Implement logic to add the product to favorites
    // For example, you can call a service method to add the product to favorites
    // Replace 'product' with the actual product object
    //this.favoriteService.addToFavorites(this.product);
  } 
}
