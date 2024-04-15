import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
  todoList: Todo[] = [];
  todo: Todo = {
    title: '',
    id: null,
  };
  onClick() {
    if (this.todo.id){
//update
   this.todoList = this.todoList.map(todo => {
        if (todo.id === this.todo.id) {
          todo.title = this.todo.title;
        }
        return todo;
      });
    }
    else{
      //create
      this.todo.id = this.todoList.length + 1;
      this.todoList.push({ ...this.todo });
    }
    console.log(this.todoList);
    this.todo.title = '';
    this.todo.id=null;
  }
  updateClick(todo:Todo) :void{
    this.todo = {...todo};
  }
  deleteTodo(id:number):void {
    this.todoList = this.todoList.filter(f=>f.id!=id);
  }
}
