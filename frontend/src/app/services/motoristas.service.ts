import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definição do tipo Motorista (pode ficar aqui ou em arquivo separado)
export interface Motorista {
  id: number | string; // O ID é opcional na criação
  nome: string;
  identidade: string;
  cnh: string;
  placa: string;
  veiculo: string;
  email: string;
  senha?: string; // Senha opcional na edição/listagem
}

@Injectable({
  providedIn: 'root' // Isso faz o serviço ficar disponível para o app todo
})
export class MotoristaService {

  private readonly API_URL = 'http://localhost:8080/api/admin';
  constructor(private http: HttpClient) { }

  listar(): Observable<Motorista[]> {
    return this.http.get<Motorista[]>(this.API_URL);
  }

  buscarPorId(id: any): Observable<Motorista> {
    return this.http.get<Motorista>(`${this.API_URL}/${id}`);
  }

  adicionar(motorista: Motorista): Observable<Motorista> {
    return this.http.post<Motorista>(this.API_URL, motorista);
  }

  editar(motorista: Motorista): Observable<Motorista> {
    const url = `${this.API_URL}/${motorista.id}`;
    return this.http.put<Motorista>(url, motorista);
  }
  
  excluir(id: any): Observable<void> {
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<void>(url);
  }
}