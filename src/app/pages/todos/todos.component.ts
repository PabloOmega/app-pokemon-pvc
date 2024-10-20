import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Todo } from '../../types/todo';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  form: FormGroup;
  todos: Todo[] = [];

  constructor(private todosService: TodosService, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      completed: [false]
    })
  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  createTodo(): void{
    if(this.form.invalid) return;
    this.todosService.createTodo(this.form.value)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  updateTodo(id: string): void{
    if(this.form.invalid) return;
    this.todosService.updateTodo({id, ...this.form.value})
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  deleteTodo(id: string): void{
    this.todosService.deleteTodo(id)
    .then(response => console.log(response))
    .catch(error => console.log(error))      
  }
}
