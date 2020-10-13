import { Component, Inject, OnInit } from '@angular/core';
import { TodoListService } from '../todoList.service';
import { TEMA } from '../../app.module';

@Component({
  selector: 'app-c2b',
  templateUrl: './c2b.component.html',
  styleUrls: ['./c2b.component.scss']
})
export class C2bComponent implements OnInit {

  todoListService: TodoListService;
  constructor(todoListService: TodoListService, @Inject(TEMA)public tema:string) {
    this.todoListService = todoListService;
  }


  ngOnInit(): void {
  }

}
