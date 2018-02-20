import { Injectable } from '@angular/core';

@Injectable()
export class XyzBrowserStorageService {

    constructor() { }

    getSession(key: string) {
        let data = window.sessionStorage.getItem(key);
        return JSON.parse(data);
    }

    setSession() {}

    removeSession() {}
}