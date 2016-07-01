import { Component } from '@angular/core';
import { NavComponent } from './misc/nav.component';

@Component({
    selector: "my-header",
    template: `
        <my-nav></my-nav>
    `,
    directives: [ NavComponent ]
})

export class HeaderComponent{

}