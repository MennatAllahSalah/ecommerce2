import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ICart } from 'src/app/Models/icart';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryService } from 'src/app/Services/category.service';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.scss']
})
export class DisplayProductsComponent implements OnInit {

  ProductList:IProduct[]=[];

  FilteredProducts:IProduct[]=[];
CardItem!:ICart ;
SelectedCatID!:number
CategoryList:ICategory[]=[];
cardItems:ICart[]=[];
ProductShosen!:IProduct;
TotlalPriceOfAllSelectedProduct:number=0;
  constructor(private productService:ProductService,private router:Router,private categoryService:CategoryService,private cartService:CartService) {
   
 
 
   }

  ngOnInit(): void {
    this.categoryService.GetAllCategories().subscribe(AllCategories=>{
      this.CategoryList=AllCategories
    })

    this.productService.GetAllProducts().subscribe(All=>{
      this.ProductList=All;
    })
 
  }
  ngOnChanges(changes: SimpleChanges): void {
   
    this.productService.GetAllProductsByCatID(this.SelectedCatID).subscribe(ProductList=>
      {
        if(this.SelectedCatID==0)
        this.productService.GetAllProducts().subscribe(All=>
          {
            this.FilteredProducts=All;
          });
          else
          {
            this.FilteredProducts=ProductList
          }
      })
  
    
   }

   addProductToCard(id:number,quantity:number)
  {
      this.productService.getProductByID(id).subscribe(selectedProduct=>
        {
          if(quantity<=selectedProduct!.quantity)
          {
     
           this.CardItem={
             ProductName:selectedProduct!.name,
             ProductID:selectedProduct!.id,
             SelectedQuantity:quantity,
             prouductPrice:selectedProduct!.price,
             TotalPrice:quantity*selectedProduct!.price,
             Image:selectedProduct!.image
     
           } 
           this.cartService.addtoCart(this.CardItem)
         }
          else{
            alert("the amount of this product in our store not enough");
          }
        })
    
     return this.cardItems
  }
   prodectDetails(ProductId:number)
  {
    this.router.navigate(['/ParentCard',ProductId])
  }

}
