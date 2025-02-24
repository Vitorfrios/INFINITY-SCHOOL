# Projeto de Email Marketing com Flask

Este projeto é uma aplicação web para gerenciar campanhas de email marketing. Ele permite adicionar, listar e remover emails, enviar emails personalizados e gerar relatórios em CSV e PDF.

---

## Como Executar o Projeto

### Pré-requisitos

- Python 3.8 ou superior.
- Pip (gerenciador de pacotes do Python).

---

### Passo 1: Clone o Repositório

Clone o repositório do projeto para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/email_marketing.git
cd email_marketing
```

---

### Passo 2: Instale as Dependências

Instale as bibliotecas necessárias usando o arquivo `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

### Passo 3: Execute o Servidor Flask

Inicie o servidor Flask para rodar a aplicação:

```bash
python run.py
```

O servidor estará disponível em `http://localhost:5000`.

---

### Passo 4: Teste as Rotas da API

Use ferramentas como **Postman**, **Insomnia** ou o comando `curl` para testar as rotas da API.

---

## Rotas da API

### 1. Adicionar um Email

**Rota:** `POST /emails`

**Exemplo de Entrada:**

```bash
curl -X POST http://localhost:5000/emails \
-H "Content-Type: application/json" \
-d '{"email": "cliente1@example.com"}'
```

**Exemplo de Saída:**

```json
{
  "message": "Email adicionado com sucesso!"
}
```

---

### 2. Listar Emails

**Rota:** `GET /emails`

**Exemplo de Entrada:**

```bash
curl -X GET http://localhost:5000/emails
```

**Exemplo de Saída:**

```json
[
  "cliente1@example.com",
  "cliente2@example.com"
]
```

---

### 3. Remover um Email

**Rota:** `DELETE /emails/<id>`

**Exemplo de Entrada:**

```bash
curl -X DELETE http://localhost:5000/emails/1
```

**Exemplo de Saída:**

```json
{
  "message": "Email removido com sucesso!"
}
```

---

### 4. Enviar Email

**Rota:** `POST /send-email`

**Exemplo de Entrada:**

```bash
curl -X POST http://localhost:5000/send-email \
-H "Content-Type: application/json" \
-d '{
  "to": "cliente1@example.com",
  "subject": "Promo\u00e7\u00e3o Especial",
  "body": "<h1>Ol\u00e1, Cliente!</h1><p>Confira nossas ofertas.</p>"
}'
```

**Exemplo de Saída:**

```json
{
  "message": "Email enviado com sucesso!"
}
```

---

### 5. Gerar Relatórios

**Rota:** `GET /generate-report`

**Exemplo de Entrada:**

```bash
curl -X GET http://localhost:5000/generate-report
```

**Exemplo de Saída:**

```json
{
  "message": "Relatórios gerados com sucesso!"
}
```

**Arquivos Gerados:**

- `relatorio_emails.csv`: Lista de emails em formato CSV.
- `relatorio_emails.pdf`: Lista de emails em formato PDF.

---

## Estrutura do Projeto

```
email_marketing/
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── routes.py
│   ├── utils.py
├── config.py
├── requirements.txt
├── run.py
└── README.md
```

---

## Configuração do Envio de Emails

Para enviar emails, configure as credenciais do servidor SMTP no arquivo `app/utils.py`:

```python
def send_email(to, subject, body):
    msg = MIMEMultipart()
    msg['From'] = 'seu_email@example.com'  # Substitua pelo seu email
    msg['To'] = to
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'html'))

    try:
        with smtplib.SMTP('smtp.example.com', 587) as server:  # Substitua pelo servidor SMTP
            server.starttls()
            server.login('seu_email@example.com', 'sua_senha')  # Substitua pela sua senha
            server.send_message(msg)
        return f'Email enviado para {to}'
    except Exception as e:
        return f'Erro ao enviar email: {str(e)}'
```

---

## Considerações Finais

- **Segurança:** Armazene senhas e chaves de API em variáveis de ambiente.
- Feito por Vitor de Freitas Rios
- Tempo de projeto 14 dias

Se precisar de mais ajuda, é só avisar! 😊
