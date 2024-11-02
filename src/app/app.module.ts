import { NgModule } from "@angular/core";

//only needed in the root module
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";

import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],    // declare components that need to work together + directives
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule]   //instead of being in declarations where they must be standalone
})
export class AppModule {}