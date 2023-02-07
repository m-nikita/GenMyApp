import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenPostComponent } from './gen-post.component';

describe('GenPostComponent', () => {
  let component: GenPostComponent;
  let fixture: ComponentFixture<GenPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
