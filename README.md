# Azure Table CRUD Template

Repositório realizado em Node.js para realizar operações CRUD em Azure Table Storage local usando Azurite.

### Pré-requisitos 

Certifique-se de ter instalado:

- Node.js
- npm
- Azurite

### Estrutura

- /config - Configurações de TableClient.
    - client.js 
- /crud - Módulos com operações CRUD. 
    - create.js
    - read.js
    - update.js
    - delete.js
- /src - Inicializador. 
    - index.js

### Setup

1. Clone o repositório:
```bash
git clone https://github.com/CDC-CT/Azurite-Table-Template.git 
cd Azurite-Table-Template
```

2. Instale as dependências

```bash
npm install
```

3. Crie um arquivo .env

```env
AZURE_TABLE_CONNECTION_STRING= ConnectionString
AZURE_TABLE_NAME= NomeDaTabela
```

4. Rodar o Azurite 
#
_Caso não tenha Azurite instalado_:
```bash
npm install -g azurite
```
#

```bash
azurite --silent --location ./azurite --table
```

5. Inicie o projeto

```bash
node src/index.js
```