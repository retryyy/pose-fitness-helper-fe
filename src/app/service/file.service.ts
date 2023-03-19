import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environmen';
import { HttpResponse } from '../interface/response';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  trimFile(file: File, start: number, end: number): Observable<HttpResponse> {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<HttpResponse>(
      `${environment.server}/trim`,
      formData,
      { params: { start, end } }
    );
  }

  uploadFile(file: File): Observable<HttpResponse> {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<HttpResponse>(
      `${environment.server}/upload`,
      formData
    );
  }

  loadFiles(): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`${environment.server}/load`);
  }

  loadFile(fileId: string): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`${environment.server}/load/${fileId}`);
  }
}
