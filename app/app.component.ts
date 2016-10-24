import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <favorite 
            [isFavorite]="post.isFavorite" 
            (change)="onFavoriteChange($event)">
        </favorite>
        <favorite 
            [isFavorite]="post.isFavorite" 
            (change)="onFavoriteChange($event)">
        </favorite>
        <courses></courses>
        <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent { 
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event){
        console.log($event);
    }
}