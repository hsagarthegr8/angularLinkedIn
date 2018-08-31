import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private _urlGetEducation = 'http://localhost:4002/rest/api/users/get/dip95';
  private _urlAddEducation = 'http://localhost:4002/rest/api/users/addEducation/dip95'
  private _urlUpdateEducation = 'http://localhost:4002/rest/api/users/updateEducation/dip95/';
  private _urlremoveEducation = 'http://localhost:4002/rest/api/users/removeEducation/dip95/'

  constructor(private http: HttpClient) { }

  public objString;

  getEducation(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetEducation);
  }

  updateEducation(degreeName: string, universityName: string, percentage: string, yearOfPassing:number, id: string): Observable<any> {
    this.objString = '{"degreeName":"' + degreeName + '","university":"' + universityName + '","percentage":"' + percentage + '","yearOfPassing":"' + yearOfPassing + '"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateEducation + id, JSON.parse(this.objString));
  }

  addEducation(educationObj): Observable<any> {
    return this.http.put<any>(this._urlAddEducation, educationObj);
  }

  removeEducation(id: string): Observable<any> {
    return this.http.put<any>(this._urlremoveEducation + id, {})
  }

}
