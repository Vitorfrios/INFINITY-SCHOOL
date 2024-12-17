# Função para criar arquivos de exercício
def criar_arquivo_exercicio(numero, conteudo):
    nome_arquivo = f"Ex_{numero:02}.py"
    with open(nome_arquivo, 'w') as arquivo:
        arquivo.write(conteudo)
    print(f"Arquivo {nome_arquivo} criado com sucesso!")

# Conteúdo de cada exercício
exercicios = [
    "soma_impares = sum(i for i in range(1, 51) if i % 2 != 0)\nprint(f'Soma dos números ímpares entre 1 e 50: {soma_impares}')",
    "multiplos_de_5 = [i for i in range(1, 101) if i % 5 == 0]\nprint(f'Números múltiplos de 5 entre 1 e 100: {', '.join(map(str, multiplos_de_5))}')",
    "numero = int(input('Digite um número para calcular o fatorial: '))\nfatorial = 1\nfor i in range(1, numero + 1):\n    fatorial *= i\nprint(f'Fatorial de {numero}: {fatorial}')",
    "ano_atual = 2024\nanos_nascimento = [2008, 1995, 2018, 2005, 2015, 1998, 2003]\nmenores_idade = sum(1 for ano in anos_nascimento if ano_atual - ano < 18)\nmaiores_idade = len(anos_nascimento) - menores_idade\nprint(f'Pessoas menores de idade: {menores_idade}')\nprint(f'Pessoas maiores de idade: {maiores_idade}')",
    "pesos = [float(input(f'Digite o peso da pessoa {_ + 1}: ')) for _ in range(5)]\nmaior_peso = max(pesos)\nmenor_peso = min(pesos)\nprint(f'O maior peso lido foi: {maior_peso} kg')\nprint(f'O menor peso lido foi: {menor_peso} kg')"
]

# Criando os arquivos
for i, conteudo in enumerate(exercicios, start=1):
    criar_arquivo_exercicio(i, conteudo)
