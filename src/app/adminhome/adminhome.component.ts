import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router,RouterLink,RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [CommonModule,RouterModule,ProductListComponent,RouterLink],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {
 
    constructor(private router : Router) { }
    
      ManageProduct(){
        console.log("Navigate to product list");
        this.router.navigate(['/productlist']);        
      }
      ManageUsers(){
        this.router.navigate(['/userlist']);
      }

      logout(){
        this.router.navigate(['homepage']);
       
        

      
      }  
}