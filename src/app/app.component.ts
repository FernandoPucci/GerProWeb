import { Component } from '@angular/core';

import * as _ from 'lodash';
import * as globals from './globals';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = globals.APP_TITLE;
  version = globals.VERSION;
  
  //list = _.map([1,2,3], (n) => `# ${n}`); //lodash example
}
