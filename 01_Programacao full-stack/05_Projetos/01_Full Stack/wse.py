import os

# Definindo a estrutura de pastas
folders = [
    "email-marketing-project",
    "email-marketing-project/backend",
    "email-marketing-project/backend/models",
    "email-marketing-project/backend/routes",
    "email-marketing-project/backend/controllers",
    "email-marketing-project/backend/services",
    "email-marketing-project/backend/config",
    "email-marketing-project/backend/app.js",
    "email-marketing-project/frontend",
    "email-marketing-project/frontend/components",
    "email-marketing-project/frontend/pages",
    "email-marketing-project/frontend/services",
    "email-marketing-project/frontend/styles",
    "email-marketing-project/frontend/App.js",
    "email-marketing-project/database",
    "email-marketing-project/database/schema.sql",
    "email-marketing-project/database/seed.sql",
    "email-marketing-project/utils",
    "email-marketing-project/utils/emailValidator.js",
    "email-marketing-project/utils/reportGenerator.js",
    "email-marketing-project/utils/cronScheduler.js",
    "email-marketing-project/.env",
    "email-marketing-project/package.json",
    "email-marketing-project/README.md",
    "email-marketing-project/tests",
    "email-marketing-project/tests/backend.test.js",
    "email-marketing-project/tests/frontend.test.js"
]

# Criando as pastas
for folder in folders:
    os.makedirs(folder, exist_ok=True)

print("Estrutura de pastas criada com sucesso!")