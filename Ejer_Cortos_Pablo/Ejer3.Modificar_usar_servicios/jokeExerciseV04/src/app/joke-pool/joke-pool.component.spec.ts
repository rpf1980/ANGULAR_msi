import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokePoolComponent } from './joke-pool.component';

describe('JokePoolComponent', () => {
  let component: JokePoolComponent;
  let fixture: ComponentFixture<JokePoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokePoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
