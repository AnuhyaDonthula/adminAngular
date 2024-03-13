import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule,RouterModule,AdminhomeComponent,HttpClientModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {
  //users: User[] = [];
  //http: any;
  Userlist: any[] = [];
  userService: any;
  users: any;
  
  constructor(private http:HttpClient){

  }
  //constructor(private userService: UserService) {
   // this.loadUsers();
  
  ngOnInit()
  {
    this.http.get("http://localhost:5204/api/customer",
    {headers : {Authorization : "Bearer " + localStorage.getItem('token')}})
    .subscribe((response : any) => {
      this.Userlist = response;
    });
  }

  // loadUsers(): void {
  //   this.userService.getUsers().subscribe((users: any) => {
  //     this.users = users;
  //   });
  // }

  removeUser(userId: number): void {
    this.userService.removeUser(userId).subscribe(() => {
      // Remove the user from the Userlist array
      this.Userlist = this.Userlist.filter(user => user.id !== userId);
    });
  }
  // loadUsers() {
  //   throw new Error('Method not implemented.');
  // }
}
//}
