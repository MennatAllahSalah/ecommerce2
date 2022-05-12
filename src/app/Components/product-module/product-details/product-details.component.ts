import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/Models/iproduct';
import { Location } from '@angular/common';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetalisComponent implements OnInit {
  private ProductID:number=0;
  product:IProduct |undefined=undefined;
  ProductIDsList:number[]=[];
  AllProducts:IProduct[]=[];
    constructor(private activateRoute:ActivatedRoute, private productService:ProductService,
      private location: Location,private router:Router ) { 
     this.productService.getPrdIDsList().subscribe(IDs=>
      this.ProductIDsList!=IDs)
  
  
      }
  
     
    ngOnInit(): void {
      this.activateRoute.paramMap.subscribe(paramMap=>{
        this.ProductID=Number(paramMap.get("pid"));
        this.productService.getProductByID(this.ProductID).subscribe(prod=>this.product=prod)
      });
    }
  
  
    PreviousProduct()
    {
      let CurrentIndex=this.ProductIDsList.findIndex((item)=>item==this.ProductID)
      if(CurrentIndex!=0)
      { this.ProductID=this.ProductIDsList[CurrentIndex-1];
        this.router.navigate(['/ParentCard',this.ProductID])
      }
  
    }
  
  
    nextProduct()
    {
      let CurrentIndex=this.ProductIDsList.findIndex((item)=>item==this.ProductID)
      if(CurrentIndex <=this.ProductIDsList.length-1)
      { this.ProductID=this.ProductIDsList[CurrentIndex+1];
        this.router.navigate(['/ParentCard',this.ProductID])
      }
  
  
    }
    Back()
    {
      this.location.back();
    }
  
    IsFirstProduct():boolean
    {
      return this.ProductID==this.ProductIDsList[0]
    }
  
    IsLastProduct():boolean
    {
      return this.ProductID==this.ProductIDsList[this.ProductIDsList.length-1]
    }
  
    
  }