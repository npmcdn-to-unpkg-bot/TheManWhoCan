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
var sort_date_component_1 = require('./sort.date.component');
var sort_popularity_component_1 = require('./sort.popularity.component');
var blog_service_1 = require('./blog.service');
var SortComponent = (function () {
    function SortComponent(_blogService) {
        this._blogService = _blogService;
        this.date = true;
    }
    SortComponent.prototype.dateClicked = function () {
        this.date = true;
    };
    SortComponent.prototype.popClicked = function () {
        this.date = false;
    };
    SortComponent.prototype.ngOnInit = function () {
        this.blogs = this._blogService.getBlogs();
    };
    SortComponent = __decorate([
        core_1.Component({
            selector: 'sort-blogs',
            templateUrl: 'html/blogs/sort.component.html',
            directives: [sort_date_component_1.SortDateComponent, sort_popularity_component_1.SortPopularityComponent]
        }), 
        __metadata('design:paramtypes', [blog_service_1.BlogService])
    ], SortComponent);
    return SortComponent;
}());
exports.SortComponent = SortComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL3NvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFDMUQsMENBQXVDLDZCQUE2QixDQUFDLENBQUE7QUFDckUsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFRN0M7SUFTSSx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFSN0MsU0FBSSxHQUFFLElBQUksQ0FBQztJQVFxQyxDQUFDO0lBUGpELG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Qsa0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFNRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFyQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxVQUFVLEVBQUUsQ0FBRSx1Q0FBaUIsRUFBRSxtREFBdUIsQ0FBRTtTQUM3RCxDQUFDOztxQkFBQTtJQWtCRixvQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlkscUJBQWEsZ0JBZ0J6QixDQUFBIiwiZmlsZSI6ImJsb2dzL3NvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmxvZyB9IGZyb20gJy4vYmxvZyc7XHJcbmltcG9ydCB7IFNvcnREYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3J0LmRhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU29ydFBvcHVsYXJpdHlDb21wb25lbnR9IGZyb20gJy4vc29ydC5wb3B1bGFyaXR5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSAnLi9ibG9nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NvcnQtYmxvZ3MnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdodG1sL2Jsb2dzL3NvcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogWyBTb3J0RGF0ZUNvbXBvbmVudCwgU29ydFBvcHVsYXJpdHlDb21wb25lbnQgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZGF0ZT0gdHJ1ZTtcclxuICAgIGRhdGVDbGlja2VkKCl7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHBvcENsaWNrZWQoKXtcclxuICAgICAgICB0aGlzLmRhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ibG9nU2VydmljZTogQmxvZ1NlcnZpY2UpIHt9XHJcblxyXG4gICAgYmxvZ3M6IEJsb2dbXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuYmxvZ3MgPSB0aGlzLl9ibG9nU2VydmljZS5nZXRCbG9ncygpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
