import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';
import { SortDateComponent } from './sort.date.component';
import { SortPopularityComponent} from './sort.popularity.component';
import { BlogService } from './blog.service';

@Component({
    selector: 'sort-blogs',
    templateUrl: 'html/blogs/sort.component.html',
    directives: [ SortDateComponent, SortPopularityComponent ]
})

export class SortComponent implements OnInit {
    date= true;
    dateClicked(){
        this.date = true;
    }
    popClicked(){
        this.date = false;
    }

    constructor(private _blogService: BlogService) {}

    blogs: Blog[];

    ngOnInit(){
        this.blogs = this._blogService.getBlogs();
    }
}