import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/productservice.service';


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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  searchText:string = '';
  products:Array<Product> = [];

  constructor(private productService:ProductService,private router:Router) {

  }


  search() {
    console.log(this.searchText);
    console.log('sudhir kumar');

    this.productService.getAllProducts().subscribe((resonse:any) => {

      console.log(resonse);

      
      this.products = resonse;
      for(let i = 0 ; i < this.products.length;i++) {
        this.products[i].quantity = 0;
      }

      
      console.log(this.products);

     

      
    },(error) => {
      console.log(error);
    })
    

    
    console.log(this.products);
  }


  decreaseQuantity(id:any) {
    for(let i = 0 ; i < this.products.length;i++) {
      if(this.products[i].id == id) {

        if(this.products[i].quantity > 0) {
          this.products[i].quantity--;
        }
        else {
          this.products[i].quantity = 0;
        }
        
      }
    }
  }

  increaseQuantity(id:any) {

    for(let i = 0 ; i < this.products.length;i++) {
      if(this.products[i].id == id) {
        this.products[i].quantity++;
      }
    }

  }

  checkout() {

    let isProductPresentInCart = false;

    for(let i = 0 ; i < this.products.length;i++) {
      if(this.products[i].quantity > 0) {
        isProductPresentInCart = true;
      }
    }

    if(!isProductPresentInCart) {
      alert('Cart is empty');
    }
    else {
      this.router.navigate(['/checkout'], { state: { products: this.products } });
    }
    
  }

  

}
