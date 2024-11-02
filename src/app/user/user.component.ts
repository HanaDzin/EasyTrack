import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
/*  When working with separate inputs

  @Input({ required: true }) avatar!: string 
  @Input({ required: true }) name!: string 
  @Input({ required: true}) id!: string */

  // Accepting object with properties id, name, avatar as input
  @Input({ required: true}) user!: User;
  @Input({ required: true}) selected!: boolean;

  //creating a custom event that needs to output to be recognizable outside of this component
  @Output() selectUser = new EventEmitter<string>();
 

   get imagePath() {
    return 'assets/users/' + this.user.avatar;
  } 

  //when the button gets clicked, onClick executes
  //.emit is a part of EventEmitter object which is stored in selectUser and emits id to the parent component
  onClick() {
    this.selectUser.emit(this.user.id);
  }

}
