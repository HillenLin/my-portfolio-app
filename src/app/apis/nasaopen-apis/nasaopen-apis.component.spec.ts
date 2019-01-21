import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NASAOpenAPIsComponent } from './nasaopen-apis.component';

describe('NASAOpenAPIsComponent', () => {
  let component: NASAOpenAPIsComponent;
  let fixture: ComponentFixture<NASAOpenAPIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NASAOpenAPIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NASAOpenAPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
