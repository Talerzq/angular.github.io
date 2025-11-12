import { Component, signal, computed, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit
{
  tasks = signal<Task[]>([]);
  newTaskText = signal<string>('');
  filter = signal<'all' | 'active' | 'done'>('all');
  editingId = signal<number | null>(null);  // id zadania w trybie edycji
  editedText = signal<string>('');  // tekst podczas edycji

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  filteredTasks = computed(() => {
    const allTasks = this.tasks();
    const currentFilter = this.filter();
    if (currentFilter === 'all') return allTasks;
    if (currentFilter === 'active') return allTasks.filter(t => !t.done);
    if (currentFilter === 'done') return allTasks.filter(t => t.done);
    return allTasks;
  });

  ngOnInit() {
    // ładowanie zadań z localStorage
    if (isPlatformBrowser(this.platformId)) {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks.set(JSON.parse(storedTasks));
      }
    }
  }

  handleInput(event: Event) {
    const input = event?.target as HTMLInputElement;
    this.newTaskText.set(input.value);
  }

  addTask() {
    if (this.newTaskText().trim().length) {
      const newTask: Task = {
        id: Date.now(),
        text: this.newTaskText(),
        done: false,
      };
      this.tasks.set([...this.tasks(), newTask]);
      this.newTaskText.set("");
      this.saveToLocalStorage();  // zapis do localStorage po dodaniu
    }
  }
  
  delete(id: number) {
    const updatedTask = this.tasks().filter((task) => task.id !== id);
    this.tasks.set(updatedTask);
    this.saveToLocalStorage();  // zapis do localStorage po usunięciu
  }

  toggleDone(id: number) {
    const updatedTasks = this.tasks().map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    this.tasks.set(updatedTasks);
    this.saveToLocalStorage();  // zapis do localStorage po przełączeniu
  }

  setFilter(value: 'all' | 'active' | 'done') {
    this.filter.set(value);
  }

  edit(id: number) {
    const task = this.tasks().find(t => t.id === id);
    if (task) {
      this.editingId.set(id);
      this.editedText.set(task.text);  // ustawienie tekstu do edycji
    }
  }

  saveEdit(id: number) {
    if (this.editedText().trim().length) {
      const updatedTasks = this.tasks().map(task =>
        task.id === id ? { ...task, text: this.editedText() } : task
      );
      this.tasks.set(updatedTasks);
      this.saveToLocalStorage();  // zapis do localStorage po edycji
    }
    this.cancelEdit();  // zakończenie edytowania
  }

  cancelEdit() {
    this.editingId.set(null);
    this.editedText.set('');
  }

  private saveToLocalStorage() {
    // zapis zadań do localStorage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    }
  }
}