import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserlistComponent } from './userlist/userlist.component';


export const routes: Routes = [
    {path:'', component:HomepageComponent},

    {path:'homepage',component: HomepageComponent},


    {path:'adminlogin',component:AdminLoginComponent},

    {path:'adminhome',component:AdminhomeComponent},

    {path:'productlist',component:ProductListComponent},
    {path:'productform',component:ProductFormComponent},
    {path:'productdetails',component:ProductDetailsComponent},
    {path:'addproduct',component:AddProductComponent},
    {path:'manageproducts',component:ManageproductsComponent},
    {path:'userlist',component:UserlistComponent},
    {path:'editproduct/:Id',component:EditproductComponent},
    {path:'deleteproduct',component:DeleteproductComponent}
];

// @NgModule({
//     // imports: [RouterModule.forRoot(routes)],
//     // exports: [RouterModule]
//    })
//   export class AppRoutingModule { }

  