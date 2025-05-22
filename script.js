// CONFIGURAÇÃO (substitua com SEUS dados)
const SHEET_ID = "1uV5RtK1qj6mOuynEPvlYCfPmz_6nj-7c3IRTQfQoCSg"; // ID REAL da planilha
const SHEET_NAME = "tab1"; // Nome EXATO da aba
const API_KEY = "AIzaSyBvln3Lk_pBqY7w_pJzXEv16I9BUOL-Kn8"; // Sua chave

// URL formatada corretamente
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}?key=${API_KEY}`;

async function loadPRsFromSheet() {
  const prTableBody = document.getElementById("pr-table-body");
  
  try {
    const response = await fetch(URL);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    
    // Verifica se existem dados
    if (!data.values || data.values.length === 0) {
      throw new Error("Planilha vazia ou formato inválido");
    }

    // Limpa e preenche a tabela
    prTableBody.innerHTML = data.values.map(row => `
      <tr>
        <td>${row[0] || '-'}</td>
        <td>${row[1] || '-'}</td>
        <td>${row[2] || '-'}</td>
        <td><span class="category ${row[3] || ''}">${row[3] || '-'}</span></td>
      </tr>
    `).join('');

  } catch (error) {
    console.error("Erro detalhado:", error);
    prTableBody.innerHTML = `
      <tr>
        <td colspan="4" class="error">
          ❌ Erro ao carregar dados. Verifique:<br>
          1. ID da planilha e nome da aba<br>
          2. Chave de API ativada<br>
          3. Console (F12) para detalhes
        </td>
      </tr>
    `;
  }
}

// Carrega os dados quando a página abre
window.addEventListener('DOMContentLoaded', loadPRsFromSheet);