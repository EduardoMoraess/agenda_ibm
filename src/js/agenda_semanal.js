//Validação do formulario da de alteração
function formularioLogin() {
    const passwordInput = document.getElementById('password');
    const userInput = document.getElementById('user');
    const btnValidar = document.getElementById('validar');
    const mainContent = document.querySelector('.sumir'); // Seleciona o container oculto

    btnValidar.addEventListener('click', (event) => {
        event.preventDefault(); // ESSENCIAL: Impede o recarregamento da página

        const usuario = userInput.value;
        const senha = passwordInput.value;

        // Validação simples
        if (senha == "2026" && usuario === "adm") {
            alert('Login realizado com sucesso!');

            // Troca as classes para exibir o conteúdo
            mainContent.classList.remove('sumir');
            mainContent.classList.add('mostrar');

            // Opcional: Esconde o formulário de login após o sucesso
            document.querySelector('.formulario').style.display = 'none';
        } else {
            alert('Verifique suas credenciais!');
        }
    });
}
formularioLogin();

//Para alterar a agenda via WPP
function alteraAgenda() {
    const alteracaoAgenda = document.getElementById('add-agenda');

    alteracaoAgenda.addEventListener("click", () => {
        const numero = '5587981443129';
        const mensagem = `Olá!, Gostaria de editar a agenda semanal \n nova agenda semanal:`

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(
            url,
            "popupWhatsapp",
            "width=1000,height=600,top=200,left=100,resizable=yes,scrollbars=yes"
        );
    })
}
alteraAgenda();