import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostByUserComponent } from './postByUser.component';

describe('PostComponent', () => {
  let component: PostByUserComponent;
  let fixture: ComponentFixture<PostByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostByUserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
