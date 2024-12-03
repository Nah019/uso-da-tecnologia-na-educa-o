// Exibir/ocultar botão de voltar ao topo
const botaoVoltarTopo = document.getElementById("voltar-topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botaoVoltarTopo.style.display = "block";
    } else {
        botaoVoltarTopo.style.display = "none";
    }
});

// Rolar até o topo
botaoVoltarTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});