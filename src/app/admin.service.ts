import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { apiUrl } from './constrants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  private isLoggedIn = false;
 
  constructor(private http: HttpClient, private router: Router) { }
 
  login(formData: any) {
    // Perform authentication logic (e.g., API call)
    this.http.post(apiUrl + "/api/admin/login", formData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          alert("Invalid credentials");
          return throwError(error); // Rethrow the error
        })
      )
      .subscribe((o: any) => {
        console.log(o);
        console.log("Logged in successfully");
        localStorage.setItem("token", o.token);
        this.isLoggedIn = true;
        this.router.navigate(['/adminhome']);
      });
  }
 
  logout() {
    // Perform logout logic (e.g., clear token, invalidate session)
    this.isLoggedIn = false;
  }
 
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  // private apiUrl = 'http://localhost:5223/api';
  // getUserProfile(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/customer/signup`);
  // }
}
 

