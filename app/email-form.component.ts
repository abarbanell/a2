import {Component} from "@angular/core";


@Component({
    selector: 'email-form',
    templateUrl: 'app/email-form.component.html'
})
export class EmailFormComponent {

    onSubmit(x) {
        console.log(x);
    }
}