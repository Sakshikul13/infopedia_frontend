import { Component } from '@angular/core';
import { StarRatingComponent } from "../../../shared/star-rating/star-rating.component";

@Component({
    selector: 'app-review-card',
    standalone: true,
    templateUrl: './review-card.component.html',
    styleUrl: './review-card.component.scss',
    imports: [StarRatingComponent]
})
export class ReviewCardComponent {
  

}
