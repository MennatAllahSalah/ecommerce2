import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductsComponent } from './Components/display-products/display-products.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

const routes: Routes =[{path: '', component:MainLayoutComponent, children: [
  {path:'', redirectTo:'/Home', pathMatch:'full'},
 {path:'Home', component:HomeComponent},
{path:"DisplyProduct",component:DisplayProductsComponent},
{path:"Products" ,loadChildren: () =>import('src/app/Components/product-module/product-module.module').then(m=>m.ProductModuleModule)
}
]},


{path:'**', component:NotFoundPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
