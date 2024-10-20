import { CanDeactivateFn } from '@angular/router';
import { TodosComponent } from '../pages/todos/todos.component';
import { PostsComponent } from '../pages/posts/posts.component';

export const outsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const currentComponent = component as PostsComponent;

  if(currentComponent.form.invalid && currentComponent.form.dirty){
    return window.confirm("Estás seguro que deseas salir?");
  }
  return true;
};
