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

  trimFile(
    file: File,
    start: number,
    end: number,
    exerciseType: string
  ): Observable<HttpResponse> {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<HttpResponse>(
      `${environment.server}/trim`,
      formData,
      { params: { start, end, exerciseType } }
    );
  }

  uploadFiles(files: File[], body: object): Observable<HttpResponse> {
    let formData: FormData = new FormData();
    files.forEach((file) => formData.append('files', file));
    formData.append('body', JSON.stringify(body));

    return this.http.post<HttpResponse>(
      `${environment.server}/upload`,
      formData
    );
  }

  loadExercises(exerciseType: string): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`${environment.server}/exercises`, {
      params: { exerciseType },
    });
  }

  loadExercise(exerciseId: string): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(
      `${environment.server}/exercises/${exerciseId}`
    );
  }

  deleteExercise(exerciseId: string): Observable<HttpResponse> {
    return this.http.delete<HttpResponse>(
      `${environment.server}/exercises/${exerciseId}`
    );
  }

  deleteExerciseFile(
    exerciseId: string,
    fileId: string
  ): Observable<HttpResponse> {
    return this.http.delete<HttpResponse>(
      `${environment.server}/exercises/${exerciseId}/files/${fileId}`
    );
  }

  addExerciseFile(
    exerciseId: string,
    file: File,
    body: object
  ): Observable<HttpResponse> {
    let formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('body', JSON.stringify(body));

    return this.http.post<HttpResponse>(
      `${environment.server}/exercises/${exerciseId}/files`,
      formData
    );
  }

  getBenchmarkVideo(poseType: string, view: string): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(
      `${environment.server}/benchmark/${poseType}/${view}`
    );
  }
}
