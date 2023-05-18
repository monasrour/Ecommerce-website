import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import productss from '../../assets/products-list.json'
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id:any;
  product !: Product 

  constructor(private route:ActivatedRoute , private http:HttpClient , private productService: ProductsService){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = (params['id'])
    });

    //get data from api
    this.productService.getProductDetails(this.id).subscribe((res:any)=> this.product = res)



    //get data from file.json

    // this.product = productss.find((product:Product) => product.id == this.id)!
    // console.log(this.product)

  //   this.http.get('../../assets/products-list.json').subscribe(data => {
  //     this.product = JSON.parse(JSON.stringify(data)).find((product:Product) => product.id == this.id)
  // })
  }
}
