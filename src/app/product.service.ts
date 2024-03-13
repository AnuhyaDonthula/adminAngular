import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { response } from 'express';
import { catchError, map, Observable, of } from 'rxjs';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  apiUrl = 'http://localhost:5204/api/products'
  private addProducturl= 'http://localhost:5204/api/products';
  private editProducturl = 'http://localhost:5204/api/products';
  private Deleteproducturl='http://localhost:5204/api/products/delete/';
  updateProduct: any;
  getProductById: any;

  constructor(private http:HttpClient){ }

  getallProducts() :Observable<IProduct[]> {
      console.log('getallProducts', localStorage.getItem('token'));
      return this.http.get<IProduct[]>(this.apiUrl + '/allProducts');
    }

  addProduct(productdetails : any) : Observable<any>{
    return this.http.post<any>(this.addProducturl,productdetails);
  }

  EditProduct(productId:any,editproductdetails:any):Observable<any>{
    return this.http.put<any>(`${this.editProducturl}${productId}`,editproductdetails);
  }

  Deleteproduct(productId:any):Observable<any>{
    return this.http.delete<any>(`${this.Deleteproducturl}${productId}`,productId);
  }
  }























  // apiUrl = 'http://localhost:5204/api/products';
  // http = inject(HttpClient);
  // products: any;
  // constructor() {}

  // getallProducts() :Observable<IProduct[]> {
  //   console.log('getallProducts', localStorage.getItem('token'));
  //   return this.http.get<IProduct[]>(this.apiUrl + '/allProducts');
  // }
  // // addProduct(product: IProduct) {
  // //   return this.http.post(this.apiUrl + '/add', product);
  // // }
  // addProduct(product: IProduct): Observable<any> {
  //   this.products.push(product);
  //   return of('Product added successfully');
  // }
  // // getEmployee(employeeId: number) {
  // //   return this.http.get<IProduct>(
  // //     this.apiUrl + '/api/Employee/' + employeeId
  // //   );
  // // }
  // editProduct(ProductId: number, product: IProduct) {
  //   return this.http.put<IProduct>(
  //     this.apiUrl + '/update/' + ProductId,
  //     product
  //   );
  // }
  // deleteProduct(ProductId: number) {
  //   return this.http.delete(this.apiUrl + '/delete/' + ProductId);
  // }









// private readonly STORAGE_KEY = 'products';

//   constructor() { }

//   getProducts(): Observable<Product[]> {
//     const products = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
//     return of(products);
//   }

//   addProduct(product: Product): Observable<any> {
//     let products: Product[] = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
//     products.push(product);
//     localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
//     return of('Product added successfully');
//   }

//   updateProduct(product: Product): Observable<any> {
//     let products: Product[] = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
//     const index = products.findIndex(p => p.Id === product.Id);
//     if (index !== -1) {
//       products[index] = product;
//       localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
//       return of('Product updated successfully');
//     }
//     return of('Product not found');
//   }

//   deleteProduct(Id: number): Observable<any> {
//     let products: Product[] = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
//     const index = products.findIndex(p => p.Id === Id);
//     if (index !== -1) {
//       products.splice(index, 1);
//       localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
//       return of('Product deleted successfully');
//     }
//     return of('Product not found');
//   }

// }
















//    private apiUrl='http://localhost:5204/api/products/allProducts'; // Update with your actual API URL
  
  
//   constructor(private http: HttpClient) { }

//   getProducts(): Observable<Product[]> {
//     return this.http.get<Product[]>(this.apiUrl).pipe(
//       catchError((error: any) => {
//         console.error('Error fetching products:', error);
//         throw error; // Rethrow the error to be caught by the caller
//       })
//     );
//   }

//   addProduct(product: Product): Observable<any> {
//     return this.http.post<any>(this.apiUrl, product).pipe(
//       catchError((error: any) => {
//         console.error('Error adding product:', error);
//         throw error; // Rethrow the error to be caught by the caller
//       })
//     );
//   }

//   updateProduct(product: Product): Observable<any> {
//     const url = `${this.apiUrl}/${product.Id}`;
//     return this.http.put<any>(url, product).pipe(
//       catchError((error: any) => {
//         console.error('Error updating product:', error);
//         throw error; // Rethrow the error to be caught by the caller
//       })
//     );
//   }

//   deleteProduct(id: number): Observable<any> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete<any>(url).pipe(
//       catchError((error: any) => {
//         console.error('Error deleting product:', error);
//         throw error; // Rethrow the error to be caught by the caller
//       })
//     );
//   }
// }



























