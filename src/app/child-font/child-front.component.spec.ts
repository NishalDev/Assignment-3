import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFrontComponent } from './child-front.component';

describe('ChildFrontComponent', () => {
  let component: ChildFrontComponent;
  let fixture: ComponentFixture<ChildFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildFrontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
