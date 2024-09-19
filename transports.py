def calcular_valor_servico(distancia, precisa_ajudante, horas_trabalho):
    # Custo baseado na distância
    if distancia < 10:
        desconto_distancia = 10.00
    elif 11 <= distancia <= 30:
        desconto_distancia = 0.00
    elif 31 <= distancia <= 50:
        desconto_distancia = 9.00
    elif 51 <= distancia <= 60:
        desconto_distancia = 15.00
    elif 61 <= distancia <= 80:
        desconto_distancia = 18.00
    elif 81 <= distancia <= 100:
        desconto_distancia = 24.00
    elif 101 <= distancia <= 130:
        desconto_distancia = 45.00
    elif distancia > 130:
        desconto_distancia = 60.00
    else:
        desconto_distancia = 0.00

    # Custo baseado nas horas de trabalho
    precos_horas = {
        1: 70.00,
        2: 70.00,
        3: 96.00,
        4: 124.00,
        5: 150.00,
        6: 168.00,
        7: 182.00,
        8: 200.00
    }

    custo_horas_trabalho = precos_horas.get(horas_trabalho, 200.00)  # Usa o custo de 200 para horas > 8

    # Custo do ajudante por hora
    custo_por_hora_ajudante = 10.00

    if precisa_ajudante.lower() in ['sim', 's']:
        custo_horas_ajudante = custo_por_hora_ajudante * horas_trabalho
        custo_total = custo_horas_trabalho + custo_horas_ajudante
    else:
        custo_total = custo_horas_trabalho

    custo_total -= desconto_distancia  # Subtrai o desconto da distância

    return custo_total

def main():
    print("Bem-vindo ao calculador de serviços!")

    # Coletar informações do usuário
    try:
        distancia = float(input("Digite a distância entre os dois locais (em quilômetros): "))
        precisa_ajudante = input("Precisa de ajudante? (sim/não): ")
        horas_trabalho = float(input("Digite o número de horas de trabalho: "))

        # Calcular o valor do serviço
        valor_total = calcular_valor_servico(distancia, precisa_ajudante, horas_trabalho)

        # Exibir o valor total
        print(f"\nO valor total do serviço é: {valor_total:.2f} €")
    
    except ValueError:
        print("Por favor, insira valores numéricos válidos para distância e horas de trabalho.")

# Executar o programa
if __name__ == "__main__":
    main()
