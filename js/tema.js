// Controle do modo escuro / claro com persistência via localStorage
function alternarTema() {
  const escuro = document.documentElement.classList.toggle("dark");
  localStorage.setItem("tema", escuro ? "escuro" : "claro");
  atualizarBotaoTema();
}

function atualizarBotaoTema() {
  const btn = document.getElementById("btn-tema");
  if (!btn) return;
  const escuro = document.documentElement.classList.contains("dark");
  btn.innerText = escuro ? "☀️" : "🌙";
  btn.title = escuro ? "Ativar modo claro" : "Ativar modo escuro";
}

document.addEventListener("DOMContentLoaded", atualizarBotaoTema);
