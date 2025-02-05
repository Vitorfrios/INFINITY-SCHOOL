


# O Que Iremos Aprender

Neste módulo, exploraremos conceitos fundamentais relacionados ao uso de listas e formulários em programação e desenvolvimento web. Também faremos uma revisão dos conceitos previamente aprendidos para consolidar o conhecimento.

Os tópicos incluem:

1. **Revisão**: Reforço dos conceitos básicos estudados anteriormente.
2. **Listas**: Manipulação de conjuntos de dados organizados em listas.
3. **Formulários**: Estruturação e utilização de formulários para entrada de dados.

---

# 01. Revisão

Antes de prosseguir, é importante relembrar alguns conceitos fundamentais, como:

- **Estruturas condicionais**: if, elif, else.
- **Estruturas de repetição**: for e while.
- **Manipulação de strings e números**.

---

# 02. Listas

As **listas** são coleções de elementos que podem ser armazenados em uma única variável. Em Python, as listas são muito flexíveis, permitindo armazenar tipos de dados diferentes e realizar operações como adição, remoção e ordenação de elementos.

### Exemplos básicos:

```python
# Criando uma lista
frutas = ["maçã", "banana", "laranja"]

# Acessando elementos
print(frutas[0])  # saída: maçã

# Adicionando elementos
frutas.append("uva")

# Removendo elementos
frutas.remove("banana")

# Percorrendo a lista
for fruta in frutas:
    print(fruta)
```


---

# 03. Formulários

Os **formulários** são usados em páginas web para receber dados do usuário. Em HTML, eles são definidos pela tag `<form>`. Os formulários podem conter diversos tipos de campos, como caixas de texto, botões de envio, e seletores.

### Exemplo de formulário básico:

```html
<form action="/submit" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
  
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email">
  
    <button type="submit">Enviar</button>
</form>
```

---

## Exercício Prático

### Exercício 1: Listas

Crie um programa em Python que receba uma lista de números, calcule a soma dos números e exiba o resultado.

**Solução:**

```python
numeros = list(map(int, input("Digite números separados por espaço: ").split()))
soma = sum(numeros)
print(f"A soma dos números é: {soma}")
```

---

### Exercício 2: Formulário

Crie um formulário HTML para coletar o nome e a idade de uma pessoa e envie os dados para uma página chamada `processa_dados.php`.

**Solução:**

```html
<form action="processa_dados.php" method="POST">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
  
    <label for="idade">Idade:</label>
    <input type="number" id="idade" name="idade">
  
    <button type="submit">Enviar</button>
</form>
```

---

## Conclusão

Ao final deste módulo, você terá uma compreensão mais profunda de:

* Como manipular listas em Python.
* Como criar e estruturar formulários em HTML.
* Como usar os conceitos revisados para integrar conhecimentos de programação e desenvolvimento web.

---
