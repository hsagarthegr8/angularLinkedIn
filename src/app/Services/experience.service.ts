import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private _urlGetExperience = 'http://localhost:4002/rest/api/users/get/dip95';
  private _urlAddExperience = 'http://localhost:4002/rest/api/users/addExperience/dip95'
  private _urlUpdateExperience = 'http://localhost:4002/rest/api/users/updateExperience/dip95/';
  private _urlremoveExperience = 'http://localhost:4002/rest/api/users/removeExperience/dip95/';
  constructor(private http: HttpClient) { }

  public objString;

  getExperience(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetExperience);
  }

  updateExperienceDatabase(designation: string, companyName: string, timePeriod: string, id: string): Observable<any> {
    this.objString = '{"designation":"'+ designation+ '","companyName":"'+ companyName +'","timePeriod":"'+ timePeriod+'"}';
    console.log(JSON.parse(this.objString));
    return this.http.put<any>(this._urlUpdateExperience+id, JSON.parse(this.objString));
  }

  addExperience(experienceObj):Observable<User[]>{
    return this.http.put<User[]>(this._urlAddExperience,experienceObj);
  }

  removeExperience(id:string): Observable<any>{
    return this.http.put<any>(this._urlremoveExperience+id, {})
  }


}
