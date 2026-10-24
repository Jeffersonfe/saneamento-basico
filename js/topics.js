// Banco de Dados dos Cards de Conhecimento
// Para adicionar um novo tópico 2x por semana, basta duplicar um item abaixo e preencher!

const PILARES = {
  geral: {
    nome: "Fundamentos",
    cor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icone: "🌱"
  },
  agua: {
    nome: "Água Potável",
    cor: "bg-sky-100 text-sky-800 border-sky-200",
    icone: "💧"
  },
  esgoto: {
    nome: "Esgoto Sanitário",
    cor: "bg-amber-100 text-amber-800 border-amber-200",
    icone: "🚽"
  },
  residuos: {
    nome: "Resíduos Sólidos",
    cor: "bg-lime-100 text-lime-800 border-lime-200",
    icone: "♻️"
  },
  drenagem: {
    nome: "Drenagem Urbana",
    cor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icone: "🌧️"
  }
};

const TOPICOS = [
  {
  id: 1,
  slug: "o-que-e-saneamento-basico",
  titulo: "O que é Saneamento Básico afinal?",
  subtitulo: "Muito além de canos de água: conheça os 4 pilares que sustentam a saúde humana.",
  pilar: "geral",
  nivel: "Nível 0 • Começando do Zero",
  tempoLeitura: "2 min",
  dataPublicacao: "23 de Outubro de 2026",
  resumo: "Saneamento não é apenas abrir a torneira e ver água sair. É um conjunto de 4 serviços essenciais que garantem que você não adoeça e que o meio ambiente não seja destruído.",
  svgIlustracao: `
    <div class="w-full rounded-xl shadow-sm bg-gradient-to-br from-teal-50 to-emerald-50 p-4 sm:p-6 border border-teal-100">
      <h4 class="text-center font-bold text-teal-800 text-sm sm:text-base mb-4 uppercase tracking-wide">
        OS 4 PILARES DO SANEAMENTO BÁSICO
      </h4>

      <!-- Grid Responsivo: 1 coluna no Celular (grid-cols-1), 2 colunas em Tablets (sm:grid-cols-2) e 4 colunas no Desktop (lg:grid-cols-4) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
        
        <!-- Pillar 1: Água -->
        <div class="bg-sky-100/70 border border-sky-400 rounded-lg p-3 flex items-center gap-3 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center text-xl shrink-0">💧</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">1. Água Potável</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Captação, tratamento e distribuição limpa</p>
          </div>
        </div>

        <!-- Pillar 2: Esgoto -->
        <div class="bg-amber-100/70 border border-amber-400 rounded-lg p-3 flex items-center gap-3 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-xl shrink-0">🚽</div>
          <div>
            <span class="block text-xs font-bold text-amber-900">2. Esgotamento</span>
            <p class="text-[11px] leading-tight text-amber-800 mt-0.5">Coleta e tratamento da água usada</p>
          </div>
        </div>

        <!-- Pillar 3: Resíduos -->
        <div class="bg-lime-100/70 border border-lime-400 rounded-lg p-3 flex items-center gap-3 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-lime-200 flex items-center justify-center text-xl shrink-0">♻️</div>
          <div>
            <span class="block text-xs font-bold text-lime-900">3. Resíduos Sólidos</span>
            <p class="text-[11px] leading-tight text-lime-800 mt-0.5">Coleta, reciclagem e aterros sanitários</p>
          </div>
        </div>

        <!-- Pillar 4: Drenagem -->
        <div class="bg-indigo-100/70 border border-indigo-400 rounded-lg p-3 flex items-center gap-3 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center text-xl shrink-0">🌧️</div>
          <div>
            <span class="block text-xs font-bold text-indigo-900">4. Drenagem Urbana</span>
            <p class="text-[11px] leading-tight text-indigo-800 mt-0.5">Manejo das chuvas e controle de cheias</p>
          </div>
        </div>

      </div>

      <!-- Legenda de rodapé -->
      <p class="text-center text-xs font-semibold text-teal-700 mt-4 leading-relaxed">
        🤝 <strong>Serviços Inseparáveis:</strong> A falha em qualquer um dos 4 pilares compromete a saúde pública e o meio ambiente.
      </p>
    </div>
  `,
  conteudoHtml: `
    <p class="text-lg leading-relaxed text-slate-700 mb-4">
      Quando a maioria das pessoas ouve a palavra <strong>saneamento</strong>, logo pensa no cano de esgoto ou na conta de água no fim do mês. Mas na lei brasileira (Lei nº 11.445/2007) e na prática, saneamento básico é formado por <strong>quatro serviços inseparáveis</strong>:
    </p>

    <div class="space-y-4 my-6">
      <div class="p-4 bg-sky-50 rounded-xl border border-sky-100 flex items-start space-x-3">
        <span class="text-2xl">💧</span>
        <div>
          <h4 class="font-bold text-sky-950">1. Abastecimento de Água Potável</h4>
          <p class="text-sm text-sky-800">Tirar a água da natureza (represa, poço ou rio), purificar numa estação de tratamento (ETA) e fazer chegar limpa até a torneira da sua casa.</p>
        </div>
      </div>

      <div class="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start space-x-3">
        <span class="text-2xl">🚽</span>
        <div>
          <h4 class="font-bold text-amber-950">2. Esgotamento Sanitário</h4>
          <p class="text-sm text-amber-800">Depois que você toma banho, usa o vaso sanitário ou lava a louça, essa água suja precisa ser coletada por tubulações e tratada em uma estação (ETE) antes de ser devolvida ao rio.</p>
        </div>
      </div>

      <div class="p-4 bg-lime-50 rounded-xl border border-lime-100 flex items-start space-x-3">
        <span class="text-2xl">♻️</span>
        <div>
          <h4 class="font-bold text-lime-950">3. Limpeza Urbana e Resíduos Sólidos</h4>
          <p class="text-sm text-lime-800">A coleta do lixo residencial, varrição de ruas, podas de árvores, separação de recicláveis e o descarte correto em aterros sanitários (longe dos perigosos lixões a céu aberto).</p>
        </div>
      </div>

      <div class="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex items-start space-x-3">
        <span class="text-2xl">🌧️</span>
        <div>
          <h4 class="font-bold text-indigo-950">4. Drenagem e Águas Pluviais</h4>
          <p class="text-sm text-indigo-800">O que acontece quando chove muito forte? As galerias pluviais, bueiros e canais conduzem a água da chuva para evitar alagamentos, enchentes e desabamentos.</p>
        </div>
      </div>
    </div>

    <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-lg">
      <h4 class="font-bold text-teal-900 flex items-center gap-2">
        <span>💡</span> Você sabia?
      </h4>
      <p class="text-sm text-teal-800 mt-1">
        Segundo a Organização Mundial da Saúde (OMS), <strong>cada R$ 1,00 investido em saneamento gera uma economia de R$ 4,00 em saúde pública</strong>. Quando uma cidade tem saneamento, caem as internações por diarreia, dengue, cólera e verminoses!
      </p>
    </div>

    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Dica prática para o seu dia a dia</h3>
    <p class="text-slate-700 leading-relaxed">
      Nunca jogue lixo na rua ou descarte óleo de cozinha na pia. O óleo entope os canos de esgoto da cidade e o lixo entope os bueiros, provocando enchentes na próxima chuva forte.
    </p>
  `,
  quiz: {
    pergunta: "Qual destes NÃO é um dos 4 pilares oficiais do saneamento básico?",
    opcoes: [
      "Abastecimento de água potável",
      "Esgotamento sanitário",
      "Fornecimento de energia elétrica residencial",
      "Manejo de águas pluviais (drenagem urbana)"
    ],
    respostaCorreta: 2,
    explicacao: "Energia elétrica é um serviço público essencial, mas os 4 pilares do Saneamento Básico são: Água Potável, Esgotamento Sanitário, Limpeza Urbana/Resíduos Sólidos e Drenagem Urbana."
  }
},
{
  id: 2,
  slug: "qual-a-diferenca-entre-eta-e-ete",
  titulo: "ETA x ETE: Qual a diferença entre as duas estações?",
  subtitulo: "Entenda o papel de cada uma no ciclo da água e evite confundir as siglas.",
  pilar: "geral",
  nivel: "Nível 0 • Começando do Zero",
  tempoLeitura: "3 min",
  dataPublicacao: "24 de Outubro de 2026",
  resumo: "Uma limpa a água que vem do rio para você beber; a outra limpa o esgoto que sai da sua casa para devolver ao rio. Descubra como ETA e ETE trabalham juntas na saúde pública.",
  svgIlustracao: `
    <div class="w-full rounded-xl shadow-sm bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 p-4 sm:p-6 border border-teal-100">
      <h4 class="text-center font-bold text-slate-800 text-sm sm:text-base mb-4 uppercase tracking-wide">
        O CICLO DO TRATAMENTO: ETA x ETE
      </h4>

      <!-- Grid Responsivo: 1 coluna no celular (grid-cols-1), 2 colunas no Desktop (md:grid-cols-2) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        
        <!-- Bloco ETA -->
        <div class="bg-sky-100/70 border-2 border-sky-400 rounded-xl p-4 flex flex-col justify-between shadow-sm">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">💧</span>
              <div>
                <h5 class="font-extrabold text-sky-950 text-sm sm:text-base">ETA</h5>
                <span class="text-[10px] font-semibold text-sky-700 bg-sky-200 px-2 py-0.5 rounded-full">Estação de Tratamento de Água</span>
              </div>
            </div>
            <ul class="text-xs text-sky-900 space-y-1.5 mt-3">
              <li class="flex items-center gap-1.5"><strong>Origem:</strong> Rio, represa ou poço (Água Bruta)</li>
              <li class="flex items-center gap-1.5"><strong>Objetivo:</strong> Tornar a água potável</li>
              <li class="flex items-center gap-1.5"><strong>Destino:</strong> Torneira da sua casa</li>
            </ul>
          </div>
          <div class="mt-3 pt-2 border-t border-sky-300/60 text-center">
            <span class="text-[11px] font-bold text-sky-800">Entra: Água turva ➔ Sai: Água potável</span>
          </div>
        </div>

        <!-- Bloco ETE -->
        <div class="bg-emerald-100/70 border-2 border-emerald-400 rounded-xl p-4 flex flex-col justify-between shadow-sm">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🚽</span>
              <div>
                <h5 class="font-extrabold text-emerald-950 text-sm sm:text-base">ETE</h5>
                <span class="text-[10px] font-semibold text-emerald-700 bg-emerald-200 px-2 py-0.5 rounded-full">Estação de Tratamento de Esgoto</span>
              </div>
            </div>
            <ul class="text-xs text-emerald-900 space-y-1.5 mt-3">
              <li class="flex items-center gap-1.5"><strong>Origem:</strong> Ralos, pias e vasos (Esgoto Bruto)</li>
              <li class="flex items-center gap-1.5"><strong>Objetivo:</strong> Remover poluição e matéria orgânica</li>
              <li class="flex items-center gap-1.5"><strong>Destino:</strong> Devolução segura ao rio</li>
            </ul>
          </div>
          <div class="mt-3 pt-2 border-t border-emerald-300/60 text-center">
            <span class="text-[11px] font-bold text-emerald-800">Entra: Esgoto sujo ➔ Sai: Efluente tratado</span>
          </div>
        </div>

      </div>

      <!-- Legenda de rodapé -->
      <p class="text-center text-xs font-semibold text-slate-700 mt-4 leading-relaxed">
        🔄 <strong>Ciclo de Proteção:</strong> A ETA cuida da sua <em>saúde ao consumir</em>; a ETE cuida do <em>meio ambiente ao descartar</em>.
      </p>
    </div>
  `,
  conteudoHtml: `
    <p class="text-lg leading-relaxed text-slate-700 mb-4">
      As siglas são parecidas e mudam apenas por uma letra, mas a <strong>ETA (Estação de Tratamento de Água)</strong> e a <strong>ETE (Estação de Tratamento de Esgoto)</strong> desempenham papéis completamente opostos dentro do saneamento básico. Entender a diferença é fundamental para saber como a água chega e como ela sai da sua casa.
    </p>

    <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Comparando lado a lado:</h3>

    <div class="space-y-4 my-6">
      <div class="p-4 bg-sky-50 rounded-xl border border-sky-100 flex items-start space-x-3">
        <span class="text-2xl">🚰</span>
        <div>
          <h4 class="font-bold text-sky-950">1. ETA (Entrada do Consumo)</h4>
          <p class="text-sm text-sky-800 mt-1">
            Trabalha no <strong>início da cadeia</strong>. Ela capta a água do meio ambiente (rios, represas ou poços) e aplica processos físicos e químicos (coagulação, floculação, filtração e cloração) para transformar água turva em <strong>água potável e segura para beber</strong>.
          </p>
        </div>
      </div>

      <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start space-x-3">
        <span class="text-2xl">🌱</span>
        <div>
          <h4 class="font-bold text-emerald-950">2. ETE (Saída do Descarte)</h4>
          <p class="text-sm text-emerald-800 mt-1">
            Trabalha no <strong>final da cadeia</strong>. Ela recebe toda a água usada que desce pelos ralos e vasos sanitários (esgoto bruto) e utiliza bactérias e microrganismos (tratamento biológico) para digerir a matéria orgânica antes de <strong>devolver a água limpa para a natureza</strong> sem poluir os rios.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-teal-50 border-l-4 border-teal-500 p-4 my-6 rounded-r-lg">
      <h4 class="font-bold text-teal-900 flex items-center gap-2">
        <span>💡</span> Resumo em uma frase:
      </h4>
      <p class="text-sm text-teal-800 mt-1">
        A <strong>ETA</strong> prepara a água para entrar na sua casa; a <strong>ETE</strong> purifica o esgoto antes que ele volte para o meio ambiente.
      </p>
    </div>

    <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Por que precisamos das duas?</h3>
    <p class="text-slate-700 leading-relaxed">
      Se uma cidade tiver apenas ETA, a população terá água limpa para beber, mas os rios ficarão poluídos pelo esgoto sem tratamento. Se a cidade tiver apenas ETE, o meio ambiente estará protegido, mas as pessoas adoecerão por beber água sem purificação. As duas estações operam em conjunto para fechar o ciclo do saneamento com saúde e sustentabilidade.
    </p>
  `,
  quiz: {
    pergunta: "Qual das alternativas descreve corretamente a função de uma ETE (Estação de Tratamento de Esgoto)?",
    opcoes: [
      "Adicionar flúor e cloro na água do rio para enviar às torneiras residenciais",
      "Tratar a água usada descartada por pias e vasos sanitários antes de devolvê-la ao meio ambiente",
      "Captar água subterrânea de poços artesianos para irrigação agrícola",
      "Medir a quantidade de chuva acumulada nos bueiros durante enchentes"
    ],
    respostaCorreta: 1,
    explicacao: "A ETE trata os efluentes sanitários (esgoto) gerados pela população para remover a carga poluidora antes do lançamento no corpo hídrico receptor."
  }
},
  {
    id: 3,
    slug: "do-rio-ate-a-torneira",
    titulo: "Do Rio até a Torneira: Como a água vira potável?",
    subtitulo: "Um tour visual pelas etapas da Estação de Tratamento de Água (ETA).",
    pilar: "agua",
    nivel: "Nível 0 • Começando do Zero",
    tempoLeitura: "3 min",
    dataPublicacao: "23 de Outubro de 2026",
    resumo: "A água que você usa para escovar os dentes não vem cristalina da natureza. Entenda como produtos químicos e filtros transformam água turva de represa em água potável.",
    svgIlustracao: `
      <svg viewBox="0 0 500 220" class="w-full h-auto rounded-xl shadow-sm bg-gradient-to-r from-sky-50 to-blue-50 p-2">
        <text x="250" y="24" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">ETAPAS DA ESTAÇÃO DE TRATAMENTO DE ÁGUA (ETA)</text>
        
        <!-- Passo 1: Coagulação -->
        <g transform="translate(15, 45)">
          <rect width="85" height="110" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">1. Coagulação</text>
          <circle cx="42" cy="55" r="18" fill="#e0f2fe"/>
          <text x="42" y="60" font-size="14" text-anchor="middle">🧪</text>
          <text x="42" y="90" font-size="8" fill="#075985" text-anchor="middle">Adiciona Sulfato</text>
          <text x="42" y="100" font-size="8" fill="#075985" text-anchor="middle">de Alumínio</text>
        </g>
        <path d="M 103 100 L 112 100" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>

        <!-- Passo 2: Floculação -->
        <g transform="translate(112, 45)">
          <rect width="85" height="110" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">2. Floculação</text>
          <circle cx="42" cy="55" r="18" fill="#e0f2fe"/>
          <text x="42" y="60" font-size="14" text-anchor="middle">🌀</text>
          <text x="42" y="90" font-size="8" fill="#075985" text-anchor="middle">A sujeira forma</text>
          <text x="42" y="100" font-size="8" fill="#075985" text-anchor="middle">flocos pesados</text>
        </g>

        <!-- Passo 3: Decantação -->
        <g transform="translate(210, 45)">
          <rect width="85" height="110" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">3. Decantação</text>
          <circle cx="42" cy="55" r="18" fill="#e0f2fe"/>
          <text x="42" y="60" font-size="14" text-anchor="middle">⬇️</text>
          <text x="42" y="90" font-size="8" fill="#075985" text-anchor="middle">Flocos afundam</text>
          <text x="42" y="100" font-size="8" fill="#075985" text-anchor="middle">pela gravidade</text>
        </g>

        <!-- Passo 4: Filtração -->
        <g transform="translate(307, 45)">
          <rect width="85" height="110" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">4. Filtração</text>
          <circle cx="42" cy="55" r="18" fill="#e0f2fe"/>
          <text x="42" y="60" font-size="14" text-anchor="middle">🧱</text>
          <text x="42" y="90" font-size="8" fill="#075985" text-anchor="middle">Areia, carvão</text>
          <text x="42" y="100" font-size="8" fill="#075985" text-anchor="middle">e cascalho</text>
        </g>

        <!-- Passo 5: Cloração e Flúor -->
        <g transform="translate(404, 45)">
          <rect width="85" height="110" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="42" y="25" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">5. Cloro + Flúor</text>
          <circle cx="42" cy="55" r="18" fill="#e0f2fe"/>
          <text x="42" y="60" font-size="14" text-anchor="middle">🛡️</text>
          <text x="42" y="90" font-size="8" fill="#075985" text-anchor="middle">Mata bactérias</text>
          <text x="42" y="100" font-size="8" fill="#075985" text-anchor="middle">e protege dentes</text>
        </g>
        
        <text x="250" y="195" font-size="11" font-weight="600" fill="#0284c7" text-anchor="middle">💧 Resultado: Água potável distribuída por adutoras até a sua caixa d'água!</text>
      </svg>
    `,
    conteudoHtml: `
      <p class="text-lg leading-relaxed text-slate-700 mb-4">
        Ao contrário do que vemos em comerciais de água mineral nas montanhas, a água que abastece as cidades costuma vir de rios ou represas cheios de barro, algas, folhas e microrganismos. Para que ela fique 100% segura para beber, ela precisa passar por uma <strong>ETA (Estação de Tratamento de Água)</strong>.
      </p>

      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">O passo a passo da limpeza:</h3>
      
      <ol class="space-y-4 my-4 list-decimal list-inside text-slate-700 leading-relaxed">
        <li>
          <strong>Coagulação:</strong> Quando a água chega do rio, coloca-se um produto especial (como sulfato de alumínio). Ele faz as partículas minúsculas de sujeira "grudarem" umas nas outras.
        </li>
        <li>
          <strong>Floculação:</strong> Em tanques com hélices lentas, a água é movimentada devagar para que essas partículas se juntem em flocos maiores e mais pesados.
        </li>
        <li>
          <strong>Decantação:</strong> A água vai para um tanque calmo. Por pura gravidade, a sujeira pesada vai parar no fundo como uma lama, e a água de cima fica visivelmente limpa.
        </li>
        <li>
          <strong>Filtração:</strong> A água passa por filtros gigantes compostos por camadas de cascalho, areia e carvão antracito, que retêm as menores impurezas que sobraram.
        </li>
        <li>
          <strong>Desinfecção (Cloração):</strong> Adiciona-se cloro para matar qualquer bactéria, vírus ou protozoário sobrevivente.
        </li>
        <li>
          <strong>Fluoretação:</strong> No Brasil, é lei adicionar uma pitadinha de flúor na água tratada. O motivo? Reduz drasticamente as cáries dentárias em crianças e em toda a população!
        </li>
      </ol>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
        <h4 class="font-bold text-amber-900 flex items-center gap-2">
          <span>⚠️</span> Cuidado com a sua caixa d'água!
        </h4>
        <p class="text-sm text-amber-800 mt-1">
          A concessionária entrega a água limpa no seu cavalete. Porém, se a sua caixa d'água estiver sem tampa ou não for lavada a cada <strong>6 meses</strong>, ela pode ser contaminada por poeira, pombos e insetos.
        </p>
      </div>
    `,
    quiz: {
      pergunta: "Por que adicionamos flúor na água potável tratada nas cidades brasileiras?",
      opcoes: [
        "Para deixar a água mais transparente",
        "Para ajudar a prevenir cáries nos dentes da população",
        "Para dar um sabor adocicado à água",
        "Para matar mosquitos da dengue"
      ],
      respostaCorreta: 1,
      explicacao: "A fluoretação da água de abastecimento é uma das medidas de saúde pública mais eficientes do mundo para prevenir cáries em toda a população."
    }
  },
  {
    id: 4,
    slug: "o-caminho-invisivel-do-esgoto",
    titulo: "Para onde vai a descarga? O caminho invisível do esgoto",
    subtitulo: "A diferença vital entre a rede pública de esgoto e a fossa séptica.",
    pilar: "esgoto",
    nivel: "Nível 0 • Começando do Zero",
    tempoLeitura: "2 min",
    dataPublicacao: "23 de Outubro de 2026",
    resumo: "Apertou o botão da descarga e sumiu? Descubra o que acontece com a água usada para não contaminar os rios da sua cidade.",
    svgIlustracao: `
      <svg viewBox="0 0 450 200" class="w-full h-auto rounded-xl shadow-sm bg-gradient-to-br from-amber-50 to-orange-50 p-2">
        <text x="225" y="24" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">O CICLO DO ESGOTO SANITÁRIO</text>
        
        <!-- Casa -->
        <g transform="translate(20, 50)">
          <rect width="90" height="90" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
          <text x="45" y="45" font-size="28" text-anchor="middle">🏠</text>
          <text x="45" y="75" font-size="10" font-weight="bold" fill="#78350f" text-anchor="middle">Sua Casa</text>
        </g>
        
        <!-- Tubulação / Rede Coletora -->
        <g transform="translate(130, 85)">
          <line x1="0" y1="10" x2="80" y2="10" stroke="#78350f" stroke-width="6" stroke-linecap="round"/>
          <text x="40" y="32" font-size="9" fill="#92400e" text-anchor="middle">Rede Subterrânea</text>
        </g>

        <!-- ETE -->
        <g transform="translate(230, 50)">
          <rect width="110" height="90" rx="8" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
          <text x="55" y="45" font-size="28" text-anchor="middle">⚙️</text>
          <text x="55" y="68" font-size="10" font-weight="bold" fill="#7c2d12" text-anchor="middle">ETE (Tratamento)</text>
          <text x="55" y="80" font-size="8" fill="#9a3412" text-anchor="middle">Bactérias decompõem</text>
        </g>

        <!-- Rio Limpo -->
        <g transform="translate(360, 50)">
          <rect width="70" height="90" rx="8" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
          <text x="35" y="45" font-size="28" text-anchor="middle">🐟</text>
          <text x="35" y="72" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Rio Seguro</text>
        </g>

        <text x="225" y="175" font-size="11" fill="#78350f" text-anchor="middle">Sem tratamento, o esgoto bruto mata os peixes e transmite doenças graves.</text>
      </svg>
    `,
    conteudoHtml: `
      <p class="text-lg leading-relaxed text-slate-700 mb-4">
        Cerca de <strong>80% da água limpa</strong> que entra na sua casa sai dela como esgoto (água do chuveiro, máquina de lavar, pia da cozinha e descargas). Se essa água for direto para a natureza sem tratamento, ela consome todo o oxigênio dos rios e gera epidemias.
      </p>

      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Rede de Esgoto vs. Fossa Séptica</h3>
      
      <div class="grid md:grid-cols-2 gap-4 my-4">
        <div class="p-4 bg-white border border-amber-200 rounded-xl shadow-sm">
          <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-2">
            <span>🏙️</span> Na Cidade (Rede Coletora + ETE)
          </h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            Os canos da sua casa se conectam às redes subterrâneas da rua, que levam tudo para a <strong>ETE (Estação de Tratamento de Esgoto)</strong>. Lá, bactérias "do bem" digerem a matéria orgânica antes da água limpa voltar ao rio.
          </p>
        </div>

        <div class="p-4 bg-white border border-amber-200 rounded-xl shadow-sm">
          <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-2">
            <span>🏡</span> Na Zona Rural (Fossa Séptica)
          </h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            Onde não há rede pública, usa-se a <strong>fossa séptica</strong> no próprio quintal. Ela decanta o esgoto e um sumidouro filtra o líquido na terra, impedindo que fezes contaminem o poço artesiano de água.
          </p>
        </div>
      </div>
    `,
    quiz: {
      pergunta: "O que acontece em uma ETE (Estação de Tratamento de Esgoto)?",
      opcoes: [
        "A água é fervida em caldeiras gigantes",
        "Bactérias auxiliam na decomposição da matéria orgânica para purificar o efluente",
        "A água suja é evaporada para a atmosfera",
        "O esgoto é misturado com gasolina para queimar os germes"
      ],
      respostaCorreta: 1,
      explicacao: "Nas ETEs, processos biológicos usando microrganismos e bactérias aeróbias/anaeróbias consomem a matéria orgânica e purificam a água."
    }
  },
  {
    id: 5,
    slug: "lixao-vs-aterro-sanitario",
    titulo: "Lixão x Aterro Sanitário: Você sabe a diferença?",
    subtitulo: "Por que jogar lixo no chão aberto é crime ambiental e como funciona um aterro moderno.",
    pilar: "residuos",
    nivel: "Nível 0 • Começando do Zero",
    tempoLeitura: "2 min",
    dataPublicacao: "23 de Outubro de 2026",
    resumo: "Muita gente usa as duas palavras como se fossem a mesma coisa, mas uma é um desastre sanitário e a outra é uma obra de engenharia de proteção ao solo.",
    svgIlustracao: `
      <svg viewBox="0 0 460 210" class="w-full h-auto rounded-xl shadow-sm bg-gradient-to-r from-lime-50 to-emerald-50 p-2">
        <text x="230" y="24" font-size="13" font-weight="bold" fill="#3f6212" text-anchor="middle">LIXÃO (ERRADO) vs. ATERRO SANITÁRIO (CORRETO)</text>
        
        <!-- Lixão -->
        <g transform="translate(20, 45)">
          <rect width="195" height="135" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="97" y="25" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">❌ LIXÃO A CÉU ABERTO</text>
          <text x="97" y="60" font-size="28" text-anchor="middle">🪰🐀</text>
          <text x="97" y="85" font-size="9" fill="#7f1d1d" text-anchor="middle">• Sem proteção no solo</text>
          <text x="97" y="100" font-size="9" fill="#7f1d1d" text-anchor="middle">• Chorume contamina a água</text>
          <text x="97" y="115" font-size="9" fill="#7f1d1d" text-anchor="middle">• Ratos, urubus e doenças</text>
        </g>

        <!-- Aterro -->
        <g transform="translate(245, 45)">
          <rect width="195" height="135" rx="8" fill="#ecfccb" stroke="#84cc16" stroke-width="2"/>
          <text x="97" y="25" font-size="12" font-weight="bold" fill="#365314" text-anchor="middle">✅ ATERRO SANITÁRIO</text>
          <text x="97" y="60" font-size="28" text-anchor="middle">🛡️🌱</text>
          <text x="97" y="85" font-size="9" fill="#365314" text-anchor="middle">• Manta plástica impermeável</text>
          <text x="97" y="100" font-size="9" fill="#365314" text-anchor="middle">• Drenagem de chorume e gás</text>
          <text x="97" y="115" font-size="9" fill="#365314" text-anchor="middle">• Lixo coberto com terra todo dia</text>
        </g>
      </svg>
    `,
    conteudoHtml: `
      <p class="text-lg leading-relaxed text-slate-700 mb-4">
        Jogar restos de comida, plástico e pilhas em um terreno baldio ou morro cria um <strong>lixão</strong>. Já um <strong>aterro sanitário</strong> é uma obra planejada de engenharia para confinar o lixo sem contaminar o meio ambiente.
      </p>

      <div class="space-y-3 my-4 text-slate-700">
        <p><strong>O que é chorume?</strong> É aquele líquido escuro e malcheiroso que escorre da matéria orgânica em decomposição. No lixão, ele penetra na terra e envenena os lençóis freáticos de onde as pessoas tiram água. No aterro, ele é coletado por canos e tratado.</p>
        <p><strong>E o gás metano?</strong> A decomposição sem ar produz metano, que é inflamável e gera efeito estufa. Nos aterros bem estruturados, esse gás é captado e queimado para gerar eletricidade limpa!</p>
      </div>
    `,
    quiz: {
      pergunta: "O que evita que o chorume do lixo contamine a água subterrânea em um aterro sanitário?",
      opcoes: [
        "A luz forte do sol",
        "Uma manta de geomembrana impermeável instalada na base",
        "O vento que seca todo o líquido",
        "O sal grosso espalhado no solo"
      ],
      respostaCorreta: 1,
      explicacao: "A base de um aterro sanitário é forrada com camadas de argila compactada e mantas de polietileno de alta densidade (geomembrana), impedindo qualquer infiltração no lençol freático."
    }
  },

{
  id: 6,
  slug: "do-manancial-ate-a-eta-captacao-de-agua-bruta",
  titulo: "Do Manancial à ETA: Como é Feita a Captação de Água?",
  subtitulo: "Conheça a primeira etapa que retira a água da natureza e protege a estação de tratamento.",
  pilar: "agua",
  nivel: "Nível 1 • Aprofundando no Tratamento",
  tempoLeitura: "3 min",
  dataPublicacao: "24 de Outubro de 2026",
  resumo: "Troncos, peixes, folhas e sacos plásticos não podem entrar na tubulação da ETA. Descubra como funciona a estrutura de captação, o gradeamento inicial e as estações elevatórias de água bruta.",
  svgIlustracao: `
    <div class="w-full rounded-xl shadow-sm bg-gradient-to-r from-sky-50 to-blue-50 p-4 sm:p-6 border border-sky-100">
      <h4 class="text-center font-bold text-sky-800 text-sm sm:text-base mb-4 uppercase tracking-wide">
        ETAPA DE CAPTAÇÃO DE ÁGUA BRUTA NA ETA
      </h4>

      <!-- Grid Responsivo: 1 coluna no celular (grid-cols-1), 5 colunas no Desktop (md:grid-cols-5) -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
        
        <!-- Passo 1 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🏞️</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">1. Manancial</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Retirada em rio, represa ou poço</p>
          </div>
        </div>

        <!-- Passo 2 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🪵</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">2. Gradeamento</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Retenção de galhos, folhas e lixo</p>
          </div>
        </div>

        <!-- Passo 3 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🏛️</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">3. Poço de Sucção</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Reservatório de amortecimento inicial</p>
          </div>
        </div>

        <!-- Passo 4 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">⚡</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">4. Elevatória (EEAB)</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Bombeamento de alta potência</p>
          </div>
        </div>

        <!-- Passo 5 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🧪</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">5. Adutora de Água Bruta</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Transporte direto para a Coagulação</p>
          </div>
        </div>

      </div>

      <!-- Legenda de rodapé -->
      <p class="text-center text-xs font-semibold text-sky-700 mt-4 leading-relaxed">
        💧 <strong>Proteção do Sistema:</strong> A captação correta evita a entrada de grandes sólidos, garantindo a vazão constante e protegendo os equipamentos de bombeamento.
      </p>
    </div>
  `,
  conteudoHtml: `
    <p class="text-lg leading-relaxed text-slate-700 mb-4">
      Antes de qualquer química, coagulação ou filtração, a água precisa ser retirada da natureza e transportada até a <strong>Estação de Tratamento de Água (ETA)</strong>. Essa fase inicial é chamada de <strong>Captação de Água Bruta</strong> e é fundamental para garantir o abastecimento contínuo de toda uma cidade.
    </p>

    <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Como funciona a estrutura de captação:</h3>
    
    <ol class="space-y-4 my-4 list-decimal list-inside text-slate-700 leading-relaxed">
      <li>
        <strong>Ponto de Tomada d'Água:</strong> A estrutura é construída na margem ou no leito de rios, represas ou lagos (mananciais superficiais), ou por meio de poços profundos (mananciais subterrâneos).
      </li>
      <li>
        <strong>Gradeamento e Peneiramento:</strong> Antes de entrar nas tubulações, a água passa por grades grossas e finas que bloqueiam a passagem de troncos, galhos, sacos plásticos, plantas aquáticas e peixes.
      </li>
      <li>
        <strong>Poço de Sucção (ou de Acúmulo):</strong> A água bruta pré-filtrada pelas grades acumula-se em um reservatório inferior projetado para estabilizar o fluxo e evitar turbulências bruscas na entrada das bombas.
      </li>
      <li>
        <strong>Estação Elevatória de Água Bruta (EEAB):</strong> Como as represas e rios costumam estar em altitudes mais baixas do que a estação de tratamento, conjuntos motobombas de alta potência impulsionam essa água morro acima.
      </li>
      <li>
        <strong>Adutora de Água Bruta:</strong> A água viaja por tubulações de grande diâmetro (adutoras) até chegar ao canal de chegada da ETA, onde receberá a dosagem inicial de produtos químicos (como o coagulante e o cloro para pré-desinfecção).
      </li>
    </ol>

    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
      <h4 class="font-bold text-amber-900 flex items-center gap-2">
        <span>🌱</span> A importância da proteção dos mananciais!
      </h4>
      <p class="text-sm text-amber-800 mt-1">
        Quanto mais preservada for a vegetação nativa ao redor do rio (mata ciliar), menor será a quantidade de lama, terra e lixo carregada para a captação durante as chuvas. Mananciais limpos reduzem drasticamente o consumo de produtos químicos no tratamento.
      </p>
    </div>
  `,
  quiz: {
    pergunta: "Qual a função primária do gradeamento na estrutura de captação de água bruta de uma ETA?",
    opcoes: [
      "Ajustar o pH e eliminar bactérias patogênicas",
      "Reter grandes sólidos como galhos, plásticos e folhas para proteger as bombas",
      "Remover o excesso de cloro e flúor dissolvidos na água",
      "Separar a sujeira microscópica por meio de atração eletrostática"
    ],
    respostaCorreta: 1,
    explicacao: "O gradeamento é uma barreira física no ponto de captação que impede a entrada de detritos volumosos, protegendo os rotores das bombas e evitando o entupimento das adutoras."
  }
},
{
  id: 7,
  slug: "etapa-de-coagulacao-na-eta",
  titulo: "Coagulação na ETA: Onde Começa a Mágica Química",
  subtitulo: "Como a mistura rápida e a neutralização de cargas elétricas desestabilizam a sujeira da água.",
  pilar: "agua",
  nivel: "Nível 1 • Aprofundando no Tratamento",
  tempoLeitura: "3 min",
  dataPublicacao: "24 de Outubro de 2026",
  resumo: "Por que a sujeira do rio não afunda sozinha? Descubra o papel do Sulfato de Alumínio e da mistura rápida para anular as cargas elétricas que mantêm as impurezas afastadas.",
  svgIlustracao: `
    <div class="w-full rounded-xl shadow-sm bg-gradient-to-r from-sky-50 to-blue-50 p-4 sm:p-6 border border-sky-100">
      <h4 class="text-center font-bold text-sky-800 text-sm sm:text-base mb-4 uppercase tracking-wide">
        MECANISMO DA COAGULAÇÃO NA ETA
      </h4>

      <!-- Grid Responsivo: 1 coluna no celular (grid-cols-1), 5 colunas no Desktop (md:grid-cols-5) -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
        
        <!-- Passo 1 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🌊</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">1. Água Bruta</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Partículas de argila com carga negativa (-)</p>
          </div>
        </div>

        <!-- Passo 2 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🧪</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">2. Dosagem</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Adição do Coagulante (Al³⁺ / Fe³⁺)</p>
          </div>
        </div>

        <!-- Passo 3 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🌀</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">3. Mistura Rápida</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Agitação violenta em milissegundos</p>
          </div>
        </div>

        <!-- Passo 4 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🧲</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">4. Neutralização</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Cargas anuladas (+ cancela -)</p>
          </div>
        </div>

        <!-- Passo 5 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">✨</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">5. Microflocos</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Início da união (pronto p/ Floculação)</p>
          </div>
        </div>

      </div>

      <!-- Legenda de rodapé -->
      <p class="text-center text-xs font-semibold text-sky-700 mt-4 leading-relaxed">
        ⚡ <strong>Reação em fração de segundos:</strong> A mistura rápida garante que o coagulante se espalhe antes de reagir totalmente com a água.
      </p>
    </div>
  `,
  conteudoHtml: `
    <p class="text-lg leading-relaxed text-slate-700 mb-4">
      Quando olhamos para a água turva de um rio, as minúsculas partículas de argila e matéria orgânica estão em suspensão e nunca afundam por conta própria. Isso acontece porque todas possuem <strong>carga elétrica negativa</strong>, agindo como ímãs com o mesmo polo: elas se repelem o tempo todo. A <strong>Coagulação</strong> é a etapa responsável por quebrar essa repulsão.
    </p>

    <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Como funciona a química da coagulação:</h3>
    
    <ol class="space-y-4 my-4 list-decimal list-inside text-slate-700 leading-relaxed">
      <li>
        <strong>Aplicação do Coagulante:</strong> Adicionam-se sais metálicos à água bruta, como o <strong>Sulfato de Alumínio</strong> ou <strong>Cloreto Férrico</strong>. Ao entrarem em contato com a água, eles liberam íons com fortes cargas positivas ($Al^{3+}$ ou $Fe^{3+}$).
      </li>
      <li>
        <strong>A Importância da Mistura Rápida:</strong> A dosagem precisa ser dispersa em questão de milissegundos. Para isso, utiliza-se alta turbulência hidráulica (como em uma Calha Parshall) ou agitadores mecânicos de alta velocidade.
      </li>
      <li>
        <strong>Desestabilização das Partículas:</strong> Os íons positivos do coagulante atraem e neutralizam as cargas negativas das partículas de sujeira, anulando a força de repulsão eletrostática entre elas.
      </li>
      <li>
        <strong>Ajuste do pH de Coagulação:</strong> Cada coagulante possui uma faixa ideal de pH para funcionar com eficiência máxima. Caso necessário, adiciona-se cal hidratada ou hidróxido de sódio para ajustar a alcalinidade do meio.
      </li>
      <li>
        <strong>Formação dos Microflocos:</strong> Sem a repulsão elétrica, as partículas desestabilizadas começam a se atrair por forças de Van der Waals, formando os primeiros aglomerados microscópicos que crescerão na etapa seguinte (a Floculação).
      </li>
    </ol>

    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
      <h4 class="font-bold text-amber-900 flex items-center gap-2">
        <span>⚠️</span> O teste que define a dosagem exata!
      </h4>
      <p class="text-sm text-amber-800 mt-1">
        A dosagem de coagulante varia diariamente conforme a chuva e a turbidez do rio. Nas ETAs, os operadores utilizam o <strong>Jar Test (Ensaio de Jarras)</strong> no laboratório para determinar a menor quantidade possível de produto químico necessária para obter a melhor coagulação.
      </p>
    </div>
  `,
  quiz: {
    pergunta: "Por que as partículas de sujeira em suspensão na água bruta do rio não afundam naturalmente sem o uso de coagulantes?",
    opcoes: [
      "Porque possuem cargas elétricas negativas e se repelem mutuamente",
      "Porque são mais pesadas do que as moléculas de água potável",
      "Porque o cloro mata as bactérias antes que elas possam afundar",
      "Porque a velocidade da água no rio neutraliza a gravidade"
    ],
    respostaCorreta: 0,
    explicacao: "As partículas coloidais possuem carga elétrica superficial negativa. A repulsão eletrostática impede que elas se aproximem e se agreguem para ganhar peso."
  }
},

  {
  id: 8,
  slug: "o-segredo-da-floculacao",
  titulo: "Floculação: O Segredo para Agrupar a Sujeira da Água",
  subtitulo: "Como a agitação lenta transforma micropartículas invisíveis em flocos pesados.",
  pilar: "agua",
  nivel: "Nível 1 • Aprofundando no Tratamento",
  tempoLeitura: "3 min",
  dataPublicacao: "24 de Outubro de 2026",
  resumo: "Entenda por que apenas misturar coagulante não basta. A floculação utiliza agitação mecânica e controle de velocidade para fazer as impurezas se encontrarem e afundarem.",
  svgIlustracao: `
    <div class="w-full rounded-xl shadow-sm bg-gradient-to-r from-sky-50 to-blue-50 p-4 sm:p-6 border border-sky-100">
      <h4 class="text-center font-bold text-sky-800 text-sm sm:text-base mb-4 uppercase tracking-wide">
        MECANISMO DA FLOCULAÇÃO NA ETA
      </h4>

      <!-- Grid Responsivo: 1 coluna no celular (grid-cols-1), 5 colunas no Desktop (md:grid-cols-5) -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
        
        <!-- Passo 1 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🧲</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">1. Coagulação</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Cargas neutralizadas, impurezas soltas</p>
          </div>
        </div>

        <!-- Passo 2 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">⚙️</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">2. Mistura Lenta</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Agitação suave e constante</p>
          </div>
        </div>

        <!-- Passo 3 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🫧</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">3. Colisão</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Choques entre microflocos</p>
          </div>
        </div>

        <!-- Passo 4 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">🪨</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">4. Aglomeração</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Flocos grandes e pesados</p>
          </div>
        </div>

        <!-- Passo 5 -->
        <div class="bg-sky-200/60 border border-sky-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-lg shrink-0">⚓</div>
          <div>
            <span class="block text-xs font-bold text-sky-900">5. Decantação</span>
            <p class="text-[11px] leading-tight text-sky-800 mt-0.5">Pronto para afundar no tanque</p>
          </div>
        </div>

      </div>

      <!-- Legenda de rodape -->
      <p class="text-center text-xs font-semibold text-sky-700 mt-4 leading-relaxed">
        🌀 <strong>Controle de mistura:</strong> Nem forte para quebrar o floco, nem fraco demais para as partículas não se unirem.
      </p>
    </div>
  `,
  conteudoHtml: `
    <p class="text-lg leading-relaxed text-slate-700 mb-4">
      Logo após a coagulação (onde os produtos químicos neutralizam as cargas das sujeiras), a água entra na fase de <strong>Floculação</strong>. Se essa etapa não acontecer da forma certa, as partículas continuarão minúsculas e flutuando, impossibilitando a limpeza rápida da água nas fases seguintes.
    </p>

    <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Como funciona a física da floculação?</h3>
    
    <ol class="space-y-4 my-4 list-decimal list-inside text-slate-700 leading-relaxed">
      <li>
        <strong>Colisão Ortocinética:</strong> Os floculadores mantêm a água em movimento controlado por meio de pás rotativas ou chicanas (barreiras hidráulicas). Essa movimentação suave força as micropartículas a colidirem umas com as outras repetidamente.
      </li>
      <li>
        <strong>Agregação Incremental:</strong> A cada toque, o reagente químico faz com que os microflocos grudem, formando aglomerados progressivamente maiores, visíveis a olho nu.
      </li>
      <li>
        <strong>Gradiente de Velocidade Escalonado (G):</strong> O segredo da floculação está na diminuição progressiva da velocidade de mistura. As primeiras câmaras agitam a água um pouco mais rápido, enquanto as últimas rodam bem devagar para evitar que os flocos grandes e sensíveis se quebrem antes da decantação.
      </li>
      <li>
        <strong>Uso de Auxiliares de Floculação:</strong> Em águas de difícil tratamento (com baixa turbidez ou muito frias), adcionam-se polímeros para criar "pontes" químicas entre as partículas, acelerando o crescimento dos flocos.
      </li>
    </ol>

    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
      <h4 class="font-bold text-amber-900 flex items-center gap-2">
        <span>⚠️</span> O equilíbrio delicado da agitação!
      </h4>
      <p class="text-sm text-amber-800 mt-1">
        Se a agitação na floculação for <strong>muito fraca</strong>, as partículas não se encontram e não formam flocos. Se for <strong>muito forte</strong>, as forças de cisalhamento quebram os flocos já formados, exigindo dosagem extra de reagente para refazê-los.
      </p>
    </div>
  `,
  quiz: {
    pergunta: "O que acontece se o gradiente de agitação na câmara final da floculação for excessivamente alto?",
    opcoes: [
      "Os flocos formados sofrem cisalhamento e se quebram novamente",
      "A água se torna potável instantaneamente sem precisar de filtro",
      "O tempo de retenção hidráulica cai para zero",
      "O pH da água se eleva para níveis alcalinos extremos"
    ],
    respostaCorreta: 0,
    explicacao: "A agitação excessiva gera forças de cisalhamento no líquido que rompem as ligações frágeis dos flocos formados, reduzindo-os a microflocos difíceis de decantar."
  }
},
{
  id: 9,
  slug: "do-vaso-ate-a-ete-captacao-e-gradeamento",
  titulo: "Do Esgoto à ETE: Como Começa o Tratamento?",
  subtitulo: "Entenda a fase de captação e o papel das grades e desarenadores na proteção da estação.",
  pilar: "esgoto",
  nivel: "Nível 1 • Aprofundando no Tratamento",
  tempoLeitura: "3 min",
  dataPublicacao: "24 de Outubro de 2026",
  resumo: "Pneus, plásticos, fraldas e muita areia chegam à ETE todos os dias. Descubra como a etapa preliminar remove os resíduos sólidos brutos para proteger as bombas e o tratamento biológico.",
  svgIlustracao: `
    <div class="w-full rounded-xl shadow-sm bg-gradient-to-r from-emerald-50 to-teal-50 p-4 sm:p-6 border border-emerald-100">
      <h4 class="text-center font-bold text-teal-800 text-sm sm:text-base mb-4 uppercase tracking-wide">
        ETAPA PRELIMINAR: CAPTAÇÃO E ENTRADA DA ETE
      </h4>

      <!-- Grid Responsivo: 1 coluna no celular (grid-cols-1), 5 colunas no Desktop (md:grid-cols-5) -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
        
        <!-- Passo 1 -->
        <div class="bg-teal-200/60 border border-teal-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-lg shrink-0">🚽</div>
          <div>
            <span class="block text-xs font-bold text-teal-900">1. Redes de Coleta</span>
            <p class="text-[11px] leading-tight text-teal-800 mt-0.5">Esgoto bruto flui por gravidade</p>
          </div>
        </div>

        <!-- Passo 2 -->
        <div class="bg-teal-200/60 border border-teal-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-lg shrink-0">🪜</div>
          <div>
            <span class="block text-xs font-bold text-teal-900">2. Gradeamento</span>
            <p class="text-[11px] leading-tight text-teal-800 mt-0.5">Retenção de lixo grosso e plásticos</p>
          </div>
        </div>

        <!-- Passo 3 -->
        <div class="bg-teal-200/60 border border-teal-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-lg shrink-0">🏖️</div>
          <div>
            <span class="block text-xs font-bold text-teal-900">3. DesarenAção</span>
            <p class="text-[11px] leading-tight text-teal-800 mt-0.5">Separação de areia e detritos minerais</p>
          </div>
        </div>

        <!-- Passo 4 -->
        <div class="bg-teal-200/60 border border-teal-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-lg shrink-0">📐</div>
          <div>
            <span class="block text-xs font-bold text-teal-900">4. Medição de Vazão</span>
            <p class="text-[11px] leading-tight text-teal-800 mt-0.5">Calha Parshall monitora o fluxo</p>
          </div>
        </div>

        <!-- Passo 5 -->
        <div class="bg-teal-200/60 border border-teal-500 rounded-lg p-3 flex md:flex-col items-center md:justify-center text-left md:text-center gap-3 md:gap-2 shadow-sm">
          <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-lg shrink-0">⚡</div>
          <div>
            <span class="block text-xs font-bold text-teal-900">5. Elevatória (EEE)</span>
            <p class="text-[11px] leading-tight text-teal-800 mt-0.5">Bombeamento ao tratamento biológico</p>
          </div>
        </div>

      </div>

      <!-- Legenda de rodapé -->
      <p class="text-center text-xs font-semibold text-teal-700 mt-4 leading-relaxed">
        🛡️ <strong>Tratamento Preliminar:</strong> Protege bombas e tubulações contra o desgaste mecânico e o entupimento antes da digestão biológica.
      </p>
    </div>
  `,
  conteudoHtml: `
    <p class="text-lg leading-relaxed text-slate-700 mb-4">
      Diferente de uma ETA, que capta água limpa de rios ou represas, a <strong>Estação de Tratamento de Esgoto (ETE)</strong> recebe tudo o que é descartado em pias, ralos e vasos sanitários da cidade. Na etapa de captação e chegada (conhecida como <strong>Tratamento Preliminar</strong>), a missão principal não é tratar a matéria orgânica ainda, mas remover resíduos sólidos grosseiros e proteger os equipamentos elétricos e mecânicos da estação.
    </p>

    <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">O caminho do esgoto na chegada à ETE:</h3>
    
    <ol class="space-y-4 my-4 list-decimal list-inside text-slate-700 leading-relaxed">
      <li>
        <strong>Rede Interceptora e Emissários:</strong> O esgoto chega à ETE conduzido por tubulações de grande diâmetro por gravidade. Por estar em constante movimento, carrega detritos de todos os tamanhos.
      </li>
      <li>
        <strong>Gradeamento (Grosso e Fino):</strong> A água passa por barras metálicas paralelas. O gradeamento grosso retém resíduos volumosos (garrafas PET, pedaços de madeira, tecidos e preservativos). As grades finas ou peneiras rotativas retêm cabelos, panos minúsculos e fiapos de plástico.
      </li>
      <li>
        <strong>Desarenadores (Caixas de Areia):</strong> A água reduz sua velocidade para que partículas minúsculas de areia, terra e pequenos pedriscos afundem por gravidade no fundo da caixa. Se a areia passasse para as fases seguintes, causaria abrasão nas pás de bombas e ocuparia volume útil nos reatores.
      </li>
      <li>
        <strong>Medição de Vazão (Calha Parshall):</strong> Um estreitamento padronizado no canal hidráulico mede o volume exato de esgoto que entra por segundo. Esses dados calibram a dosagem de ar nos reatores biológicos ou o tempo de retenção nos tanques.
      </li>
      <li>
        <strong>Estação Elevatória de Esgoto Bruto (EEEB):</strong> Após a remoção do lixo grosso e da areia, bombas submersas de alta capacidade elevam o esgoto limpo de sólidos mecânicos até o ponto mais alto da ETE, permitindo que as fases biológicas subsequentes fluam por gravidade.
      </li>
    </ol>

    <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6 rounded-r-lg">
      <h4 class="font-bold text-emerald-900 flex items-center gap-2">
        <span>💡</span> Lixo no vaso sanitario é o grande vilão!
      </h4>
      <p class="text-sm text-emerald-800 mt-1">
        O gradeamento da ETE remove toneladas de lixo descartado incorretamente pela população (como lenços umedecidos, hastes flexíveis e camisinhas). Esse material precisa ser recolhido mecanicamente, desidratado e transportado para aterros sanitários devidamente licenciados.
      </p>
    </div>
  `,
  quiz: {
    pergunta: "Qual é o principal objetivo da fase de desarenação no tratamento preliminar de uma ETE?",
    opcoes: [
      "Eliminar bactérias e vírus da água",
      "Separar grãos de areia e terra para evitar desgastes nas bombas e entupimentos",
      "Ajustar o pH do esgoto para a faixa neutra",
      "Adicionar oxigênio dissolvido no esgoto bruto"
    ],
    respostaCorreta: 1,
    explicacao: "A areia possui ação altamente abrasiva nas pás das bombas e tubulações, além de se acumular no fundo dos reatores biológicos reduzindo sua capacidade de tratamento."
  }
}
  
];
