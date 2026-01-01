import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjetosService } from '../../services/projetos.service';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos: Projeto[] = [];

  constructor(private projetosService: ProjetosService) {}

  ngOnInit(): void {
    this.carregarProjetos();
  }

  carregarProjetos() {
    this.projetosService.listar().subscribe(dados => {
      this.projetos = dados;
    });
  }

  deletarProjeto(id: number) {
    const confirmar = confirm('Tem certeza que deseja excluir este projeto?');

    if (!confirmar) return;

    this.projetosService.deletar(id).subscribe(() => {
      // remove o projeto da lista sem recarregar a página
      this.projetos = this.projetos.filter(p => p.id !== id);
    });
  }
}
