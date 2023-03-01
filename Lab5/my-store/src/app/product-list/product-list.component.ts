import { Component, Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  @Input() categoryName: string | undefined;
  remove(id:number){
    this.products = this.products.filter((x) => x.id !== id);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
