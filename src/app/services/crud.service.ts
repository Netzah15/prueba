import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { articulo, categoria } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  URL='http://visorus.ddns.net:8091';

  envioInf(categoria: categoria):Observable<Request>{
    return this.http.post<Request>(`${this.URL}/categoria`, categoria);
  }

  envioArt(articulo: articulo):Observable<Request>{
    return this.http.post<Request>(`${this.URL}/articulo`, articulo);
  }
}
