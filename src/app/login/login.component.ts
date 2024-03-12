import { Component } from '@angular/core';
import { LoginService} from "../services/login.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form : FormGroup;
  constructor(private readonly loginService : LoginService){
    this.form=new FormGroup({
      identifiant: new FormControl('', Validators.required),
      motDePasse : new FormControl('',Validators.required)
    })
  }

  connection(){
    if(this.form.valid){
      this.loginService.login(this.form.value).subscribe({
        next:value=>{
          localStorage.setItem('token',value.token);
          localStorage.setItem('role', value.role);
          localStorage.setItem('username',value.username);
          this.form.reset();
        },
        error:err=>{
          if(err.status == 403){
            alert("pas bon ID/Password NONONONONONONO UwU")
          }
          else{
            console.log(err)
          }
        }
      })
    }
  }

  disconnect(){
    this.loginService.logout()
  }
}
