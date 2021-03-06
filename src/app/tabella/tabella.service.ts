import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabellaService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('./assets/tabella.json');
  }
}
