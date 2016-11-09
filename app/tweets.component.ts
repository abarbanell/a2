import {Component} from '@angular/core'
import {Tweet, TweetService} from './tweet.service'
import {FavoriteComponent} from './favorite.component'
  
@Component({
    selector: 'tweets',
    template: `
        <h2>Tweets</h2>
                <div *ngFor="let tweet of tweets" class="media">
                    <a class="media-left" href="#">
                        <img class="media-object" src="{{ tweet.image }}" alt="Generic placeholder image">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">{{ tweet.title }}</h4>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        <span><favorite></favorite></span>
                    </div>
                </div>  

        `,
        providers: [TweetService]
})
export class TweetsComponent {
    tweets: Tweet[];

    constructor(private tweetService: TweetService) {
        this.tweets = this.tweetService.getTweets();

    }
}