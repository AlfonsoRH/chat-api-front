import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: any): Observable<any>  {
    return this.httpClient.post("http://localhost:3000/api/users/login",credentials)

  }
}
