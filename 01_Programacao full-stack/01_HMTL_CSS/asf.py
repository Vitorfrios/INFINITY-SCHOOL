import os
import re

# Caminho principal onde as pastas das aulas estão localizadas
diretorio_principal = "01_Teorias_e_Exercicios"

# Função para renomear e deletar conforme especificado
def renomear_e_deletar():
    # Loop para percorrer todas as aulas, de "Aula 01" até "Aula 08"
    for aula_num in range(1, 9):
        aula_diretorio = os.path.join(diretorio_principal, f"Aula {str(aula_num).zfill(2)}")
        
        if os.path.exists(aula_diretorio):
            for nome_arquivo in os.listdir(aula_diretorio):
                # Verifica se é o arquivo README.md
                if nome_arquivo == "README.md":
                    # Procura o arquivo PDF correspondente
                    pdf_arquivo = [f for f in os.listdir(aula_diretorio) if f.endswith(".pdf")]
                    
                    for pdf in pdf_arquivo:
                        # Captura o nome entre "Aula X _ " e ".pdf"
                        match = re.search(r"Aula \d+ _ (.*?)\.pdf", pdf)
                        if match:
                            novo_nome = match.group(1) + ".md"
                            os.rename(os.path.join(aula_diretorio, nome_arquivo), os.path.join(aula_diretorio, novo_nome))
                            print(f"Renomeado: {nome_arquivo} -> {novo_nome}")
                            
                            # Deleta o arquivo PDF
                            os.remove(os.path.join(aula_diretorio, pdf))
                            print(f"Deletado: {pdf}")

# Executa a função
renomear_e_deletar()
