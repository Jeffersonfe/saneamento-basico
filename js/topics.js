// Banco de Dados das Pílulas de Conhecimento
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
      <svg viewBox="0 0 400 240" class="w-full h-auto rounded-xl shadow-sm bg-gradient-to-br from-teal-50 to-emerald-50 p-3">
        <rect width="100%" height="100%" rx="12" fill="none" stroke="#0d9488" stroke-width="2" stroke-dasharray="6,6" opacity="0.3"/>
        <text x="200" y="32" font-size="14" font-weight="bold" fill="#0f766e" text-anchor="middle">OS 4 PILARES DO SANEAMENTO BÁSICO</text>
        
        <!-- Bloco 1: Água -->
        <g transform="translate(25, 55)">
          <rect width="165" height="70" rx="8" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
          <text x="25" y="30" font-size="20">💧</text>
          <text x="55" y="28" font-size="12" font-weight="bold" fill="#0369a1">1. Água Potável</text>
          <text x="55" y="46" font-size="10" fill="#0284c7">Captação, tratamento</text>
          <text x="55" y="58" font-size="10" fill="#0284c7">e distribuição limpa</text>
        </g>

        <!-- Bloco 2: Esgoto -->
        <g transform="translate(210, 55)">
          <rect width="165" height="70" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="25" y="30" font-size="20">🚽</text>
          <text x="55" y="28" font-size="12" font-weight="bold" fill="#b45309">2. Esgotamento</text>
          <text x="55" y="46" font-size="10" fill="#d97706">Coleta e tratamento</text>
          <text x="55" y="58" font-size="10" fill="#d97706">da água usada</text>
        </g>

        <!-- Bloco 3: Resíduos -->
        <g transform="translate(25, 145)">
          <rect width="165" height="70" rx="8" fill="#ecfccb" stroke="#84cc16" stroke-width="2"/>
          <text x="25" y="30" font-size="20">♻️</text>
          <text x="55" y="28" font-size="12" font-weight="bold" fill="#4d7c0f">3. Resíduos Sólidos</text>
          <text x="55" y="46" font-size="10" fill="#65a30d">Coleta de lixo, varrição</text>
          <text x="55" y="58" font-size="10" fill="#65a30d">reciclagem e aterros</text>
        </g>

        <!-- Bloco 4: Drenagem -->
        <g transform="translate(210, 145)">
          <rect width="165" height="70" rx="8" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
          <text x="25" y="30" font-size="20">🌧️</text>
          <text x="55" y="28" font-size="12" font-weight="bold" fill="#4338ca">4. Drenagem Urbana</text>
          <text x="55" y="46" font-size="10" fill="#4f46e5">Manejo das chuvas,</text>
          <text x="55" y="58" font-size="10" fill="#4f46e5">bueiros e piscinões</text>
        </g>
      </svg>
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
    id: 3,
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
    id: 4,
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
  }
];
