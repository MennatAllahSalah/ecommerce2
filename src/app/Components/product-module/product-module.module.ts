import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetalisComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes =[
 
 {path:'Product/:pid', component:ProductDetalisComponent},
 {path:'Shopping', component:ProductsComponent},
{path:'Cart',component:CartComponent},
{path:'pd',component:ProductDetalisComponent}

]
@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetalisComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
    
  ]
})
export class ProductModuleModule { }
