import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Splash1Component } from './splash1.component';

describe('Splash1Component', () => {
  let component: Splash1Component;
  let fixture: ComponentFixture<Splash1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Splash1Component]
    });
    fixture = TestBed.createComponent(Splash1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
