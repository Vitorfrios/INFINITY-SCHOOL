


# O Que Iremos Aprender

Neste módulo, exploraremos conceitos fundamentais para a construção de páginas web. Vamos aprender sobre o funcionamento básico da web e como utilizar HTML para estruturar conteúdos de maneira eficiente.

Os tópicos incluem:

1. **Introdução**: Entenda os fundamentos da web e o papel do HTML.
2. **HTTP**: Descubra como o protocolo HTTP funciona e permite a comunicação na web.
3. **HTML**: Aprenda a linguagem de marcação base para a criação de páginas web.
4. **Tags**: Conheça os principais elementos do HTML e suas funções.
5. **Imagem**: Como adicionar e formatar imagens em uma página.
6. **Texto Alternativo**: A importância do texto alternativo para acessibilidade.
7. **Âncora**: Como criar links para outras páginas e recursos.

---

# 01. Introdução

O **HTML (HyperText Markup Language)** é a base de toda página web. Ele permite estruturar informações e conteúdos como texto, imagens, vídeos e links. Junto com CSS e JavaScript, forma a tríade essencial do desenvolvimento web.

### Principais funções do HTML:

- Estruturar o conteúdo.
- Adicionar semântica às páginas.
- Facilitar o acesso a outros recursos, como estilos e scripts.

---

# 02. HTTP

O **HTTP (HyperText Transfer Protocol)** é o protocolo usado para a comunicação entre navegadores e servidores web. Ele define como as mensagens são transmitidas e como os navegadores devem responder.

### Principais métodos HTTP:

- **GET**: Solicita dados de um servidor.
- **POST**: Envia dados para o servidor.
- **PUT**: Atualiza dados existentes no servidor.
- **DELETE**: Remove dados do servidor.

---

# 03. HTML

O HTML utiliza **tags** para estruturar os elementos de uma página. Cada tag é representada por um nome entre `<` e `>`.

### Estrutura básica de um documento HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
</head>
<body>
    <h1>Bem-vindo ao HTML!</h1>
    <p>Este é um parágrafo de exemplo.</p>
</body>
</html>
```


---

# 04. Tags

As **tags** são elementos usados para marcar e organizar o conteúdo em HTML. Existem várias tags para diferentes finalidades.

### Exemplos de tags comuns:

* **`<h1>` a `<h6>`** : Cabeçalhos de diferentes níveis.
* **`<p>`** : Parágrafo.
* **`<div>`** : Contêiner genérico.
* **`<span>`** : Elemento genérico para inline.
* **`<ul>` e `<ol>`** : Listas não ordenadas e ordenadas.

---

# 05. Imagem

A tag `<img>` é usada para exibir imagens em uma página HTML. Ela requer o atributo `src` para especificar o caminho da imagem.

### Exemplo:

```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

---

# 06. Texto Alternativo

O atributo `alt` da tag `<img>` fornece uma descrição textual da imagem. Ele é essencial para:

* **Acessibilidade** : Permitir que leitores de tela descrevam a imagem para pessoas com deficiência visual.
* **SEO** : Melhorar a indexação da página pelos motores de busca.

---

# 07. Âncora

A tag `<a>` é usada para criar links (âncoras) para outras páginas ou recursos.

### Exemplo:

```html
<a href="https://www.exemplo.com">Visite nosso site</a>
```

O atributo `href` especifica o destino do link.

---

## Exercício Prático

1. Crie um documento HTML que contenha:
   * Um título principal (`<h1>`).
   * Um parágrafo (`<p>`).
   * Uma imagem com texto alternativo (`<img>`).
   * Um link para um site externo (`<a>`).

**Solução:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de HTML</title>
</head>
<body>
    <h1>Minha Primeira Página HTML</h1>
    <p>Este é um exemplo de parágrafo em HTML.</p>
    <img src="exemplo.jpg" alt="Imagem de exemplo">
    <a href="https://www.exemplo.com">Clique aqui para acessar um site externo</a>
</body>
</html>
```

---
