import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {VoteComponent} from './vote.component';
import {TweetsComponent} from './tweets.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component'

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
        <h1>Udemy course Angular 2 App</h1>
        <h2> Contact Form Component</h2>
        <contact-form></contact-form>

        <h2> Zippy component</h2>
        <zippy>
            <div class="heading">Who can see my stuff?</div>
            <div class="body">People who can see my stuff</div>
        </zippy>
        <zippy>
            <div class="heading">Who can contact me?</div>
            <div class="body">Some people.</div>
            <div class="body">More people.</div>
        </zippy>
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
        </div> 
    `,
    directives: [
            CoursesComponent, 
            AuthorsComponent, 
            FavoriteComponent, 
            VoteComponent, 
            TweetsComponent,
            ZippyComponent,
            ContactFormComponent
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