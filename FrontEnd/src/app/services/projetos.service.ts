import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from '../models/projeto.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private apiUrl = 'http://localhost:8000/projetos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Projeto> {
    return this.http.get<Projeto>(`${this.apiUrl}/${id}`);
  }

  criar(projeto: Projeto) {
    return this.http.post(this.apiUrl, projeto);
  }

  atualizar(id: number, projeto: Projeto) {
    return this.http.put(`${this.apiUrl}/${id}`, projeto);
  }

  deletar(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
