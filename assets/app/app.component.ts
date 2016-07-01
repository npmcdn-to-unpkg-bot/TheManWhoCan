import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './blogs/home.component';
import { SidebarComponent } from './misc/sidebar.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './misc/contact.component';
import { AboutComponent } from './misc/about.component';


@Component({
    selector: 'my-app',
    template: ` 
        <my-header></my-header>
        <div class="container">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8">
                        <router-outlet></router-outlet>
                    </div>
                    <my-sidebar></my-sidebar>
                </div>
            </div>
        </div>
    `,
    directives: [ SidebarComponent, HeaderComponent, ROUTER_DIRECTIVES ]
})

@Routes([
    { path: '/', component: HomeComponent },
    { path: '/blogs', component: BlogsComponent },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent }
])

export class AppComponent {
    
}