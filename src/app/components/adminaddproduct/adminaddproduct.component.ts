import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent {

  product = {
    name: '',
    price: null,
    ingredients: '',
    category: '',
    description: ''
  };

  constructor(private productService: ProductService, private router:Router) {

  }

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted with data:', this.product);

    this.productService.addproduct(this.product).subscribe((response) => {
      console.log(response);

      if(response == null) {
        alert('product not added');
      }
      else {
        alert('product added successfully');
        this.router.navigate(['/adminmain']);
      }
    },(error) => {
      alert('login error');
    });

    // You can add your logic here to send the form data to a server or perform other actions

    // After successful submission, you can reset the form
    this.resetForm();
  }

  resetForm() {
    // Reset the form fields to their initial values
    this.product = {
      name: '',
      price: null,
      ingredients: '',
      category: '',
      description: ''
    };
  }

}
