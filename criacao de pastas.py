import os
import unidecode

# Caminho do diretório onde os arquivos estão localizados
base_path = "/home/zion48/Documentos/vfr/GITHUB/INFINITY-SCHOOL"

# Função para renomear arquivos e diretórios
def rename_files_and_dirs(base_path):
    # Percorrer todos os arquivos e diretórios no caminho base
    for root, dirs, files in os.walk(base_path, topdown=False):
        # Renomear arquivos
        for name in files:
            # Novo nome sem caracteres especiais
            new_name = unidecode.unidecode(name)
            # Caminhos completos
            old_file = os.path.join(root, name)
            new_file = os.path.join(root, new_name)
            # Renomear arquivo se o nome for diferente
            if old_file != new_file:
                os.rename(old_file, new_file)
                print(f'Renomeado arquivo: {old_file} -> {new_file}')
        
        # Renomear diretórios
        for name in dirs:
            new_name = unidecode.unidecode(name)
            old_dir = os.path.join(root, name)
            new_dir = os.path.join(root, new_name)
            # Renomear diretório se o nome for diferente
            if old_dir != new_dir:
                os.rename(old_dir, new_dir)
                print(f'Renomeado diretório: {old_dir} -> {new_dir}')

# Executar a função para renomear arquivos e diretórios
rename_files_and_dirs(base_path)
