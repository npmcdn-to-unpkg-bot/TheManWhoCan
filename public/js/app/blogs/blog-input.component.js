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
var core_1 = require("@angular/core");
var blog_1 = require('./blog');
var blog_service_1 = require('./blog.service');
var BlogInputComponent = (function () {
    function BlogInputComponent(_blogService) {
        this._blogService = _blogService;
    }
    BlogInputComponent.prototype.onCreate = function (content) {
        var blog = new blog_1.Blog(content, 'Dummy');
        this._blogService.addBlog(blog);
    };
    BlogInputComponent = __decorate([
        core_1.Component({
            selector: 'my-blog-input',
            template: "\n        <article class=\"panel panel-default\">\n            <div class=\"panel-body\">\n                {{ blog.content }}\n            </div>\n            <footer class=\"panel-footer\">\n                <div class=\"author\">\n                    {{ blog.username }}\n                </div>\n                <div class=\"config\">\n                    <a href=\"#\" (click)=\"onEdit()\">Edit</a>\n                    <a href=\"#\" (click)=\"onDelete()\">Delete</a>\n                </div>\n            </footer>\n        </article>\n    ",
            providers: [blog_service_1.BlogService]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService])
    ], BlogInputComponent);
    return BlogInputComponent;
}());
exports.BlogInputComponent = BlogInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL2Jsb2ctaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBQzlCLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBdUI3QztJQUNJLDRCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFFakQscUNBQVEsR0FBUixVQUFTLE9BQWU7UUFDcEIsSUFBTSxJQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUEzQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLGdpQkFlVDtZQUNELFNBQVMsRUFBRSxDQUFFLDBCQUFXLENBQUU7U0FDN0IsQ0FBQzs7MEJBQUE7SUFTRix5QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksMEJBQWtCLHFCQU85QixDQUFBIiwiZmlsZSI6ImJsb2dzL2Jsb2ctaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmxvZyB9IGZyb20gJy4vYmxvZyc7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSAnLi9ibG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWJsb2ctaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHt7IGJsb2cuY29udGVudCB9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cInBhbmVsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGJsb2cudXNlcm5hbWUgfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgKGNsaWNrKT1cIm9uRWRpdCgpXCI+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6IFsgQmxvZ1NlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2dJbnB1dENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Jsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSkge31cclxuXHJcbiAgICBvbkNyZWF0ZShjb250ZW50OiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnN0IGJsb2c6IEJsb2cgPSBuZXcgQmxvZyhjb250ZW50LCAnRHVtbXknKTtcclxuICAgICAgICB0aGlzLl9ibG9nU2VydmljZS5hZGRCbG9nKGJsb2cpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
