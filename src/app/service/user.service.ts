import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environmen';
import { HttpResponse } from '../interface/response';
import { MatSnackBar } from '@angular/material/snack-bar';

interface User {
  name: string;
  user_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: string | null;
  user?: User | null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.token = this.getToken();
    this.setUser();
  }

  setUser(): void {
    if (!this.token) {
      return;
    }

    try {
      this.user = JSON.parse(atob(this.token.split('.')[1])) as User;
    } catch (e) {
      this.user = null;
    }
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }

  login(name: string, password: string): void {
    this.http
      .post<HttpResponse>(`${environment.server}/login`, { name, password })
      .subscribe({
        next: (response) => {
          this.token = response.data;
          localStorage.setItem('token', this.token!);
          this.setUser();
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this._snackBar.open(err.error.message);
        },
      });
  }

  register(name: string, password: string): void {
    this.http
      .post<HttpResponse>(`${environment.server}/register`, { name, password })
      .subscribe((response) => {
        this.token = response.data;
        localStorage.setItem('token', this.token!);
        this.setUser();
        this.router.navigateByUrl('/');
      });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
    this.token = null;
    this.user = null;
  }

  getName(): string {
    return this.user?.name!;
  }
}
