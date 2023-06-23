import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGameComponent } from './footer-game.component';

describe('FooterGameComponent', () => {
  let component: FooterGameComponent;
  let fixture: ComponentFixture<FooterGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterGameComponent]
    });
    fixture = TestBed.createComponent(FooterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
