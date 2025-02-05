def fizzbuzz_game():  
    print("Responda com 'Fizz', 'Buzz' ou 'FizzBuzz', conforme as regras, ou o próprio número.")  
    
    for i in range(1, 17):  
        # Determinação da resposta correta  
        if i % 3 == 0 and i % 5 == 0:  
            correct_answer = "FizzBuzz"  
        elif i % 3 == 0:  
            correct_answer = "Fizz"  
        elif i % 5 == 0:  
            correct_answer = "Buzz"  
        else:  
            correct_answer = str(i)  
        
        # Solicitar resposta do jogador  
        player_answer = input(f"Qual a sua resposta para {i}? ")  
        
        # Verificar resposta  
        if player_answer != correct_answer:  
            print(f"Você errou! A resposta correta era: {correct_answer}")  
            print("Fim do jogo.")  
            break  
    else:  
        print("Parabéns! Você completou o jogo até o número 16.")  

fizzbuzz_game()