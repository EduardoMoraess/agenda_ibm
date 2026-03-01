function alteraAgenda() {
    const alteracaoAgenda = document.getElementById('add-agenda');

    alteracaoAgenda.addEventListener("click", () => {
        const numero = '5587981443129';
        const mensagem = `Olá!, Gostaria de editar a agenda semanal \n nova agenda semanal:`

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
    })
}
alteraAgenda();