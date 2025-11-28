// função responsável por criar clientes
// parâmetros: o tableClient, chave de partição, chave de coluna, campos extras (como nome e email)
// usa-se do método createEntity do tableClient
// retorna status como created e nome da entidade criada caso sucesso
async function create_clients(client, partitionKey, rowKey, nome, email) {
    await client.createEntity({
        partitionKey: partitionKey,
        rowKey: rowKey,
        nome: nome,
        email: email
    })

    return { status: "created", nome }
}

module.exports = { create_clients }