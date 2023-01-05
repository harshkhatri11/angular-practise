import { Component, ElementRef, OnInit, Pipe, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ServiceService } from 'src/app/service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  editMode: boolean = false;
  todoForm!: FormGroup;
  taskDetails: string = '';
  updateTaskId!: number;
  searchTextInTodo = '';
  searchTextInDone = '';

  todo = [
    'Create Project',
    'Learn Routing',
    'Learn Directives',
    'Publish Project',
  ];
  done = [
    'Learn Angular',
    'Learn NodeJs',
    'Learn TypeScript',
    'Create To Do App',
  ];

  constructor(
    private service: ServiceService,

    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formbuilder.group({
      taskname: ['', Validators.required],
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  task() {
    let taskName = this.todoForm.controls['taskname'].value;
    let taskExists = this.todo.indexOf(taskName.trim());
    if (taskExists == -1 && taskName != '' && !this.editMode) {
      this.todo.push(taskName);
      this.todoForm.reset();
      this.service.openSuccessSnackBar(
        'Task added successfully in your To Do list',
        ''
      );
    } else if (taskName == '') {
      this.service.openFailureSnackBar('Please enter task name', 'Try again!!');
    } else if (this.editMode) {
      this.todo[this.updateTaskId] = taskName;
      this.service.openSuccessSnackBar('Task updated successfully', '');
      this.todoForm.reset();
      this.todoForm.untouched;
      this.editMode = false;
    } else {
      this.service.openFailureSnackBar(
        'Same task is already in your To Do list',
        'Try again!!'
      );
    }
  }

  deleteTask(index: any) {
    this.todo.splice(index, 1);
    this.service.openSuccessSnackBar('Task deleted successfully', '');
  }

  deleteDoneTask(index: any) {
    this.done.splice(index, 1);
    this.service.openSuccessSnackBar('Task deleted successfully', '');
  }

  editTask(index: any, item: any) {
    this.editMode = true;
    this.updateTaskId = index;
    console.log(index, item);
    this.todoForm.controls['taskname'].setValue(item);
  }
}
