import os

print("Iniciando o script...")  # Verifica se o script foi executado

# Caminho da pasta onde os arquivos estão localizados
folder_path = '02_Exercicios feito em aulas/Aula 2'

# Verifique se o caminho está correto
if not os.path.exists(folder_path):
    print(f"Erro: O diretório '{folder_path}' não existe.")
else:
    # Percorre todas as subpastas e arquivos
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            file_path = os.path.join(root, filename)
            
            # Verifique se o arquivo segue o padrão "Ex_X.py"
            if filename.startswith("Ex_") and filename[3:].isdigit():
                num = filename[3:]
                
                # Adiciona zero se o número for menor que 10
                if int(num) < 10:
                    new_name = f"Ex_0{num}.py"  # Adiciona o zero para números de 1 a 9
                    new_file_path = os.path.join(root, new_name)

                    # Depuração: Mostra o que vai ser renomeado
                    print(f"Renomeando: {file_path} para {new_file_path}")

                    # Renomeia o arquivo
                    try:
                        os.rename(file_path, new_file_path)
                        print(f"Arquivo renomeado com sucesso: {new_file_path}")
                    except Exception as e:
                        print(f"Erro ao renomear {file_path}: {e}")
