import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MotoristaService } from '../../../../services/motoristas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-motorista-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motorista-delete.component.html',
})
export class MotoristaDeleteComponent {

  // Recebe o motorista selecionado pelo componente pai
  @Input() motorista: any;

  // Emite evento para fechar o modal (true = excluiu, false = cancelou)
  @Output() aoFechar = new EventEmitter<boolean>();

  // Controle de estado para desabilitar botão durante o processo
  carregando: boolean = false;

  constructor(private service: MotoristaService) {}

  // Fecha o modal sem fazer nada
  fechar() {
    if (!this.carregando) {
      this.aoFechar.emit(false);
    }
  }

  // Chama o serviço para apagar o registro
  confirmarExclusao() {
    // Validação de segurança
    if (!this.motorista || !this.motorista.id) {
      alert('Erro: Motorista não identificado.');
      return;
    }

    this.carregando = true;

    this.service.excluir(this.motorista.id).subscribe({
      next: () => {
        // Sucesso: Avisa o pai para atualizar a lista
        this.carregando = false;
        this.aoFechar.emit(true);
      },
      error: (erro: any) => {
        // Erro: Mostra log e alerta o usuário
        console.error('Erro ao excluir motorista:', erro);
        this.carregando = false;
        alert('Não foi possível excluir o motorista. Tente novamente.');
      }
    });
  }
}