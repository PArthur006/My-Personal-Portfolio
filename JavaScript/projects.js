// Alterna entre seções de projetos
function showSection(sectionId) {
    // Esconde todas as seções
    document.querySelectorAll('.project-section').forEach(section => {
        section.classList.remove('active');
    });

    // Exibe apenas a seção clicada
    document.getElementById(sectionId).classList.add('active');
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
