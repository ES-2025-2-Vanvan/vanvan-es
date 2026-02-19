import { Component, OnInit } from '@angular/core';
import { MotoristaService } from '../../services/motoristas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MotoristaDeleteComponent } from './components/motorista-delete/motorista-delete.component';
import { MotoristaAdd } from './components/motorista-add/motorista-add';
import { MotoristaEditComponent } from './components/motorista-edit/motorista-edit.component';


@Component({
  selector: 'app-motoristas',
  standalone: true,
  imports: [CommonModule, FormsModule, MotoristaDeleteComponent, MotoristaAdd, MotoristaEditComponent],
  templateUrl: './motoristas.component.html',
})
export class MotoristasComponent implements OnInit {

  // --- VARIÁVEIS DE DADOS ---
  listaMotoristas: any[] = [];         // Lista completa vinda da API
  motoristasFiltrados: any[] = [
    { id: 1, nome: 'João Silva', identidade: '123.456.789-00', cnh: 'CNH123456', placa: 'ABC-1234', veiculo: 'Van', email: 'joao.silva@email.com', senha: 'senha123', status: 'Ativo' },
    { id: 2, nome: 'Maria Oliveira', identidade: '987.654.321-00', cnh: 'CNH987654', placa: 'XYZ-5678', veiculo: 'Carro', email: 'maria.oliveira@email.com', senha: 'senha456', status: 'Em análise' },
    { id: 3, nome: 'Carlos Pereira', identidade: '456.789.123-00', cnh: 'CNH456789', placa: 'DEF-5678', veiculo: 'Moto', email: 'carlos.pereira@email.com', senha: 'senha789', status: 'Recusado' }
  ];    
  termoBusca: string = '';            
  carregando: boolean = false;         

  // --- CONTROLE DE MODAIS ---
  modalAdicionarAberto: boolean = false;
  modalEditarAberto: boolean = false;
  modalExcluirAberto: boolean = false;

  // --- MOTORISTA SELECIONADO (Para Edição ou Exclusão) ---
  motoristaSelecionado: any = null;

  constructor(private service: MotoristaService) { }

  ngOnInit(): void {
    this.carregarMotoristas();
  }

  // --- 1. CARREGAR DADOS ---
  carregarMotoristas() {
    this.carregando = true;
    this.service.listar().subscribe({
      next: (dados: any[]) => {
        this.listaMotoristas = dados;
        this.filtrarMotoristas(); // Atualiza a lista visual
        this.carregando = false;
      },
      error: (erro: any) => {
        console.error('Erro ao buscar motoristas:', erro);
        this.carregando = false;
      }
    });
  }

  // --- 2. FILTRO DE BUSCA ---
  filtrarMotoristas() {
    if (!this.termoBusca.trim()) {
      this.motoristasFiltrados = [...this.listaMotoristas];
    } else {
      const termo = this.termoBusca.toLowerCase();
      this.motoristasFiltrados = this.listaMotoristas.filter(m => 
        m.nome.toLowerCase().includes(termo) ||
        m.cnh.includes(termo) ||
        m.placa.toLowerCase().includes(termo)
      );
    }
  }

  // --- 3. LÓGICA DO MODAL ADICIONAR ---
  abrirModalAdicionar() {
    this.modalAdicionarAberto = true;
  }

  fecharModalAdicionar(sucesso: boolean) {
    this.modalAdicionarAberto = false;
    if (sucesso) {
      this.carregarMotoristas(); // Recarrega a lista se salvou
    }
  }

  // --- 4. LÓGICA DO MODAL EDITAR ---
  abrirModalEditar(motorista: any) {
    // Clona o objeto para não alterar a tabela em tempo real antes de salvar
    this.motoristaSelecionado = { ...motorista };
    this.modalEditarAberto = true;
  }

  fecharModalEditar(sucesso: boolean) {
    this.modalEditarAberto = false;
    this.motoristaSelecionado = null;
    if (sucesso) {
      this.carregarMotoristas();
    }
  }

  // --- 5. LÓGICA DO MODAL EXCLUIR ---
  abrirModalExcluir(motorista: any) {
    this.motoristaSelecionado = motorista; // Guarda quem vamos deletar
    this.modalExcluirAberto = true;
  }

  fecharModalExcluir(sucesso: boolean) {
    this.modalExcluirAberto = false;
    this.motoristaSelecionado = null; // Limpa a seleção
    
    if (sucesso) {
      // Se o componente filho retornou TRUE, significa que deletou no banco
      this.carregarMotoristas(); 
    }
  }
}