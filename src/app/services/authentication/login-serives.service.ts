import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';



import{LoginInterface} from 'src/app/interface/authentication/login-interface';
@Injectable({
  providedIn: 'root'
})
export class LoginSerivesService {

  constructor(private http: HttpClient) { }

  getLoginDetails(username,password){
    return this.http.post<LoginInterface>("/api/employee/login/",
    {
      "username" : username,
      "password" : password
    })
  }
}

