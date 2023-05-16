import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators , AbstractControl , ValidatorFn  } from "@angular/forms";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm : FormGroup;

  constructor(){
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
      name : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required , Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      username : new FormControl (null , [Validators.required, Validators.pattern(/^\S+$/)]),
      password : new FormControl(null, [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;\"',.<>?/\\])(?!.*\s).{8,}$/)]),
      confirmPassword : new FormControl(null, [Validators.required,matchPasswordValidator('password')])
    })
  }


    submitRegisterForm(){
      console.log(this.registerForm);
      
    }
  
  }