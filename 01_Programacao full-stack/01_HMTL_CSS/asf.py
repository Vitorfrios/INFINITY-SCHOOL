import os

# Caminho do diretório onde as pastas serão criadas
diretorio = '02_Teorias html css'

# Criar pastas Aula 01, Aula 02, ..., Aula 10 e adicionar README.txt
for i in range(1, 9):  # Cria até 10 pastas
    pasta_aula = os.path.join(diretorio, f"Aula {i:02}")
    
    # Verifica se a pasta não existe e cria
    if not os.path.exists(pasta_aula):
        os.makedirs(pasta_aula)
        print(f"Pasta criada: {pasta_aula}")
    else:
        print(f"Pasta já existe: {pasta_aula}")
    
    # Criar arquivo README.txt dentro da pasta
    readme_path = os.path.join(pasta_aula, "README.md")
    if not os.path.exists(readme_path):
        with open(readme_path, 'w') as f:
            f.write(f"# Aula {i:02}\n\nEste diretório contém os exercícios da aula {i:02}.")
        print(f"Arquivo README.txt criado em: {readme_path}")
    else:
        print(f"Arquivo README.txt já existe em: {readme_path}")
