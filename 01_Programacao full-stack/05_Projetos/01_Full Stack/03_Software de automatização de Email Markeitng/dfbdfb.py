import os

# Definindo a nova estrutura de pastas e arquivos para o frontend
frontend_structure = {
    "frontend": {
        "public": {
            "index.html": ""
        },
        "src": {
            "components": {
                "EmailForm.js": "",
                "EmailList.js": "",
                "Dashboard.js": ""
            },
            "pages": {
                "HomePage.js": "",
                "EmailPage.js": ""
            },
            "services": {
                "emailService.js": ""
            },
            "styles": {
                "styles.css": ""
            },
            "App.js": "",
            "index.js": "",
            "App.css": ""
        },
        "package.json": ""
    }
}

def create_structure(base_path, structure):
    for name, content in structure.items():
        path = os.path.join(base_path, name)
        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)  # Recursão para criar subpastas
        else:
            with open(path, 'w') as f:
                f.write(content)  # Cria um arquivo vazio

# Criando a estrutura de pastas e arquivos
create_structure(".", frontend_structure)

print("Estrutura de pastas e arquivos do frontend criada com sucesso!")