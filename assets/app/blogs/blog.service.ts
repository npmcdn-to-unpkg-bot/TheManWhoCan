import { Blog } from "./blog";

export class BlogService {
    blogs: Blog[] = [
        new Blog('This is a blog post', 'No1'),
        new Blog('This is another blog post', 'No2')
    ];
    //Seperate functions for 1-Pop Blogs, 2-Date Blogs 3-Recent Blogs
    getBlogs(){
        return this.blogs;
    }
}