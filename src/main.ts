//when using standalone components: 

//import { bootstrapApplication } from '@angular/platform-browser';
//import { AppComponent } from './app/app.component';
//bootstrapApplication(AppComponent).catch((err) => console.error(err));

//when using modules
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)