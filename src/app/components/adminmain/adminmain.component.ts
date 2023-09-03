import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent {

  products:any = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      ingredients: 'Ingredient 1, Ingredient 2',
      category: 'Category A',
      description: 'Description for Product 1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 24.99,
      ingredients: 'Ingredient 3, Ingredient 4',
      category: 'Category B',
      description: 'Description for Product 2'
    },
    // Add more product objects here
  ];

  constructor( private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((response) => {
      console.log(response);
      this.products = response;


    },(error) => {
      console.log('error');
    })
  }

  deleteProduct(id:any) {
    this.productService.deleteproduct(id).subscribe((response) => {
      this.ngOnInit();
    }, (error) => {
      console.log(error);
    })
  }

}
