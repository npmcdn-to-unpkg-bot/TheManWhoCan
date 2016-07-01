import { Component } from '@angular/core';
import { SummaryComponent } from './summary.component';
import { RecentComponent } from './recent.component';
import { PopularComponent } from './popular.component';

@Component({
    selector: 'my-home',
    template: `
    <div class="row">   
        <my-summary></my-summary>
    </div> 
    <div class="row">   
        <recent-blogs></recent-blogs>
    </div>
    <div class="row">   
        <popular-blogs></popular-blogs>
    </div>
    `,
    directives: [ PopularComponent, SummaryComponent, RecentComponent ]
})
export class HomeComponent{

}