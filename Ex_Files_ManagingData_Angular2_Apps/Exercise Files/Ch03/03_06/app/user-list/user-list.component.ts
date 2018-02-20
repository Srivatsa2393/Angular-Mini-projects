import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private xyzUserListService: XyzUserListService,
    private xyzFilterByService: XyzFilterByService
  ) {
    this.storageKey = 'filter';
    this.activatedRoute.url.subscribe(url => this.path = url[0].path);
  }

  ngOnInit() {
    let storageValue = window.localStorage.getItem(this.storageKey);
    this.filter = (storageValue) ? JSON.parse(storageValue) : '';
    this.xyzUserListService.get().then(users => {
      if (this.filter && this.filter.length) {
        this.users = this.xyzFilterByService.get({ data: users, filter: this.filter})
      } else {
        this.users = users;
      }
    });
  }

  onFilter(filter) {
    this.filter = filter;
    let storageValue = JSON.stringify(filter);
    window.localStorage.setItem(this.storageKey, storageValue);
    let filterParams = {};
    filterParams[this.storageKey] = this.filter;
    this.router.navigate([ this.path, filterParams ]);
    this.xyzUserListService.get().then(users => {
      this.users = this.xyzFilterByService.get({ data: users, filter: filter });
    })
  }

  onClear() {
    window.localStorage.removeItem(this.storageKey);
    this.xyzUserListService.get().then(users => this.users = users);
    this.filter = '';
  }
}
