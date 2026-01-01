import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjetosService } from '../../services/projetos.service';
import { Projeto } from '../../models/projeto.model';

import { UiInputComponent } from '../../components/ui-input/ui-input.component';
import { UiButtonComponent } from '../../components/ui-button/ui-button.component';

@Component({
  selector: 'app-projetos-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UiInputComponent,
    UiButtonComponent
  ],
  templateUrl: './projetos-form.component.html',
  styleUrl: './projetos-form.component.css'
})
export class ProjetosFormComponent implements OnInit {

  projeto: Projeto = {
    nome: '',
    custo: 0,
    status: 'aguardando'
  };

  editando = false;
  projetoId!: number;

  statusOptions = [
    { value: 'aguardando', label: 'Aguardando' },
    { value: 'em-andamento', label: 'Em andamento' },
    { value: 'finalizado', label: 'Finalizado' }
  ];

  constructor(
    private projetosService: ProjetosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editando = true;
      this.projetoId = Number(id);

      this.projetosService.buscarPorId(this.projetoId)
        .subscribe(projeto => {
          this.projeto = projeto;
        });
    }
  }

  salvar() {
    if (this.editando) {
      this.projetosService.atualizar(this.projetoId, this.projeto)
        .subscribe(() => {
          this.router.navigate(['/projetos']);
        });
    } else {
      this.projetosService.criar(this.projeto)
        .subscribe(() => {
          this.router.navigate(['/projetos']);
        });
    }
  }
}
