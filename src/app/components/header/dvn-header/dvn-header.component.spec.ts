import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvnHeaderComponent } from './dvn-header.component';

describe('DvnHeaderComponent', () => {
  let component: DvnHeaderComponent;
  let fixture: ComponentFixture<DvnHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DvnHeaderComponent]
    });
    fixture = TestBed.createComponent(DvnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
