// Classe que representa um carro
class Car {
    constructor(modelo, preco, alturacacamba, alturaveiculo, alturasolo, capacidadecarga, motor, potencia, volumecacamba, roda, imagem) {
        this.modelo = modelo;
        this.preco = preco;
        this.alturacacamba = alturacacamba;
        this.alturaveiculo = alturaveiculo;
        this.alturasolo = alturasolo;
        this.capacidadecarga = capacidadecarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumecacamba = volumecacamba;
        this.roda = roda;
        this.imagem = imagem;
    }
}

let compareCars = [];

function SetCarToCompare(checkbox, car) {
    if (checkbox.checked) {
        if (compareCars.length >= 2) {
            alert("Você só pode comparar dois carros por vez.");
            checkbox.checked = false;
            return;
        }
        compareCars.push(car);
    } else {
        compareCars = compareCars.filter(c => c.modelo !== car.modelo);
    }
}

function ShowCompare() {
    if (compareCars.length !== 2) {
        alert("Selecione exatamente dois carros para comparar.");
        return;
    }

    document.getElementById("compare").style.display = "block";

    for (let i = 0; i < 2; i++) {
        const car = compareCars[i];

        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.imagem}" width="150">`;
        document.getElementById(`compare_modelo_${i}`).textContent = car.modelo;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = car.alturacacamba + " mm";
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = car.alturaveiculo + " mm";
        document.getElementById(`compare_alturasolo_${i}`).textContent = car.alturasolo + " mm";
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = car.capacidadecarga + " kg";
        document.getElementById(`compare_motor_${i}`).textContent = car.motor.toFixed(1) + "L";
        document.getElementById(`compare_potencia_${i}`).textContent = car.potencia + " cv";
        document.getElementById(`compare_volumecacamba_${i}`).textContent = car.volumecacamba + " L";
        document.getElementById(`compare_roda_${i}`).textContent = car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = "R$ " + car.preco.toLocaleString('pt-BR');
    }
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}
