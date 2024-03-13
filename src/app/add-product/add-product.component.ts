import { CommonModule, NgIf } from '@angular/common';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,RouterModule,ProductListComponent
    ,AdminhomeComponent, RouterOutlet, ReactiveFormsModule,
    HttpClientModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
  providers:[ProductService],
})
export class AddProductComponent{
    // productName : any
    // subCategoryId:any
    // productId:any
    // description:any
    // price: any
    // stockQuantity:any
    Photo? : any
    form: FormGroup;

    //ProductPhoto
   


    constructor(private http:HttpClient)
  {
    this.form = new FormGroup({
      'productId':new FormControl(''),
         'subCategoryId':new FormControl(''),
           'productName': new FormControl(''),
           'price':new FormControl(''),
    
           'description':new FormControl(''),
          'stockQuantity':new FormControl(''),
     
      
    });
  }

  // updateFile(event:any){
  //   console.log(event);
  //     if(event.target.files.length > 0)
  //     {
  //        this.productPhoto = event.target.files[0];
  //        console.log("File Updatd");
  //     }
  //     else
  //       console.log("No file was selected");
  // }
  updateFile(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.Photo = event.target.files[0];
    }
  }

  onSubmit(){
    console.log(this.form.value);
    var formData = new FormData();
    formData.append("data",JSON.stringify(this.form.value));
    formData.append("photo",this.Photo);

     this.http.post("http://localhost:5204/api/products/add"
     ,formData)
     .subscribe(o => console.log(o));
  }
}

  // constructor(private productService: ProductService, private router: Router,private http:HttpClient) {}


  // updatseFile(event:any){
  //   console.log(event);
  //     if(event.target.files.length > 0)
  //     {
  //        this.productPhoto = event.target.files[0];
  //        console.log("File Updatd");
  //     }
  //     else
  //       console.log("No file was selected");
  // }


  // onSubmit()  {
  
  //   const productdetails = {
     
  //     productId: this.productId,
  //     subCategoryId:this.subCategoryId,
  //     productName: this.productName,
  //     price: this.price,

  //     description:this.description,
  //     stockQuantity:this.stockQuantity,
  //     productPhoto:this.productPhoto
  //   }

  
  //   this.productService.addProduct(productdetails).subscribe((response) => {
  //       console.log('Product added successfully');
  //       alert('Product added');
  //       this.router.navigate(['/productlist'])})
  //   }
  //     // (error: any) => {
  //     //   console.error('Error adding product:', error);
  //     }
    

   
  























