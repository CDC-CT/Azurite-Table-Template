const path = require('path')
const dotenv = require('dotenv')
const { TableClient } = require("@azure/data-tables")

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const connectionString = process.env.AZURE_TABLE_CONNECTION_STRING
const tableName = process.env.AZURE_TABLE_NAME

// Cria conexão com o TableClient, um cliente que permite interação com a tabela do Azure Table Storage passada pela a env.
const client = TableClient.fromConnectionString(
    connectionString,
    tableName,
    {
        allowInsecureConnection: true
    })


module.exports = client