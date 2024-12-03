import os

# Caminho do diretório onde os arquivos .py estão localizados
diretorio = '02_Exercicios feito em aulas'

# Listar todos os arquivos no diretório
arquivos = os.listdir(diretorio)

# Filtrar apenas os arquivos .py
arquivos_py = [arquivo for arquivo in arquivos if arquivo.endswith('.py')]

# Renomear os arquivos
for i, arquivo in enumerate(arquivos_py[:10], 1):  # Limita até 10 arquivos
    nome_antigo = os.path.join(diretorio, arquivo)
    nome_novo = os.path.join(diretorio, f"Ex_{i:02}.py")
    
    os.rename(nome_antigo, nome_novo)
    print(f"Renomeado: {nome_antigo} -> {nome_novo}")
