import random  
#compuitador ctria um numero aleatorio
    #repetição para identificar o numero{
        #usuario digita o numero 
        #computador se o numero digitado for mais alto mostra para o usuario #digitar um numero mais baixo e o contrario tmb

    
#nunmero identificado {
     #parabens v acertou e mostra o nunmero

  
def adivinha_numero():  
    numero_secreto = random.randint(0, 100)  
    tentativas = 0  
    print("Bem-vindo ao jogo de adivinhação!")  
    print("Tente adivinhar o número secreto entre 0 e 100.")  

    while True:  
        palpite = input("Digite seu palpite: ")  

        if not palpite.isdigit():  
            print("Por favor, insira um número válido.")  
            continue  

        palpite = int(palpite)  
        tentativas += 1  
        
        if palpite < numero_secreto:  
            print(" Muito baixo! Tente um numero mais alto.")  
        elif palpite > numero_secreto:  
            print("Muito alto! Tente um numero menor")  
        else:  
            print(f"Parabéns! Você adivinhou o número {numero_secreto} em {tentativas} tentativas.")  
            break  

adivinha_numero()