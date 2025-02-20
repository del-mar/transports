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
    if (horas === 1) valorBase = 40;
    else if (horas === 2) valorBase = 60;
    else if (horas === 3) valorBase = 87;
    else if (horas === 4) valorBase = 112;
    else if (horas === 5) valorBase = 135;
    else if (horas === 6) valorBase = 157;
    else if (horas === 7) valorBase = 178;
    
    // Cálculo do adicional por distância
    if (distancia > 30 && distancia <= 80) valorDistancia = (distancia - 30) * 0.30;
    else if (distancia > 80 && distancia <= 150) valorDistancia = (distancia - 30) * 0.40;
    else if (distancia > 150 && distancia <= 200) valorDistancia = (distancia - 30) * 0.45;
    
    // Cálculo do custo do ajudante
    if (ajudante === "sim") {
        custoAjudante = horas * 12;
    }

    let valorTotal = valorBase + valorDistancia + custoAjudante;
    let iva = valorTotal * 0.23;
    let valorFinal = valorTotal + iva;

    document.getElementById('resultado').innerText = valorTotal.toFixed(2);
    document.getElementById('iva').innerText = iva.toFixed(2);
    document.getElementById('total').innerText = valorFinal.toFixed(2);
    
    // Mostrar a mensagem de contacto
    contactMessage.style.display = 'block';
}
