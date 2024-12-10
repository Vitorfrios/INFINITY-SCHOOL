
# Guia de Python: Algoritmos e Variáveis

## O que é um Algoritmo?

Um **algoritmo** é uma sequência de passos bem definidos para resolver um problema ou realizar uma tarefa. Ele pode ser implementado em uma linguagem de programação, como Python, para que seja executado por um computador.

### Exemplo Simples de Algoritmo

**Problema:** Somar dois números fornecidos pelo usuário.

**Passos:**

1. Solicitar o primeiro número.
2. Solicitar o segundo número.
3. Somar os dois números.
4. Mostrar o resultado.

**Implementação em Python:**

```python
# Passo 1 e 2: Solicitar números
numero1 = int(input("Digite o primeiro número: "))
numero2 = int(input("Digite o segundo número: "))

# Passo 3: Somar os números
resultado = numero1 + numero2

# Passo 4: Exibir o resultado
print("A soma é:", resultado)
```

---



## Variáveis

**Variáveis** são espaços na memória do computador usados para armazenar dados que podem ser manipulados pelo programa. Elas possuem:

1. **Nome** : Identificador da variável.
2. **Tipo de Dado** : O tipo do valor armazenado (inteiro, texto, etc.).
3. **Valor** : O dado atribuído à variável.

### Regras para Nomear Variáveis

* Deve começar com uma letra ou underscore (`_`).
* Pode conter letras, números e underscores.
* Não pode usar palavras reservadas de Python, como `if`, `else`, etc.
* Python diferencia maiúsculas de minúsculas (`idade` é diferente de `Idade`).

### Declaração e Atribuição

Em Python, uma variável é declarada no momento em que você atribui um valor a ela.

```python
# Atribuindo valores a variáveis
nome = "Alice"       # String
idade = 25           # Inteiro
altura = 1.68        # Float
programador = True   # Booleano

# Exibindo valores
print(nome, idade, altura, programador)
```

---

## Tipos de Dados em Python

1. **Inteiros (`int`)** : Números inteiros.

```python
   numero = 10
```

1. **Ponto Flutuante (`float`)** : Números decimais.

```python
   altura = 1.75
```

1. **Strings (`str`)** : Sequências de texto.

```python
   nome = "Maria"
```

1. **Booleanos (`bool`)** : Valores lógicos (`True` ou `False`).

```python
   maior_de_idade = True
```

1. **Listas (`list`)** : Coleções de valores.

```python
   numeros = [1, 2, 3, 4]
```

1. **Dicionários (`dict`)** : Pares chave-valor.

```python
   pessoa = {"nome": "João", "idade": 30}
```

---

## Entrada e Saída de Dados

* **Entrada de Dados:** Usamos a função `input()` para receber dados do usuário.
  ```python
  nome = input("Digite seu nome: ")
  print("Olá,", nome)
  ```
* **Saída de Dados:** Usamos a função `print()` para exibir informações.
  ```python
  idade = 30
  print("Idade:", idade)
  ```

---

## Exemplo de Algoritmo com Variáveis

**Problema:** Calcular a área de um triângulo dado a base e a altura fornecidas pelo usuário.

### Implementação:

```python
# Entrada: Solicitar base e altura
base = float(input("Digite a base do triângulo: "))
altura = float(input("Digite a altura do triângulo: "))

# Processamento: Calcular a área
area = (base * altura) / 2

# Saída: Exibir a área
print("A área do triângulo é:", area)
```

---

## Boas Práticas com Variáveis

1. Escolha nomes descritivos para as variáveis.
   * Ruim: `x = 10`
   * Bom: `idade = 10`
2. Use snake_case para variáveis (exemplo: `altura_usuario`).
3. Inicialize variáveis antes de usá-las.

---

## Exemplo Completo de Algoritmo

**Problema:** Criar um programa que recebe as notas de um aluno, calcula a média e determina se ele foi aprovado.

### Implementação:

```python
# Entrada de dados
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))

# Processamento
media = (nota1 + nota2 + nota3) / 3

# Condicional para verificar aprovação
if media >= 7.0:
    print("Aluno aprovado com média:", media)
else:
    print("Aluno reprovado com média:", media)
```

---
