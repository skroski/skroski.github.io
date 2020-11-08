import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoList } from './todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }
  id: string;

    // tslint:disable-next-line: member-ordering
    newTask = '';

    tasks: TodoList[] = [
    { description: 'Arrumar a cama', done: true},
    { description: 'Limpar a Casa', done: true},
    { description: 'Lavar a Louça', done: false}];
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    });
    this.id = this.route.snapshot.params.id;
  }

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
