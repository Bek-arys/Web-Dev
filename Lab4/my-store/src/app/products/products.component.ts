import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products = [...products];

  share(name: string, url: string | undefined) {
    window.open(`https://t.me/share/url?url=${url}&text=${name}`)
  }

  onNotify(url: string) {
    window.open(url);
  }
}
