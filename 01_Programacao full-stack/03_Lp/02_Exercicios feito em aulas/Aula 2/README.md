# Guia de Python: Condicionais e Operadores

## Operadores Aritméticos

* **==Adição (==**`+`==): Soma dois números.==
* \

  ```python
  resultado = 5 + 3  # 8
  ```
* **==Subtração (==**`-`==): Subtrai o segundo número do primeiro.==

  ```python
  resultado = 5 - 3  # 2
  ```
* **Multiplicação (**`*`): Multiplica dois números.

  ```python
  resultado = 5 * 3  # 15
  ```
* **Divisão (**`/`): Divide dois números, retornando um número com ponto flutuante.

  ```python
  resultado = 5 / 2  # 2.5
  ```
* **Resto da Divisão (**`%`): Retorna o restante da divisão inteira.

  ```python
  resultado = 5 % 2  # 1
  ```
* **Divisão Inteira (**`//`): Retorna o quociente inteiro da divisão.

  ```python
  resultado = 5 // 2  # 2
  ```
* **Potenciação (**`**`): Eleva um número a uma potência.

  ```python
  resultado = 5 ** 2  # 25
  ```

---

## Operadores de Comparação

Usados para comparar valores, retornam `True` ou `False`.

* **Igual (**`==`): Verifica se dois valores são iguais.

  ```python
  resultado = 5 == 3  # False
  ```
* **Diferente (**`!=`): Verifica se dois valores são diferentes.

  ```python
  resultado = 5 != 3  # True
  ```
* **Maior que (**`>`): Verifica se o primeiro valor é maior que o segundo.

  ```python
  resultado = 5 > 3  # True
  ```
* **Menor que (**`<`): Verifica se o primeiro valor é menor que o segundo.

  ```python
  resultado = 5 < 3  # False
  ```
* **Maior ou Igual (**`>=`): Verifica se o primeiro valor é maior ou igual ao segundo.

  ```python
  resultado = 5 >= 3  # True
  ```
* **Menor ou Igual (**`<=`): Verifica se o primeiro valor é menor ou igual ao segundo.

  ```python
  resultado = 5 <= 3  # False
  ```

## Operadores Lógicos

Usados para combinar condições.

* **E (**`and`): Retorna `True` se ambas as condições forem verdadeiras.

  ```python
  resultado = (5 > 3) and (2 < 4)  # True
  ```
* **OU (**`or`): Retorna `True` se pelo menos uma das condições for verdadeira.

  ```python
  resultado = (5 > 3) or (2 > 4)  # True
  ```
* **NÃO (**`not`): Inverte o valor lógico.

  ```python
  resultado = not (5 > 3)  # False
  ```

## Operadores `in` e `not in`

Usados para verificar a existência de um elemento em coleções como strings, listas ou tuplas.

* `in`: Verifica se um elemento está presente.

  ```python
  resultado = "a" in "banana"  # True
  ```
* `not in`: Verifica se um elemento não está presente.

  ```python
  resultado = "x" not in "banana"  # True
  ```

## Condicionais

Permitem executar blocos de código com base em condições.

* `if`: Executa um bloco se a condição for verdadeira.

  ```python
  if 5 > 3:
      print("5 é maior que 3")
  ```
* `elif`: Avalia outra condição caso a anterior seja falsa.

  ```python
  if 5 < 3:
      print("5 é menor que 3")
  elif 5 == 3:
      print("5 é igual a 3")
  else:
      print("5 é maior que 3")
  ```
* `else`: Executa um bloco se nenhuma das condições anteriores for verdadeira.

  ```python
  if 5 < 3:
      print("5 é menor que 3")
  else:
      print("5 não é menor que 3")
  ```

## Exemplo Completo

```python
numero = 10

# Verifica se o número é positivo, negativo ou zero
if numero > 0:
    print("Número positivo")
elif numero < 0:
    print("Número negativo")
else:
    print("Número é zero")

# Usando operadores aritméticos e lógicos
if (numero % 2 == 0) and (numero > 5):
    print("Número é par e maior que 5")
```


---
