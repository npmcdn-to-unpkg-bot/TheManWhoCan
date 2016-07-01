import { Component } from '@angular/core';
import { SortComponent } from './sort.component';

@Component({
    selector: 'my-blogs',
    template: `
        <div class="row">
            <sort-blogs></sort-blogs>
        </div>
    `,
    directives: [ SortComponent ]
})

export class BlogsComponent{
    
}