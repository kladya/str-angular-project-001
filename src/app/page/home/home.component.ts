import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredProducts: Product[] = this.productService.randomFiveFeaturedProducts;
  discountProducts: Product[] = this.productService.randomFiveDiscountProducts;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {  }

}