# Sistema de Acompanhamento de Projetos

Aplicação full stack para gerenciamento de projetos, com cadastro, edição, exclusão e acompanhamento de status.

## Tecnologias utilizadas
- Frontend: Angular
- Backend: Node.js + Express
- Banco de dados: SQLite
- Infraestrutura: Docker & Docker Compose

---

## Como rodar o projeto com Docker (Recomendado)

Esta é a forma mais rápida, pois configura o ambiente de Backend e Frontend automaticamente.

### Pré-requisitos
- Docker Desktop instalado e rodando.

### Passo a passo
1. Na raiz do projeto, abra o terminal e execute:

   docker-compose up --build
   
Aguarde a finalização da instalação das dependências e subida dos containers.

Acesse a aplicação:

Frontend: http://localhost:4200

Backend (API): http://localhost:8000

Como rodar o projeto localmente (Sem Docker)
Pré-requisitos
Node.js (versão 18 ou superior)

Angular CLI (npm install -g @angular/cli)

Backend
Entre na pasta: cd BackEnd

Instale as dependências: npm install

Rode o servidor: npm run dev

Frontend
Entre na pasta: cd FrontEnd

Instale as dependências: npm install

Rode a aplicação: ng serve