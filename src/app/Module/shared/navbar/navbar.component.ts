import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NavItemsComponent } from "./nav-items/nav-items.component";
import { MatDividerModule } from '@angular/material/divider';




@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [MatIconModule, MatButtonModule, MatMenuModule, CommonModule, NavItemsComponent,MatDividerModule]
})
export class NavbarComponent {
user_role: any;
logOut() {
throw new Error('Method not implemented.');
}
  currentSection:any;
  isNavbarItemsOpen:any;
logged_in: any;
  openNavbarContent(section:any){
    this.isNavbarItemsOpen=true;
    this.currentSection=section;
  }
  closeNavbarContent(){
    this.isNavbarItemsOpen=false;
  }
  navigateTo(path:any){

  }
  //logic for closing the navbar on out of the dropdown click
  @HostListener('document:click',[`$event`])
  onDocumentClick(event:MouseEvent){
    const modalContainer= document.querySelector(".modal-container");
    const expandButtons= document.querySelectorAll(".open-button");

    let clickInsideButton=false;
    expandButtons.forEach((button:Element)=>{
      if(button.contains(event.target as Node)){
        clickInsideButton=true
      }
    })
    if(modalContainer && !clickInsideButton && this.isNavbarItemsOpen){
      this.closeNavbarContent();
    }
  }

}
