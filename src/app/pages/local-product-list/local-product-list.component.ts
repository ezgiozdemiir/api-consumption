import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExtendedProduct, Product, StandardProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { map, Observable } from 'rxjs';
import { ExtendedProductsComponent } from "../../components/extended-products/extended-products.component";
import { StandardProductsComponent } from "../../components/standard-products/standard-products.component";

@Component({
  selector: 'app-local-product-list',
  standalone: true,
  imports: [ExtendedProductsComponent, StandardProductsComponent],
  templateUrl: './local-product-list.component.html',
  styleUrl: './local-product-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LocalProductListComponent {
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
