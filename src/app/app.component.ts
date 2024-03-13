import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

import { EditproductComponent } from './editproduct/editproduct.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserlistComponent } from './userlist/userlist.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomepageComponent,CommonModule,AdminLoginComponent,AdminhomeComponent,
    ProductListComponent,ProductFormComponent,ProductDetailsComponent,AddProductComponent,
    ManageproductsComponent,UserlistComponent, HttpClientModule, FormsModule, EditproductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'retailsystem';
}
