# Boas vindas ao repositório do Trybe Futebol Clube!

Aqui você vai encontrar os detalhes do projeto a partir deste repositório.

# Projeto em Back-end

**Criação de API de placares de partidas de futebol, capaz de ser consumida por um front-end já provido nesse projeto**.

<details>
  <summary><strong>Habilidades</strong></summary><br />

  - **Tecnologias utilizadas:** TypeScript, ORM Sequelize, POO, Docker, Tests: mocha, chai, sinon
</details>


<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Será um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.
  - Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3002` do `localhost`; 
  - Pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

2️⃣ **Back-end:**
 - Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
 - A aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`;
 - Garanta que o `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;

3️⃣ **Front-end:**
  - O front já foi desenvolvido pela Trybe, não foi necessário realizar modificações no mesmo.  Dockerfile já foi configurado.
  - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints construido.

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up` ou `npm run compose:up:dev`;
  - Foi configurado as `Dockerfiles` corretamente nas raízes do `front-end` e `back-end`, para conseguir inicializar a aplicação!;

</details>


<details>
  <summary>
    <strong>Como executar o projeto</strong>
  </summary><br>

  - **Execute o comando: "npm run compose:up" ou "`npm run compose:up:dev`", na raiz do diretório do projeto!**
</details>
