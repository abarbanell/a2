import {Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UsernameValidators} from  './usernameValidator'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignupFormComponent {
    form: FormGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.compose([
                    Validators.required,
                    UsernameValidators.cannotContainSpace])
            ],
            password: ['', Validators.required]
        });
    }
    // form = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });
    signup() {
            console.log(this.form.value);
    }
}