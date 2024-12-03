import os

# Renomeia arquivos "Aula_X" para "Ex_X"
for filename in os.listdir():
    if filename.startswith("Aula_") and filename[5:].isdigit():
        new_name = "Ex_" + filename[5:]
        os.rename(filename, new_name)

# Cria arquivos "Ex_1" até "Ex_6"
for i in range(1, 7):
    with open(f"Ex_{i}.py", "w") as f:
        pass  # Arquivos criados vazios
