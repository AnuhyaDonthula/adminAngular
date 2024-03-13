import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { filter, Observable, of } from 'rxjs';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers:[ProductService],
})


export class ProductListComponent //implements OnInit 
{ 
  servicearray : any
  constructor(private  ProductService: ProductService, private router: Router) { 
    this.ProductService.getallProducts().subscribe(admin => this.servicearray = admin)
    //console.log("Products List");
  }
  edit(productId:any){
    this.router.navigate(['/editproduct',productId]);
  }
  delete(){
    this.router.navigate(['/deleteproduct']);
  }
  add(){
    this.router.navigate(['/addproduct']);
  }
}
