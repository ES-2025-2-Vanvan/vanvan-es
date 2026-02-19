import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MotoristaService } from '../../../../services/motoristas.service';

@Component({
  selector: 'app-motorista-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './motorista-edit.component.html',
  styleUrl: './motorista-edit.component.css' 
})
// ... imports ...

export class MotoristaEditComponent implements OnInit {
  @Input() motorista: any; 
  @Output() aoFechar = new EventEmitter<boolean>();

  motoristaEditado: any = {};
  mostrarSenha = false;
  carregando = false;

  constructor(private service: MotoristaService) { }

  ngOnInit(): void {
    // Clona os dados para editar sem mudar a tabela atrás
    if (this.motorista) {
      this.motoristaEditado = { ...this.motorista };
    }
  }

  alternarVisualizacaoSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  fechar() {
    this.aoFechar.emit(false);
  }

  salvar() {
    console.log('Dados a salvar:', this.motoristaEditado);
    
    // Validação básica
    if (!this.motoristaEditado.id) return;

    this.carregando = true;

    this.service.editar(this.motoristaEditado).subscribe({
      next: () => {
        this.carregando = false;
        this.aoFechar.emit(true);
      },
      error: (err: any) => {
        console.error(err);
        this.carregando = false;
        alert('Erro ao salvar');
      }
    });
  }
}