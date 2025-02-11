import random

# Lista de alunos
alunos = [
    "Ana Silva", "Bruno Santos", "Carlos Pereira", "Daniela Souza",
    "Eduardo Lima", "Fernanda Rocha", "Gustavo Almeida", "Helena Costa",
    "Igor Martins", "Jia Oliveira", "Leonardo Pereira", "Mariana Santos"
]

# Pergunta 
opcao = input("Você deseja formar duplas ou trios? (digite 'duplas' ou 'trios'): ").strip().lower()

# Embaralhar a lista 
random.shuffle(alunos)

# Formar duplas ou trios
if opcao == "duplas":
    grupos = [alunos[i:i+2] for i in range(0, len(alunos), 2)]
elif opcao == "trios":
    grupos = [alunos[i:i+3] for i in range(0, len(alunos), 3)]
else:
    print("Opção inválida. Por favor, digite 'duplas' ou 'trios'.")
    grupos = []

# Exibir os grupos 
if grupos:
    print("\nGrupos sorteados:")
    for i, grupo in enumerate(grupos, 1):
        print(f"Grupo {i}: {', '.join(grupo)}")
