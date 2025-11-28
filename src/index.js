const client = require("../config/client")
const { create_clients } = require("../crud/create")
const { read_clients, read_client } = require("../crud/read")
const { update_clients } = require("../crud/update")
const { delete_clients } = require("../crud/delete")


async function main() {
    // Aciona o método responsável por criar cliente 
    const new_client = await create_clients(client, "partitionKey", "rowKey", "nome", "email")
    if (new_client.status === "created") {
        console.log("Criado(a): ", new_client.name)
    }

    // Aciona o método responsável por atualizar cliente
    const updated_client = await update_clients(client, "partitionKey", "rowKey", "nome", "email")
    if (updated_client.status === "updated") {
        console.log("Atualizado(a): ", updated_client.name)
    }

    // Aciona o método responsável por excluir cliente
    const deleted_client = await delete_clients(client, "partitionKey", "rowKey")
    if (deleted_client.status === "deleted") {
        console.log("Deletado(a) com sucesso!!")
    }

    // Aciona o método responsável por listar todos os clientes
    const list_clients = await read_clients(client)
    console.log(list_clients)

    //Aciona o método responsável por listar apenas um cliente
    const list_client = await read_client(client, "partitionKey", "rowKey")
    console.log("Buscando por...", list_client.nome)
    console.log(list_client)
}

main();