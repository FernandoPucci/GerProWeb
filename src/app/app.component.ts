import { Component, AfterContentChecked } from '@angular/core';

import * as _ from 'lodash';
import * as globals from './globals';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AppService } from './app.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {

  title = globals.APP_TITLE;
  version = globals.VERSION;
  showBar = false;

  constructor(
    private router: Router,
    private serviceHelper: AppService

  ) {
    this.checkBar();
  }

  ngAfterContentChecked(): void {
    this.checkBar();
  }

  logout() {
    localStorage.clear();
    this.checkBar();
    this.router.navigate(['/login']);

  }

  checkBar() {
    this.showBar = localStorage.getItem(this.serviceHelper.AUTH_COOKIE) != null;

  }

}
