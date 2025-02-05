import random  

def adivinha_o_numero():  
    print("Pense em um número entre 1 e 100, e o computador tentará adivinhar.")  
    
    #limites
    baixo = 1  
    alto = 100  
    tentativas = 0  

    while True:  
        # O computador chuta o numero  
        palpite = random.randint(baixo, alto)  
        tentativas += 1  
        print(f"O computador chutou: {palpite}")  

        # jogador indica o resultado do chute
        feedback = input("O palpite é 'maior', 'menor' ou 'correto' ? ").strip().lower()  

        if feedback == 'correto':  
            print(f"O computador adivinhou seu número em {tentativas} tentativas!")  
            break  
        elif feedback == 'maior':  
            baixo = palpite + 1    
        elif feedback == 'menor':  
            alto = palpite - 1   
        else:  
            print("Feedback inválido. Por favor, responda com 'maior', 'menor' ou 'correto'.")  

adivinha_o_numero()