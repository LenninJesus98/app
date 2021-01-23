import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPrivadasComponent } from './tasks-privadas.component';

describe('TasksPrivadasComponent', () => {
  let component: TasksPrivadasComponent;
  let fixture: ComponentFixture<TasksPrivadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksPrivadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPrivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
