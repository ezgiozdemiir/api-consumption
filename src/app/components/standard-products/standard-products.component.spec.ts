import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProductsComponent } from './standard-products.component';

describe('StandardProductsComponent', () => {
  let component: StandardProductsComponent;
  let fixture: ComponentFixture<StandardProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
