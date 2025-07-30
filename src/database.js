// Utilizamos a biblioteca nativa do Node.js para ler, escrever arquivos locais
// Neste caso simulamos um banco de dados em memória não volátil em um arquivo JSON
import fs from 'node:fs/promises'

// Utilizamos o módulo nativo do Node.js para criar o arquivo JSON que queremos sempre no mesmo path.
// Pois se não o utilizarmos o path será relativo onde o servidor node.js foi iniciado.
// import.meta.url retorna o path do arquivo atual (database.js), assim o arquivo db.json sempre será criado referente a onde o arquivo database.js está.
const databasePath = new URL('../db.json', import.meta.url)

export class Database {
   #database = {} // Propriedade privada

   // Recuperar o arquivo db.json ou cria-lo caso não exista
   constructor() {
      fs.readFile(databasePath, 'utf8')
         .then(data => {
            this.#database = JSON.parse(data)
         })
         .catch(() => {
            this.#persist()
         })
   }

   #persist() {
      fs.writeFile(databasePath, JSON.stringify(this.#database))
   }

   // Método de leitura
   select(table, search) {
      let data = this.#database[table] ?? [] // Operador Nullish, serve para verificar se o valor é null ou undefined

      if (search) {
         data = data.filter(row => {
            return Object.entries(search).some(([key, value]) => {
               return row[key].toLowerCase().includes(value.toLowerCase())
            })
         })
      }
      return data
   }

   // Método de escrita
   insert(table, data) {
      if (Array.isArray(this.#database[table])) {
         this.#database[table].push(data)
      } else {
         this.#database[table] = [data]
      }

      this.#persist()

      return data
   }

   // Método de deleção
   delete(table, id) {
      const rowIndex = this.#database[table].findIndex(row => row.id === id)
      if (rowIndex > -1) {
         this.#database[table].splice(rowIndex, 1)
         this.#persist()
      }
   }

   // Método de atualização
   update(table, id, data) {
      const rowIndex = this.#database[table].findIndex(row => row.id === id)
      if (rowIndex > -1) {
         this.#database[table][rowIndex] = { id, ...data }
         this.#persist()
      }
   }
}