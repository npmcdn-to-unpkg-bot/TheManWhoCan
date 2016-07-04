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
var router_1 = require('@angular/router');
var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'my-nav',
            template: "\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" \n                class=\"navbar-toggle collapsed\" \n                data-toggle=\"collapse\" \n                data-target=\"#bs-example-navbar-collapse-1\" \n                aria-expanded=\"false\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/']\"><i class=\"glyphicon glyphicon-check\"></i> TheManWhoCan</a>\n                </div>\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <ul class=\"nav navbar-nav\">\n                        <li><a [routerLink]=\"['/']\">Home</a></li>\n                        <li><a [routerLink]=\"['/blogs']\">Blogs</a></li>\n                    </ul>\n                    <form class=\"navbar-form navbar-left\" role=\"search\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search Blogs\">\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-default\">Search</button>\n                    </form>\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li><a [routerLink]=\"['/about']\">About Me</a></li>\n                        <li>  \n                            <p class=\"navbar-btn\">\n                                <a [routerLink]=\"['/authenticate']\" class=\"btn btn-info\">Login</a>\n                            </p>\n                        </li>\n                        <li>  \n                            <p class=\"navbar-btn\">\n                                <a [routerLink]=\"['/authenticate']\" class=\"btn btn-info\">Sign Up</a>\n                            </p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav> <!-- Navbar End -->\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pc2MvbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBa0RwRDtJQUFBO0lBRUEsQ0FBQztJQWxERDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsa3ZFQTJDVDtZQUNELFVBQVUsRUFBRSxDQUFFLDBCQUFpQixDQUFFO1NBQ3BDLENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoibWlzYy9uYXYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1uYXYnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdmJhci10b2dnbGUgY29sbGFwc2VkXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCIgXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBbcm91dGVyTGlua109XCJbJy8nXVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGVja1wiPjwvaT4gVGhlTWFuV2hvQ2FuPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJicy1leGFtcGxlLW5hdmJhci1jb2xsYXBzZS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvYmxvZ3MnXVwiPkJsb2dzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cIm5hdmJhci1mb3JtIG5hdmJhci1sZWZ0XCIgcm9sZT1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBCbG9nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9hYm91dCddXCI+QWJvdXQgTWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hdmJhci1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9hdXRoZW50aWNhdGUnXVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYXZiYXItYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvYXV0aGVudGljYXRlJ11cIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPlNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj4gPCEtLSBOYXZiYXIgRW5kIC0tPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IHtcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
