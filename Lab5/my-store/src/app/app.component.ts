import { Component } from '@angular/core';
import { categories } from './categories';

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

  constructor() {
    this.categories = categories;
  }

  categoryClick(name:string){
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
