import { Component } from '@angular/core';
import { Blog } from './blog';
import { BlogService } from './blog.service';

@Component({
    selector: 'recent-blogs',
    templateUrl: 'html/blogs/recent.component.html',
    providers:[BlogService]
})
export class RecentComponent {
        constructor( private blogService: BlogService) {}

        blogs: Blog[] = [
            new Blog('This is a blog post', 'No1'),
            new Blog('This is another blog post', 'No2')
        ]
}