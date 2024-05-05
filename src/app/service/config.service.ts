import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponse } from '../interface/response';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environment/environmen';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  exercises$ = new ReplaySubject<any>();
  exerciseTypes$ = new ReplaySubject<string[]>();

  constructor(private http: HttpClient) {
    this.loadExercises().subscribe((res) => {
      this.exercises$.next(res.data);
      this.exerciseTypes$.next(Object.keys(res.data));
    });
  }

  private loadExercises(): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(
      `${environment.server}/config/posetypes`
    );
  }
}
