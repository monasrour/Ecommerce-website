import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { ProductsService } from '../services/products.service';
import { CounterService } from '../services/counter.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
counter:number = 0 
counterValProd:number = 1
productsIDs:any=[]
products:any=[]
constructor(private http:HttpClient , private router:Router , private counterservice : CounterService , private requestsservice:RequestsService , private productService:ProductsService) {}


ngOnInit() {
  this.counterservice.counterVal.subscribe(res=>this.counter = res)
  this.counterservice.counterValProd.subscribe(res=>this.counterValProd = res)
  this.requestsservice._requests.subscribe(res=>this.productsIDs=res)


      
  // this.productsIDs.forEach((elem:number) =>  {
  //   this.productService.getProductDetails(elem).subscribe((res:any)=> this.products.push(res))

  // })

  this.productsIDs.forEach((elem:number) => {
    this.productService.getProductDetails(elem).subscribe((res:any) => {
      // Add a new property to the product object
      res.count = 1;
      // Push the modified product object to the products array
      this.products.push(res);
    });
  });

  if (this.counter == 0) {
    this.router.navigate(['home'])
  }


}



removeProduct(id:any){
  this.products = this.products.filter(
    (elem:any) => elem.id !== id);
  this.productsIDs = this.productsIDs.filter(
    (elem:any) => elem !== id);
    this.requestsservice.getReq(this.productsIDs)
    console.log(this.productsIDs);
    this.counterservice.setCounter(--this.counter)
}


increese(id:any){
  this.products.map((elem:any)=>
  {
    if(elem.id == id){
      if (elem.count<elem.stock) {
        elem.count++;
      }
    }
  })
}  

decreese(id:any){
  this.products.map((elem:any)=>
  {
    if(elem.id == id){
      if(elem.count>1)
      elem.count--;
    }
  })
}  







}
