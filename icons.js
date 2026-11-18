// ========================================================
// ÍCONES PADRONIZADOS E NÁUTICOS EM SVG
// Chá de Bebê João Felipe (Victoria & Felipe)
// ========================================================

const GIFT_ICONS = {
  // 1. Banheira com Suporte
  "hig-01": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Gotas d'água -->
      <path d="M32 10C32 10 27 16 27 19C27 21.76 29.24 24 32 24C34.76 24 37 21.76 37 19C37 16 32 10 32 10Z" fill="#8EAECF"/>
      <path d="M21 16C21 16 18 19.5 18 21.5C18 23.16 19.34 24.5 21 24.5C22.66 24.5 24 23.16 24 21.5C24 19.5 21 16 21 16Z" fill="#B8D1E8"/>
      <!-- Banheira -->
      <path d="M12 30H52C52 30 50 44 32 44C14 44 12 30 12 30Z" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M9 30C9 28.34 10.34 27 12 27H52C53.66 27 55 28.34 55 30C55 31.66 53.66 33 52 33H12C10.34 33 9 31.66 9 30Z" fill="#8EAECF" stroke="#2B4C7E" stroke-width="2"/>
      <!-- Suporte X -->
      <path d="M18 44L12 56M46 44L52 56M16 56L48 56" stroke="#2B4C7E" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="32" cy="37" r="1.5" fill="#E5B869"/>
    </svg>
  `,

  // 2. Termômetro Digital
  "hig-02": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo do Termômetro Tipo Pistola/Infravermelho -->
      <path d="M20 18C20 13.58 23.58 10 28 10H36C40.42 10 44 13.58 44 18V28C44 30.5 42.8 32.7 41 34.1L39 46C38.6 48.3 36.6 50 34.3 50H29.7C27.4 50 25.4 48.3 25 46L23 34.1C21.2 32.7 20 30.5 20 28V18Z" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Display Digital -->
      <rect x="26" y="16" width="12" height="10" rx="2" fill="#2B4C7E"/>
      <path d="M29 21H35" stroke="#E5B869" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Feixe infravermelho suave -->
      <path d="M30 6L32 4L34 6" stroke="#E5B869" stroke-width="2" stroke-linecap="round"/>
      <circle cx="32" cy="40" r="3" fill="#8EAECF"/>
    </svg>
  `,

  // 3. Kit Higiene (Tesoura e Cortador)
  "hig-03": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Tesourinha com pontas arredondadas -->
      <path d="M20 16L32 32M44 16L32 32" stroke="#8EAECF" stroke-width="3" stroke-linecap="round"/>
      <circle cx="32" cy="32" r="3" fill="#E5B869"/>
      <circle cx="16" cy="14" r="2" fill="#2B4C7E"/>
      <circle cx="48" cy="14" r="2" fill="#2B4C7E"/>
      <path d="M32 32L24 48C21.8 52.4 15.6 52.4 13.4 48C11.2 43.6 15 38 20 38" stroke="#2B4C7E" stroke-width="2.5"/>
      <path d="M32 32L40 48C42.2 52.4 48.4 52.4 50.6 48C52.8 43.6 49 38 44 38" stroke="#2B4C7E" stroke-width="2.5"/>
    </svg>
  `,

  // 4. Aspirador Nasal
  "hig-04": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ponta de silicone -->
      <path d="M32 8L28 18H36L32 8Z" fill="#E5B869" stroke="#2B4C7E" stroke-width="2"/>
      <!-- Bulbo / Reservatório -->
      <ellipse cx="32" cy="36" rx="14" ry="18" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <path d="M24 36C24 30 40 30 40 36C40 42 24 42 24 36Z" fill="#8EAECF" fill-opacity="0.4"/>
      <!-- Marquinhas de medição -->
      <line x1="28" y1="28" x2="36" y2="28" stroke="#8EAECF" stroke-width="2" stroke-linecap="round"/>
      <line x1="29" y1="34" x2="35" y2="34" stroke="#8EAECF" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 5. Kit Toalhas com Capuz
  "hig-05": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Toalha dobrada macia -->
      <rect x="14" y="24" width="36" height="26" rx="5" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <path d="M14 36H50" stroke="#8EAECF" stroke-width="2" stroke-dasharray="2 3"/>
      <!-- Capuz triangular com orelhinhas ou barquinho -->
      <path d="M32 10L18 24H46L32 10Z" fill="#8EAECF" stroke="#2B4C7E" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Mini barquinho bordado -->
      <path d="M29 19L35 19L33 21H31L29 19Z" fill="#E5B869"/>
      <path d="M32 15V19" stroke="#2B4C7E" stroke-width="1.5"/>
    </svg>
  `,

  // 6. Fraldas Tamanho P
  "fra-01": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Pacote de Fralda P -->
      <rect x="14" y="16" width="36" height="36" rx="6" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <path d="M14 26H50" stroke="#8EAECF" stroke-width="2"/>
      <!-- Alça do pacote -->
      <path d="M24 16V12C24 10.9 24.9 10 26 10H38C39.1 10 40 10.9 40 12V16" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Letra P em destaque ouro/náutico -->
      <circle cx="32" cy="38" r="9" fill="#E5B869"/>
      <text x="32" y="42" font-family="Nunito, sans-serif" font-size="11" font-weight="800" fill="#1D3557" text-anchor="middle">P</text>
    </svg>
  `,

  // 7. Fraldas Tamanho M
  "fra-02": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="16" width="36" height="36" rx="6" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <path d="M14 26H50" stroke="#8EAECF" stroke-width="2"/>
      <path d="M24 16V12C24 10.9 24.9 10 26 10H38C39.1 10 40 10.9 40 12V16" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Letra M em destaque azul marinho -->
      <circle cx="32" cy="38" r="9" fill="#2B4C7E"/>
      <text x="32" y="42" font-family="Nunito, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF" text-anchor="middle">M</text>
    </svg>
  `,

  // 8. Fraldas Tamanho G
  "fra-03": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="16" width="36" height="36" rx="6" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <path d="M14 26H50" stroke="#8EAECF" stroke-width="2"/>
      <path d="M24 16V12C24 10.9 24.9 10 26 10H38C39.1 10 40 10.9 40 12V16" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Letra G em destaque serenidade -->
      <circle cx="32" cy="38" r="9" fill="#8EAECF"/>
      <text x="32" y="42" font-family="Nunito, sans-serif" font-size="11" font-weight="800" fill="#1D3557" text-anchor="middle">G</text>
    </svg>
  `,

  // 9. Lenços Umedecidos
  "fra-04": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Pacote de lencinho -->
      <rect x="12" y="24" width="40" height="26" rx="6" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Tampa dispensadora oval -->
      <ellipse cx="32" cy="24" rx="10" ry="4" fill="#8EAECF" stroke="#2B4C7E" stroke-width="2"/>
      <!-- Lencinho saindo com maciez -->
      <path d="M28 22C28 22 29 14 34 12C37 11 39 15 35 18C33 20 32 22 32 22" fill="#FFFFFF" stroke="#8EAECF" stroke-width="2" stroke-linecap="round"/>
      <!-- Gotinha de hidratação -->
      <circle cx="32" cy="37" r="3" fill="#E5B869"/>
    </svg>
  `,

  // 10. Ninho Redutor de Berço
  "quar-01": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ninho oval aconchegante -->
      <ellipse cx="32" cy="34" rx="18" ry="22" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <ellipse cx="32" cy="35" rx="10" ry="14" fill="#FFFFFF" stroke="#8EAECF" stroke-width="2"/>
      <!-- Almofadinha ou laço inferior -->
      <circle cx="32" cy="26" r="4" fill="#E5B869"/>
      <path d="M28 50C30 52 34 52 36 50" stroke="#2B4C7E" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 11. Kit Fraldinhas de Boca
  "quar-02": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Paninhos empilhados -->
      <rect x="14" y="32" width="36" height="18" rx="4" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <rect x="14" y="24" width="36" height="18" rx="4" fill="#FFFFFF" stroke="#8EAECF" stroke-width="2"/>
      <rect x="14" y="16" width="36" height="18" rx="4" fill="#FAF7F2" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Detalhe de pesponto / bordado -->
      <line x1="18" y1="21" x2="46" y2="21" stroke="#E5B869" stroke-width="1.5" stroke-dasharray="3 3"/>
      <!-- Mini âncora/laço -->
      <circle cx="32" cy="27" r="2" fill="#2B4C7E"/>
    </svg>
  `,

  // 12. Jogo de Lençol Berço
  "quar-03": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Berço / Cama infantil -->
      <path d="M12 24V48M52 24V48" stroke="#2B4C7E" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="12" y="30" width="40" height="14" rx="3" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Travesseiro -->
      <rect x="16" y="22" width="12" height="8" rx="2" fill="#FFFFFF" stroke="#8EAECF" stroke-width="2"/>
      <!-- Vira do lençol com estampa náutica -->
      <path d="M28 30C28 30 34 32 40 30L52 30" stroke="#E5B869" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  // 13. Luz Noturna / Abajur de Toque
  "quar-04": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cúpula / Lua iluminada -->
      <circle cx="32" cy="26" r="14" fill="#FDF7EC" stroke="#E5B869" stroke-width="2.5"/>
      <!-- Raios de luz suave -->
      <path d="M32 6V8M48 26H46M18 26H16M43 15L41.5 16.5M21 15L22.5 16.5" stroke="#E5B869" stroke-width="2" stroke-linecap="round"/>
      <!-- Rostinho calmo ou carinha de lua -->
      <path d="M28 24C28 24 29 26 31 26" stroke="#2B4C7E" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M33 26C35 26 36 24 36 24" stroke="#2B4C7E" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Base náutica de madeira -->
      <path d="M24 40H40L44 48H20L24 40Z" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>
  `,

  // 14. Babá Eletrônica com Câmera
  "quar-05": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Câmera esférica -->
      <circle cx="32" cy="28" r="14" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Lente -->
      <circle cx="32" cy="28" r="7" fill="#2B4C7E"/>
      <circle cx="30" cy="26" r="2" fill="#E5B869"/>
      <!-- Anteninha com ondas de sinal -->
      <line x1="38" y1="14" x2="44" y2="8" stroke="#2B4C7E" stroke-width="2" stroke-linecap="round"/>
      <path d="M44 5C46 7 47 10 47 10" stroke="#8EAECF" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Base da câmera -->
      <path d="M22 42C22 40 42 40 42 42L46 48H18L22 42Z" fill="#8EAECF" stroke="#2B4C7E" stroke-width="2"/>
    </svg>
  `,

  // 15. Almofada de Amamentação
  "ali-01": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Almofada em formato C ergonômica -->
      <path d="M16 28C16 16.95 24.95 8 36 8C47.05 8 56 16.95 56 28C56 38 48 48 40 48C34 48 30 42 34 36C38 30 42 28 36 28C30 28 26 34 22 34C18 34 16 31 16 28Z" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Pesponto de acabamento -->
      <path d="M22 18C28 14 40 14 46 20" stroke="#8EAECF" stroke-width="2" stroke-dasharray="2 3"/>
      <circle cx="36" cy="38" r="2.5" fill="#E5B869"/>
    </svg>
  `,

  // 16. Mochila / Bolsa Maternidade
  "ali-02": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Alça de mão superior -->
      <path d="M26 18V12C26 10.9 26.9 10 28 10H36C37.1 10 38 10.9 38 12V18" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Corpo da mochila -->
      <rect x="16" y="18" width="32" height="34" rx="8" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Bolso frontal térmico -->
      <rect x="20" y="32" width="24" height="16" rx="4" fill="#8EAECF" stroke="#2B4C7E" stroke-width="2"/>
      <line x1="20" y1="36" x2="44" y2="36" stroke="#2B4C7E" stroke-width="1.5"/>
      <circle cx="32" cy="40" r="2" fill="#E5B869"/>
    </svg>
  `,

  // 17. Esterilizador de Mamadeiras
  "ali-03": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Cúpula de vapor -->
      <path d="M16 44C16 30 22 18 32 18C42 18 48 30 48 44H16Z" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
      <!-- Alça da tampa -->
      <circle cx="32" cy="14" r="4" fill="#E5B869" stroke="#2B4C7E" stroke-width="2"/>
      <!-- Mamadeirinha esterilizando dentro -->
      <rect x="28" y="28" width="8" height="12" rx="2" fill="#FFFFFF" stroke="#8EAECF" stroke-width="2"/>
      <path d="M30 24H34L32 28H30V24Z" fill="#8EAECF"/>
      <!-- Base do esterilizador -->
      <rect x="12" y="44" width="40" height="8" rx="3" fill="#8EAECF" stroke="#2B4C7E" stroke-width="2.5"/>
    </svg>
  `,

  // 18. Canguru / Sling Ergonômico
  "ali-04": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Alças cruzadas do peito -->
      <path d="M18 10L32 28L46 10" stroke="#8EAECF" stroke-width="3" stroke-linecap="round"/>
      <!-- Suporte do assento do bebê -->
      <path d="M22 28H42L38 48C38 50.2 36.2 52 34 52H30C27.8 52 26 50.2 26 48L22 28Z" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Cinto de cintura reforçado -->
      <path d="M12 44H52" stroke="#2B4C7E" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="32" cy="38" r="3" fill="#E5B869"/>
    </svg>
  `,

  // 19. Kit Bodies Manga Curta
  "roup-01": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Body infantil com mangas curtas e gola americana -->
      <path d="M24 12C26 14 30 15 32 15C34 15 38 14 40 12L48 18L44 26L40 24V40C40 43 38 46 35 48L32 50L29 48C26 46 24 43 24 40V24L20 26L16 18L24 12Z" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Botões de pressão entrepernas -->
      <circle cx="30" cy="46" r="1.5" fill="#2B4C7E"/>
      <circle cx="34" cy="46" r="1.5" fill="#2B4C7E"/>
      <!-- Estampa náutica de âncora no peito -->
      <path d="M32 22V32M28 29C28 33 36 33 36 29M29 25H35" stroke="#E5B869" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 20. Kit Macacões com Zíper Duplo
  "roup-02": `
    <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Macacão de mangas e pernas longas -->
      <path d="M26 12C28 14 30 15 32 15C34 15 36 14 38 12L46 16L42 24L38 22V38L42 50L35 52L32 40L29 52L22 50L26 38V22L22 24L18 16L26 12Z" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- Zíper duplo frontal -->
      <line x1="32" y1="16" x2="32" y2="38" stroke="#8EAECF" stroke-width="2" stroke-linecap="round"/>
      <circle cx="32" cy="18" r="1.5" fill="#E5B869"/>
      <circle cx="32" cy="36" r="1.5" fill="#E5B869"/>
      <!-- Pezinhos -->
      <path d="M20 50C20 48 24 48 24 50Z" fill="#2B4C7E"/>
      <path d="M40 50C40 48 44 48 44 50Z" fill="#2B4C7E"/>
    </svg>
  `
};

// Ícone padrão caso algum item futuro não tenha ícone mapeado
const DEFAULT_GIFT_ICON = `
  <svg viewBox="0 0 64 64" class="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="24" width="36" height="26" rx="4" fill="#EBF3FA" stroke="#2B4C7E" stroke-width="2.5"/>
    <path d="M14 24H50" stroke="#8EAECF" stroke-width="2"/>
    <rect x="12" y="18" width="40" height="8" rx="2" fill="#8EAECF" stroke="#2B4C7E" stroke-width="2"/>
    <line x1="32" y1="18" x2="32" y2="50" stroke="#E5B869" stroke-width="3"/>
    <path d="M32 18C30 14 24 12 24 15C24 18 32 18 32 18ZM32 18C34 14 40 12 40 15C40 18 32 18 32 18Z" fill="#E5B869" stroke="#2B4C7E" stroke-width="1.5"/>
  </svg>
`;

function getGiftIconSvg(giftId) {
  return GIFT_ICONS[giftId] || DEFAULT_GIFT_ICON;
}
