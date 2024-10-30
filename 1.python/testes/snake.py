import pygame
import random
import sys

# Inicialização do Pygame
pygame.init()

# Configurações da tela
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
CELL_SIZE = 20
GRID_WIDTH = SCREEN_WIDTH // CELL_SIZE
GRID_HEIGHT = SCREEN_HEIGHT // CELL_SIZE
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Snake Game")

# Definição das cores
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

# Classe para representar a cobra
class Snake:
    def __init__(self):
        self.body = [(GRID_WIDTH // 2, GRID_HEIGHT // 2)]
        self.direction = (1, 0)  # Começa movendo para a direita
        self.growing = False  # Flag para controlar se a cobra está crescendo

    def move(self):
        new_head = (self.body[0][0] + self.direction[0], self.body[0][1] + self.direction[1])
        self.body.insert(0, new_head)

        # Se a cobra não estiver crescendo, remove o último segmento
        if not self.growing:
            self.body.pop()
        else:
            self.growing = False

    def grow(self):
        self.growing = True

    def draw(self):
        for segment in self.body:
            pygame.draw.rect(screen, GREEN, (segment[0] * CELL_SIZE, segment[1] * CELL_SIZE, CELL_SIZE, CELL_SIZE))

# Função para gerar uma maçã em uma posição aleatória
def spawn_apple():
    return (random.randint(0, GRID_WIDTH - 1), random.randint(0, GRID_HEIGHT - 1))

# Função para exibir mensagem de game over
def game_over():
    font = pygame.font.SysFont(None, 50)
    text = font.render("Game Over", True, RED)
    screen.blit(text, (SCREEN_WIDTH // 2 - text.get_width() // 2, SCREEN_HEIGHT // 2 - text.get_height() // 2))
    pygame.display.flip()
    pygame.time.delay(2000)  # Atraso de 2 segundos para o jogador ver a mensagem

# Grupo de sprites para todos os sprites
all_sprites = pygame.sprite.Group()

# Instância da cobra e posição inicial da maçã
snake = Snake()
apple_position = spawn_apple()

clock = pygame.time.Clock()

# Loop principal do jogo
running = True
while running:
    # Tratamento de eventos
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP and snake.direction != (0, 1):
                snake.direction = (0, -1)
            elif event.key == pygame.K_DOWN and snake.direction != (0, -1):
                snake.direction = (0, 1)
            elif event.key == pygame.K_LEFT and snake.direction != (1, 0):
                snake.direction = (-1, 0)
            elif event.key == pygame.K_RIGHT and snake.direction != (-1, 0):
                snake.direction = (1, 0)

    # Move a cobra
    snake.move()

    # Verifica colisão com a maçã
    if snake.body[0] == apple_position:
        snake.grow()
        apple_position = spawn_apple()

    # Verifica colisão com as bordas da tela ou com o próprio corpo
    if (snake.body[0][0] < 0 or snake.body[0][0] >= GRID_WIDTH or
        snake.body[0][1] < 0 or snake.body[0][1] >= GRID_HEIGHT or
        snake.body[0] in snake.body[1:]):
        game_over()  # Chama a função de game over

        # Reinicia o jogo se a tecla de espaço for pressionada
        while True:
            for event in pygame.event.get():
                if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                    snake = Snake()
                    apple_position = spawn_apple()
                    break

    # Limpa a tela
    screen.fill(BLACK)

    # Desenha a cobra e a maçã
    snake.draw()
    pygame.draw.rect(screen, RED, (apple_position[0] * CELL_SIZE, apple_position[1] * CELL_SIZE, CELL_SIZE, CELL_SIZE))

    # Atualiza a tela
    pygame.display.flip()

    # Controla a taxa de quadros por segundo
    clock.tick(10)

# Finaliza o Pygame
pygame.quit()
sys.exit()
