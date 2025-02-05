palavra = input('Digite uma palavra: ')
consoantes = 'bcdfghjklmnpqrstvwxyz'
for char in palavra:
    if char.lower() in consoantes:
        print(f'A primeira consoante é: {char}')
        break