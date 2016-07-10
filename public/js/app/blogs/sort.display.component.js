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
var SortDisplayComponent = (function () {
    function SortDisplayComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', blog_1.Blog)
    ], SortDisplayComponent.prototype, "blog", void 0);
    SortDisplayComponent = __decorate([
        core_1.Component({
            selector: 'my-sort-display',
            templateUrl: 'html/blogs/sort.display.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SortDisplayComponent);
    return SortDisplayComponent;
}());
exports.SortDisplayComponent = SortDisplayComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL3NvcnQuZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxxQkFBcUIsUUFBUSxDQUFDLENBQUE7QUFPOUI7SUFBQTtJQUVBLENBQUM7SUFERztRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFOWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSx3Q0FBd0M7U0FDeEQsQ0FBQzs7NEJBQUE7SUFJRiwyQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksNEJBQW9CLHVCQUVoQyxDQUFBIiwiZmlsZSI6ImJsb2dzL3NvcnQuZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJsb2cgfSBmcm9tICcuL2Jsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXNvcnQtZGlzcGxheScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2h0bWwvYmxvZ3Mvc29ydC5kaXNwbGF5LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnREaXNwbGF5Q29tcG9uZW50e1xyXG4gICAgQElucHV0KCkgYmxvZzpCbG9nOyBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
