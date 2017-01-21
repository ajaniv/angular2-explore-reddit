import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../shared/article';
@Component( {
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @Input()
    articles: Article[];

    ngOnInit() {
    }
    addArticle( title: HTMLInputElement, link: HTMLInputElement ): boolean {
        console.log( `Adding article title: ${title.value} and link: ${link.value}` );
        this.articles.push( new Article( title.value, link.value, 0 ) );
        title.value = '';
        link.value = '';
        return false;
    }

}
