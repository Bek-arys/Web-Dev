import { Component } from '@angular/core';
import { categories } from './categories';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-store';
  categories;
  show = false;
  categoryName = "";
  products = products;
  constructor() {
    this.categories = categories;
  }

  categoryClick(name:string){
    // this.products = products.filter(item => item.category == name)
    // this.show = true;
    if(this.categoryName == name){
      this.show = false;
      this.categoryName = "";
    }
    else {
      this.show = true;
      this.categoryName = name;
    }
  }
}
