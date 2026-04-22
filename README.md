# API de Produtos

API simples desenvolvida com Node.js e Express para gerenciamento de produtos.
Permite criar, listar, buscar, atualizar e remover produtos (CRUD completo).

---

## Tecnologias utilizadas

* Node.js
* Express
* Nodemon

---

## Endpoints

### Listar produtos

```
GET /products
```

---

### Buscar produto por ID

```
GET /products/:id
```

---

### Criar produto

```
POST /products
```

Body:

```json
{
  "name": "Notebook",
  "price": 3500
}
```

---

### Atualizar produto

```
PUT /products/:id
```

Body:

```json
{
  "name": "Notebook Gamer",
  "price": 5000
}
```

---

### Deletar produto

```
DELETE /products/:id
```

---

## ⚠️ Observação

Os dados são armazenados em memória, ou seja:

* são perdidos ao reiniciar o servidor
* não há banco de dados integrado


