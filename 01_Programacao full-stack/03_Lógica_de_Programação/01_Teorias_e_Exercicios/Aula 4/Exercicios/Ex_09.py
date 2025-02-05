string = input('Digite uma string: ')
vogais = 'aeiou'
contagem = sum(1 for char in string.lower() if char in vogais)
print(f'Quantidade de vogais: {contagem}')