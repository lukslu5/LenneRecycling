import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageAllComponent } from './garbage-all.component';

describe('GarbageAllComponent', () => {
  let component: GarbageAllComponent;
  let fixture: ComponentFixture<GarbageAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageAllComponent]
    });
    fixture = TestBed.createComponent(GarbageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
