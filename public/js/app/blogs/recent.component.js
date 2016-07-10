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
var blog_1 = require('./blog');
var blog_service_1 = require('./blog.service');
var RecentComponent = (function () {
    function RecentComponent(blogService) {
        this.blogService = blogService;
        this.blogs = [
            new blog_1.Blog('This is a blog post', 'No1'),
            new blog_1.Blog('This is another blog post', 'No2')
        ];
    }
    RecentComponent = __decorate([
        core_1.Component({
            selector: 'recent-blogs',
            templateUrl: 'html/blogs/recent.component.html',
            providers: [blog_service_1.BlogService]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService])
    ], RecentComponent);
    return RecentComponent;
}());
exports.RecentComponent = RecentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL3JlY2VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBcUIsUUFBUSxDQUFDLENBQUE7QUFDOUIsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFPN0M7SUFDUSx5QkFBcUIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFN0MsVUFBSyxHQUFXO1lBQ1osSUFBSSxXQUFJLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLElBQUksV0FBSSxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQztTQUMvQyxDQUFBO0lBTCtDLENBQUM7SUFOekQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO1NBQzFCLENBQUM7O3VCQUFBO0lBUUYsc0JBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHVCQUFlLGtCQU8zQixDQUFBIiwiZmlsZSI6ImJsb2dzL3JlY2VudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmxvZyB9IGZyb20gJy4vYmxvZyc7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSAnLi9ibG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3JlY2VudC1ibG9ncycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvYmxvZ3MvcmVjZW50LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczpbQmxvZ1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNlbnRDb21wb25lbnQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGJsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSkge31cclxuXHJcbiAgICAgICAgYmxvZ3M6IEJsb2dbXSA9IFtcclxuICAgICAgICAgICAgbmV3IEJsb2coJ1RoaXMgaXMgYSBibG9nIHBvc3QnLCAnTm8xJyksXHJcbiAgICAgICAgICAgIG5ldyBCbG9nKCdUaGlzIGlzIGFub3RoZXIgYmxvZyBwb3N0JywgJ05vMicpXHJcbiAgICAgICAgXVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
