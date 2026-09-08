// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

    // Localiza o formulário de agendamento
    const formulario = document.getElementById("formAgendamento");

    // Localiza o campo de data
    const campoData = document.getElementById("dataAgendamento");

    // Define a data mínima como a data atual
    if (campoData) {
        const hoje = new Date();

        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, "0");
        const dia = String(hoje.getDate()).padStart(2, "0");

        campoData.min = `${ano}-${mes}-${dia}`;
    }

    // Executa somente se o formulário existir na página
    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            // Impede que a página seja recarregada
            event.preventDefault();

            // Obtém os dados principais informados
            const nomeCliente =
                document.getElementById("nomeCliente").value;

            const nomePet =
                document.getElementById("nomePet").value;

            const servico =
                document.getElementById("servico").value;

            const data =
                document.getElementById("dataAgendamento").value;

            const horario =
                document.getElementById("horario").value;

            // Exibe uma confirmação para o usuário
            alert(
                `Agendamento realizado com sucesso!\n\n` +
                `Cliente: ${nomeCliente}\n` +
                `Pet: ${nomePet}\n` +
                `Serviço: ${servico}\n` +
                `Data: ${data}\n` +
                `Horário: ${horario}`
            );

        });

    }

});