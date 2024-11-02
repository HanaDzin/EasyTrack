import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = DUMMY_USERS

  //used for displaying the correct user in the tasks component:
  selectedUserId?: string;

  //a getter property to translate the receiving userId from the user component
  //into the user's name to be displayed in the tasks component
  get selectedUserName() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  //added method that responses to the emitted event via event-binding
  //which happened in .html file where we listened for the selectUser event from UserComponent
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
