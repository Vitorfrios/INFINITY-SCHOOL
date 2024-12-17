divida = float(input('Digite o valor da dívida: '))
parcelas = int(input('Digite o número de parcelas: '))
parcela = divida / parcelas
print(f'Valor a ser pago por mês: R${parcela:.2f}')