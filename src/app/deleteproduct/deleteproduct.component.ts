import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-deleteproduct',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,FormsModule],
  templateUrl: './deleteproduct.component.html',
  styleUrl: './deleteproduct.component.css',
  providers:[ProductService]
})
export class DeleteproductComponent {
      productId:any

      constructor(private productService:ProductService,private router:Router){}

      onDelete(){
        this.productService.Deleteproduct(this.productId).subscribe((response) =>{
          console.log('Delete successfully',response);
          alert('Delete successfully');
          this.router.navigate(['/productlist']);
        },
      (error: any) => {
        console.error('Deletion failed', error);
        alert('Deletion failed');
      }
      
        )
}
}
