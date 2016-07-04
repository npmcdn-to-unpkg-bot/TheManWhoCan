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
var SortComponent = (function () {
    function SortComponent() {
        this.date = true;
    }
    SortComponent.prototype.dateClicked = function () {
        this.date = true;
    };
    SortComponent.prototype.popClicked = function () {
        this.date = false;
    };
    SortComponent = __decorate([
        core_1.Component({
            selector: 'sort-blogs',
            templateUrl: 'html/blogs/sort.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SortComponent);
    return SortComponent;
}());
exports.SortComponent = SortComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL3NvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFPMUM7SUFBQTtRQUNJLFNBQUksR0FBRSxJQUFJLENBQUM7SUFPZixDQUFDO0lBTkcsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxrQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQVpMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzs7cUJBQUE7SUFVRixvQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlkscUJBQWEsZ0JBUXpCLENBQUEiLCJmaWxlIjoiYmxvZ3Mvc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzb3J0LWJsb2dzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnaHRtbC9ibG9ncy9zb3J0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvcnRDb21wb25lbnR7XHJcbiAgICBkYXRlPSB0cnVlO1xyXG4gICAgZGF0ZUNsaWNrZWQoKXtcclxuICAgICAgICB0aGlzLmRhdGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcG9wQ2xpY2tlZCgpe1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
