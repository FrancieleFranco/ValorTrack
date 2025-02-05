import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataValeu } from "../interface/data.interface";

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private apiUrl = 'http://localhost:5000/dados';

  constructor(private http: HttpClient) {}

  getDados(): Observable<DataValeu[]> {
    return this.http.get<DataValeu[]>(this.apiUrl);
  }
}
