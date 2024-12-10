# O Que Iremos Aprender

Neste módulo, vamos aprender a usar diversos recursos do **Bootstrap** para criar layouts responsivos e interativos, explorando o **Grid Layout**, componentes como **Cartões**, **Carrosséis**, **Formulários** e **Modais**.

Os tópicos incluem:

1. **Revisão**: Recapitulação dos conceitos fundamentais.
2. **Grid Layout**: Sistema de grid para criação de layouts flexíveis.
3. **Componente de Cartões**: Como usar cartões para organizar conteúdo.
4. **Componente Carrossel**: Como implementar um carrossel de imagens ou conteúdo.
5. **Formulário (Form Control)**: Como estilizar e gerenciar formulários com o Bootstrap.
6. **Modal (Dialog)**: Como criar janelas modais para interação com o usuário.

---

# 01. Revisão

Antes de avançarmos, revise os conceitos fundamentais do Bootstrap:

- **Containers**: Usados para centralizar e ajustar os layouts.
- **Classes utilitárias**: Como `text-center`, `bg-primary`, `d-flex`.
- **Posicionamento**: Utilizando flexbox para alinhar e posicionar elementos.

---

# 02. Grid Layout

O **Grid Layout** do Bootstrap é baseado em um sistema de 12 colunas. Ele permite criar layouts flexíveis e responsivos.

### Estrutura Básica:

```html
<div class="container">
    <div class="row">
        <div class="col-md-4">Coluna 1</div>
        <div class="col-md-4">Coluna 2</div>
        <div class="col-md-4">Coluna 3</div>
    </div>
</div>
```

* **`col-md-4`** : Define que cada coluna ocupará 4 colunas (de um total de 12) no layout de telas médias e maiores.

---

# 03. Componente de Cartões

Os cartões no Bootstrap são componentes prontos para exibir conteúdos como imagens, texto e links de forma estruturada e estilizada.

### Exemplo:

```html
<div class="card" style="width: 18rem;">
    <img src="imagem.jpg" class="card-img-top" alt="Imagem">
    <div class="card-body">
        <h5 class="card-title">Título do Cartão</h5>
        <p class="card-text">Texto de descrição do cartão.</p>
        <a href="#" class="btn btn-primary">Ação</a>
    </div>
</div>
```

---

# 04. Componente Carrossel

O **carrossel** exibe slides de imagens ou conteúdo, sendo interativo e dinâmico.

### Exemplo:

```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="imagem1.jpg" class="d-block w-100" alt="Slide 1">
        </div>
        <div class="carousel-item">
            <img src="imagem2.jpg" class="d-block w-100" alt="Slide 2">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
</div>
```

---

# 05. Formulário (Form Control)

Os **formulários** no Bootstrap são fáceis de criar e estilizar, com suporte para diferentes tipos de inputs, botões e validações.

### Exemplo:

```html
<form>
    <div class="mb-3">
        <label for="exampleInputEmail" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail" placeholder="Digite seu email">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword" class="form-label">Senha</label>
        <input type="password" class="form-control" id="exampleInputPassword" placeholder="Digite sua senha">
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

---

# 06. Modal (Dialog)

Os **modais** são janelas interativas usadas para exibir conteúdos em destaque ou pedir interações do usuário, como confirmações.

### Exemplo:

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Abrir Modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Título do Modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body">
                Este é o conteúdo do modal.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-primary">Salvar</button>
            </div>
        </div>
    </div>
</div>
```

---



# 07. Projeto Final

Crie uma página com os seguintes elementos:

- Um layout com três colunas usando Grid Layout.
- Um cartão para cada coluna.
- Um carrossel na parte superior da página.
- Um formulário simples para envio de informações.
- Um botão que abre um modal com mais detalhes.

## Solução:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Projeto Final</title>
</head>
<body>
    <!-- Carrossel -->
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="imagem1.jpg" class="d-block w-100" alt="Slide 1">
            </div>
            <div class="carousel-item">
                <img src="imagem2.jpg" class="d-block w-100" alt="Slide 2">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>

    <!-- Grid Layout com Cartões -->
    <div class="container my-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img src="imagem.jpg" class="card-img-top" alt="Card 1">
                    <div class="card-body">
                        <h5 class="card-title">Card 1</h5>
                        <p class="card-text">Descrição do Card 1.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="imagem.jpg" class="card-img-top" alt="Card 2">
                    <div class="card-body">
                        <h5 class="card-title">Card 2</h5>
                        <p class="card-text">Descrição do Card 2.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="imagem.jpg" class="card-img-top" alt="Card 3">
                    <div class="card-body">
                        <h5 class="card-title">Card 3</h5>
                        <p class="card-text">Descrição do Card 3.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Formulário -->
    <form class="container">
        <div class="mb-3">
            <label for="inputName" class="form-label">Nome</label>
            <input type="text" class="form-control" id="inputName" placeholder="Digite seu nome">
        </div>
        <div class="mb-3">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu email">
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Enviar</button>
    </form>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Informações Enviadas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>
                <div class="modal-body">
                    Suas informações foram enviadas com sucesso!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---
