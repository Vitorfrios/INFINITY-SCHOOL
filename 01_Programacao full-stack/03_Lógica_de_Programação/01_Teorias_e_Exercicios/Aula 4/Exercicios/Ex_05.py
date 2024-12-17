divida = float(input('Digite o valor da dívida: '))
N_parcelas = int(input('Digite o número de parcelas: '))
for i in range(N_parcelas):
    parcela = divida / N_parcelas
    print(f'Valor a ser pago no {i+1} mês: R${parcela:.2f}')