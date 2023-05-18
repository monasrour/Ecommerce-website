import { Component , Input} from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product!:Product
counter:number = 0 
requests:any
constructor(private router:Router , private counterservice : CounterService ,private requstservice:RequestsService){}

ngOnInit(){
  this.counterservice.counterVal.subscribe(res=>this.counter = res)
  this.requstservice._requests.subscribe((res)=>this.requests=res)
}
redirectToProduct(id:number){
    this.router.navigate(['product-detail' , id])
}

addToCart(id:number){
  this.requests.push(id)
  this.requstservice.getReq(this.requests)
  this.counterservice.setCounter(++this.counter)

}


}
