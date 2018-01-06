import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';

@Injectable()

export class ImageService{

    private query: string;
    private API_KEY: string = environment.PIXABAY_API_KEY;
    private API_URL: string = environment.PIXABAY_PI_URL; 

    private URL: string = this.API_URL + this.API_KEY + '&q='
    private perPage: string = "&per_page=10";

    constructor(private http: Http) {}

    getImage(query) {
        return this.http.get(this.URL + query + this.perPage)
        .map(
            (response: Response) => {
                response.json()
            }
        );
    }
}