pesos = [float(input(f'Digite o peso da pessoa {_ + 1}: ')) for _ in range(5)]
maior_peso = max(pesos)
menor_peso = min(pesos)
print(f'O maior peso lido foi: {maior_peso} kg')
print(f'O menor peso lido foi: {menor_peso} kg')