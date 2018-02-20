import { Injectable } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class XyzUrlService {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    get(type: string): Observable<any> {
        return this.activatedRoute[type];
    }
}