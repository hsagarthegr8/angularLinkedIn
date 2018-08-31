import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private _urlGetSkills = 'http://localhost:4002/rest/api/users/get/dip95';
  private _urlAddSkills = 'http://localhost:4002/rest/api/users/addSkill/dip95/'
  private _urlremoveSkills = 'http://localhost:4002/rest/api/users/deleteSkill/dip95/';


  constructor(private http: HttpClient) { }

  public objString;

  getSkills(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetSkills);
  }

  addSkills(skillObj:string): Observable<any> {
    return this.http.put<any>(this._urlAddSkills + skillObj, {});
  }

  removeSkills(skill: string): Observable<any> {
    return this.http.put<any>(this._urlremoveSkills + skill, {})
  }

}
