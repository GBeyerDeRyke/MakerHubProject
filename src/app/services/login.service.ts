import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthDTO, LoginForm} from "../login/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly httpClient : HttpClient){}

  login(form :LoginForm){
    return this.httpClient.post<AuthDTO>("http://localhost:8080/api/joueur/login", form)
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
  }

}
