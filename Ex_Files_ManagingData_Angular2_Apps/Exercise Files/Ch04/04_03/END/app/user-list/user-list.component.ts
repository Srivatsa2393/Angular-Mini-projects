import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { XyzFilterByService } from '../shared/filter-by.service';
import { XyzUserListService } from './user-list.service';

@Component({
  selector: 'xyz-user-list',
  providers: [ XyzFilterByService, XyzUserListService ],
  templateUrl: 'app/user-list/user-list.component.html'
})
export class XyzUserListComponent implements OnInit {
  filter: string;
  users: User[];
  storageKey: string;
  path: string;
  revision: string;

  constructor(
    private http: Http,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private xyzUserListService: XyzUserListService,
    private xyzFilterByService: XyzFilterByService
  ) {
    this.storageKey = 'filter';
    this.activatedRoute.url.subscribe(url => this.path = url[0].path);
  }

  ngOnInit() {
    this.activatedRoute.fragment.subscribe(fragment => {
      this.filter = (fragment) ? fragment : '';
    });
    this.http.get('http://localhost:5984/user/settings').subscribe(response => {
      let settings = response.json();
      this.revision = settings._rev;
      this.filter = (settings.filter && settings.filter.length) ? settings.filter : '';

      this.xyzUserListService.get().then(users => {
        if (this.filter && this.filter.length) {
          this.users = this.xyzFilterByService.get({ data: users, filter: this.filter})
        } else {
          this.users = users;
        }
      });
    })
    
  }

  onFilter(filter) {
    this.filter = filter;
    let filterParams = {};
    filterParams[this.storageKey] = this.filter;
    this.router.navigate([ this.path ],  { fragment: this.filter });
    this.xyzUserListService.get().then(users => {
      this.users = this.xyzFilterByService.get({ data: users, filter: filter });
    })
  }

  onClear() {
    this.router.navigate([ this.path ],  { fragment: '' });
    this.xyzUserListService.get().then(users => this.users = users);
    this.filter = '';
  }
}
