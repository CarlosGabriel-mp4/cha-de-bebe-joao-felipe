// Lista Curada de Sugestões de Presentes para o Chá de Bebê do João Felipe
// Papais: Victoria & Felipe

const INITIAL_GIFTS = [
  // --- HIGIENE E CUIDADOS ---
  {
    id: "hig-01",
    titulo: "Banheira com Suporte Dobrável",
    categoria: "higiene",
    descricao: "Banheira ergonômica com suporte alto e mangueira de escoamento para segurança do banho.",
    imagem_url: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=banheira+bebe+com+suporte",
    sugestao: "Cores neutras (branco, bege ou azul claro)",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "hig-02",
    titulo: "Termômetro Digital sem Contato (Infravermelho)",
    categoria: "higiene",
    descricao: "Mede a temperatura na testa ou ouvido em 1 segundo sem acordar o bebê.",
    imagem_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=termometro+digital+infravermelho+bebe",
    sugestao: "G-Tech ou similar",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "hig-03",
    titulo: "Kit Higiene com Cortador, Tesourinha e Lixa",
    categoria: "higiene",
    descricao: "Kit com pontas arredondadas e proteção para cuidar das unhas delicadas do João Felipe.",
    imagem_url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=kit+cuidados+bebe+tesoura+cortador",
    sugestao: "Buba ou Lillo",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "hig-04",
    titulo: "Aspirador Nasal com Estojo",
    categoria: "higiene",
    descricao: "Ajuda a desentupir o narizinho com sucção suave e ponteira de silicone macia.",
    imagem_url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=aspirador+nasal+bebe+silicone",
    sugestao: "NoseFrida ou Buba",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "hig-05",
    titulo: "Kit Toalhas de Banho com Capuz (3 peças)",
    categoria: "higiene",
    descricao: "Toalhas 100% algodão com forro de fralda felpuda para secar com suavidade.",
    imagem_url: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=toalha+de+banho+bebe+com+capuz+forrada",
    sugestao: "Toalhas com toque macio e capuz bordado",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },

  // --- FRALDAS E LENÇOS ---
  {
    id: "fra-01",
    titulo: "Fardo Fraldas Pampers Premium Care - Tamanho P",
    categoria: "fraldas",
    descricao: "A mais suave para a pele delicada nos primeiros meses de vida.",
    imagem_url: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=pampers+premium+care+tamanho+p",
    sugestao: "Pacote mega ou hiper",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "fra-02",
    titulo: "Fardo Fraldas Huggies Supreme Care - Tamanho M",
    categoria: "fraldas",
    descricao: "Fralda para a fase dos 5 aos 9kg, com canais de máxima absorção.",
    imagem_url: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=huggies+supreme+care+tamanho+m",
    sugestao: "Tamanho M (bastante utilizado!)",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "fra-03",
    titulo: "Fardo Fraldas Pampers Confort Sec - Tamanho G",
    categoria: "fraldas",
    descricao: "Proteção de até 12 horas para noites tranquilas do João Felipe.",
    imagem_url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=pampers+confort+sec+tamanho+g",
    sugestao: "Tamanho G (para quando estiver maiorzinho)",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "fra-04",
    titulo: "Kit Lenços Umedecidos Hipoalergênicos (Combo 6 pacotes)",
    categoria: "fraldas",
    descricao: "Toalhinhas sem fragrância e com 99% de água, ideais para recém-nascidos.",
    imagem_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=lenco+umedecido+pampers+recem+nascido",
    sugestao: "Pampers Recém-Nascido ou Mustela",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },

  // --- QUARTO E ENXOVAL ---
  {
    id: "quar-01",
    titulo: "Ninho Redutor de Berço com Almofada",
    categoria: "quarto",
    descricao: "Proporciona aconchego similar ao útero para os primeiros soninhos seguros.",
    imagem_url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=ninho+redutor+berco+bebe+algodao",
    sugestao: "Cores suaves (bege, azul serenity ou cinza claro)",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "quar-02",
    titulo: "Kit Fraldinhas de Boca / Paninhos de Ombro (6 peças)",
    categoria: "quarto",
    descricao: "Tecido 100% algodão duplo, indispensáveis para o dia a dia e amamentação.",
    imagem_url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=fraldas+de+boca+algodao+bebe",
    sugestao: "Acabamento em bainha bordada",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "quar-03",
    titulo: "Jogo de Lençol para Berço Americano (100% Algodão)",
    categoria: "quarto",
    descricao: "Contém lençol com elástico, sobrelençol e fronha macia para a pele sensível.",
    imagem_url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=jogo+lencol+berco+americano+percal+200+fios",
    sugestao: "Percal 200 fios macio",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "quar-04",
    titulo: "Luz Noturna Infantil com Sensor de Toque (Abajur)",
    categoria: "quarto",
    descricao: "Iluminação âmbar suave regulável para as trocas e mamadas da madrugada.",
    imagem_url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=luz+noturna+bebe+silicone+recarregavel",
    sugestao: "Luz dimerizável recarregável",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "quar-05",
    titulo: "Babá Eletrônica com Câmera e Visão Noturna",
    categoria: "quarto",
    descricao: "Permite que a Victoria e o Felipe monitorem o soninho do João Felipe de qualquer cômodo.",
    imagem_url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=baba+eletronica+com+camera+sem+fio",
    sugestao: "Com tela portátil ou áudio bidirecional",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },

  // --- ALIMENTAÇÃO E PASSEIO ---
  {
    id: "ali-01",
    titulo: "Almofada de Amamentação Ergonômica",
    categoria: "alimentacao",
    descricao: "Dá suporte ideal para os braços da mamãe Victoria e conforto para o bebê.",
    imagem_url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=almofada+amamentacao+capa+lavavel",
    sugestao: "Com capa lavável com zíper",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "ali-02",
    titulo: "Bolsa Maternidade Térmica Multifuncional",
    categoria: "alimentacao",
    descricao: "Mochila espaçosa com bolsos térmicos para mamadeiras e compartimento impermeável.",
    imagem_url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=mochila+maternidade+termica+impermeavel",
    sugestao: "Cores neutras (cinza chumbo, marinho ou cáqui)",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "ali-03",
    titulo: "Esterilizador de Mamadeiras e Chupetas para Micro-ondas",
    categoria: "alimentacao",
    descricao: "Esteriliza a vapor em apenas 2 minutos, mantendo tudo 100% higienizado.",
    imagem_url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=esterilizador+mamadeiras+microondas+avent",
    sugestao: "Philips Avent ou Kuka",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "ali-04",
    titulo: "Canguru Ergonômico Sling para Passeio",
    categoria: "alimentacao",
    descricao: "Para carregar o João Felipe pertinho do coração com distribuição de peso.",
    imagem_url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=canguru+ergonomico+bebe+posicao+m",
    sugestao: "Suporte dos 3 aos 15kg",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },

  // --- ROUPINHAS ---
  {
    id: "roup-01",
    titulo: "Kit Bodies Manga Curta Algodão Pima (Tamanho M)",
    categoria: "roupinhas",
    descricao: "Tecido ultra macio e hipoalergênico com botões de pressão entrepernas.",
    imagem_url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=kit+body+bebe+algodao+manga+curta",
    sugestao: "Cores claras ou estampas fofas",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  },
  {
    id: "roup-02",
    titulo: "Kit Macacões com Zíper Duplo Frontal (Tamanho 3 a 6 meses)",
    categoria: "roupinhas",
    descricao: "Zíper de dois sentidos que facilita a troca de fraldas no meio da noite.",
    imagem_url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    link_loja: "https://www.amazon.com.br/s?k=macacao+bebe+ziper+duplo+algodao",
    sugestao: "Zíper com proteção no queixo",
    status: "disponivel",
    reservado_por: null,
    reservado_em: null,
    recado: null
  }
];
