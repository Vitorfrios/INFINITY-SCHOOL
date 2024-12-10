


# O Que Iremos Aprender

Neste módulo, abordaremos conceitos essenciais para criar layouts responsivos, incluindo o uso do Flexbox e a aplicação de cores em CSS.

Os tópicos incluem:

1. **O que é Responsividade**: Introdução ao design responsivo.
2. **Flexbox**: Um sistema de layout poderoso para alinhar e distribuir elementos.
3. **Cores**: Trabalhando com cores no CSS.

---

# 01. O que é Responsividade

A **responsividade** refere-se à capacidade de um site de se ajustar a diferentes tamanhos de tela e dispositivos, garantindo uma boa experiência para todos os usuários.

### Práticas comuns:

- Usar unidades relativas como `%`, `em`, e `rem` ao invés de pixels fixos.
- Adotar Media Queries para aplicar estilos diferentes com base na largura da tela.

### Exemplo:

```css
body {
    font-size: 16px;
}

@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}
```


---

# 02. Flexbox

O **Flexbox** (Flexible Box) é um sistema de layout que facilita o alinhamento e a distribuição de elementos em contêineres.

### Propriedades principais do contêiner:

* **`display: flex`** : Ativa o Flexbox.
* **`flex-direction`** : Define a direção dos itens (`row`, `column`).
* **`justify-content`** : Alinha itens horizontalmente (`flex-start`, `center`, `space-between`).
* **`align-items`** : Alinha itens verticalmente (`flex-start`, `center`, `stretch`).

### Exemplo:

```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
```

---

# 03. Cores

As cores no CSS podem ser especificadas de várias formas:

* **Nomes** : `red`, `blue`, `green`.
* **Hexadecimal** : `#ff0000`, `#00ff00`.
* **RGB** : `rgb(255, 0, 0)`.
* **HSL** : `hsl(0, 100%, 50%)`.
* **Opacidade** : Usando `rgba` ou `hsla` para incluir transparência.

### Exemplo:

```css
h1 {
    color: #3498db;
    background-color: rgba(255, 255, 255, 0.8);
}
```

---

## Exercício Prático

### Exercício 1: Design Responsivo

Crie um layout que:

1. Altere a cor de fundo para azul em telas menores que 768px.
2. Use `flexbox` para centralizar um texto horizontal e verticalmente.

**Solução:**

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

@media (max-width: 768px) {
    body {
        background-color: blue;
    }
}
```

---

### Exercício 2: Flexbox

Crie um contêiner com três caixas dispostas horizontalmente, espaçadas uniformemente, com alinhamento central.

**Solução:**

```css
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
}

.box {
    width: 100px;
    height: 100px;
    background-color: #ff5733;
}
```

---

### Exercício 3: Cores

Defina estilos para um texto:

1. A cor do texto deve ser verde.
2. O fundo deve ser translúcido com 50% de opacidade.

**Solução:**

```css
p {
    color: green;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
}
```

---

## Conclusão

Neste módulo, aprendemos:

* O conceito e a importância do design responsivo.
* A usar Flexbox para criar layouts flexíveis e bem organizados.
* A trabalhar com cores e suas diferentes representações no CSS.

---
