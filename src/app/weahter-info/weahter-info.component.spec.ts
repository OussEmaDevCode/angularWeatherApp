import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeahterInfoComponent } from './weahter-info.component';

describe('WeahterInfoComponent', () => {
  let component: WeahterInfoComponent;
  let fixture: ComponentFixture<WeahterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeahterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeahterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
