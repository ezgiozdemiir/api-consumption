import { Component } from '@angular/core';
import { ExtendedProduct, Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-extended-products',
  standalone: true,
  imports: [],
  templateUrl: './extended-products.component.html',
  styleUrl: './extended-products.component.scss'
})
export class ExtendedProductsComponent {
  extendedProducts: ExtendedProduct[] = [];
  constructor(private productService: ProductService<ExtendedProduct>) {}
   
  ngOnInit(): void {
    this.loadExtendedProducts()
  }

  loadExtendedProducts(): void {
    this.productService.getProductsByType<ExtendedProduct>((product): product is ExtendedProduct => 'modelYear' in product).subscribe({
      next: (products) => {
        this.extendedProducts = products;
      },
    });
  }
}
