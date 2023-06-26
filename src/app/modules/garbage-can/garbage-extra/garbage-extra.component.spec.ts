import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageExtraComponent } from './garbage-extra.component';

describe('GarbageExtraComponent', () => {
  let component: GarbageExtraComponent;
  let fixture: ComponentFixture<GarbageExtraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageExtraComponent]
    });
    fixture = TestBed.createComponent(GarbageExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
