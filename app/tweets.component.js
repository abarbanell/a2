System.register(['@angular/core', './tweet.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_service_1;
    var TweetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetsComponent = (function () {
                function TweetsComponent(tweetService) {
                    this.tweetService = tweetService;
                    this.tweets = this.tweetService.getTweets();
                }
                TweetsComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        template: "\n        <h2>Tweets</h2>\n                <div *ngFor=\"let tweet of tweets\" class=\"media\">\n                    <a class=\"media-left\" href=\"#\">\n                        <img class=\"media-object\" src=\"{{ tweet.image }}\" alt=\"Generic placeholder image\">\n                    </a>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\">{{ tweet.title }}</h4>\n                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                        <span><favorite></favorite></span>\n                    </div>\n                </div>  \n\n        ",
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetsComponent);
                return TweetsComponent;
            }());
            exports_1("TweetsComponent", TweetsComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map