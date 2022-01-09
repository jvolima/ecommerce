# Funcionalidades

## Clientes

### Cadastro de clientes
**RF**
- Deve ser possível cadastrar um novo cliente

**RN**
- Não deve ser possível cadastrar um novo cliente se já existir um cliente com o email informado
- A senha deve ser criptografada ao ser salva no banco de dados

### Autenticação de clientes
**RF**
- Deve ser possível autenticar um cliente

**RN**
- Não deve ser possível autenticar um cliente se o email ou a senha estiverem incorretos

### Listagem de compras
**RF**
- Deve ser possível listar as compras do cliente

**RN**
- Apenas clientes autenticados devem ter acesso à essa rota

## Administradores

### Cadastro de administradores
**RF**
- Deve ser possível cadastrar um novo administrador

**RN**
- Não deve ser possível cadastrar um novo administrador se já existir um administrador com o email informado
- A senha deve ser criptografada ao ser salva no banco de dados

### Autenticação de administradores
**RF**
- Deve ser possível autenticar um administrador

**RN**
- Não deve ser possível autenticar um administrador se o email ou a senha estiverem incorretos

## Categorias

### Cadastro de categorias
**RF**
- Deve ser possível cadastrar uma nova categoria de produtos

**RN**
- Apenas administradores autenticados podem cadastrar novas categorias
- Não deve ser possível cadastrar uma categoria se já existir uma com o mesmo nome informado

### Listagem de categorias 
**RF**
- Deve ser possível listar todas as categorias cadastradas

**RN**
- Essa rota não é autenticada, ou seja, todos devem ter acesso

## Produtos

### Cadastro de produtos
**RF**
- Deve ser possível cadastrar um novo produto

**RN**
- Apenas administradores autenticados podem cadastrar produtos
- Não deve ser possível cadastrar um produto se o id da categoria não existir no banco de dados

### Adicionar produtos no estoque
**RF**
- Deve ser possível adicionar mais produtos no estoque

**RN**
- Não deve ser possível adicionar produtos no estoque se o id do produto não existir no banco de dados
- Não deve ser possível adicionar produtos no estoque se a quantidade informada for menor que zero
- Apenas administradores autenticados podem adicionar produtos no estoque

### Listagem de produtos
**RF**
- Deve ser possível listar todos os produtos com estoque disponível
- Deve ser possível listar produtos pela categoria informada
- Deve ser possível listar produtos pelo nome

**RN**
- Essa rota não é autenticada, ou seja, todos devem ter acesso

## Compras

### Cadastro de compras
**RF**
- Deve ser possível cadastrar uma nova compra

**RN**
- Apenas clientes autenticados tem acesso à essa rota

### Adicionar produtos na compra
**RF**
- Deve ser possível adicionar produtos em uma compra

**RN**
- Apenas clientes autenticados tem acesso à essa rota
- Não deve ser possível adicionar produtos em uma compra se o id da compra informado não pertencer a nenhuma salva no banco de dados
- Não deve ser possível adicionar produtos em uma compra se o id do produto informado não pertencer a nenhum salvo no banco de dados
- Não deve ser possível adicionar produtos em uma compra se a quantidade informado for menor ou igual a zero

### Concluir uma compra
**RF** 
- Deve ser possível concluir uma compra

**RN**
- Apenas clientes autenticados tem acesso à essa rota
- Não deve ser possível concluir uma compra se a compra já estiver concluída
- Não deve ser possível concluir uma compra se o id da compra informado não pertencer a nenhuma existente no banco de dados