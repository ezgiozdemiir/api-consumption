import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResponsiveImagesComponent } from './responsive-images/responsive-images.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule, ResponsiveImagesComponent],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'api-consumption';

  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: ''
  };

  constructor(private productService: ProductService<Product>) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
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
