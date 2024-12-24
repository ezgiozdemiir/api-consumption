import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveImagesComponent } from './responsive-images.component';

describe('ResponsiveImagesComponent', () => {
  let component: ResponsiveImagesComponent;
  let fixture: ComponentFixture<ResponsiveImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
