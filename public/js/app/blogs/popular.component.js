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
var popular_display_component_1 = require('./popular.display.component');
var blog_1 = require('./blog');
var PopularComponent = (function () {
    function PopularComponent() {
        this.popBlogs = [
            new blog_1.Blog("This is a popular blog", "Pop1"),
            new blog_1.Blog("This is another popular blog", "Pop1")
        ];
    }
    PopularComponent = __decorate([
        core_1.Component({
            selector: 'popular-blogs',
            templateUrl: 'html/blogs/popular.component.html',
            directives: [popular_display_component_1.PopularDisplayComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PopularComponent);
    return PopularComponent;
}());
exports.PopularComponent = PopularComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL3BvcHVsYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsMENBQXdDLDZCQUE2QixDQUFDLENBQUE7QUFDdEUscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBUTlCO0lBQUE7UUFDSSxhQUFRLEdBQVk7WUFDaEIsSUFBSSxXQUFJLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDO1lBQzFDLElBQUksV0FBSSxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQztTQUNuRCxDQUFBO0lBQ0wsQ0FBQztJQVhEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsVUFBVSxFQUFFLENBQUUsbURBQXVCLENBQUU7U0FDMUMsQ0FBQzs7d0JBQUE7SUFPRix1QkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksd0JBQWdCLG1CQUs1QixDQUFBIiwiZmlsZSI6ImJsb2dzL3BvcHVsYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvcHVsYXJEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9wb3B1bGFyLmRpc3BsYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmxvZyB9IGZyb20gJy4vYmxvZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9wdWxhci1ibG9ncycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvYmxvZ3MvcG9wdWxhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbIFBvcHVsYXJEaXNwbGF5Q29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1bGFyQ29tcG9uZW50e1xyXG4gICAgcG9wQmxvZ3MgOiBCbG9nW10gPSBbXHJcbiAgICAgICAgbmV3IEJsb2coXCJUaGlzIGlzIGEgcG9wdWxhciBibG9nXCIsIFwiUG9wMVwiKSxcclxuICAgICAgICBuZXcgQmxvZyhcIlRoaXMgaXMgYW5vdGhlciBwb3B1bGFyIGJsb2dcIiwgXCJQb3AxXCIpXHJcbiAgICBdXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
