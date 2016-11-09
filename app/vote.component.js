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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.voteCount = 0;
                    this.myvote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onClick = function (up) {
                    // clicked up or down ?
                    console.log('you have upvoted: ' + up);
                    // previous vote ?
                    if ((up && this.myvote <= 0) || (!up && this.myvote >= 0)) {
                        this.myvote = this.myvote + (up ? 1 : -1);
                        this.voteCount = this.voteCount + (up ? 1 : -1);
                        // emit Event 
                        this.vote.emit({
                            myvote: this.myvote,
                            votecount: this.voteCount
                        });
                    }
                    else {
                        console.log('already voted');
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myvote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n        <h2>vote here</h2>\n        <div class=\"voter\">\n        <i \n            class=\"glyphicon glyphicon-menu-up vote-button\"\n            (click)=\"onClick(true)\"\n            [class.highlighted]=\"myvote > 0\"\n            >\n        </i>\n        <span class=\"vote-counter\"> {{ voteCount }} </span>\n        <i \n            class=\"glyphicon glyphicon-menu-down vote-button\"\n            (click)=\"onClick(false)\"\n            [class.highlighted]=\"myvote < 0\"\n            >\n        </i>\n        </div>\n    ",
                        styles: [
                            " .voter { width: 20px; text-align: center; color: #999 }",
                            " .vote-button { cursor: pointer; } ",
                            " .vote-counter { font-size: 1.2em; } ",
                            " .highlighted { font-weight: bold; color: orange; }"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map