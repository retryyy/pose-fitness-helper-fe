import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environmen';
import { HttpResponse } from '../interface/response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token?: string;
  user?: string;

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('token') ?? undefined;
    this.setUser();
  }

  setUser(): void {
    if (!this.token) {
      return;
    }

    try {
      this.user = JSON.parse(atob(this.token.split('.')[1]));
    } catch (e) {
      this.user = undefined;
    }
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  getInitials(): string {
    return 'AE';
  }

  login(name: string, password: string): void {
    this.http
      .post<HttpResponse>(`${environment.server}/login`, { name, password })
      .subscribe((response) => {
        this.token = response.data;
        localStorage.setItem('token', this.token!);
        this.setUser();
        this.router.navigateByUrl('/');
      });
  }
}
