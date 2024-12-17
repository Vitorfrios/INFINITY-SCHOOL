ano_atual = 2024
anos_nascimento = [2008, 1995, 2018, 2005, 2015, 1998, 2003]
menores_idade = sum(1 for ano in anos_nascimento if ano_atual - ano < 18)
maiores_idade = len(anos_nascimento) - menores_idade
print(f'Pessoas menores de idade: {menores_idade}')
print(f'Pessoas maiores de idade: {maiores_idade}')