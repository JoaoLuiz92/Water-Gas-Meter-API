# Water-Gas Meter API

Sistema de backend para gerenciamento de leitura individualizada de consumo de água e gás, utilizando uma integração com a API do Google Gemini para reconhecimento de imagem de medidores. Este projeto visa facilitar a coleta de dados de consumo usando IA, proporcionando uma experiência eficiente e automatizada.

### 📋 Pré-requisitos

Para rodar a API precisa tais softwares instalados em sua maquina :

#### Node.js (Framework de desenvolvimento)

#### Postman (Testes de rotas)

#### Docker e Docker Compose (Para rodar a aplicação e o banco de dados PostgreSQL em contêineres)

#### Git (Para fazer clone do repositorio)

### 🔧 Instalação

Primeiramente faça um clone deste repositorio para sua maquina:

```
git clone https://github.com/JoaoLuiz92/water-gas-meter-api

cd water-gas-meter-api

```

Instalação das dependencias necessarias, node_modules:

```
npm install

```

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```

GEMINI_API_KEY=<sua_chave_da_API>

```

#### Nota: Substitua <sua_chave_da_API> pela sua chave de acesso ao Gemini.

Suba os contêineres da aplicação e do banco de dados:

```

docker-compose up --build

```

Acesse a aplicação no endereço:

```
http://localhost:3000/


```

Então estará rodando no endereço http://localhost:3000/.

## 🔩 Explicando Rotas

### POST (/upload):

Rota para receber uma imagem (em base64), consultar o Google Gemini e retornar a medida reconhecida pela API de IA. Valida os dados enviados e verifica se já existe uma leitura do mesmo tipo para o mês atual.

#### Request Body

```
{
  "image": "base64",
  "customer_code": "string",
  "measure_datetime": "datetime",
  "measure_type": "WATER" ou "GAS"
}

```

#### Reponse Body:

##### 200: Operação realizada com sucesso

##### 400: Dados inválidos

##### 409: Já existe uma leitura para este tipo no mês atual

### PATCH (/confirm):

Rota para confirmar ou corrigir o valor lido pelo LLM, sem fazer novas consultas à IA.

#### Request Body

```
{
  "measure_uuid": "string",
  "confirmed_value": integer
}

```

#### Reponse Body:

##### 200: Operação realizada com sucesso

##### 400: Dados inválidos

##### 404: Leitura não encontrada

##### 409: Leitura já confirmada

### GET (/<customer_code>/list):

Rota para listar as medidas realizadas por um determinado cliente, com a opção de filtrar por tipo de medida (WATER ou GAS).

#### Query Parameters:

##### measure_type (opcional): Filtra o tipo de medida (WATER ou GAS).

#### Reponse Body:

##### 200: Operação realizada com sucesso

##### 400: Tipo de medida inválida

##### 404: Nenhum registro encontrado

## ⚙️ Executando os testes de routes

Utilize o Postman para testar as rotas da API:

Abra uma nova requisição no Postman.
Selecione o método (POST, PATCH, GET) e insira a URL apropriada.
Preencha o Body conforme a especificação das rotas.
Adicione o token de autenticação na aba Authorization ou nos Headers.

## 📦 Integração com Gemini

A integração com a API do Google Gemini é feita por meio de requisições HTTP, com os parâmetros e headers especificados na documentação. A API recebe a imagem do medidor, processa o reconhecimento de leitura e retorna o valor medido, o link temporário da imagem e um GUID.

## 🛠️ Construído com

Api criada através de Node.js

- [Nest.js] - O framework web usado
- [Docker] - Para conteinerização da aplicação e banco de dados
- [PostgreSQL] - Banco de dados relacional para armazenamento das leituras
- [Axios] - Cliente HTTP para comunicação com a API do Gemini

## ✒️ Autores

Desafio realizado por :

- **João Luiz Da Rosa Junior** - _Trabalho Inicial_ - [Desenvolvedor](https://github.com/JoaoLuiz92)

## 🎁 Expressões de gratidão

- Agradeço pela oportunidade de aprender novas técnicas e integrar APIs de IA em aplicações reais. Este projeto me permitiu explorar a combinação de inteligência artificial com tecnologias de backend. 📢

- Agradeço a Deus por essa oportunidade e a Shopper por esta oportunidade de desafio técnico e suporte durante o desenvolvimento. 🫂;
#   W a t e r _ G a s _ M e t e r _ A P I  
 #   W a t e r _ G a s _ M e t e r _ A P I  
 #   W a t e r _ G a s _ M e t e r _ A P I  
 #   W a t e r _ G a s _ M e t e r _ A P I  
 