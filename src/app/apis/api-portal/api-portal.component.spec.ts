import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPortalComponent } from './api-portal.component';

describe('ApiPortalComponent', () => {
  let component: ApiPortalComponent;
  let fixture: ComponentFixture<ApiPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
