import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';
import * as globals from '../globals';

@Injectable()
export class MyTasksService {

  constructor(private http: Http) { }
  
  getTasks() {
    console.log(environment.SERVER_API_PATH);
    return this.http.get( environment.SERVER_API_PATH +
                          'mytasks?user_checker_id=' +
                          globals.DEFAULT_USER)
           .map(res => res.json());
  }

}
