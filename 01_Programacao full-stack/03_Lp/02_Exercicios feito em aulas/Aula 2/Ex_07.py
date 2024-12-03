from datetime import datetime  

data_atual_str = input("Digite a data atual (formato: dd/mm/aaaa): ")  
data_atual = datetime.strptime(data_atual_str, '%d/%m/%Y')  

data_vencimento_str = input("Digite a data de vencimento (formato: dd/mm/aaaa): ")  
data_vencimento = datetime.strptime(data_vencimento_str, '%d/%m/%Y')  

if data_atual >= data_vencimento:  
    print("Venceu")  
else:  
    print("Não Venceu")