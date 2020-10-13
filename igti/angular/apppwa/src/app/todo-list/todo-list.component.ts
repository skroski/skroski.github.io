import { Component } from '@angular/core';
import { TodoList } from './todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

    newTask = '';

    tasks: TodoList[] = [
    { description: 'Arrumar a cama', done: true},
    { description: 'Limpar a Casa', done: true},
    { description: 'Lavar a Louça', done: false}];

    // tslint:disable-next-line: typedef
    addTask() {
      this.tasks.push({
        description: this.newTask,
        done: false
      });
    }
    // tslint:disable-next-line: typedef
    deleteTask(i: number){
      this.tasks.splice(i, 1);

    }

}
