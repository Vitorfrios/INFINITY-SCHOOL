import os

# Caminho onde as pastas estão localizadas
diretorio = "01_Teorias_e_Exercicios"

# Função para renomear as pastas
def renomear_pastas():
    for nome_pasta in os.listdir(diretorio):
        # Verifica se a pasta tem o formato correto (Aula X)
        if nome_pasta.startswith("Aula "):
            numero_aula = nome_pasta.split()[1]
            
            # Mantém o número da aula sem o zero à frente, se for maior que 9
            novo_nome = f"Aula_{int(numero_aula)}"
            
            # Caminhos completos para renomear
            pasta_atual = os.path.join(diretorio, nome_pasta)
            nova_pasta = os.path.join(diretorio, novo_nome)
            
            # Renomeia a pasta
            os.rename(pasta_atual, nova_pasta)
            print(f"Renomeado: {nome_pasta} -> {novo_nome}")

# Executa a função
renomear_pastas()
