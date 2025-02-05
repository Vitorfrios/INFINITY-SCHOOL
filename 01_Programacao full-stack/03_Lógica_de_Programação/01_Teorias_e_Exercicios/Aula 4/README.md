


# Aprendendo sobre Estruturas de Repetição com `for` em Python

## O que iremos aprender?

Neste guia, vamos aprender sobre a estrutura de repetição `for` em Python, incluindo:

1. **Laço `for`**: Como utilizar o laço `for` para iterar sobre uma sequência de elementos.
2. **Laço `for` + `else`**: Como usar a estrutura `else` com o `for`.
3. **Laço `for` + `break`**: Como usar o `break` para interromper um laço `for`.

---

## Estrutura `for`

O laço `for` em Python é usado para iterar sobre uma sequência (como uma lista, tupla ou string), executando um bloco de código para cada item da sequência.

### Sintaxe:

```python
for variável in sequência:
    # código a ser executado para cada item da sequência
```


### Exemplo simples de `for`:

```python
for i in range(1, 6):
    print(i)

# Saída: 1, 2, 3, 4, 5
```

Neste exemplo, o `for` percorre os números de 1 a 5 (gerados pela função `range`) e imprime cada um deles.

---

## Estrutura `for` + `else`

O `else` pode ser combinado com o `for`. O bloco de código dentro do `else` será executado quando o laço `for` terminar sua execução sem ser interrompido por um `break`.

### Sintaxe:

```python
for variável in sequência:
    # código a ser executado para cada item da sequência
else:
    # código a ser executado quando o laço for concluído sem interrupção
```

### Exemplo de `for` + `else`:

```python
for i in range(1, 6):
    print(i)
else:
    print("Laço concluído.")

# Saída:
# 1
# 2
# 3
# 4
# 5
# Laço concluído.
```

---

## Estrutura `for` + `break`

O `break` é utilizado para interromper a execução de um laço antes que ele termine normalmente.

### Sintaxe:

```python
for variável in sequência:
    # código a ser executado para cada item da sequência
    if alguma_condição:
        break  # Interrompe o laço
```

### Exemplo de `for` + `break`:

```python
for i in range(1, 6):
    if i == 3:
        break  # Interrompe o laço quando i for igual a 3
    print(i)

# Saída: 1, 2
```

Neste exemplo, o laço é interrompido quando `i` atingir o valor 3.

---

## Exercícios de Revisão com `for`

1. **Exercício 1:** Escreva um programa que imprima todos os números de 1 a 10 usando um laço `for`.
   **Solução:**

   ```python
   for i in range(1, 11):
       print(i)
   ```

   **Explicação:** O laço `for` percorre os números de 1 a 10 (gerados pela função `range`) e imprime cada um deles.

---

2. **Exercício 2:** Crie um programa que leia números positivos até que o usuário digite um número negativo. O programa deve exibir a soma de todos os números digitados.
   **Solução:**

   ```python
   soma = 0
   while True:
       numero = int(input("Digite um número positivo (ou um número negativo para parar): "))
       if numero < 0:
           break
       soma += numero

   print("A soma dos números positivos é:", soma)
   ```

   **Explicação:** O laço continua pedindo números enquanto o usuário digitar números positivos. Quando um número negativo é inserido, o laço é interrompido com o comando `break`, e a soma dos números é exibida.

---

3. **Exercício 3:** Faça um programa que imprima todos os números ímpares entre 1 e 20 usando um laço `for`.
   **Solução:**

   ```python
   for i in range(1, 21, 2):
       print(i)
   ```

   **Explicação:** O laço `for` percorre os números de 1 a 20 com um passo de 2, imprimindo apenas os números ímpares.

---

4. **Exercício 4:** Escreva um programa que use um laço `for` e `else`. O programa deve pedir ao usuário para digitar um número até que ele digite o número 0. Quando isso acontecer, deve exibir a mensagem "Você digitou 0, o laço foi concluído".
   **Solução:**

   ```python
   for _ in range(100):  # Loop com número arbitrário de iterações
       numero = int(input("Digite um número (0 para sair): "))
       if numero == 0:
           print("Você digitou 0, o laço foi concluído.")
           break
   ```

   **Explicação:** O laço continua pedindo números até que o usuário digite 0. Quando 0 é digitado, o laço é interrompido pelo `break`, e a mensagem final é exibida.

---

## Atividades Práticas com `for`

1. **Atividade 1:** Crie um programa que imprima a tabuada de um número fornecido pelo usuário, de 1 a 10, usando um laço `for`.
   **Solução:**

   ```python
   numero = int(input("Digite um número para ver sua tabuada: "))
   for i in range(1, 11):
       print(f"{numero} x {i} = {numero * i}")
   ```

   **Explicação:** O laço `for` percorre os números de 1 a 10 e imprime a multiplicação do número fornecido pelo usuário.

---

2. **Atividade 2:** Escreva um programa que, dado um número, imprima todos os seus divisores.
   **Solução:**

   ```python
   numero = int(input("Digite um número para ver seus divisores: "))
   print(f"Divisores de {numero}:")
   for i in range(1, numero + 1):
       if numero % i == 0:
           print(i)
   ```

   **Explicação:** O laço `for` percorre os números de 1 até o número fornecido e imprime aqueles que são divisores do número (quando o resto da divisão for zero).

---

3. **Atividade 3:** Crie um programa que, dado um número inteiro, imprima todos os números de 1 até esse número, mas apenas os números que sejam múltiplos de 3 ou 5.
   **Solução:**

   ```python
   numero = int(input("Digite um número: "))
   for i in range(1, numero + 1):
       if i % 3 == 0 or i % 5 == 0:
           print(i)
   ```

   **Explicação:** O laço `for` percorre os números de 1 até o número fornecido e imprime os múltiplos de 3 ou 5.

---

4. **Atividade 4:** Faça um programa que leia uma lista de números fornecida pelo usuário e, para cada número, determine se ele é primo ou não.
   **Solução:**

   ```python
   lista = [int(x) for x in input("Digite números separados por espaço: ").split()]
   for numero in lista:
       if numero < 2:
           print(f"{numero} não é primo.")
           continue
       for i in range(2, numero):
           if numero % i == 0:
               print(f"{numero} não é primo.")
               break
       else:
           print(f"{numero} é primo.")
   ```

   **Explicação:** O programa percorre a lista de números e verifica se cada um é primo, verificando se ele é divisível por algum número entre 2 e ele mesmo.

---
