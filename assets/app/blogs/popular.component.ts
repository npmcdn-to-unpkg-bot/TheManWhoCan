import { Component } from '@angular/core';
import { PopularDisplayComponent } from './popular.display.component';
import { Blog } from './blog';

@Component({
    selector: 'popular-blogs',
    templateUrl: 'html/blogs/popular.component.html',
    directives: [ PopularDisplayComponent ]
})

export class PopularComponent{
    popBlogs : Blog[] = [
        new Blog("This is a popular blog", "Pop1"),
        new Blog("This is another popular blog", "Pop1")
    ]
}