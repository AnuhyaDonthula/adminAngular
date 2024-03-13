import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminService } from '../admin.service';
//import {AuthService} from './auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,ReactiveFormsModule,HttpClientModule,],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  form: FormGroup;
 
  constructor(private adminService: AdminService, private router: Router) {
    this.form = new FormGroup({
      'Email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'Password': new FormControl('', [
        Validators.required
      ])
    });
  }
 
 
  onSubmit() {
    
    if (this.form.valid) {
      console.log(this.form.value);
      this.adminService.login(this.form.value);
 
     
     
    } else {
      
      alert("Form is invalid. Please fill in all required fields.");
    }
 
  }
 
 
}
  
    

   
    
  



