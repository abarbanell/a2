System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                        template: "\n        <div class=\"container\">\n        <h1>Udemy course Angular 2 App</h1>\n        <h2> Password change form </h2>\n        <password-change></password-change>\n        <h2> Signup Form </h2>\n        <signup-form></signup-form>\n        <h2> Email Form Component</h2>\n        <email-form></email-form>\n\n        <h2> Contact Form Component</h2>\n        <contact-form></contact-form>\n\n        <h2> Zippy component</h2>\n        <zippy>\n            <div class=\"heading\">Who can see my stuff?</div>\n            <div class=\"body\">People who can see my stuff</div>\n        </zippy>\n        <zippy>\n            <div class=\"heading\">Who can contact me?</div>\n            <div class=\"body\">Some people.</div>\n            <div class=\"body\">More people.</div>\n        </zippy>\n        <tweets></tweets>\n        <vote\n                [voteCount]=\"post.votecount\"\n                [myvote]=\"post.myvote\"\n                (vote)=\"(onVote($event))\"\n            >\n        </vote>\n        <h2>Favorite component</h2>\n        <favorite \n            [isFavorite]=\"post.isFavorite\" \n            [favCount]=\"post.favCount\"\n            (change)=\"onFavoriteChange($event)\">\n        </favorite>\n        <courses></courses>\n        <authors></authors>\n        </div> \n    "
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