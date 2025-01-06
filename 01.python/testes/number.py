import time


contador = 0
inicio = time.time()  


while True:
    contador += 1
    if time.time() - inicio >= 1:
        break


print(f"O computador contou até {contador} em 1 segundo.")
