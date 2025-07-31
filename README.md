# 👤 User Manager API - Node.js Puro

## 📝 Descrição

Este projeto é uma API RESTful simples para gerenciamento de usuários, desenvolvida em Node.js puro (sem frameworks como Express).
Ela permite criar, listar, atualizar e deletar usuários, utilizando um arquivo JSON como banco de dados persistente.

> 💡 Projeto baseado em aulas do curso *Fundamentos do Node.js* da Rocketseat

## ⚙️ Pré-requisitos

* Node.js 18 ou superior instalado

## 🚀 Como rodar o projeto

1. **Inicie o servidor em modo desenvolvimento:**

   ```sh
   npm run dev
   ```
   O servidor estará disponível em `http://localhost:3333`.

2. **Testes de API:**

   Utilize o arquivo `api-requests/api-tests-node-fundamentals-aula.postman.json` no Postman para testar os endpoints.


## 📌 Endpoints

| Método | Rota         | Descrição                                                         |
| ------ | ------------ | ----------------------------------------------------------------- |
| GET    | `/users`     | Lista todos os usuários. Suporta filtro por `?search=nomeOuEmail` |
| POST   | `/users`     | Cria um novo usuário com `name` e `email`                         |
| PUT    | `/users/:id` | Atualiza o `name` e `email` de um usuário existente               |
| DELETE | `/users/:id` | Remove um usuário pelo ID                                         |


## 🗒️ Observações

* Os dados são persistidos localmente no arquivo `db.json`.
* O projeto utiliza apenas recursos nativos do Node.js — sem bibliotecas externas.
