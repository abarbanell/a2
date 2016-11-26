System.register(['@angular/core', '@angular/forms', './passwordValidator'], function(exports_1, context_1) {
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
    var core_1, forms_1, passwordValidator_1;
    var PasswordChangeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (passwordValidator_1_1) {
                passwordValidator_1 = passwordValidator_1_1;
            }],
        execute: function() {
            PasswordChangeComponent = (function () {
                function PasswordChangeComponent(fb) {
                    this.completed = false;
                    this.form = fb.group({
                        oldPassword: ['', forms_1.Validators.compose([
                                forms_1.Validators.required,
                                passwordValidator_1.PasswordValidators.cannotContainSpace
                            ])
                        ],
                        newPassword: ['', forms_1.Validators.compose([
                                forms_1.Validators.required,
                                passwordValidator_1.PasswordValidators.cannotContainSpace
                            ])
                        ],
                        confirmPassword: ['', forms_1.Validators.compose([
                                forms_1.Validators.required,
                                passwordValidator_1.PasswordValidators.cannotContainSpace
                            ])
                        ],
                    });
                }
                PasswordChangeComponent.prototype.changePassword = function () {
                    console.log('password changed');
                    this.completed = true;
                };
                PasswordChangeComponent = __decorate([
                    core_1.Component({
                        selector: 'password-change',
                        templateUrl: 'app/password-change.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder])
                ], PasswordChangeComponent);
                return PasswordChangeComponent;
            }());
            exports_1("PasswordChangeComponent", PasswordChangeComponent);
        }
    }
});
//# sourceMappingURL=password-change.component.js.map