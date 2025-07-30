export async function json(req, res) { // Função de middleware

  // ------------------- Stream -------------------
  const buffers = []
  
  // chunk é um pedaço da requisição
  // O for await é utilizado para iterar sobre um objeto que está sendo consumido por uma stream
  // Esse trecho por ter await é assíncrono e precisar finalizar por completo para que o restante seja executado
  for await (const chunk of req) { 
    buffers.push(chunk)
  }
  // ------------------- // -------------------

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

  res.setHeader('Content-type', 'application/json')
}