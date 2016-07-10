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
var SortPopularityComponent = (function () {
    function SortPopularityComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', blog_1.Blog)
    ], SortPopularityComponent.prototype, "blog", void 0);
    SortPopularityComponent = __decorate([
        core_1.Component({
            selector: 'my-sort-popularity',
            templateUrl: 'html/blogs/sort.popularity.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SortPopularityComponent);
    return SortPopularityComponent;
}());
exports.SortPopularityComponent = SortPopularityComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL3NvcnQucG9wdWxhcml0eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxxQkFBcUIsUUFBUSxDQUFDLENBQUE7QUFPOUI7SUFBQTtJQUVBLENBQUM7SUFERztRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFOWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSwyQ0FBMkM7U0FDM0QsQ0FBQzs7K0JBQUE7SUFJRiw4QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksK0JBQXVCLDBCQUVuQyxDQUFBIiwiZmlsZSI6ImJsb2dzL3NvcnQucG9wdWxhcml0eS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJsb2cgfSBmcm9tICcuL2Jsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXNvcnQtcG9wdWxhcml0eScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvYmxvZ3Mvc29ydC5wb3B1bGFyaXR5LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRQb3B1bGFyaXR5Q29tcG9uZW50e1xyXG4gICAgQElucHV0KCkgYmxvZzpCbG9nOyBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
