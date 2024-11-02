import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [ CardComponent ],
    exports: [CardComponent]    //to make the component available to all components in app module where this module is imported
})
export class SharedModule {}