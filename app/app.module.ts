import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { AppComponent }   from './app.component';

import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {VoteComponent} from './vote.component';
import {TweetsComponent} from './tweets.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {EmailFormComponent} from './email-form.component';
import {SignupFormComponent} from './signup-form.component';
import {PasswordChangeComponent} from './password-change.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    CoursesComponent, 
    AuthorsComponent, 
    FavoriteComponent, 
    VoteComponent,
    TweetsComponent, 
    ZippyComponent, 
    ContactFormComponent, 
    EmailFormComponent,
    SignupFormComponent,
    PasswordChangeComponent  
  ],
  bootstrap:    [ 
    AppComponent
  ]
})
export class AppModule { }
