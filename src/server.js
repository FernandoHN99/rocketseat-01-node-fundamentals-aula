import http from 'node:http'                 // Colocamos o node: para indicar que é um módulo nativo
import { json } from './middlewares/json.js' // Função de middleware
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

// ------------------- Básico -------------------
/* - НТТР
      - Método HTTP
      - URL

    GET → Buscar um recurso do back-end
    POST → Criar um recurso no back-end
    PUT → Atualizar um recurso no back-end
    PATCH → Atualizar uma informação específica de um recurso no back-end
    DELETE → Deletar um recurso do back-end

    Stateful: Memória Voláril
    Stateless: Memória não volátil

    Cabeçalhos (Requisição/resposta) → Metadados

    HTTP Status Code (200, 201, 404 e etc) 
*/
// ------------------- // -------------------

const server = http.createServer(async (req, res) => {
   const { method, url } = req

   // ------------------- Middleware -------------------
   // Middleware sempre recebe os mesmos parâmetros, req e res
   // São funções que são executadas no meio do caminho, entre a requisição e a resposta
   await json(req, res)
   // ------------------- // -------------------

   // ------------------- Rotas -------------------

   // Query Parameters
   //    - São parâmetros nomeados que são passados na URL e que são opcionais (não obrigatórios). Ex: Filtros, paginação, consulta e etc.
   //    - URL Stateful => São urls que carregam informações de estado dentro da própria URL.
   //    http://localhost:3333/users?userId=1&name=Diego

   // Route Parameters: 
   //    - Identificação de recurso e fazem parte da URL (obrigatórios). Ex: ID do usuário
   //    GET http://localhost:3333/users/1
   //    DELETE http: //localhost:3333/users/1

   // Request Body:
   //    - Envio de informações de um formulário onde possuem mais segurança (HTTPs). Ex: Cadastro de usuário.  
   //    POST http://localhost:3333/users

   const route = routes.find(route => {
      return route.method === method && route.path.test(url)
   })

   if (route) {
      const routeParams = req.url.match(route.path)
      const { query, ...params } = routeParams.groups
      req.params = params
      req.query = query ? extractQueryParams(query) : {}

      return route.handler(req, res)
   }

   return res.writeHead(404).end() //.end(<mensagem>)
})

server.listen(3333)