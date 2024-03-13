import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductListComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  //@Input() product:Product | undefined;
  // @Output() saveProduct = new EventEmitter<Product>();
  // @Output() cancelEdit = new EventEmitter<void>();

  // onSave(form: NgForm): void {
  //   if (form.valid) {
  //     this.saveProduct.emit(form.value);
  //     form.resetForm();
  //   }
 // }

  //onCancel(): void {
    //this.cancelEdit.emit();
  }


