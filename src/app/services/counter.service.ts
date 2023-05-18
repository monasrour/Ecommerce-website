import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject(0)

  counterVal = this.counter.asObservable();

  setCounter(newCounterVal : number){
    this.counter.next(newCounterVal)
  }
  

  private broductcounter = new BehaviorSubject(1)

  counterValProd = this.broductcounter.asObservable();

  setCounterProd(newCounterVal : number){
    this.broductcounter.next(newCounterVal)
  }
  


}
