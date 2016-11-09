
import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'vote',
    template: `
        <h2>vote here</h2>
        <div class="voter">
        <i 
            class="glyphicon glyphicon-menu-up vote-button"
            (click)="onClick(true)"
            [class.highlighted]="myvote > 0"
            >
        </i>
        <span class="vote-counter"> {{ voteCount }} </span>
        <i 
            class="glyphicon glyphicon-menu-down vote-button"
            (click)="onClick(false)"
            [class.highlighted]="myvote < 0"
            >
        </i>
        </div>
    `,
    styles: [
        " .voter { width: 20px; text-align: center; color: #999 }",
        " .vote-button { cursor: pointer; } ",
        " .vote-counter { font-size: 1.2em; } ",
        " .highlighted { font-weight: bold; color: orange; }"
    ]
})
export class VoteComponent {
    @Input() voteCount = 0;
    @Input() myvote = 0
    @Output() vote = new EventEmitter();

    onClick(up: boolean) {
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
            })
        } else {
            console.log('already voted');
        }
    }
}