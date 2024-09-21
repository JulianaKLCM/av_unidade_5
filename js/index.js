const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    let altura = document.getElementById('altura').value;

    if (altura === '' || nome === '' || peso === '') {
        alert('Preencha todos os campos');
        return;
    }

    altura = altura.replace(',', '.');

    if (!altura.includes('.')) {
        altura = altura.slice(0, -2) + '.' + altura.slice(-2);
    }

    altura = parseFloat(altura);

    const imc = peso / (altura * altura);

    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3 (obesidade mórbida)';
    }

    const resultado = `
        <p>Nome: ${nome}</p>
        <p>Seu IMC é: ${imc.toFixed(2)}</p>
        <p>Classificação: ${classificacao}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

function resetarValores() {
    document.getElementById('nome').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

    document.getElementById('resultado').innerHTML = '';
}
