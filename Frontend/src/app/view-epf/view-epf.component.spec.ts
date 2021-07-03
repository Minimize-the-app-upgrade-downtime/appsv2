import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEpfComponent } from './view-epf.component';

describe('ViewEpfComponent', () => {
  let component: ViewEpfComponent;
  let fixture: ComponentFixture<ViewEpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEpfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
