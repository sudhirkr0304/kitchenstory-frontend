import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Product {
  name:string,
  price:number,
  quantity:number,
  description:string,
  category:string,
  id:number,
  ingredients:string

}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  products: Product[] = [];
  amount:number = 1110;

  constructor(private route: Router) {}

  ngOnInit() {
    // Retrieve products from the route state
    const state = history.state;
    if (state && state.products) {
      this.products = state.products;

      this.products = this.products.filter((product) => product.quantity > 0);
    } else {
      // Handle case when products are not available in state
    }
    console.log(this.products);
  }


  pay() {

    console.log('order recivered successfully');
    window.alert('ordered successfully');

    this.route.navigate(['/login']);
  }

}
