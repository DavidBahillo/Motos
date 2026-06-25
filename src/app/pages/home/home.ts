import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product, PRODUCTS } from '../products/products.data';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  heroBackgroundImage = "url('img/banner1.webp')";

  featuredProducts: Product[] = PRODUCTS.filter((product) =>
    ['sport-r-series-600', 'adventure-explorer-x'].includes(product.id),
  );
}
