System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet, TweetService;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet(title, image) {
                    this.title = "tweet title";
                    this.image = "http://lorempixel.com/100/100/people";
                    this.title = title;
                    this.image = image;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    var tweets = [
                        new Tweet("John Smith", "http://lorempixel.com/100/100/people?1"),
                        new Tweet("Joe Bloggs", "http://lorempixel.com/100/100/people?2"),
                        new Tweet("Dick Bloke", "http://lorempixel.com/100/100/people?3"),
                        new Tweet("Don Ald", "http://lorempixel.com/100/100/people?4"),
                    ];
                    return tweets;
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map