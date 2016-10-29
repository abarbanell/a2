import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {VoteComponent} from './vote.component';
import {TweetsComponent} from './tweets.component';


@Component({
    selector: 'my-app',
    template: `
        <h1>Udemy course Angular 2 App</h1>
        <tweets></tweets>
        <vote
                [voteCount]="post.votecount"
                [myvote]="post.myvote"
                (vote)="(onVote($event))"
            >
        </vote>
        <h2>Favorite component</h2>
        <favorite 
            [isFavorite]="post.isFavorite" 
            [favCount]="post.favCount"
            (change)="onFavoriteChange($event)">
        </favorite>
        <courses></courses>
        <authors></authors>
    `,
    directives: [
            CoursesComponent, 
            AuthorsComponent, 
            FavoriteComponent, 
            VoteComponent, 
            TweetsComponent
        ]
})
export class AppComponent { 
    post = {
        title: "Title",
        isFavorite: false,
        favCount:  10,
        myvote: 0,
        votecount: 17
    }
    onVote($event){
        console.log($event);
    }
    onFavoriteChange($event){
        console.log($event);
    }
}