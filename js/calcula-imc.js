var titulo = document.querySelector(".titulo");
titulo.textContent = "Gerenciamento de Consultas";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);	

	if (!validaPeso(peso)) {
	    console.log("Peso inválido!");
	    pesoEhValido = validaPeso(peso);
	    tdImc.textContent = "Peso inválido";
	    paciente.classList.add("paciente-invalido");
	}

	if (!validaAltura(altura)) {
	    console.log("Altura inválida!");
	    alturaEhValida = validaAltura(altura);  
	    tdImc.textContent = "Altura inválida";
	    paciente.classList.add("paciente-invalido");
	    //adiciona o estilo paciente-invalido no paciente
	}

	if (pesoEhValido && alturaEhValida) {
	    var imc = calculaImc(peso, altura);
	    tdImc.textContent = imc;
	}
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

