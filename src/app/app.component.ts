import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
import { SharedModule } from './Module/shared/shared.module';
import { FeatureModule } from './Module/feature/feature.module';
import { NgStyle } from '@angular/common';
import { NavbarResponsiveComponent } from "./Module/shared/navbar-responsive/navbar-responsive.component";
import { AdminModule } from './Module/admin/admin.module';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SharedModule, MatButtonModule, FeatureModule, NgStyle, NavbarResponsiveComponent,AdminModule]
})
export class AppComponent {
  title = 'ecommerce_website';
footerMaxHeight: any;
}
