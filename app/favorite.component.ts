
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon-heart { color: #ccc; cursor: pointer; }
        .highlighted { color: deeppink; } 
        `
    ]
})
export class FavoriteComponent {
    @Input() isFavorite = false;
    @Input() favCount = 0

    @Output() change = new EventEmitter();

    onClick(){
        if (this.isFavorite) {
            this.favCount--;
        } else {
            this.favCount++;
        }
        this.isFavorite = ! this.isFavorite;
        this.change.emit({ newValue: this.isFavorite, newCount: this.favCount });

    }
}