import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get(url);
  }

  signup(body:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/api/users/signup",body)
  }
}


