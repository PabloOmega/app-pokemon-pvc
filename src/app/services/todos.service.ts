import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Todo } from '../types/todo';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private firestore: Firestore) { }

  getTodos() : Observable<Todo[]> {
    const todosRef = collection(this.firestore, "todos");
    return collectionData(todosRef, {idField: "id"}) as Observable<Todo[]>;
  }

  createTodo(todo: Todo): Promise<any> {
    const todosRef = collection(this.firestore, "todos");
    return addDoc(todosRef, todo);
  }

  updateTodo(todo: Todo): Promise<any> {
    const todoDoc = doc(this.firestore, `todos/${todo.id}`);
    return updateDoc(todoDoc, {title: todo.title, completed: todo.completed});
  }

  deleteTodo(id: string): Promise<any> {
    const todoDoc = doc(this.firestore, `todos/${id}`);
    return deleteDoc(todoDoc);
  }
}
