# **Projeto: Aplicativo de Cadastro de Pessoas**

Este projeto é um **aplicativo de cadastro de pessoas** onde os usuários podem preencher seus dados pessoais e esses dados são armazenados para posterior consulta. O sistema foi desenvolvido utilizando tecnologias simples e é de fácil instalação e uso.

---

## 🚀 **Instruções para Iniciar**

Para iniciar o sistema, siga os passos abaixo:

### 1. **Inicie o Servidor**

Basta digitar o seguinte comando no terminal para iniciar o servidor:

```bash
npm start
```

As dependências necessárias para o código funcionar serão baixadas automaticamente. O sistema estará disponível no endereço `http://localhost:3000`.

---

## 📝 **Funcionalidades**

### **1. Cadastro de Pessoas**

- O usuário pode preencher seus dados pessoais, como nome, email, idade, gênero, endereço, renda, número de cômodos, acesso à internet, CPF, data de nascimento e telefone.
- Os dados são validados antes de serem enviados (por exemplo, senhas devem ter pelo menos 6 caracteres e devem coincidir).

### **2. Dashboard do Usuário**

- Login feito para usuarios
- O usuario pode visualizar os dados fornecidos
- O usuario pode editar todos os seus dados

### **3. Página de Login de Administrador**

- Os administradores podem acessar a página de gerenciamento de inscrições através de um login seguro.
- O login requer um nome de usuário e senha válidos, que são verificados no banco de dados.

### **4. Gerenciamento de Inscrições**

- Os administradores podem visualizar todas as inscrições.
- Podem filtrar as inscrições por status: **pendente**, **aprovado** ou **reprovado**.
- Podem editar, aprovar ou reprovar inscrições diretamente na interface.
- Cada inscrição pode ser baixada em formato PDF com todos os detalhes.

### **5. Armazenamento Local**

- Os dados são armazenados em um arquivo **JSON** e podem ser consultados dentro do próprio aplicativo.

### **6. Interface Simples e Intuitiva**

- A interface foi projetada para ser simples e fácil de usar com **HTML**, **CSS** e **JavaScript**.

---

## 🛠️ **Tecnologias Utilizadas**

- **HTML**: Para estruturação da página web.
- **CSS**: Para estilização e layout da página.
- **JavaScript**: Para interatividade e manipulação dos dados.
- **JSON Server**: Para simular um backend e armazenar os dados de forma local.
- **jsPDF**: Para gerar PDFs com os dados das inscrições.

---

## 📋 **Informações Coletadas do Usuário**

O formulário de cadastro coleta as seguintes informações:

1. **Nome Completo**: Nome e sobrenome do usuário.
2. **Email**: Endereço de email válido.
3. **Idade**: Idade do usuário.
4. **Gênero**: Masculino, Feminino ou Outro.
5. **Endereço**: Endereço completo do usuário.
6. **Senha**: Senha de acesso (com validação de confirmação).
7. **Renda Familiar**: Renda mensal da família.
8. **Número de Cômodos**: Quantidade de cômodos na residência.
9. **Acesso à Internet**: Se o usuário possui acesso à internet (Sim ou Não).
10. **CPF**: Número do CPF (com formatação automática).
11. **Data de Nascimento**: Data de nascimento do usuário.
12. **Telefone**: Número de telefone para contato.

---

## 🎨 **Design e Interface**

- **Design Simples e Responsivo**:
  - A interface foi projetada para ser limpa e fácil de usar.
  - Botões e campos de entrada são estilizados para melhorar a experiência do usuário.
- **Feedback Visual**:
  - Mensagens de erro e sucesso são exibidas para orientar o usuário durante o preenchimento do formulário.
  - Botões de filtro mudam de cor para indicar o status selecionado (todos, aprovados, reprovados).

---

## 📄 **Gerar PDF**

- Cada inscrição pode ser baixada em formato PDF.
- O PDF contém todos os detalhes da inscrição, como nome, CPF, endereço, renda, etc.
- O nome do arquivo PDF é gerado automaticamente com base no nome do usuário (ex: `Inscricao_NomeDoUsuario.pdf`).

---

## 📅 **Tempo de Desenvolvimento**

Este sistema foi desenvolvido em **4 dias**. Durante esse período, a equipe focou em criar uma aplicação simples e funcional para atender à necessidade de cadastro de pessoas.

---

## 🧑‍💻 **Desenvolvedores**

Este projeto foi desenvolvido por:

- **Vitor de Freitas Rios**
