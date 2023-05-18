import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private requests = new BehaviorSubject([])
  _requests = this.requests.asObservable()
  getReq(val:any){
    this.requests.next(val)
  }

}
