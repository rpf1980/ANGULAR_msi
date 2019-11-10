import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeChildComponent } from './joke-child.component';

describe('JokeChildComponent', () => {
  let component: JokeChildComponent;
  let fixture: ComponentFixture<JokeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
