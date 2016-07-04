import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-nav',
    template: `
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" 
                class="navbar-toggle collapsed" 
                data-toggle="collapse" 
                data-target="#bs-example-navbar-collapse-1" 
                aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" [routerLink]="['/']"><i class="glyphicon glyphicon-check"></i> TheManWhoCan</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/']">Home</a></li>
                        <li><a [routerLink]="['/blogs']">Blogs</a></li>
                    </ul>
                    <form class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search Blogs">
                        </div>
                        <button type="submit" class="btn btn-default">Search</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a [routerLink]="['/about']">About Me</a></li>
                        <li>  
                            <p class="navbar-btn">
                                <a [routerLink]="['/authenticate']" class="btn btn-info">Login</a>
                            </p>
                        </li>
                        <li>  
                            <p class="navbar-btn">
                                <a [routerLink]="['/authenticate']" class="btn btn-info">Sign Up</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> <!-- Navbar End -->
    `,
    directives: [ ROUTER_DIRECTIVES ]
})
export class NavComponent {

}
