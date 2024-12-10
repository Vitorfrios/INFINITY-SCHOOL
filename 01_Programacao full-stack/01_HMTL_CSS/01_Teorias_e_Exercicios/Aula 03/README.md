

# O Que Iremos Aprender

Neste módulo, exploraremos conceitos de agrupamento e tabelas no contexto de HTML. Também faremos uma revisão básica dos conceitos anteriormente aprendidos.

Os tópicos incluem:

1. **Revisão**: Relembrando a estrutura básica do HTML.
2. **Agrupamento**: Estruturando dados em categorias dentro de tabelas.
3. **Tabelas**: Criando e estilizando tabelas para exibição de informações.

---

# 01. Revisão

Lembre-se da estrutura básica de um documento HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo HTML</title>
</head>
<body>
    <h1>Bem-vindo ao HTML!</h1>
    <p>Este é um exemplo simples.</p>
</body>
</html>
```


---

# 02. Agrupamento

Em HTML, você pode organizar informações agrupando-as dentro de tabelas. Para melhorar a semântica e a aparência, utilize elementos como `<thead>`, `<tbody>`, e `<tfoot>`.

### Exemplo de tabela agrupada:

```html
<table border="1">
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>30</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Fim dos Dados</td>
        </tr>
    </tfoot>
</table>
```

---

# 03. Tabelas

As tabelas são úteis para organizar informações em formato de linhas e colunas. Use estilos para deixá-las mais atraentes.

### Exemplo com estilos:

```html
<table border="1" style="border-collapse: collapse; width: 50%;">
    <thead style="background-color: #f2f2f2;">
        <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Arroz</td>
            <td>R$ 20,00</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Feijão</td>
            <td>R$ 10,00</td>
            <td>8</td>
        </tr>
        <tr>
            <td>Açúcar</td>
            <td>R$ 5,00</td>
            <td>3</td>
        </tr>
    </tbody>
</table>
```

---

## Exercício Prático

### Exercício 1: Agrupamento

Crie uma tabela que organize nomes de pessoas por grupos: **Grupo A** e  **Grupo B** .

**Solução:**

```html
<table border="1">
    <thead>
        <tr>
            <th colspan="2">Grupo A</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>30</td>
        </tr>
    </tbody>
    <thead>
        <tr>
            <th colspan="2">Grupo B</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Carlos</td>
            <td>40</td>
        </tr>
        <tr>
            <td>Beatriz</td>
            <td>35</td>
        </tr>
    </tbody>
</table>
```

---

### Exercício 2: Tabela de Produtos

Crie uma tabela para exibir uma lista de produtos com os campos  **Produto** ,  **Preço** , e  **Quantidade** .

**Solução:**

```html
<table border="1">
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Notebook</td>
            <td>R$ 3.000,00</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Mouse</td>
            <td>R$ 50,00</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Teclado</td>
            <td>R$ 100,00</td>
            <td>5</td>
        </tr>
    </tbody>
</table>
```

---

## Conclusão

Ao final deste módulo, você saberá:

* Agrupar dados em tabelas usando tags específicas.
* Estruturar tabelas HTML para organizar informações de maneira visualmente clara.
* Utilizar cabeçalhos, rodapés e grupos para melhorar a semântica e acessibilidade de tabelas.

---
