import random
import time

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
count = 0

while True:
    print(random.choice(numeros), end=' ')
    count += 1
    
    if count % 70 == 0:  # Quebra a linha a cada 30 números
        print()  # Move para a próxima linha
    
    time.sleep(0.001)
