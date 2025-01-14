# Estrutura de pastas e arquivos do projeto

# Estrutura principal
# /projeto_cadastro_pessoas
# ├── backend
# │   ├── app.py
# │   ├── models.py
# │   ├── routes.py
# │   ├── database.py
# │   └── requirements.txt
# ├── frontend
# │   ├── index.html
# │   ├── style.css
# │   ├── script.js
# │   └── assets
# ├── docs
# │   └── briefing.md
# └── tests
#     ├── test_routes.py
#     └── test_models.py

import os

def criar_estrutura_projeto():
    # Diretórios principais
    pastas = [
        "projeto_cadastro_pessoas/backend",
        "projeto_cadastro_pessoas/frontend/assets",
        "projeto_cadastro_pessoas/docs",
        "projeto_cadastro_pessoas/tests"
    ]

    # Criar diretórios
    for pasta in pastas:
        os.makedirs(pasta, exist_ok=True)

if __name__ == "__main__":
    criar_estrutura_projeto()
