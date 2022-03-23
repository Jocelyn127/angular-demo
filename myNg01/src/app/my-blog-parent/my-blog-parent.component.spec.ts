import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBlogParentComponent } from './my-blog-parent.component';

describe('MyBlogParentComponent', () => {
  let component: MyBlogParentComponent;
  let fixture: ComponentFixture<MyBlogParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBlogParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBlogParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
