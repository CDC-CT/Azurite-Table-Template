// função responsável por deletar clientes
// parâmetros: o tableClient, chave de partição, chave de coluna
// usa-se do método deleteEntity do tableClient
// retorna status como deleted caso sucesso
async function delete_clients(client, partitionKey, rowKey) {
    await client.deleteEntity(partitionKey, rowKey)
    return { status: "deleted" }
}

module.exports = { delete_clients }