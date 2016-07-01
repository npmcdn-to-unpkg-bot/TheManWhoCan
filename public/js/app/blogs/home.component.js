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
var summary_component_1 = require('./summary.component');
var recent_component_1 = require('./recent.component');
var popular_component_1 = require('./popular.component');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            template: "\n    <div class=\"row\">   \n        <my-summary></my-summary>\n    </div> \n    <div class=\"row\">   \n        <recent-blogs></recent-blogs>\n    </div>\n    <div class=\"row\">   \n        <popular-blogs></popular-blogs>\n    </div>\n    ",
            directives: [popular_component_1.PopularComponent, summary_component_1.SummaryComponent, recent_component_1.RecentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFpQnZEO0lBQUE7SUFFQSxDQUFDO0lBakJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxvUEFVVDtZQUNELFVBQVUsRUFBRSxDQUFFLG9DQUFnQixFQUFFLG9DQUFnQixFQUFFLGtDQUFlLENBQUU7U0FDdEUsQ0FBQzs7cUJBQUE7SUFHRixvQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkscUJBQWEsZ0JBRXpCLENBQUEiLCJmaWxlIjoiYmxvZ3MvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vc3VtbWFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNlbnRDb21wb25lbnQgfSBmcm9tICcuL3JlY2VudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3B1bGFyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3B1bGFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPiAgIFxyXG4gICAgICAgIDxteS1zdW1tYXJ5PjwvbXktc3VtbWFyeT5cclxuICAgIDwvZGl2PiBcclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICBcclxuICAgICAgICA8cmVjZW50LWJsb2dzPjwvcmVjZW50LWJsb2dzPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+ICAgXHJcbiAgICAgICAgPHBvcHVsYXItYmxvZ3M+PC9wb3B1bGFyLWJsb2dzPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogWyBQb3B1bGFyQ29tcG9uZW50LCBTdW1tYXJ5Q29tcG9uZW50LCBSZWNlbnRDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
