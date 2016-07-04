import { Component } from '@angular/core';

@Component({
    selector: 'sort-blogs',
    templateUrl: 'html/blogs/sort.component.html'
})

export class SortComponent{
    date= true;
    dateClicked(){
        this.date = true;
    }
    popClicked(){
        this.date = false;
    }
}