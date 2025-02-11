# Passo 1: Definindo o nome do filme
filme = "Ainda Estou Aqui"

# Passo 2: Criando a lista de pistas
pistas = [
    "Disponível nos cinemas e no Globoplay para streaming.",
    "Venceu o prêmio de Melhor Roteiro no Festival de Veneza 2024.",
    "Dirigido por Walter Salles.",
    "O filme narra a luta de Eunice Paiva por justiça após o desaparecimento de seu marido durante a ditadura militar.",
    "Fernanda Torres é a protagonista, com uma atuação aclamada pela crítica."
]

# Passo 3: Início do jogo
print("Vamos jogar!")
print("Tente adivinhar o filme com as pistas a seguir:")

# Passo 4: Exibindo as pistas
acertou = False
for i, dica in enumerate(pistas, 1):
    print(f"Pista {i}: {dica}")
    palpite = input("Qual é o nome do filme? ")

    if palpite.strip().lower() == filme.lower():
        print("Parabéns! Você acertou!")
        acertou = True
        break
    else:
        print("Você errou. Tente novamente.")

# Passo 5: Verificando se o usuário não acertou após todas as pistas
if not acertou:
    print(f"Você não acertou. O filme era: {filme}.")
