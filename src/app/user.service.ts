import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // // You can define a local array to store mock user data
  // private apiUrl = 'http://localhost:5204/api/customer'; // Update YOUR_API_URL with your actual API URL

  // constructor(private http: HttpClient) { }

  // // Return the user data from the API as an Observable
  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiUrl);
  // }

  // // Remove a user by ID using the API
  // removeUser(userId: number): Observable<void> {
  //   // Construct the URL for deleting a user by ID
  //   const url = `${this.apiUrl}/${userId}`;
  //   // Send a DELETE request to the API URL
  //   return this.http.delete<void>(url);
  // }
}