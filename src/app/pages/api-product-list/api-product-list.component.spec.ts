import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProductListComponent } from './api-product-list.component';

describe('ApiProductListComponent', () => {
  let component: ApiProductListComponent;
  let fixture: ComponentFixture<ApiProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
