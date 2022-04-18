import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostById } from './post.component';

describe('PostById', () => {
  let component: PostById;
  let fixture: ComponentFixture<PostById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostById]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostById);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
