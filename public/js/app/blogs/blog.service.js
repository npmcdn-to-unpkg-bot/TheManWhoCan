"use strict";
var blog_1 = require("./blog");
var BlogService = (function () {
    function BlogService() {
        this.blogs = [
            new blog_1.Blog('This is a blog post', 'No1'),
            new blog_1.Blog('This is another blog post', 'No2')
        ];
    }
    //Seperate functions for 1-Pop Blogs, 2-Date Blogs 3-Recent Blogs
    BlogService.prototype.getBlogs = function () {
        return this.blogs;
    };
    return BlogService;
}());
exports.BlogService = BlogService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2dzL2Jsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXFCLFFBQVEsQ0FBQyxDQUFBO0FBRTlCO0lBQUE7UUFDSSxVQUFLLEdBQVc7WUFDWixJQUFJLFdBQUksQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUM7WUFDdEMsSUFBSSxXQUFJLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDO1NBQy9DLENBQUM7SUFLTixDQUFDO0lBSkcsaUVBQWlFO0lBQ2pFLDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLG1CQUFXLGNBU3ZCLENBQUEiLCJmaWxlIjoiYmxvZ3MvYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvZyB9IGZyb20gXCIuL2Jsb2dcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9nU2VydmljZSB7XHJcbiAgICBibG9nczogQmxvZ1tdID0gW1xyXG4gICAgICAgIG5ldyBCbG9nKCdUaGlzIGlzIGEgYmxvZyBwb3N0JywgJ05vMScpLFxyXG4gICAgICAgIG5ldyBCbG9nKCdUaGlzIGlzIGFub3RoZXIgYmxvZyBwb3N0JywgJ05vMicpXHJcbiAgICBdO1xyXG4gICAgLy9TZXBlcmF0ZSBmdW5jdGlvbnMgZm9yIDEtUG9wIEJsb2dzLCAyLURhdGUgQmxvZ3MgMy1SZWNlbnQgQmxvZ3NcclxuICAgIGdldEJsb2dzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvZ3M7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
