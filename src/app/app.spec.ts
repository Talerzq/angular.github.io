import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('AppComponent', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, MatProgressSpinnerModule],
      providers: [provideAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test 1: sprawdza dodawanie nowego zadania
  it('should add a new task', () => {
    component.newTaskText.set('Test Task');
    component.addTask();
    expect(component.tasks().length).toBe(1);
    expect(component.tasks()[0].text).toBe('Test Task');
    expect(component.tasks()[0].done).toBe(false);
  });

  // Test 2: sprawdza przełączanie statusu zadania (done/active)
  it('should toggle task done status', () => {
    const task = { id: 1, text: 'Test', done: false };
    component.tasks.set([task]);

    component.toggleDone(1); // zmiana na done
    expect(component.tasks()[0].done).toBe(true);

    component.toggleDone(1); // zmiana na active
    expect(component.tasks()[0].done).toBe(false);
  });
});
