# Sistema de Login para Mini-Game RPG

Este projeto foi desenvolvido por mim, Vitor Rios, para a Infinity School como parte de uma simulação de um sistema de login para um Mini-Game RPG. O tempo total de desenvolvimento foi de 47 dias, incluindo a fase de planejamento e pesquisa sobre tecnologias adequadas.

## Tecnologias Utilizadas

O sistema foi inteiramente implementado em Python e MySQL, utilizando as seguintes bibliotecas:

- **Flet**: Baseado em Flutter, permite a criação de interfaces modernas e intuitivas.
- **mysql-connector-python**: Facilita a conexão entre Python e MySQL, permitindo operações com bancos de dados.
- **bcrypt**: Responsável por transformar senhas em hashes seguros para garantir a proteção dos dados armazenados.

## Sobre o Projeto

O sistema permite que os usuários realizem login ou criem uma conta. No cadastro, é necessário fornecer **nome**, **usuário** e **senha**, após o que o usuário pode criar e personalizar seu personagem, definindo atributos como _imagem_, _história_ e _habilidades_.

Os dados ficam armazenados no banco de dados para uso posterior. Na tela principal, existem opções como _Jogar_ e _Ver Ranking_, que estão desativadas no momento. Também é possível visualizar os detalhes do personagem ou realizar logout. O projeto prioriza um **design intuitivo** e **navegação simplificada**.

### Desenvolvimento

O projeto apresentou desafios devido a alguns bugs inesperados, mas foi uma experiência valiosa. Desenvolvi todo o sistema em inglês para familiarização com terminologias técnicas.

Utilizei **inteligência artificial** apenas como suporte para aprender novas implementações, mas sem delegar a escrita do código.

### Estrutura do Código

Para manter o sistema organizado, optei por dividir funcionalidades em diferentes arquivos e aplicar boas práticas de programação:

- **Logs**: Implementado um sistema de logs no terminal para rastrear a execução do código.
- **Classes**: Uso de classes para encapsular informações dos usuários e personagens.
- **Gestão de Sessão**: A variável que armazena o ID do usuário logado é utilizada em consultas ao banco de dados.

## Como Utilizar

Para executar o sistema localmente, primeiro é necessário criar o banco de dados utilizando MySQL Workbench ou uma ferramenta similar.

No diretório _app/database_, localize o arquivo _create_database.sql_ e execute o script para configurar o banco corretamente.

### Instalação de Dependências

Crie um ambiente virtual executando:

```Python
python -m venv venv
# Linux:
source venv/bin/activate
# Windows:
venv\Scripts\activate
```

Com o ambiente virtual ativo, instale os pacotes necessários:

```Python
pip install -r requirements.txt
```

### Configuração do Banco de Dados

No arquivo _connections.py_ localizado em _app/database/connections.py_, modifique a função _create_conn()_ com suas credenciais:

```Python
connection = mysql.connector.connect(
            host='127.0.0.1',
            database='RPG',
            user='root',
            password='admin'
        )
```

Ajuste os valores conforme sua configuração local.

### Executando o Projeto

Com tudo configurado, basta rodar o arquivo _main.py_ no diretório raiz do projeto.

## Divirta-se!