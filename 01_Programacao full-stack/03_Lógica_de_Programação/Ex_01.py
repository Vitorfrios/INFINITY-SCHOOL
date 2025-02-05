
# Cria arquivos "Ex_01" até "Ex_10"
for i in range(1, 3):  # Vai de 1 até 10
    new_name = f"Ex_{i:02}.py"  # Formata para "Ex_01.py", "Ex_02.py", etc.
    with open(new_name, "w") as f:
        pass  # Arquivos criados vazios
