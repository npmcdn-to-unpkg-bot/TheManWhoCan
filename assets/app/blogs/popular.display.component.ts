import { Component, Input } from '@angular/core';
import { Blog } from './blog';

@Component({
    selector: 'my-popular-display',
    template: `
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="https://images.unsplash.com/photo-1465152251391-e94453ee3f5a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=eb547af2367df6cfbac69dff54369063" alt="">
                <div class="caption">
                    <h3>{{ blog.title }}</h3>
                    <p>{{ blog.content }}</p>
                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                </div>
            </div>
        </div>
    `
})

export class PopularDisplayComponent{
    @Input() blog:Blog;
}
