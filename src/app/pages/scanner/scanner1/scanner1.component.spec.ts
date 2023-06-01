import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scanner1Component } from './scanner1.component';

describe('Scanner1Component', () => {
  let component: Scanner1Component;
  let fixture: ComponentFixture<Scanner1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scanner1Component]
    });
    fixture = TestBed.createComponent(Scanner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
