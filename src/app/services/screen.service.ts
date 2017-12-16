import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';
import * as globals from '../globals';

@Injectable()
export class ScreenService {

  constructor(private http: Http) { }

  getPlaces() {
    return this.http.get(environment.SERVER_API_PATH + 'companies/places?company_id=' + globals.DEFAULT_COMPANY).map(res => res.json());
  }

  getNotifications(){
    return this.http.get(environment.SERVER_API_PATH + 'parameters?category_name=tipos_notificacoes').map(res => res.json());
  }

  getPeriodicities(){
    return this.http.get(environment.SERVER_API_PATH + 'parameters?category_name=periodicidades').map(res => res.json());
  }

  getUserCheckers(companyId){
    return this.http.get(environment.SERVER_API_PATH + 'companies/users?company_id=' + companyId).map(res => res.json());
  }


}
