import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
//import { Router } from 'express';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router:Router){ }
adminlogin(){
  this.router.navigate(['/adminlogin']);
}

}
