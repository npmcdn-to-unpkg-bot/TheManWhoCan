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

    <!-- <nav>
        <ul>
            <a [routerLink]="['/']"><li class="nav-item"><i class="glyphicon glyphicon-check"></i> TheManWhoCan</li></a>
            <a [routerLink]="['/']"><li class="nav-item">Home</li></a>
            <a [routerLink]="['/blogs']"><li class="nav-item">Blogs</li></a>
            <a [routerLink]="['/about']"><li class="nav-item">About</li></a>
        </ul>
    </nav> -->
    `,
    // styles: [`
    //     nav .nav-item {
    //         list-style: none;
    //         display: inline-block;
    //         width: 24.5%;
    //         text-align: center;
    //         font-size: 20px;
    //     }

    //     nav ul {
    //         padding: 0;
    //         margin: 20px auto;
    //         width: 50%;
    //     }

    //     nav a{
    //         text-decoration: none;
    //         color: inherit;
    //     }

    //     nav {
    //         background-color: rgba(0, 195, 195, 1);
    //         padding: 2px;
    //         margin: 0;
    //         border-radius: 0 0 10px 10px;
    //         -webkit-border-radius: 0 0 10px 10px;
    //         -moz-border-radius: 0 0 10px 10px;
    //     }
    
    // `],
    directives: [ ROUTER_DIRECTIVES ]
})
export class NavComponent {

}
