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
var SortDateComponent = (function () {
    function SortDateComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', blog_1.Blog)
    ], SortDateComponent.prototype, "blog", void 0);
    SortDateComponent = __decorate([
        core_1.Component({
            selector: 'my-sort-date',
            templateUrl: 'html/blogs/sort.date.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SortDateComponent);
    return SortDateComponent;
}());
exports.SortDateComponent = SortDateComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL3NvcnQuZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxxQkFBcUIsUUFBUSxDQUFDLENBQUE7QUFPOUI7SUFBQTtJQUVBLENBQUM7SUFERztRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFOWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUscUNBQXFDO1NBQ3JELENBQUM7O3lCQUFBO0lBSUYsd0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHlCQUFpQixvQkFFN0IsQ0FBQSIsImZpbGUiOiJibG9ncy9zb3J0LmRhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCbG9nIH0gZnJvbSAnLi9ibG9nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1zb3J0LWRhdGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdodG1sL2Jsb2dzL3NvcnQuZGF0ZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3J0RGF0ZUNvbXBvbmVudHtcclxuICAgIEBJbnB1dCgpIGJsb2c6QmxvZzsgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
