
export class Tweet {
    title = "tweet title";
    image = "http://lorempixel.com/100/100/people";

    constructor(title:string, image:string) {
        this.title = title;
        this.image = image
    }
}

export class TweetService {
    getTweets(): Tweet[] {
        const tweets = [
            new Tweet("John Smith", "http://lorempixel.com/100/100/people?1"),
            new Tweet("Joe Bloggs", "http://lorempixel.com/100/100/people?2"),
            new Tweet("Dick Bloke", "http://lorempixel.com/100/100/people?3"),
            new Tweet("Don Ald", "http://lorempixel.com/100/100/people?4"),
        ]
        return tweets;
    }
}