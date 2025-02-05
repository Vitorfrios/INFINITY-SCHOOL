import os

# Definindo a estrutura do projeto
estrutura = {
    "projeto-petshop": {
        "home.html": "",
        "produtos.html": "",
        "galeria.html": "",
        "contato.html": "",
        "css": {
            "home.css": "",
            "produtos.css": "",
            "galeria.css": "",
            "contato.css": "",
        },
        "js": {
            "home.js": "",
            "produtos.js": "",
            "galeria.js": "",
            "contato.js": "",
        },
        "imagens": {
            "produtos": {},
            "galeria": {},
            "outros": {}
        }
    }
}

def criar_estrutura(base_path, estrutura):
    for nome, conteudo in estrutura.items():
        # Cria o caminho completo
        caminho = os.path.join(base_path, nome)
        
        if isinstance(conteudo, dict):
            # Se o conteúdo é um dicionário, cria uma pasta
            os.makedirs(caminho, exist_ok=True)
            # Chama a função recursivamente para criar subpastas
            criar_estrutura(caminho, conteudo)
        else:
            # Se não é um dicionário, cria um arquivo
            with open(caminho, 'w') as f:
                f.write(conteudo)  # Escreve conteúdo vazio no arquivo

# Caminho base onde o projeto será criado
caminho_base = "projeto-petshop"

# Cria a estrutura de pastas e arquivos
criar_estrutura(caminho_base, estrutura)

print("Estrutura de pastas e arquivos criada com sucesso!")