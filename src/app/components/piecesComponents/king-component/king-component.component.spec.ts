import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingComponentComponent } from './king-component.component';

describe('KingComponentComponent', () => {
  let component: KingComponentComponent;
  let fixture: ComponentFixture<KingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
