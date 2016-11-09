import {Component} from '@angular/core';
import {AuthorService} from './author.service';

@Component({
    selector: "authors",
    template: `
        <h2> Authors </h2>
        <ol>
            <li *ngFor="let author of authors">
                {{ author }}
            </li>
        </ol>
        `,
        providers: [AuthorService]
})
export class AuthorsComponent{
    title: "the title of the authors page";
    authors: string[];

    constructor(private authorService: AuthorService){
        this.authors = this.authorService.getAuthors();
    }

}