import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdComponentComponent } from './ad-component.component';

describe('AdComponentComponent', () => {
  let component: AdComponentComponent;
  let fixture: ComponentFixture<AdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
