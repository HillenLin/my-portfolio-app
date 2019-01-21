import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialProjectsComponent } from './commercial-projects.component';

describe('CommercialProjectsComponent', () => {
  let component: CommercialProjectsComponent;
  let fixture: ComponentFixture<CommercialProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
