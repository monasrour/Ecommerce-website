import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage:any;
  flag:boolean =false;
  constructor(private _AuthService:AuthService , private _Router:Router ){}


  loginUser(loginForm:any){
  {
    if(loginForm.valid == true){
      this._AuthService.login(loginForm.value).subscribe((data)=>{
        if (data.message == 'success') {
          this._AuthService.saveCurrentUser(data.token)
          this._Router.navigate(['/home'])
        }
        else{
          this.flag = true;
          this.errorMessage = data.message;
        }

      })
    }else{
      this.flag = true;
    }
    
  }


  }
}
