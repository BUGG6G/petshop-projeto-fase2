// contabiliza a quantidade de itens que tem no carrinho falso
let quantidade = 0;

// adiciona ao contador a quantidade informada no campo do produto
function adicionarCarrinho(idInput) {

    let qtd = Number(
        document.getElementById(idInput).value
    );

    quantidade += qtd;

    document.getElementById("contador").innerText = quantidade;
}

// impede que de para agendar em um dia que ja passou
document.addEventListener("DOMContentLoaded", function () {

    // define a data mínima como a data atual
    document.getElementById("dataAgendamento").min =
        new Date().toISOString().split("T")[0];

    // define limites para o horário de agendamento
    const horario = document.getElementById("horarioAgendamento");

    horario.min = "08:00";
    horario.max = "18:00";

    // define intervalos de 30 minutos entre os horários
    horario.step = 1800;
});

// valida se o horário escolhido está dentro do horário de funcionamento
function validarHorario() {

    const horario = document.getElementById("horarioAgendamento").value;

    if (horario < "08:00" || horario > "18:00") {

        alert("Escolha um horário entre 08:00 e 18:00");
        return false;
    }

    // informa que o agendamento foi realizado com sucesso
    alert("Agendamento realizado!");

    return true;
}