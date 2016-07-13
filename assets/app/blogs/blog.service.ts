import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Blog } from "./blog";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class BlogService {

    blogs: Blog[] = [
        new Blog('This is a blog post', 'No1'),
        new Blog('This is another blog post', 'No2')
    ];

    constructor(private _http: Http) {}

    //Seperate functions for 1-Pop Blogs, 2-Date Blogs 3-Recent Blogs
    
    getBlogs(){
        return this._http.get('http://localhost:3000/blogs')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for(let i=0; i<data.length; i++){
                    let blog = new Blog(data[i].content, data[i].title, null, data[i]._id);
                    objs.push(blog);
                }
                return objs;
            })
            .catch(error => Observable.throw(error.json()))
    }
}