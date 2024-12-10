


# O Que Iremos Aprender

Neste módulo, exploraremos conceitos fundamentais de CSS relacionados ao layout e posicionamento de elementos em uma página web.

Os tópicos incluem:

1. **Display**: Tipos de exibição de elementos.
2. **Box Model**: Entendendo as margens, bordas, preenchimentos e o conteúdo.
3. **Position**: Controlando o posicionamento de elementos na página.

---

# 01. Display

A propriedade `display` define como um elemento será exibido. Os valores mais comuns são:

- **`block`**: O elemento ocupa toda a largura disponível. Exemplos: `<div>`, `<p>`.
- **`inline`**: O elemento ocupa apenas o espaço necessário. Exemplos: `<span>`, `<a>`.
- **`inline-block`**: Combina características dos dois; respeita dimensões definidas.
- **`none`**: O elemento não é exibido.

### Exemplo:

```css
div {
    display: block;
}
span {
    display: inline;
}
```


---

# 02. Box Model

O **Box Model** descreve como o espaço de um elemento é calculado, incluindo:

1. **Conteúdo** : A área onde o texto ou outros elementos aparecem.
2. **Padding (Preenchimento)** : Espaço entre o conteúdo e a borda.
3. **Borda (Border)** : A linha ao redor do elemento.
4. **Margem (Margin)** : Espaço entre o elemento e os outros ao seu redor.

### Exemplo:

```css
div {
    width: 200px;
    padding: 10px;
    border: 5px solid black;
    margin: 20px;
}
```

### Representação:

Se `width = 200px`, o espaço total será:
`width + padding + border + margin = 200 + 10*2 + 5*2 + 20*2 = 270px`.

---

# 03. Position

A propriedade `position` controla como os elementos são posicionados na página. Os valores mais comuns incluem:

* **`static`** : Padrão, segue o fluxo normal.
* **`relative`** : Posicionado em relação à sua posição original.
* **`absolute`** : Posicionado em relação ao seu ancestral mais próximo com `position: relative` ou ao `<body>` se nenhum for encontrado.
* **`fixed`** : Fixo em relação à janela de visualização.
* **`sticky`** : Combina `relative` e `fixed` dependendo do scroll.

### Exemplo:

```css
div {
    position: relative;
    top: 10px;
    left: 20px;
}
```

---

## Exercício Prático

### Exercício 1: Display e Box Model

Crie um layout com:

1. Um cabeçalho que ocupe 100% da largura.
2. Um parágrafo com 200px de largura, 20px de `padding`, 5px de `border`, e 15px de `margin`.

**Solução:**

```css
header {
    display: block;
    width: 100%;
}
p {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 15px;
}
```

---

### Exercício 2: Position

Crie um elemento que:

1. Fique fixo no canto superior direito da tela.
2. Mova um elemento 50px para a direita e 30px para baixo da sua posição original.

**Solução:**

```css
.fixed-element {
    position: fixed;
    top: 0;
    right: 0;
}
.relative-element {
    position: relative;
    top: 30px;
    left: 50px;
}
```

---

## Conclusão

Neste módulo, você aprendeu:

* A controlar o tipo de exibição dos elementos com `display`.
* A calcular o espaço ocupado pelos elementos usando o Box Model.
* A posicionar elementos com a propriedade `position`.

---
