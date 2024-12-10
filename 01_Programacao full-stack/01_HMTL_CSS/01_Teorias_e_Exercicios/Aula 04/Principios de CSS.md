


# O Que Iremos Aprender

Neste módulo, vamos explorar os fundamentos do CSS, incluindo seus princípios básicos, seletores, especificidade e propriedades. Também realizaremos uma revisão rápida dos conceitos básicos.

Os tópicos incluem:

1. **Revisão**: Reforçando conceitos fundamentais de HTML.
2. **Princípios do CSS**: Introdução ao CSS e como ele estiliza páginas web.
3. **Seletores**: Identificar elementos HTML para aplicar estilos.
4. **Especificidade**: Regras para resolver conflitos entre seletores.
5. **Propriedades**: Personalização de elementos usando propriedades CSS.

---

# 01. Revisão

Lembre-se de que o CSS funciona junto com o HTML para estilizar páginas. A estrutura básica é:

### HTML com CSS Embutido

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Bem-vindo ao CSS!</h1>
    <p>Este é um exemplo básico.</p>
</body>
</html>
```


---

# 02. Princípios do CSS

O CSS (Cascading Style Sheets) é usado para controlar a aparência de páginas web. Ele permite:

* Definir cores, fontes, espaçamentos e mais.
* Aplicar estilos em múltiplas páginas com um arquivo único.

### Formas de usar CSS:

1. **Embutido (inline)** : Dentro de uma tag HTML usando o atributo `style`.
2. **Interno** : Dentro de uma tag `<style>` no cabeçalho.
3. **Externo** : Em um arquivo separado (`.css`).

---

# 03. Seletores

Os **seletores** são usados para aplicar estilos a elementos específicos. Exemplos comuns incluem:

* **Tag** : Seleciona todas as tags de um tipo.

```css
  p {
      color: green;
  }
```

* **Classe** : Aplica estilo a elementos com uma classe específica.

```css
  .destaque {
      font-weight: bold;
  }
```

* **ID** : Aplica estilo a um único elemento com ID específico.

```css
  #titulo {
      text-transform: uppercase;
  }
```

---

# 04. Especificidade

A especificidade determina qual regra CSS será aplicada quando houver conflitos. A prioridade segue esta ordem:

1. Estilos inline (`style`).
2. ID (`#id`).
3. Classe (`.classe`), atributos e pseudo-classes.
4. Tag (`tag`).

### Exemplo:

```html
<p id="paragrafo" class="texto">Texto de exemplo.</p>
```

```css
p { color: blue; }        /* Menor prioridade */
.texto { color: green; }  /* Média prioridade */
#paragrafo { color: red; } /* Maior prioridade */
```

Resultado: o texto será vermelho.

---

# 05. Propriedades

As **propriedades** definem o comportamento ou aparência de elementos. Exemplos incluem:

* **Cor de texto** : `color`.
* **Tamanho de fonte** : `font-size`.
* **Margens internas e externas** : `padding`, `margin`.

### Exemplo:

```css
p {
    color: purple;
    font-size: 16px;
    margin: 10px;
}
```

---

## Exercício Prático

### Exercício 1: Seletores

Crie um estilo CSS que:

1. Altere a cor de todos os parágrafos para azul.
2. Deixe o texto em negrito para elementos com a classe `destaque`.
3. Aplique uma borda vermelha a elementos com ID `importante`.

**Solução:**

```css
p {
    color: blue;
}
.destaque {
    font-weight: bold;
}
#importante {
    border: 1px solid red;
}
```

---

### Exercício 2: Especificidade

Dado o seguinte HTML, defina um CSS que pinte o texto em laranja, independentemente de outras regras:

```html
<p id="paragrafo" class="texto">Texto de exemplo.</p>
```

**Solução:**

```css
p#paragrafo.texto {
    color: orange;
}
```

---

## Conclusão

Neste módulo, aprendemos:

* Os fundamentos do CSS e como aplicá-lo.
* Seletores e a hierarquia de especificidade.
* Propriedades úteis para estilizar elementos HTML.

---
