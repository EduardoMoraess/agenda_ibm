document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // Efeito de entrada suave (Fade In)
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Log de boas vindas
    console.log("IBM Ipsep - Agenda Online");
});


// CARREGAR AGENDA SEMANAL
async function carregarAgenda() {
    const container = document.getElementById('conteudo-agenda');
    // Verifica se o elemento existe no index.html antes de continuar
    if (!container) return;

    try {
        // O caminho 'pages/agenda2.html' está correto para sua estrutura
        const response = await fetch('pages/agenda2.html');

        // Verificar se o arquivo existe (status 200-299)
        if (!response.ok) {
            throw new Error(`Erro ao carregar: ${response.status}`);
        }
        // Converter o arquivo recebido em texto
        const htmlTexto = await response.text();
        // Insere o conteúdo recebido
        container.innerHTML = htmlTexto;

    } catch (error) {
        console.error("Falha na requisição:", error);
        // CORREÇÃO AQUI: O style deve ficar dentro da tag <p> corretamente
        container.innerHTML = "<p style='color:red;'>Erro ao carregar a agenda. Verificar o console.</p>";
    }
}
// Executa a função automaticamente assim que a página terminar de carregar
window.addEventListener('DOMContentLoaded', carregarAgenda);
