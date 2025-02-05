import random  

def generate_expression():  
    # dois números aleatórios e uma operação  
    num1 = random.randint(1, 10)  
    num2 = random.randint(1, 10)  
    operation = random.choice(['+', '-', '*', '/'])  
    
    # Ajusta a divisão para não dar números decimais  
    if operation == '/':  
        #não dividir por 0  
        num1 = num1 * num2  # Garante que o resultado será um inteiro  
    
    expression = f"{num1} {operation} {num2}"  
    return expression, eval(expression)  

def math_game():  
    print("Resolva as operações matemáticas que aparecerão.")  

    while True:  
        expression, correct_answer = generate_expression()  
        player_answer = input(f"Qual é o resultado de {expression}? ")  

        # resposta do jogador está correta ou nao
        if player_answer.strip() == str(correct_answer):  
            print("Correto! Vamos para a próxima.")  
        else:  
            print(f"Incorreto! A resposta correta era: {correct_answer}")  
            print("Fim do jogo.")  
            break  

math_game()