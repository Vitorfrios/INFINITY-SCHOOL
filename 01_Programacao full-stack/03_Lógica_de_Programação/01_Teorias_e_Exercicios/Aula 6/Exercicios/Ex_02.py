import random  

# Função pedra, papel, tesoura  
#função pedra papel tesoura
#escolhas do computado
#escolha do usuario
#verificar se a escolha do usuario eh igual ou diferente da escolha do computador
    #se for igual rode novamente
    #se nao, verificar quem ganhou
# modelo de verificação para escolher apenas um dos 3
#formato melhor de 3 

def ppt():  
    opcoes = ["pedra", "papel", "tesoura"]  
    usuario_vitorias = 0  
    computador_vitorias = 0  

    while usuario_vitorias < 2 and computador_vitorias < 2:  
        escolha_computador = random.choice(opcoes)  
        print("Escolha uma opção: \n1 - Pedra \n2 - Papel \n3 - Tesoura")  
        escolha_usuario = input("Qual é a sua escolha? (1/2/3): ")  
        print("------------------------------------------")
        if escolha_usuario == '1':  
            escolha_usuario = "pedra"  
        elif escolha_usuario == '2':  
            escolha_usuario = "papel"  
        elif escolha_usuario == '3':  
            escolha_usuario = "tesoura"  
        else:  
            print("Escolha inválida! Tente novamente.")  
            continue    

        print(f"\nVocê escolheu: {escolha_usuario}")  
        print("------------------------------------------")
        print(f"O computador escolheu: {escolha_computador}\n")  

        if escolha_usuario == escolha_computador:  
            print("Empate!")  
            print("------------------------------------------")

        elif (escolha_usuario == "pedra" and escolha_computador == "tesoura") or \
             (escolha_usuario == "papel" and escolha_computador == "pedra") or \
             (escolha_usuario == "tesoura" and escolha_computador == "papel"):  
            print("Você venceu!")  
            print("------------------------------------------")
            usuario_vitorias += 1  
        else:  
            print("Você perdeu!")  
            print("------------------------------------------")
            computador_vitorias += 1  

        print(f"Placar: Você {usuario_vitorias} - {computador_vitorias} Computador\n")  
        print("------------------------------------------")
    if usuario_vitorias == 2:  
        print("Parabéns! Você venceu o jogo!")  
        print("------------------------------------------")
    else:  
        print("O computador venceu o jogo. Tente novamente!")  
        print("------------------------------------------")

ppt()