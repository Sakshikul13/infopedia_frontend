import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReviewCardComponent } from "./review-card/review-card.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ele_material } from '../../../../assets/elementary/elementary_material';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { StarRatingComponent } from "../../shared/star-rating/star-rating.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
    imports: [MatButtonModule, ReviewCardComponent, MatProgressBarModule, ProductCardComponent, StarRatingComponent]
})
export class ProductDetailsComponent {
  reviews=[1,1,1,1]
  relatedProducts: any;
  constructor(private router:Router){
    
  }
  ngOnInit(){
    this.relatedProducts= ele_material;
  }
  handleAddToCart(){
    this.router.navigate(['cart'])

  }

}
