import { Component} from '@angular/core';

@Component({
    selector: 'my-sidebar',
    template: `
        <div class="col-md-4">
            <h4>Search Blog Categories</h4>
            <ul class="list-group">
                <li class="list-group-item">Veganism</li>
                <li class="list-group-item">Cycling</li>
                <li class="list-group-item">Meditation</li>
                <li class="list-group-item">Perception</li>
                <li class="list-group-item">Inspiration</li>
            </ul>
        </div>
    `
})

export class SidebarComponent{}