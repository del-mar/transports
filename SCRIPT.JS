function calcularFrete() {
    let distancia = parseFloat(document.getElementById('distancia').value);
    let horas = parseInt(document.getElementById('horas').value);
    let ajudante = document.getElementById('ajudante').value;
    let valorBase = 0;
    let valorDistancia = 0;
    let custoAjudante = 0;
    let erro = document.getElementById('erro');
    let contactMessage = document.getElementById('contact-message');
    
    // Limpar mensagem de erro antes de verificar novamente
    erro.innerText = "";

    // Verificar se os valores são válidos e dentro dos limites
    if (distancia > 200 || distancia < 0) {
        erro.innerText = "A distância máxima permitida é 200 km.";
        document.getElementById('distancia').value = 200;
        return;
    }
    if (horas > 7 || horas < 0) {
        erro.innerText = "O número máximo de horas é 7.";
        document.getElementById('horas').value = 7;
        return;
    }

    // Preços baseados na tabela até 7 horas
    if (horas === 1) valorBase = (horas * 50);
    else if (horas === 2) valorBase = (horas * 35);
    else if (horas === 3) valorBase = (horas * 32);
    else if (horas === 4) valorBase = (horas * 30);
    else if (horas === 5) valorBase = (horas * 28);
    else if (horas === 6) valorBase = (horas * 26);
    else if (horas === 7) valorBase = (horas * 25);
    
    // Cálculo do adicional por distância
    if (distancia > 20 && distancia <= 30) valorDistancia = (distancia - 20) * 0.30;
    else if (distancia > 30 && distancia <= 80) valorDistancia = (distancia - 20) * 0.30;
    else if (distancia > 80 && distancia <= 150) valorDistancia = (distancia - 20) * 0.40;
    else if (distancia > 150 && distancia <= 200) valorDistancia = (distancia - 20) * 0.45;
    
    // Cálculo do custo do ajudante
    if (ajudante === "sim") {
        custoAjudante = horas * 12;
    }

    let valorTotal = valorBase + valorDistancia + custoAjudante;

    document.getElementById('resultado').innerText = valorTotal.toFixed(2);
    
    // Mostrar a mensagem de contacto
    contactMessage.style.display = 'block';
}
