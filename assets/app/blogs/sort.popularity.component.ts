import { Component, Input } from '@angular/core';
import { Blog } from './blog';

@Component({
    selector: 'my-sort-popularity',
    templateUrl: 'html/blogs/sort.popularity.component.html'
})

export class SortPopularityComponent{
    @Input() blog:Blog; 
}