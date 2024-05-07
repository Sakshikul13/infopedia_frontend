import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { filters, singleFilter } from './filterData';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { worksheets } from '../../../../data/worksheets';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [MatMenuModule, MatButtonModule, MatDividerModule, CommonModule, FormsModule, MatCheckboxModule, ProductCardComponent]
})
export class ProductsComponent {
  filterData:any;
  singleFilterData:any
  wksheets:any

  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(){
    this.filterData=filters;
    this.singleFilterData=singleFilter;
    this.wksheets=worksheets;
  }
  //method for filters 
  handleMultipleSelectFilter(value:string,sectionId:string){
    const queryParams={...this.activatedRoute.snapshot.queryParams};
    console.log("queryParams",queryParams)

    const filterValues=queryParams[sectionId]?queryParams[sectionId].split(","):[];
    const valueIndex=filterValues.indexOf(value);
    if(valueIndex!=-1){
      filterValues.splice(valueIndex,1)
    }
    else{
      filterValues.push(value);
    }
    if(filterValues.length>0){
      queryParams[sectionId]=filterValues.join(",")
    }
    else{
      delete queryParams[sectionId];
    }
    this.router.navigate([],{queryParams})
  }
  handleSingleSelectFilter(value:string,sectionId:string){
    const queryParams={...this.activatedRoute.snapshot.queryParams};
    queryParams[sectionId]=value;
    this.router.navigate([],{queryParams})

  }
  


}
