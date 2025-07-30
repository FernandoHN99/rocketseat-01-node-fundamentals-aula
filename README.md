## Introdução
Este projeto é uma API RESTful simples construída com Node.js puro, sem frameworks, para gerenciar usuários. Ele utiliza um arquivo JSON como banco de dados persistente e implementa operações CRUD (Create, Read, Update, Delete) para a entidade "users".

## Funcionalidades

A API possui as seguintes rotas:

### Listar Usuários

- **GET** users
  - Lista todos os usuários.
  - Suporta filtro por nome ou email usando o parâmetro de query `search`.
  - Exemplo: `GET /users?search=nome`

### Criar Usuário

- **POST** users
  - Cria um novo usuário.
  - Corpo da requisição (JSON):
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@exemplo.com"
    }
    ```

### Atualizar Usuário

- **PUT** `/users/:id`
  - Atualiza nome e email de um usuário existente.
  - Corpo da requisição (JSON):
    ```json
    {
      "name": "Novo Nome",
      "email": "novoemail@exemplo.com"
    }
    ```

### Deletar Usuário

- **DELETE** `/users/:id`
  - Remove um usuário pelo ID.

## Como iniciar o projeto

1. **Clone o repositório e acesse a pasta do projeto:**
   ```sh
   git clone <url-do-repositorio>
   cd rocketseat-01-node-fundamentals-aula
   ```

2. **Instale as dependências (se houver):**
   - Este projeto não possui dependências externas além do Node.js.

3. **Inicie o servidor em modo desenvolvimento:**
   ```sh
   npm run dev
   ```

4. **Acesse a API:**
   - O servidor estará disponível em `http://localhost:3333`.

## Estrutura do Projeto

- server.js: Inicializa o servidor HTTP e gerencia as rotas.
- routes.js: Define as rotas e seus handlers.
- database.js: Implementa a persistência dos dados em db.json.
- json.js: Middleware para tratar o corpo das requisições JSON.
- utils: Funções utilitárias para manipulação de rotas e query params.
- db.json: Arquivo que armazena os dados dos usuários.

