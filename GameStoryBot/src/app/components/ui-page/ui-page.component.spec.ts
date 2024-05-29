import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIPageComponent } from './ui-page.component';

describe('UIPageComponent', () => {
  let component: UIPageComponent;
  let fixture: ComponentFixture<UIPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UIPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
