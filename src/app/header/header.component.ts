//in order to convert the class into a component we must import:
import { Component } from "@angular/core";

//selector = selects elements which should be replaced with this component
//template = defines markup/content that should be displayed by this component
//standalone component
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'     
})

//starting with exporting a class named as a component
export class HeaderComponent {}