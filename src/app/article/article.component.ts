import { Component, OnInit } from '@angular/core';

import { Article } from '../shared/article'

@Component( {
    selector: 'app-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    article: Article;
    constructor() { }

    ngOnInit() {
    }
    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }

}
