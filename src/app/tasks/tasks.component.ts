import { Component, Input } from '@angular/core';


import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //this component gets the user id from the app component 
@Input({ required: true }) username!: string
@Input({ required: true }) userId!: string

isAddingTask = false;

constructor (private tasksService: TasksService) {}

get selectedUserTasks() {
  return this.tasksService.getUserTasks(this.userId)
}

onAddingNewTask() {
  this.isAddingTask = true;
}

onCloseNewTask() {
  this.isAddingTask = false;
}

}
