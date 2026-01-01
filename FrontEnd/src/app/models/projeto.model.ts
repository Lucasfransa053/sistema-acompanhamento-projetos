export interface Projeto {
  id?: number;
  nome: string;
  custo: number;
  status: 'aguardando' | 'em-andamento' | 'finalizado';
}
