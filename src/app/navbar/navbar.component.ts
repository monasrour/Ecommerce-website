import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  counter:number = 0;
  isLogin:boolean = false ;
  constructor(private counterservice : CounterService , private _AuthService:AuthService){
    _AuthService.currentUsers.subscribe((data)=>{
      if (data !=null) {
        this.isLogin = true; 
      } else {
        this.isLogin = false;
      }
    })
    
  }
  logOut(){
    this._AuthService.logOut();
  }
  
  ngOnInit(){
    this.counterservice.counterVal.subscribe(res=>this.counter = res)
  }
  // counter:number = 0;
}
