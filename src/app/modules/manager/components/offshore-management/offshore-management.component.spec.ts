import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshoreManagementComponent } from './offshore-management.component';

describe('OffshoreManagementComponent', () => {
  let component: OffshoreManagementComponent;
  let fixture: ComponentFixture<OffshoreManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffshoreManagementComponent]
    });
    fixture = TestBed.createComponent(OffshoreManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
