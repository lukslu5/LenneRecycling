import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageBackComponent } from './garbage-back.component';

describe('GarbageBackComponent', () => {
  let component: GarbageBackComponent;
  let fixture: ComponentFixture<GarbageBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageBackComponent]
    });
    fixture = TestBed.createComponent(GarbageBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
