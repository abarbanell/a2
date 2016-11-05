System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './vote.component', './tweets.component', './zippy.component', './contact-form.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favorite_component_1, vote_component_1, tweets_component_1, zippy_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavorite: false,
                        favCount: 10,
                        myvote: 0,
                        votecount: 17
                    };
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container\">\n        <h1>Udemy course Angular 2 App</h1>\n        <h2> Contact Form Component</h2>\n        <contact-form></contact-form>\n\n        <h2> Zippy component</h2>\n        <zippy>\n            <div class=\"heading\">Who can see my stuff?</div>\n            <div class=\"body\">People who can see my stuff</div>\n        </zippy>\n        <zippy>\n            <div class=\"heading\">Who can contact me?</div>\n            <div class=\"body\">Some people.</div>\n            <div class=\"body\">More people.</div>\n        </zippy>\n        <tweets></tweets>\n        <vote\n                [voteCount]=\"post.votecount\"\n                [myvote]=\"post.myvote\"\n                (vote)=\"(onVote($event))\"\n            >\n        </vote>\n        <h2>Favorite component</h2>\n        <favorite \n            [isFavorite]=\"post.isFavorite\" \n            [favCount]=\"post.favCount\"\n            (change)=\"onFavoriteChange($event)\">\n        </favorite>\n        <courses></courses>\n        <authors></authors>\n        </div> \n    ",
                        directives: [
                            courses_component_1.CoursesComponent,
                            authors_component_1.AuthorsComponent,
                            favorite_component_1.FavoriteComponent,
                            vote_component_1.VoteComponent,
                            tweets_component_1.TweetsComponent,
                            zippy_component_1.ZippyComponent,
                            contact_form_component_1.ContactFormComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map