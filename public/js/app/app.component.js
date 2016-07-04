"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var header_component_1 = require('./header.component');
var home_component_1 = require('./blogs/home.component');
var sidebar_component_1 = require('./misc/sidebar.component');
var blogs_component_1 = require('./blogs/blogs.component');
var about_component_1 = require('./misc/about.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <my-header></my-header>\n        <div class=\"container\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <router-outlet></router-outlet>\n                    </div>\n                    <my-sidebar></my-sidebar>\n                </div>\n            </div>\n        </div>\n    ",
            directives: [sidebar_component_1.SidebarComponent, header_component_1.HeaderComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '/', component: home_component_1.HomeComponent },
            { path: '/blogs', component: blogs_component_1.BlogsComponent },
            { path: '/about', component: about_component_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCwrQkFBOEIsd0JBQXdCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBaUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxnQ0FBK0Isd0JBQXdCLENBQUMsQ0FBQTtBQTJCeEQ7SUFBQTtJQUVBLENBQUM7SUExQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDZZQVlUO1lBQ0QsVUFBVSxFQUFFLENBQUUsb0NBQWdCLEVBQUUsa0NBQWUsRUFBRSwwQkFBaUIsQ0FBRTtTQUN2RSxDQUFDO1FBRUQsZUFBTSxDQUFDO1lBQ0osRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtZQUM3QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7U0FDaEQsQ0FBQzs7b0JBQUE7SUFJRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9ncy9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9taXNjL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJsb2dzQ29tcG9uZW50IH0gZnJvbSAnLi9ibG9ncy9ibG9ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL21pc2MvYWJvdXQuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG15LXNpZGViYXI+PC9teS1zaWRlYmFyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogWyBTaWRlYmFyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTIF1cbn0pXG5cbkBSb3V0ZXMoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvYmxvZ3MnLCBjb21wb25lbnQ6IEJsb2dzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
