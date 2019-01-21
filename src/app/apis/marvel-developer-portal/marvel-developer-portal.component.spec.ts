import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelDeveloperPortalComponent } from './marvel-developer-portal.component';

describe('MarvelDeveloperPortalComponent', () => {
  let component: MarvelDeveloperPortalComponent;
  let fixture: ComponentFixture<MarvelDeveloperPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelDeveloperPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelDeveloperPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
