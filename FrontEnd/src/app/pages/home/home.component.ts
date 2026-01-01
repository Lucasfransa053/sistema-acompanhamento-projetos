import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosService } from '../../services/projetos.service';
import { Projeto } from '../../models/projeto.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  total = 0;
  aguardando = 0;
  andamento = 0;
  finalizado = 0;

  constructor(private projetosService: ProjetosService) {}

  ngOnInit(): void {
    this.projetosService.listar().subscribe((projetos: Projeto[]) => {
      this.total = projetos.length;
      this.aguardando = projetos.filter(p => p.status === 'aguardando').length;
      this.andamento = projetos.filter(p => p.status === 'em-andamento').length;
      this.finalizado = projetos.filter(p => p.status === 'finalizado').length;
    });
  }

}
