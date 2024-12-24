import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedProductsComponent } from './extended-products.component';

describe('ExtendedProductsComponent', () => {
  let component: ExtendedProductsComponent;
  let fixture: ComponentFixture<ExtendedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
