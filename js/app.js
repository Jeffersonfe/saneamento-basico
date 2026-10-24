// Lógica do portal Saneamento Básico Descomplicado
let filtroAtual = "todos";
let termoBusca = "";
let topicoAtivo = null;

// Carregamento progressivo dos cards (mostrar mais)
const POR_LOTE = 6;
let limiteVisivel = POR_LOTE;

document.addEventListener("DOMContentLoaded", () => {
  renderizarTopicos();
  configurarFiltros();
  configurarBusca();
  checarUrlHash();
});

function renderizarTopicos() {
  const container = document.getElementById("grid-topicos");
  const contadorEl = document.getElementById("contador-topicos");

  const topicosFiltrados = TOPICOS.filter(t => {
    const matchFiltro = filtroAtual === "todos" || t.pilar === filtroAtual;
    const matchBusca = termoBusca === "" || 
      t.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      t.subtitulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      t.resumo.toLowerCase().includes(termoBusca.toLowerCase());
    return matchFiltro && matchBusca;
  });

  if (contadorEl) {
    contadorEl.innerText = `${topicosFiltrados.length} ${topicosFiltrados.length === 1 ? 'card disponível' : 'cards disponíveis'}`;
  }

  const areaCarregarMais = document.getElementById("area-carregar-mais");
  const btnCarregarMais = document.getElementById("btn-carregar-mais");
  const infoCarregamento = document.getElementById("info-carregamento");

  if (topicosFiltrados.length === 0) {
    if (areaCarregarMais) areaCarregarMais.classList.add("hidden");
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <span class="text-5xl block mb-3">🔍</span>
        <h3 class="text-xl font-bold text-slate-700 dark:text-white">Nenhum tópico encontrado</h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Tente buscar por outras palavras ou selecione outro pilar acima.</p>
        <button onclick="limparFiltros()" class="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition">
          Ver todos os cards
        </button>
      </div>
    `;
    return;
  }

  const topicosVisiveis = topicosFiltrados.slice(0, limiteVisivel);

  container.innerHTML = topicosVisiveis.map(topico => {
    const pilar = PILARES[topico.pilar] || PILARES.geral;
    return `
      <article onclick="abrirLeitor(${topico.id})" 
               class="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between">
        <div class="p-5">
          <!-- Topo do Card -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${pilar.cor}">
              <span>${pilar.icone}</span> ${pilar.nome}
            </span>
            <span class="text-xs text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1">
              ⏱️ ${topico.tempoLeitura}
            </span>
          </div>

          <!-- Título & Subtítulo -->
          <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug mb-2">
            ${topico.titulo}
          </h3>
          <p class="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-3">${topico.nivel}</p>
          <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
            ${topico.resumo}
          </p>
        </div>

        <!-- Rodapé do Card -->
        <div class="px-5 py-3.5 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <span class="text-xs text-slate-400 dark:text-slate-500">${topico.dataPublicacao}</span>
          <span class="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
            Ler card →
          </span>
        </div>
      </article>
    `;
  }).join("");

  // Atualiza o botão "Ver mais"
  const restantes = topicosFiltrados.length - topicosVisiveis.length;
  if (restantes > 0) {
    areaCarregarMais.classList.remove("hidden");
    btnCarregarMais.innerText = `Ver mais ${restantes} ${restantes === 1 ? 'card' : 'cards'} ↓`;
    infoCarregamento.innerText = `Exibindo ${topicosVisiveis.length} de ${topicosFiltrados.length}`;
  } else {
    areaCarregarMais.classList.add("hidden");
  }
}

function carregarMaisTopicos() {
  limiteVisivel += POR_LOTE;
  renderizarTopicos();
}

function configurarFiltros() {
  const botoes = document.querySelectorAll(".filtro-btn");
  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      botoes.forEach(b => {
        b.classList.remove("bg-emerald-600", "text-white", "shadow-sm", "border", "border-slate-200", "dark:border-slate-700");
        b.classList.add("bg-white", "text-slate-600", "hover:bg-slate-100", "dark:bg-slate-800", "dark:text-slate-300", "dark:hover:bg-slate-700", "border", "border-slate-200", "dark:border-slate-700");
      });
      btn.classList.remove("bg-white", "text-slate-600", "hover:bg-slate-100", "dark:bg-slate-800", "dark:text-slate-300", "dark:hover:bg-slate-700", "border", "border-slate-200", "dark:border-slate-700");
      btn.classList.add("bg-emerald-600", "text-white", "shadow-sm");

      filtroAtual = btn.dataset.pilar;
      limiteVisivel = POR_LOTE;
      renderizarTopicos();
    });
  });
}

function configurarBusca() {
  const input = document.getElementById("campo-busca");
  if (input) {
    input.addEventListener("input", (e) => {
      termoBusca = e.target.value;
      limiteVisivel = POR_LOTE;
      renderizarTopicos();
    });
  }
}

function limparFiltros() {
  filtroAtual = "todos";
  termoBusca = "";
  const input = document.getElementById("campo-busca");
  if (input) input.value = "";
  const btnTodos = document.querySelector('[data-pilar="todos"]');
  if (btnTodos) btnTodos.click();
}

// Visualizador / Modal de Leitura
function abrirLeitor(id) {
  const topico = TOPICOS.find(t => t.id === id);
  if (!topico) return;

  topicoAtivo = topico;
  window.location.hash = topico.slug;

  const modal = document.getElementById("modal-leitor");
  const pilar = PILARES[topico.pilar] || PILARES.geral;

  document.getElementById("leitor-badge").innerHTML = `
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${pilar.cor}">
      <span>${pilar.icone}</span> ${pilar.nome}
    </span>
    <span class="text-xs font-medium text-slate-500">• ${topico.nivel} • ⏱️ ${topico.tempoLeitura}</span>
  `;

  document.getElementById("leitor-titulo").innerText = topico.titulo;
  document.getElementById("leitor-subtitulo").innerText = topico.subtitulo;
  document.getElementById("leitor-data").innerText = `Publicado em ${topico.dataPublicacao}`;
  document.getElementById("leitor-ilustracao").innerHTML = topico.svgIlustracao;
  document.getElementById("leitor-corpo").innerHTML = topico.conteudoHtml;

  // Quiz
  const quizBox = document.getElementById("leitor-quiz");
  if (topico.quiz) {
    quizBox.classList.remove("hidden");
    quizBox.innerHTML = `
      <div class="bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-700/40 dark:to-emerald-900/30 p-5 rounded-2xl border border-emerald-200/80 dark:border-emerald-700/60">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-xl">🧠</span>
          <h4 class="font-bold text-slate-900 dark:text-white">Desafio de Fixação</h4>
        </div>
        <p class="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4">${topico.quiz.pergunta}</p>
        <div class="space-y-2" id="quiz-opcoes">
          ${topico.quiz.opcoes.map((opcao, idx) => `
            <button onclick="responderQuiz(${idx}, ${topico.quiz.respostaCorreta})" 
                    class="opcao-quiz w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 transition">
              <span class="inline-block w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs text-center leading-6 mr-2 font-bold">${String.fromCharCode(65 + idx)}</span>
              ${opcao}
            </button>
          `).join("")}
        </div>
        <div id="quiz-feedback" class="hidden mt-4 p-3 rounded-xl text-sm leading-relaxed"></div>
      </div>
    `;
  } else {
    quizBox.classList.add("hidden");
  }

  // Navegação Anterior / Próximo
  const idxAtual = TOPICOS.findIndex(t => t.id === id);
  const btnAnt = document.getElementById("btn-topico-ant");
  const btnProx = document.getElementById("btn-topico-prox");

  if (idxAtual > 0) {
    btnAnt.classList.remove("invisible");
    btnAnt.onclick = () => abrirLeitor(TOPICOS[idxAtual - 1].id);
  } else {
    btnAnt.classList.add("invisible");
  }

  if (idxAtual < TOPICOS.length - 1) {
    btnProx.classList.remove("invisible");
    btnProx.onclick = () => abrirLeitor(TOPICOS[idxAtual + 1].id);
  } else {
    btnProx.classList.add("invisible");
  }

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  document.getElementById("modal-scroll").scrollTop = 0;
}

function fecharLeitor() {
  const modal = document.getElementById("modal-leitor");
  modal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

function responderQuiz(escolha, correta) {
  const opcoes = document.querySelectorAll(".opcao-quiz");
  const feedback = document.getElementById("quiz-feedback");

  opcoes.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correta) {
      btn.className = "w-full text-left p-3 rounded-xl border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/50 text-sm font-bold text-emerald-900 dark:text-emerald-200";
    } else if (idx === escolha) {
      btn.className = "w-full text-left p-3 rounded-xl border-2 border-rose-400 bg-rose-50 dark:bg-rose-900/40 text-sm font-semibold text-rose-900 dark:text-rose-200";
    } else {
      btn.className = "w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-sm text-slate-400 dark:text-slate-500 opacity-60";
    }
  });

  feedback.classList.remove("hidden");
  if (escolha === correta) {
    feedback.className = "mt-4 p-4 rounded-xl text-sm leading-relaxed bg-emerald-100 dark:bg-emerald-900/50 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700 font-medium";
    feedback.innerHTML = `🎉 <strong>Parabéns, você acertou!</strong><br>${topicoAtivo.quiz.explicacao}`;
  } else {
    feedback.className = "mt-4 p-4 rounded-xl text-sm leading-relaxed bg-amber-50 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-700 font-medium";
    feedback.innerHTML = `Quase lá! A alternativa correta era a <strong>${String.fromCharCode(65 + correta)}</strong>.<br>${topicoAtivo.quiz.explicacao}`;
  }
}

function compartilharTopico() {
  if (navigator.share && topicoAtivo) {
    navigator.share({
      title: topicoAtivo.titulo,
      text: topicoAtivo.subtitulo,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Link copiado para a área de transferência!");
    });
  }
}

function checarUrlHash() {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const topico = TOPICOS.find(t => t.slug === hash);
    if (topico) abrirLeitor(topico.id);
  }
}
