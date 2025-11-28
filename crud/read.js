// função responsável por listar todos os clientes
// parâmetros: o tableClient
// usa-se do método listEntities do tableClient
// retorna o resultado com uma lista de entidades
async function read_clients(client) {
    result = []
    for await (const entity of client.listEntities()) {
        result.push(entity);
    }
    return result
}

// função responsável por listar apenas um cliente
// parâmetros: o tableClient, chave de partição, chave de coluna
// usa-se do método getEntity do tableClient
// retorna o cliente buscado pela chave de partição e chave de coluna
async function read_client(client, partitionKey, rowKey) {
    return await client.getEntity(partitionKey, rowKey)
}

module.exports = { read_clients, read_client }
