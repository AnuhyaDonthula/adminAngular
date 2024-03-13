import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../product.service';

interface Product
{
  productId:number,
  productName : string,
  description:string,
  price: number,
  stockQuantity:number,
  productPhoto : string,
}
@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [CommonModule,RouterModule,ProductListComponent,HttpClientModule,AdminhomeComponent,
     HttpClientModule,FormsModule
  ],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css',
  providers: [ProductService]
})
export class EditproductComponent {
  productName : any
  productId:any
  description:any
  price: any
  stockQuantity:any
  productPhoto : any

  product: Product = {} as Product; 
 
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.fetchProductDetails(this.productId);
      }
    });
  }
 
  fetchProductDetails(productId: any): void {
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.product = product; 
      },
      (      error: any) => {
        console.error('Error fetching product details:', error);
      }
    );
  }
 
  updateProduct(): void {
    this.productService.updateProduct({
      productId: this.productId,
      productName: this.productName,
      description:this.description,
      stockQuatity: this.stockQuantity,
      price: this.price,
      productPhoto:this.productPhoto
    }).subscribe(
      (      response: any) => {
        console.log('Product updated successfully', response);
        alert('Product updated successfully');
        this.router.navigate(['/productlist']);
      },
      (      error: any) => {
        console.error('Error updating product:', error);
      }
    );
  }
}

























