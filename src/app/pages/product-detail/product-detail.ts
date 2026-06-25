import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product, PRODUCTS } from '../products/products.data';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product?: Product;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      this.product = PRODUCTS.find((item) => item.id === productId);
    });
  }
}
