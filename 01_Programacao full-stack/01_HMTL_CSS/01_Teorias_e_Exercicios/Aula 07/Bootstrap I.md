


# O Que Iremos Aprender

Neste módulo, exploraremos os fundamentos do framework **Bootstrap**, que facilita a criação de layouts responsivos e estilizados. Veremos como configurá-lo e utilizá-lo para estruturar e estilizar elementos.

Os tópicos incluem:

1. **Introdução**: O que é o Bootstrap e por que usá-lo.
2. **Instalando o Bootstrap**: Configuração do ambiente.
3. **Container**: Estruturando layouts.
4. **Cores**: Utilizando as classes de cores do Bootstrap.
5. **Dimensionamento**: Redimensionando elementos com classes utilitárias.
6. **Posicionamento**: Controlando o alinhamento e a posição dos elementos.
7. **Atividade Prática**: Aplicação prática dos conceitos.

---

# 01. Introdução

O **Bootstrap** é um framework CSS que facilita a criação de layouts responsivos com uma ampla gama de componentes prontos, como botões, formulários e tabelas.

### Benefícios:

- Design responsivo integrado.
- Classes CSS utilitárias para estilizar elementos rapidamente.
- Compatível com navegadores modernos.

---

# 02. Instalando o Bootstrap

Você pode incluir o Bootstrap em seu projeto de duas maneiras principais:

### Usando a CDN:

Adicione este trecho no `<head>` do seu HTML:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```


### Instalando via npm:

```bash
npm install bootstrap
```

---

# 03. Container

A classe **`container`** é usada para criar um elemento centralizado e com margens automáticas.

### Tipos:

* **`container`** : Largura fixa, ajustada conforme o tamanho da tela.
* **`container-fluid`** : Largura total, ocupando 100% do espaço.

### Exemplo:

```html
<div class="container">
    <h1>Bem-vindo ao Bootstrap</h1>
</div>
<div class="container-fluid">
    <p>Este é um container fluido.</p>
</div>
```

---

# 04. Cores

O Bootstrap oferece classes predefinidas para aplicar cores em textos e fundos:

### Cores de texto:

* **Primária** : `text-primary`
* **Sucesso** : `text-success`
* **Perigo** : `text-danger`

### Cores de fundo:

* **Primária** : `bg-primary`
* **Sucesso** : `bg-success`
* **Perigo** : `bg-danger`

### Exemplo:

```html
<p class="text-primary">Texto em azul</p>
<p class="bg-success text-white">Texto com fundo verde</p>
```

---

# 05. Dimensionamento

Use classes utilitárias para controlar tamanhos de largura e altura.

### Exemplo:

```html
<img src="imagem.jpg" class="w-50 h-25" alt="Exemplo">
```

Neste caso:

* `w-50`: Define 50% da largura do elemento pai.
* `h-25`: Define 25% da altura do elemento pai.

---

# 06. Posicionamento

Controle o alinhamento e a posição dos elementos com classes como:

* **`text-center`** : Centraliza texto horizontalmente.
* **`d-flex` e `justify-content-center`** : Centraliza elementos horizontalmente.
* **`position-relative` e `position-absolute`** : Controla a posição dos elementos.

### Exemplo:

```html
<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <p>Texto centralizado</p>
</div>
```

---

# 07. Atividade Prática

### Atividade: Criando um Layout com Bootstrap

Crie uma página com:

1. Um cabeçalho centralizado em um container.
2. Um parágrafo com texto em verde e fundo cinza.
3. Uma imagem ocupando 50% da largura da tela e centralizada.
4. Um botão alinhado à direita usando classes utilitárias.

**Solução:**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Atividade Bootstrap</title>
</head>
<body>
    <div class="container">
        <h1 class="text-center">Meu Layout Bootstrap</h1>
        <p class="text-success bg-light p-3">Este é um parágrafo estilizado com Bootstrap.</p>
        <div class="text-center">
            <img src="imagem.jpg" class="w-50" alt="Imagem Exemplo">
        </div>
        <div class="text-end">
            <button class="btn btn-primary">Clique Aqui</button>
        </div>
    </div>
</body>
</html>
```

---

## Conclusão

Neste módulo, você aprendeu:

* A instalar e configurar o Bootstrap.
* A criar layouts estruturados com containers.
* A aplicar cores, dimensionamento e posicionamento com classes utilitárias.
* A usar o Bootstrap em um exemplo prático.

---
