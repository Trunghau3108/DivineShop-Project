import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvnFooterComponent } from './dvn-footer.component';

describe('DvnFooterComponent', () => {
  let component: DvnFooterComponent;
  let fixture: ComponentFixture<DvnFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DvnFooterComponent]
    });
    fixture = TestBed.createComponent(DvnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
