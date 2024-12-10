# Aprendendo sobre Estruturas de Repetição em Python

## O que iremos aprender?

Neste guia, vamos aprender sobre as estruturas de repetição em Python, incluindo:

1. **Laço `while`**: Como criar laços que se repetem enquanto uma condição for verdadeira.
2. **Laço `while` + `else`**: Como usar a estrutura `else` com o `while`.
3. **Laço `while` + `break`**: Como usar o `break` para interromper um laço `while`.

---

## Estrutura `while`

O laço `while` executa um bloco de código enquanto uma condição for verdadeira. Quando a condição se torna falsa, o laço termina.

### Sintaxe:

```python
while condição:
    # código a ser executado enquanto a condição for verdadeira
```

### Exemplo simples de `while`:

```python
contador = 0

while contador < 5:
    print(contador)
    contador += 1  # Incrementa o contador

# Saída: 0, 1, 2, 3, 4
```

Neste exemplo, o programa continuará a executar o bloco de código enquanto o `contador` for menor que 5.

---

## Estrutura `while` + `else`

O `else` pode ser combinado com o `while`. O bloco de código dentro do `else` será executado quando a condição do `while` se tornar falsa. Caso o laço seja interrompido com um `break`, o `else` não será executado.

### Sintaxe:

```python
while condição:
    # código a ser executado enquanto a condição for verdadeira
else:
    # código a ser executado quando a condição for falsa (sem interrupção com break)
```

### Exemplo de `while` + `else`:

```python
contador = 0

while contador < 5:
    print(contador)
    contador += 1
else:
    print("Laço concluído.")

# Saída:
# 0
# 1
# 2
# 3
# 4
# Laço concluído.
```

Neste exemplo, o `else` é executado depois que a condição do `while` se torna falsa.

---

## Estrutura `while` + `break`

O `break` é utilizado para interromper a execução de um laço antes que sua condição se torne falsa.

### Sintaxe:

```python
while condição:
    # código a ser executado enquanto a condição for verdadeira
    if alguma_condição:
        break  # Interrompe o laço
```

### Exemplo de `while` + `break`:

```python
contador = 0

while contador < 10:
    if contador == 5:
        break  # Interrompe o laço quando contador for igual a 5
    print(contador)
    contador += 1

# Saída: 0, 1, 2, 3, 4
```

No exemplo acima, o laço é interrompido assim que `contador` atinge o valor 5 devido ao comando `break`.

---




## Exercícios de Revisão com Soluções

1. **Exercício 1: Imprimir todos os números de 1 a 10, usando um laço `while`**

   **Enunciado:**
   Escreva um programa que imprima todos os números de 1 a 10, usando um laço `while`.

   **Solução:**

   ```python
   contador = 1
   while contador <= 10:
       print(contador)
       contador += 1
   ```


**Explicação:**

O laço `while` vai continuar a rodar enquanto o valor de `contador` for menor ou igual a 10. A cada iteração, ele imprime o valor de `contador` e depois incrementa em 1.

---

2. **Exercício 2: Somar números positivos até o usuário digitar um número negativo**
   **Enunciado:**

   Crie um programa que leia números positivos até que o usuário digite um número negativo. O programa deve exibir a soma de todos os números digitados.
   **Solução:**

   ```python
   soma = 0
   while True:
       numero = int(input("Digite um número positivo (ou um número negativo para parar): "))
       if numero < 0:
           break  # Interrompe o laço quando o número negativo é digitado
       soma += numero  # Adiciona o número à soma

   print("A soma dos números positivos é:", soma)
   ```

   **Explicação:**

   O laço continua pedindo números enquanto o usuário digitar números positivos. Quando um número negativo é inserido, o laço é interrompido com o comando `break`, e a soma dos números é exibida.

---

3. **Exercício 3: Imprimir todos os números ímpares entre 1 e 20**
   **Enunciado:**

   Faça um programa que imprima todos os números ímpares entre 1 e 20 usando um laço `while`.
   **Solução:**

   ```python
   contador = 1
   while contador <= 20:
       if contador % 2 != 0:
           print(contador)
       contador += 1
   ```

   **Explicação:**

   O laço `while` percorre todos os números de 1 a 20. O `if` dentro do laço verifica se o número é ímpar (usando a condição `contador % 2 != 0`), e caso seja, o número é impresso.

---

4. **Exercício 4: Laço `while` com `else` - Digitar números até digitar 0**
   **Enunciado:**

   Escreva um programa que use um laço `while` e `else`. O programa deve pedir ao usuário para digitar um número até que ele digite o número 0. Quando isso acontecer, deve exibir a mensagem "Você digitou 0, o laço foi concluído".
   **Solução:**

   ```python
   while True:
       numero = int(input("Digite um número (0 para sair): "))
       if numero == 0:
           print("Você digitou 0, o laço foi concluído.")
           break
   ```

   **Explicação:**

   O programa pede ao usuário para digitar números até que ele digite o número 0. Quando 0 é digitado, o laço é interrompido pelo `break`, e a mensagem final é exibida.

---
