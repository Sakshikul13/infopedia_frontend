import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProductCardComponent } from "../home-product-card/home-product-card.component";
@Component({
    selector: 'app-product-slider',
    standalone: true,
    templateUrl: './product-slider.component.html',
    styleUrl: './product-slider.component.scss',
    imports: [CommonModule, HomeProductCardComponent]
})
export class ProductSliderComponent {
  @Input() title: any
  @Input() products:any

}
