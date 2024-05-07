import { Component } from '@angular/core';
import { ProductSliderComponent } from "./product-slider/product-slider.component";
import { HomeViewComponent } from "./home-view/home-view.component";
import { ele_material } from '../../../../assets/elementary/elementary_material';
import { middleMaterial } from '../../../../assets/middle-level/middle-level-material';
import { higherLevel } from '../../../../assets/higher-level/higher-level_material';
import { misc_material } from '../../../../assets/miscellaneous/miscellaneous_material';
import { AltHomeComponent } from "./alt-home/alt-home.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProductSliderComponent, HomeViewComponent, AltHomeComponent]
})
export class HomeComponent {
    elementaryMaterial:any
    middleLevelMaterial: any
    higherLevelMaterial:any
    misc:any
    ngOnInit(){
        this.elementaryMaterial=ele_material.slice(0,5);
        this.middleLevelMaterial=ele_material.slice(0,5);
        this.higherLevelMaterial=higherLevel.slice(0,5);
        this.misc=misc_material.slice(0,5);

    }

}
