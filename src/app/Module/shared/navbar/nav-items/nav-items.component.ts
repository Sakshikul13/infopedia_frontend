import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navigation } from './nav-item';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss'
})
export class NavItemsComponent {
  category:any;
  @Input() selectedSection:any;

  ngOnInit(){
    this.category=navigation;
    console.log("selected section",this.selectedSection)
  }

}
