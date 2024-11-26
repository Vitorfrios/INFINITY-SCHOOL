import os

# Definindo o caminho base onde as pastas serão criadas
base_path = r"C:\Users\vitor\OneDrive\infinity_curse\Programação full-stack\02_JAVA_SCRIPT\03_provas  de aula infinity"
base_path = r"C:\Users\vitor\OneDrive\infinity_curse\Programação full-stack\02_JAVA_SCRIPT\04_exercicios feito em aulas"
# Criando 8 pastas chamadas "Aula 1", "Aula 2", ..., "Aula 8"
for i in range(1, 19):
    folder_name = f"Aula {i}"
    folder_path = os.path.join(base_path, folder_name)
    
    try:
        os.makedirs(folder_path)
        print(f'Pasta "{folder_name}" criada com sucesso.')
    except FileExistsError:
        print(f'Pasta "{folder_name}" já existe.')
    except Exception as e:
        print(f'Erro ao criar pasta "{folder_name}": {e}')
