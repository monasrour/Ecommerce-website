import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCounterService {

  private broductcounter = new BehaviorSubject(0)

  counterValProd = this.broductcounter.asObservable();

  setCounter(newCounterVal : number){
    this.broductcounter.next(newCounterVal)
  }
  
}
