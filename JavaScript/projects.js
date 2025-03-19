// NavBar
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
        navbar.style.top = "-100px"; // Esconde a navbar
    } else {
        navbar.style.top = "0"; // Mostra a navbar ao rolar para cima
    }
    lastScrollY = window.scrollY;
});



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navButtons = document.querySelectorAll(".nav-btn");

    function highlightCurrentSection() {
        let scrollPosition = window.scrollY + window.innerHeight * 0.3;
    
        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");
            const correspondingBtn = document.querySelector(`.nav-btn[onclick="showSection('${id}')"]`);
    
            if (scrollPosition >= top && scrollPosition < top + height) {
                navButtons.forEach((btn) => btn.classList.remove("active"));
                if (correspondingBtn) {
                    correspondingBtn.classList.add("active");
                }
            }
        });
    }
    
    window.addEventListener("scroll", highlightCurrentSection);
});




// Alterna entre seções de projetos
function showSection(sectionId) {
    document.querySelectorAll("section").forEach((section) => {
        section.style.display = section.id === sectionId ? "block" : "none";
    });

    document.querySelectorAll(".nav-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    // Adiciona a classe 'active' ao botão correspondente
    const clickedBtn = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (clickedBtn) {
        clickedBtn.classList.add("active");
    }
}

// Modal para exibir detalhes do projeto
function openModal(title, desc, imgSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
