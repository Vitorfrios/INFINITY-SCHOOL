
# Aula 2

Esta é a documentação da 2ª aula. Coloque o conteúdo relacionado a essa aula aqui.
Aqui está o conteúdo que você forneceu, organizado e formatado em **Markdown** com alguns ajustes para tornar a leitura mais clara e adicionar exemplos completos:

```markdown
# Operadores de Comparação e Lógicos em Python

### 1. **Igualdade (==)**

Verifica se dois valores são iguais. Se forem iguais, retorna `True`; se forem diferentes, retorna `False`.

**Exemplo:**

```python
a = 5
b = 5
print(a == b)  # Saída: True
```

---

### 2. **Diferença (!=)**

Verifica se dois valores são diferentes. Se forem diferentes, retorna `True`; se forem iguais, retorna `False`.

**Exemplo:**

```python
a = 5
b = 6
print(a != b)  # Saída: True
```

---

### 3. **Maior que (>)**

Verifica se um valor é maior que o outro. Se for maior, retorna `True`; se for menor, retorna `False`.

**Exemplo:**

```python
a = 5
b = 3
print(a > b)  # Saída: True

a = 3
b = 5
print(a > b)  # Saída: False
```

---

### 4. **Menor que (<)**

Verifica se um valor é menor que o outro. Se for menor, retorna `True`; se for maior, retorna `False`.

**Exemplo:**

```python
a = 3
b = 5
print(a < b)  # Saída: True

a = 6
b = 5
print(a < b)  # Saída: False
```

---

### 5. **Maior ou Igual a (>=)**

Verifica se um valor é maior ou igual ao outro. Se for maior ou igual, retorna `True`; caso contrário, retorna `False`.

**Exemplo:**

```python
a = 5
b = 5
print(a >= b)  # Saída: True

a = 3
b = 5
print(a >= b)  # Saída: False
```

---

### 6. **Menor ou Igual a (<=)**

Verifica se um valor é menor ou igual ao outro. Se for menor ou igual, retorna `True`; caso contrário, retorna `False`.

**Exemplo:**

```python
a = 3
b = 5
print(a <= b)  # Saída: True

a = 6
b = 5
print(a <= b)  # Saída: False
```

---

# Operadores Lógicos

### **E (and)**

Retorna `True` se ambos os operandos forem verdadeiros; caso contrário, retorna `False`.

**Exemplo:**

```python
a = True
b = False
print(a and b)  # Saída: False
```

---

### **OU (or)**

Retorna `True` se pelo menos um dos operandos for verdadeiro; caso contrário, retorna `False`.

**Exemplo:**

```python
a = True
b = False
print(a or b)  # Saída: True
```

---

### **NÃO (not)**

Inverte o valor de verdadeiro para falso e vice-versa.

**Exemplo:**

```python
a = True
print(not a)  # Saída: False
```

---

# Operadores de Membro

### **Operador in**

Verifica se um determinado elemento está presente em uma sequência (como uma lista, tupla, string, etc).

**Sintaxe:**

```python
elemento in sequencia
```

Se o elemento estiver presente na sequência, o operador `in` retorna `True`; caso contrário, retorna `False`.

**Exemplo:**

Verificando em uma string:

```python
nome = "Python"
print("P" in nome)  # Saída: True
print("Java" in nome)  # Saída: False
```

Verificando em uma lista:

```python
frutas = ['maçã', 'banana', 'laranja', 'morango']
print("banana" in frutas)  # Saída: True
print("uva" in frutas)  # Saída: False
```

---

### **Operador not in**

O operador `not in` é a negação do operador `in`. Ele é utilizado para verificar se um elemento não está presente em uma sequência.

**Sintaxe:**

```python
elemento not in sequencia
```

Se o elemento não estiver presente na sequência, o operador `not in` retorna `True`; caso contrário, retorna `False`.

**Exemplo:**

Verificando em uma string:

```python
nome = "Python"
print("Java" not in nome)  # Saída: True
print("P" not in nome)  # Saída: False
```

Verificando em uma lista:

```python
frutas = ['maçã', 'banana', 'laranja', 'morango']
print("uva" not in frutas)  # Saída: True
print("banana" not in frutas)  # Saída: False
```

---

# Estruturas de Condicional (if/else)

### **Como usar o `if`**

O comando `if` é utilizado para verificar se uma condição é verdadeira. Caso seja, o código dentro do bloco `if` será executado.

**Sintaxe:**

```python
if condição:
    # código a ser executado se a condição for verdadeira
```

**Exemplo:**

Verificação de número positivo:

```python
numero = int(input("Digite um número: "))
if numero > 0:
    print("O número é positivo.")
```

---

### **Como usar o `if-else`**

O `else` é opcional e é usado para executar um bloco de código caso a condição do `if` seja falsa.

**Sintaxe:**

```python
if condição:
    # código a ser executado se a condição for verdadeira
else:
    # código a ser executado se a condição for falsa
```

**Exemplo:**

Verificação de maioridade:

```python
idade = int(input("Digite sua idade: "))
if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")
```
