import time

# Iniciar o contador e armazenar o tempo de início
contador = 0
inicio = time.time()  # Tempo inicial

# Loop para contar até que um segundo se passe
while True:
    contador += 1  # Incrementa o contador
    if time.time() - inicio >= 1:  # Verifica se já se passaram 1 segundo
        break  # Sai do loop


print(f"O computador contou até {contador} em 1 segundo.")
