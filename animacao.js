document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("habilidades");
    const progressBars = document.querySelectorAll(".progress");

    // Função para animar gradualmente as barras de progresso
    function animateProgressBar(bar) {
        const maxSkill = parseInt(bar.getAttribute("data-skill"), 10); // Valor final
        let currentWidth = 0; // Largura inicial

        const interval = setInterval(() => {
            if (currentWidth >= maxSkill) {
                clearInterval(interval); // Para a animação quando atinge o valor
            } else {
                currentWidth++; // Incrementa gradualmente
                bar.style.width = `${currentWidth}%`; // Ajusta a largura da barra
            }
        }, 50); // Velocidade da animação (menor valor = mais rápido)
    }

    // Função para verificar se a seção está visível na rolagem
    function handleScroll() {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            progressBars.forEach(bar => animateProgressBar(bar)); // Anima todas as barras
            window.removeEventListener("scroll", handleScroll); // Evita repetição
        }
    }

    window.addEventListener("scroll", handleScroll); // Escuta o evento de rolagem
});


document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
