import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar-responsive',
  standalone: true,
  imports: [MatIconModule,MatMenuModule,CommonModule],
  templateUrl: './navbar-responsive.component.html',
  styleUrl: './navbar-responsive.component.scss'
})
export class NavbarResponsiveComponent {
navigateTo(arg0: string) {
throw new Error('Method not implemented.');
}
menuValue:boolean=false;
menu_icon:string='bi bi-list';

openMenu(){
  this.menuValue=!this.menuValue;
  this.menu_icon= this.menuValue ? 'bi bi-x': 'bi bi-list';
}
closeMenu(){
  this.menuValue=false;
  this.menu_icon='bi bi-list';
}
}
