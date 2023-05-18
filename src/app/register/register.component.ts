import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators , AbstractControl , ValidatorFn  } from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm : FormGroup;
  flag:boolean =false;
  constructor(private _AuthService:AuthService , private _router:Router){
    function matchPasswordValidator(passwordField: string): ValidatorFn {
      return (control: AbstractControl): { [key: string]: boolean } | null => {
        const password = control.root.get(passwordField);
        if (password && control.value !== password.value) {
          return { 'passwordMismatch': true };
        }
        if (!control.value) {
          return { 'required': true };
        }
        return null;
      };
    }
    this.registerForm = new FormGroup({
      'first_name':new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
      'last_name':new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
      'email' : new FormControl(null, [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      'password' : new FormControl(null, [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;\"',.<>?/\\])(?!.*\s).{8,}$/)]),
      confirmPassword : new FormControl(null, [Validators.required,matchPasswordValidator('password')])
    })
  }


    submitRegisterForm(registerForm:any){
      if(registerForm.valid == true){
        this._AuthService.register(registerForm.value).subscribe((data)=>{
          if (data.message == 'success') {
            this._router.navigate(['/login'])
          }
          else{
            this.flag = true
          }
  
        })
      } else{
        this.flag = true
      }
      
    }
  

    

}
