import os

# Definindo o caminho base onde as pastas estão localizadas
base_path = "/home/zion48/Documentos/vfr/GITHUB/INFINITY-SCHOOL/01_Programação full-stack/04_Pyton/02_Exercicios feito em aulas"

# Verificando se o caminho base existe
if not os.path.exists(base_path):
    print(f'O caminho base não existe: {base_path}')
else:
    # Verificando as pastas de "Aula 1" até "Aula 6"
    for i in range(1, 19):  # Para as aulas de 1 até 6
        folder_name = f"Aula {i}"
        folder_path = os.path.join(base_path, folder_name)
        
        # Verificando se a pasta existe
        if os.path.exists(folder_path):
            # Criando o arquivo Python vazio com o nome da pasta
            python_file_path = os.path.join(folder_path, f"Aula_{i}.py")
            
            # Verificando se o arquivo Python já existe
            if os.path.exists(python_file_path):
                print(f'O arquivo "{python_file_path}" já existe na pasta "{folder_name}".')
            else:
                try:
                    # Criando o arquivo Python vazio
                    with open(python_file_path, 'w') as python_file:
                        # Não escreve nada no arquivo, só cria o arquivo vazio
                        pass
                    
                    print(f'Arquivo Python "{python_file_path}" criado na pasta "{folder_name}".')
                except Exception as e:
                    print(f'Erro ao criar o arquivo Python na pasta "{folder_name}": {e}')
        else:
            print(f'A pasta "{folder_name}" não existe em: {folder_path}')

# Criando o conteúdo padrão do README.md
readme_content = """
# Aula {i}

Esta é a documentação da {i}ª aula. Coloque o conteúdo relacionado a essa aula aqui.
"""

# Verificando se o caminho base existe
if not os.path.exists(base_path):
    print(f'O caminho base não existe: {base_path}')
else:
    # Verificando as pastas de "Aula 1" até "Aula 6"
    for i in range(1, 19):  # Para as aulas de 1 até 6
        folder_name = f"Aula {i}"
        folder_path = os.path.join(base_path, folder_name)
        
        # Verificando se a pasta existe
        if os.path.exists(folder_path):
            readme_path = os.path.join(folder_path, "README.md")
            
            # Verificando se o README.md já existe
            if os.path.exists(readme_path):
                print(f'O arquivo README.md já existe na pasta "{folder_name}".')
            else:
                try:
                    # Criando o arquivo README.md com o conteúdo
                    with open(readme_path, 'w') as readme_file:
                        readme_file.write(readme_content.format(i=i))
                    
                    print(f'Arquivo README.md criado na pasta "{folder_name}".')
                except Exception as e:
                    print(f'Erro ao criar o README.md na pasta "{folder_name}": {e}')
        else:
            print(f'A pasta "{folder_name}" não existe em: {folder_path}')
