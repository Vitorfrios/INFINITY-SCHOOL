multiplos_de_5 = [i for i in range(1, 101) if i % 5 == 0]
print(f'Números múltiplos de 5 entre 1 e 100: {', '.join(map(str, multiplos_de_5))}')