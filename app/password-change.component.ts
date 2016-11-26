import {Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PasswordValidators} from  './passwordValidator'

@Component({
    selector: 'password-change',
    templateUrl: 'app/password-change.component.html'
})
export class PasswordChangeComponent {
    form: FormGroup;
    completed = false;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            oldPassword: ['', Validators.compose([
                    Validators.required,
                    PasswordValidators.cannotContainSpace
                ])
            ],
            newPassword: ['', Validators.compose([
                    Validators.required,
                    PasswordValidators.cannotContainSpace
                ])
            ],
            confirmPassword: ['', Validators.compose([
                    Validators.required,
                    PasswordValidators.cannotContainSpace
                ])
            ],
        })
    }

    changePassword() {
        console.log('password changed');
        this.completed = true;
    }
}