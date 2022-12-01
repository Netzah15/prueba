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

  // POST //
  envioInf(categoria: categoria):Observable<Request>{
    return this.http.post<Request>(`${this.URL}/categoria`, categoria);
  }

  envioArt(articulo: articulo):Observable<Request>{
    return this.http.post<Request>(`${this.URL}/articulo`, articulo);
  }

  // GET //
  getCategorias(){
    return this.http.get(`${this.URL}/categoria`);
  }

  getArticulos(){
    return this.http.get(`${this.URL}/articulo`);
  }

  // DELETE //
  eliminarCat(id){
    return this.http.delete(`${this.URL}/categoria/` + id);
  }

  eliminarArt(id){
    return this.http.delete(`${this.URL}/articulo/` + id);
  }

  //UPDATE

  updateCat(categoria:categoria, id){
    return this.http.put(`${this.URL}/categoria/` + id, categoria);
  }

  updateArt(articulo: articulo, id){
    return this.http.put(`${this.URL}/articulo/` + id, articulo);
  }
}
