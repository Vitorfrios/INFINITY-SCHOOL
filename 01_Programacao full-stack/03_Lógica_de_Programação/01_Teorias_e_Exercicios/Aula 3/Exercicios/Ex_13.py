palavra = input('Digite uma palavra: ')
for char in palavra:
    if char.lower() in 'aeiou':
        continue
    print(char)