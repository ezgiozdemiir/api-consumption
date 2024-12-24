import { Component } from '@angular/core';
import { StandardProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-standard-products',
  standalone: true,
  imports: [],
  templateUrl: './standard-products.component.html',
  styleUrl: './standard-products.component.scss'
})
export class StandardProductsComponent {
  standardProducts: StandardProduct[] = [];
  constructor(private productService: ProductService<StandardProduct>) {}
   
  ngOnInit(): void {
    this.loadStandardProducts()
  }
   
  loadStandardProducts(): void {
    this.productService.getProductsByType<StandardProduct>((product): product is StandardProduct => 'price' in product && 'description' in product).subscribe({
          next: (products) => {
            this.standardProducts = products;
          },
        });
  }
}
