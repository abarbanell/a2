
import {Component, Input} from "angular2/core"

@Component({
    selector: "zippy",
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <ng-content select=".heading"></ng-content>
                <i 
                    class="glyphicon pull-right"
                    [class.glyphicon-chevron-up]="!expanded"
                    [class.glyphicon-chevron-down]="expanded"
                    (click)="toggle()">
                </i>
            </div>
            <div 
                class="panel-body"
                *ngIf="expanded">
                <ng-content select=".body"></ng-content>
            </div>
        </div>    
        `
})
export class ZippyComponent {
    @Input() title = 'placeholder title';
    @Input() content = 'placeholder content';
    expanded = false;

    toggle() {
        this.expanded = ! this.expanded;
    }
}

