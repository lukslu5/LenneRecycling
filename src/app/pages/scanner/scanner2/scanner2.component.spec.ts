import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scanner2Component } from './scanner2.component';

describe('Scanner2Component', () => {
  let component: Scanner2Component;
  let fixture: ComponentFixture<Scanner2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Scanner2Component]
    });
    fixture = TestBed.createComponent(Scanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
