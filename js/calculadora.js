function append(caractere) {
    const display = document.getElementById('display');
    display.value = display.value + caractere;
}

function calculate () {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Erro";
    }

}

function AC() {
    document.getElementById('display').value = "";
}

function Limpar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);

}