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
var contact_component_1 = require('./misc/contact.component');
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
            { path: '/about', component: about_component_1.AboutComponent },
            { path: '/contact', component: contact_component_1.ContactComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCwrQkFBOEIsd0JBQXdCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBaUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBK0IseUJBQXlCLENBQUMsQ0FBQTtBQUN6RCxrQ0FBaUMsMEJBQTBCLENBQUMsQ0FBQTtBQUM1RCxnQ0FBK0Isd0JBQXdCLENBQUMsQ0FBQTtBQTRCeEQ7SUFBQTtJQUVBLENBQUM7SUEzQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDZZQVlUO1lBQ0QsVUFBVSxFQUFFLENBQUUsb0NBQWdCLEVBQUUsa0NBQWUsRUFBRSwwQkFBaUIsQ0FBRTtTQUN2RSxDQUFDO1FBRUQsZUFBTSxDQUFDO1lBQ0osRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtZQUM3QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtTQUNwRCxDQUFDOztvQkFBQTtJQUlGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2Jsb2dzL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL21pc2Mvc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmxvZ3NDb21wb25lbnQgfSBmcm9tICcuL2Jsb2dzL2Jsb2dzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9taXNjL2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9taXNjL2Fib3V0LmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxteS1zaWRlYmFyPjwvbXktc2lkZWJhcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFsgU2lkZWJhckNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUyBdXG59KVxuXG5AUm91dGVzKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2Jsb2dzJywgY29tcG9uZW50OiBCbG9nc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvY29udGFjdCcsIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
