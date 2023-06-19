import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageFrontComponent } from './garbage-front.component';

describe('GarbageFrontComponent', () => {
  let component: GarbageFrontComponent;
  let fixture: ComponentFixture<GarbageFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageFrontComponent]
    });
    fixture = TestBed.createComponent(GarbageFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
