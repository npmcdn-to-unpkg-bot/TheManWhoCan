import { Component, Input } from '@angular/core';
import { Blog } from './blog';

@Component({
    selector: 'my-sort-date',
    templateUrl: 'html/blogs/sort.date.component.html'
})

export class SortDateComponent{
    @Input() blog:Blog; 
}