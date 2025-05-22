// Dados de exemplo (apenas para teste)
const prs = [
    { movement: "Back Squat", weight: "120 kg", date: "MAI/2023" },
    { movement: "Deadlift", weight: "120 kg", date: "AGO/2023" },
    { movement: "Front Squat", weight: "105 kg", date: "ABR/2024" },
    { movement: "Hang Power Clean", weight: "75 kg", date: "JUL/2024" },
    { movement: "Hang Power Snatch", weight: "77 kg", date: "MAI/2023" },
    { movement: "Hang Squat Clean", weight: "75 kg", date: "MAI/2024" },
    { movement: "Power Snatch", weight: "55 kg", date: "MAI/2023" },
    { movement: "Shoulder Press", weight: "55 kg", date: "MAI/2023" },
    { movement: "Snatch Balance", weight: "32 kg", date: "AGO/2023" },
    { movement: "Squat Clean", weight: "80 kg", date: "JUL/2024" },
    { movement: "Thruster", weight: "65 kg", date: "MAI/2023" },
];

function loadPRs() {
    const prTableBody = document.getElementById("pr-table-body");
    prTableBody.innerHTML = "";

    prs.forEach(pr => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${pr.movement}</td>
            <td>${pr.weight}</td>
            <td>${pr.date}</td>
        `;
        prTableBody.appendChild(row);
    });
}

// Carrega os dados ao abrir a página
loadPRs();

// Modo escuro (opcional)
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Data de atualização
document.getElementById("update-date").textContent = new Date().toLocaleDateString("pt-BR");
