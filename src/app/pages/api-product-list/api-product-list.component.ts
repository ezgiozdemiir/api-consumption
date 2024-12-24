import { Component } from '@angular/core';
import { ProductAPI } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-api-product-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './api-product-list.component.html',
  styleUrl: './api-product-list.component.scss'
})
export class ApiProductListComponent {

  products: ProductAPI[] = [];
  newProduct: ProductAPI = {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: ''
  };

  constructor(private productService: ProductService<ProductAPI>) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: ProductAPI[]) => {
      this.products = data;
    });
  }


  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.loadProducts();
      this.clearForm();
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

  clearForm() {
    this.newProduct = {
      id: 0,
      title: '',
      price: '',
      category: '',
      description: '',
      image: ''
    };
  }
}
