# Script para criar a estrutura de pastas e arquivos usando Python

import os

structure = [
    'email_marketing/',
    'email_marketing/app/',
    'email_marketing/app/__init__.py',
    'email_marketing/app/models.py',
    'email_marketing/app/routes.py',
    'email_marketing/app/utils.py',
    'email_marketing/config.py',
    'email_marketing/requirements.txt',
    'email_marketing/run.py',
    'email_marketing/README.md',
]

for path in structure:
    if path.endswith('/'):
        os.makedirs(path, exist_ok=True)
    else:
        with open(path, 'w') as f:
            pass

print("Estrutura de pastas e arquivos criada com sucesso!")

# Agora você pode rodar esse script para gerar tudo automaticamente!
# Para rodar, salve como 'create_structure.py' e execute:
# python create_structure.py
