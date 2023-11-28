import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnshoreManagementComponent } from './onshore-management.component';

describe('OnshoreManagementComponent', () => {
  let component: OnshoreManagementComponent;
  let fixture: ComponentFixture<OnshoreManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnshoreManagementComponent]
    });
    fixture = TestBed.createComponent(OnshoreManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
