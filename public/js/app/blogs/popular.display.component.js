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
var PopularDisplayComponent = (function () {
    function PopularDisplayComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', blog_1.Blog)
    ], PopularDisplayComponent.prototype, "blog", void 0);
    PopularDisplayComponent = __decorate([
        core_1.Component({
            selector: 'my-popular-display',
            template: "\n        <div class=\"col-sm-6 col-md-4\">\n            <div class=\"thumbnail\">\n                <img src=\"https://images.unsplash.com/photo-1465152251391-e94453ee3f5a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=eb547af2367df6cfbac69dff54369063\" alt=\"\">\n                <div class=\"caption\">\n                    <h3>{{ blog.title }}</h3>\n                    <p>{{ blog.content }}</p>\n                    <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></p>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PopularDisplayComponent);
    return PopularDisplayComponent;
}());
exports.PopularDisplayComponent = PopularDisplayComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL3BvcHVsYXIuZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxxQkFBcUIsUUFBUSxDQUFDLENBQUE7QUFrQjlCO0lBQUE7SUFFQSxDQUFDO0lBREc7UUFBQyxZQUFLLEVBQUU7O3lEQUFBO0lBakJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDhuQkFXVDtTQUNKLENBQUM7OytCQUFBO0lBSUYsOEJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLCtCQUF1QiwwQkFFbkMsQ0FBQSIsImZpbGUiOiJibG9ncy9wb3B1bGFyLmRpc3BsYXkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCbG9nIH0gZnJvbSAnLi9ibG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1wb3B1bGFyLWRpc3BsYXknLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ2NTE1MjI1MTM5MS1lOTQ0NTNlZTNmNWE/aXhsaWI9cmItMC4zLjUmcT04MCZmbT1qcGcmY3JvcD1lbnRyb3B5Jnc9MTA4MCZmaXQ9bWF4JnM9ZWI1NDdhZjIzNjdkZjZjZmJhYzY5ZGZmNTQzNjkwNjNcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnt7IGJsb2cudGl0bGUgfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IGJsb2cuY29udGVudCB9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiPkJ1dHRvbjwvYT4gPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHJvbGU9XCJidXR0b25cIj5CdXR0b248L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVsYXJEaXNwbGF5Q29tcG9uZW50e1xyXG4gICAgQElucHV0KCkgYmxvZzpCbG9nO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
