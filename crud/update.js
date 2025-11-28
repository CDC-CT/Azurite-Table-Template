// função responsável por atualizar clientes
// parâmetros: o tableClient, chave de partição, chave de coluna, campos extras (como nome e email), modo 
// modo pode ser merge ou replace, merge apenas altera, replace substitui sem saber que exista aqueles campos
// usa-se do método updateEntity do tableClient
// retorna status como updated e nome da entidade atualizada caso sucesso
async function update_clients(client, partitionKey, rowKey, nome, email, mode = "Merge") {
    await client.updateEntity({
        partitionKey: partitionKey,
        rowKey: rowKey,
        nome: nome,
        email: email
    }, mode)
    return { status: "updated", nome }
}

module.exports = { update_clients }