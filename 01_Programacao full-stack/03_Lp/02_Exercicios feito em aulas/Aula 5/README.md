


# 01. Ferramentas de IA

Neste tópico, discutiremos as ferramentas de Inteligência Artificial (IA) que são úteis para desenvolvedores, como o uso de chatbots, assistentes virtuais e outras tecnologias. A IA tem se tornado uma ferramenta valiosa em muitos campos, incluindo programação, análise de dados e automação de processos.

---

# 02. Introdução ao ChatGPT

O **ChatGPT** é uma ferramenta de Inteligência Artificial criada pela OpenAI que utiliza o modelo de linguagem GPT (Generative Pre-trained Transformer). Ele pode realizar várias tarefas, como responder a perguntas, fornecer informações, gerar textos, sugerir ideias e até escrever códigos em várias linguagens de programação. O ChatGPT tem um grande potencial para ser usado como assistente de programação, ajudando os desenvolvedores a resolver problemas, aprender novos conceitos e criar soluções mais rapidamente.

---

# 03. ChatGPT para Programação

O **ChatGPT** pode ser utilizado para vários fins relacionados à programação. Algumas das maneiras em que ele pode ser útil incluem:

- **Gerar e depurar códigos**: O ChatGPT pode gerar códigos para várias tarefas e identificar problemas em códigos existentes.
- **Explicar conceitos**: O ChatGPT pode ajudar a entender conceitos de programação, como estruturas de dados, algoritmos, e até paradigmas de programação como orientado a objetos.
- **Fornecer sugestões e otimizações**: Quando você estiver enfrentando problemas em seu código, pode pedir ao ChatGPT sugestões de como melhorar ou otimizar seu código.

---

# 04. Revisão e Estruturas Condicionais (Exercícios)

As **estruturas condicionais** são fundamentais em qualquer linguagem de programação. Elas permitem que o programa tome decisões com base em condições. Em Python, as principais estruturas condicionais são:

- **if**: Executa um bloco de código se a condição for verdadeira.
- **elif**: Permite verificar múltiplas condições.
- **else**: Executa um bloco de código quando nenhuma das condições anteriores for verdadeira.

### Exercício:

Escreva um programa em Python que verifique se um número é positivo, negativo ou zero, utilizando estruturas condicionais `if`, `elif` e `else`.

**Solução:**

```python
numero = int(input("Digite um número: "))
if numero > 0:
    print("O número é positivo.")
elif numero < 0:
    print("O número é negativo.")
else:
    print("O número é zero.")
```


---

# 05. Revisão e Estruturas de Repetição (Exercícios)

As **estruturas de repetição** permitem que o código seja executado várias vezes, dependendo de uma condição. Em Python, as principais estruturas de repetição são:

* **for** : Usado para iterar sobre uma sequência (como uma lista ou intervalo de números).
* **while** : Executa um bloco de código enquanto a condição for verdadeira.

### Exercício 1:

Crie um programa que imprima os números de 1 a 10 utilizando um laço `for`.

**Solução:**

```python
for i in range(1, 11):
    print(i)
```

### Exercício 2:

Escreva um programa que leia números até que o usuário digite um número negativo, utilizando um laço `while`.

**Solução:**

```python
while True:
    numero = int(input("Digite um número (negativo para sair): "))
    if numero < 0:
        break
    print(f"O número digitado foi: {numero}")
```

---
