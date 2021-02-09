import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersThumbComponent } from './players-thumb.component';

describe('PlayersThumbComponent', () => {
  let component: PlayersThumbComponent;
  let fixture: ComponentFixture<PlayersThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
