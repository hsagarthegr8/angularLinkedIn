import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class EndorsementService {
  private _urlGetEndorsement = 'http://localhost:4002/rest/api/users/get/dip95';
  // private _urlAddEndorsement = 'http://localhost:4002/rest/api/users/addEndorsement/dip95'

  constructor(private http: HttpClient) { }
  public objString;
  getEndorsement(): Observable<User[]> {
    return this.http.get<User[]>(this._urlGetEndorsement);
  }
}

