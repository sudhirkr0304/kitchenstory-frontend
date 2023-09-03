import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchangepasswordComponent } from './adminchangepassword.component';

describe('AdminchangepasswordComponent', () => {
  let component: AdminchangepasswordComponent;
  let fixture: ComponentFixture<AdminchangepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminchangepasswordComponent]
    });
    fixture = TestBed.createComponent(AdminchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
