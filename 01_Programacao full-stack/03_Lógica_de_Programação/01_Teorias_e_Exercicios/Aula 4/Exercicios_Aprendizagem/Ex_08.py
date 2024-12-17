string = input('Digite uma string: ')
digitos = sum(1 for char in string if char.isdigit())
print(f'A quantidade de dígitos na string é: {digitos}')