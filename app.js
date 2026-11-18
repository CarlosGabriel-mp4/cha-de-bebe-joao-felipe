// ========================================================
// APLICAÇÃO CHÁ DE BEBÊ DO JOÃO FELIPE
// Lógica de Estado, LocalStorage, Supabase e Interatividade
// ========================================================

const STORAGE_KEYS = {
  GIFTS: "jf_gifts_data_v1",
  GUEST_NAME: "jf_guest_name",
  GUEST_PHONE: "jf_guest_phone"
};

let state = {
  gifts: [],
  guestName: localStorage.getItem(STORAGE_KEYS.GUEST_NAME) || "",
  guestPhone: localStorage.getItem(STORAGE_KEYS.GUEST_PHONE) || "",
  activeCategory: "todos",
  activeStatus: "todos",
  searchQuery: "",
  pendingGiftId: null,
  isAdmin: false
};

// --- INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", () => {
  loadGifts();
  setupEventListeners();
  renderAll();
});

// Carrega os presentes do LocalStorage ou do arquivo inicial
function loadGifts() {
  const localData = localStorage.getItem(STORAGE_KEYS.GIFTS);
  if (localData) {
    try {
      state.gifts = JSON.parse(localData);
    } catch (e) {
      console.error("Erro ao ler dados locais:", e);
      state.gifts = [...INITIAL_GIFTS];
    }
  } else {
    state.gifts = [...INITIAL_GIFTS];
    saveGifts();
  }

  // Tenta sincronizar com Supabase se configurado
  if (window.APP_CONFIG && APP_CONFIG.supabaseUrl && APP_CONFIG.supabaseAnonKey) {
    syncWithSupabase();
  }
}

function saveGifts() {
  localStorage.setItem(STORAGE_KEYS.GIFTS, JSON.stringify(state.gifts));
}

// --- RENDERIZAÇÃO GERAL ---
function renderAll() {
  renderGuestGreeting();
  renderCounters();
  renderGiftsList();
  renderGuestbook();
}

// 1. Saudação do Convidado no Topo
function renderGuestGreeting() {
  const guestBadge = document.getElementById("guest-badge-container");
  if (!guestBadge) return;

  if (state.guestName) {
    guestBadge.innerHTML = `
      <div class="flex items-center gap-2 bg-blue-50/90 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-sm text-sm">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span class="text-slate-700">Olá, <strong class="text-[#2B4C7E]">${escapeHtml(state.guestName)}</strong>!</span>
        <button onclick="openGuestModal(true)" class="text-xs text-[#457B9D] hover:underline ml-1 font-semibold">
          (Alterar)
        </button>
      </div>
    `;
  } else {
    guestBadge.innerHTML = `
      <button onclick="openGuestModal(false)" class="flex items-center gap-2 bg-white/90 hover:bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full shadow-sm text-sm text-[#2B4C7E] font-medium transition-all">
        <span>👋</span>
        <span>Identificar-se</span>
      </button>
    `;
  }
}

// 2. Contadores e Barra de Progresso
function renderCounters() {
  const total = state.gifts.length;
  const reserved = state.gifts.filter(g => g.status === "reservado").length;
  const available = total - reserved;
  const percentage = total > 0 ? Math.round((reserved / total) * 100) : 0;

  const totalEl = document.getElementById("stat-total");
  const reservedEl = document.getElementById("stat-reserved");
  const availableEl = document.getElementById("stat-available");
  const percentEl = document.getElementById("stat-percentage");
  const progressBar = document.getElementById("stat-progress-bar");

  if (totalEl) totalEl.textContent = total;
  if (reservedEl) reservedEl.textContent = reserved;
  if (availableEl) availableEl.textContent = available;
  if (percentEl) percentEl.textContent = `${percentage}%`;
  if (progressBar) progressBar.style.width = `${percentage}%`;
}

// 3. Vitrine dos Cards de Presentes
function renderGiftsList() {
  const grid = document.getElementById("gifts-grid");
  const emptyState = document.getElementById("empty-state");
  if (!grid) return;

  // Filtragem
  const filtered = state.gifts.filter(gift => {
    // Filtro por categoria
    const matchCategory = state.activeCategory === "todos" || gift.categoria === state.activeCategory;

    // Filtro por status
    const matchStatus = state.activeStatus === "todos" || 
      (state.activeStatus === "disponivel" && gift.status === "disponivel") ||
      (state.activeStatus === "reservado" && gift.status === "reservado");

    // Filtro por texto de busca
    const query = state.searchQuery.toLowerCase().trim();
    const matchQuery = !query || 
      gift.titulo.toLowerCase().includes(query) || 
      (gift.descricao && gift.descricao.toLowerCase().includes(query)) ||
      (gift.sugestao && gift.sugestao.toLowerCase().includes(query));

    return matchCategory && matchStatus && matchQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  grid.innerHTML = filtered.map(gift => {
    const isReserved = gift.status === "reservado";

    return `
      <div class="gift-card bg-white rounded-2xl overflow-hidden border ${isReserved ? 'border-slate-200 opacity-90' : 'border-blue-100/90'} flex flex-col justify-between shadow-sm relative group">
        
        <!-- Badge de Status Flutuante -->
        <div class="absolute top-3 right-3 z-10">
          ${isReserved ? `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300 shadow-sm">
              <svg class="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
              </svg>
              Não disponível
            </span>
          ` : `
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              Disponível
            </span>
          `}
        </div>

        <div>
          <!-- Imagem do Produto -->
          <div class="relative w-full h-48 bg-slate-50 overflow-hidden">
            <img 
              src="${gift.imagem_url}" 
              alt="${escapeHtml(gift.titulo)}" 
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${isReserved ? 'grayscale-[40%]' : ''}"
              onerror="this.src='https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          <!-- Conteúdo -->
          <div class="p-5">
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#457B9D] block mb-1">
              ${formatCategory(gift.categoria)}
            </span>
            <h3 class="font-bold text-slate-800 text-base leading-snug mb-1.5">
              ${escapeHtml(gift.titulo)}
            </h3>
            <p class="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
              ${escapeHtml(gift.descricao || "")}
            </p>

            ${gift.sugestao ? `
              <div class="bg-amber-50/70 border border-amber-200/60 rounded-lg px-2.5 py-1.5 text-[11px] text-amber-800 mb-3 flex items-start gap-1.5">
                <span class="text-amber-600">💡</span>
                <span><strong>Sugestão:</strong> ${escapeHtml(gift.sugestao)}</span>
              </div>
            ` : ''}

            ${isReserved ? `
              <div class="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-xs text-slate-600 mb-2 flex items-center gap-2">
                <span class="text-base">🎁</span>
                <div>
                  <p class="font-semibold text-slate-700">Escolhido com carinho</p>
                  <p class="text-[11px] text-slate-500">por <strong>${escapeHtml(gift.reservado_por || 'Convidado especial')}</strong></p>
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Ações no Rodapé do Card -->
        <div class="p-5 pt-0 space-y-2">
          ${isReserved ? `
            <button disabled class="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 font-semibold text-xs cursor-not-allowed border border-slate-200 flex items-center justify-center gap-1.5">
              <span>Presente já reservado</span>
            </button>
          ` : `
            <button onclick="handleSelectGift('${gift.id}')" class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#2B4C7E] to-[#1D3557] hover:from-[#1D3557] hover:to-[#162740] text-white font-bold text-xs shadow-md shadow-blue-900/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
              <span>🎁 Escolher este Presente</span>
            </button>
          `}

          ${gift.link_loja ? `
            <a href="${gift.link_loja}" target="_blank" rel="noopener noreferrer" class="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-[#2B4C7E] border border-slate-200 font-medium text-[11px] transition-colors flex items-center justify-center gap-1.5">
              <span>Ver sugestão na loja</span>
              <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          ` : ''}
        </div>

      </div>
    `;
  }).join("");
}

// 4. Mural de Recadinhos dos Convidados
function renderGuestbook() {
  const container = document.getElementById("guestbook-cards");
  const section = document.getElementById("guestbook-section");
  if (!container) return;

  const notes = state.gifts.filter(g => g.status === "reservado" && g.recado && g.recado.trim().length > 0);

  if (notes.length === 0) {
    if (section) section.classList.add("hidden");
    return;
  }

  if (section) section.classList.remove("hidden");

  container.innerHTML = notes.map(item => `
    <div class="bg-white/90 backdrop-blur border border-blue-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
      <div class="mb-3">
        <p class="text-xs italic text-slate-600 mb-2 leading-relaxed">
          "${escapeHtml(item.recado)}"
        </p>
      </div>
      <div class="border-t border-slate-100 pt-2 flex items-center justify-between text-[11px]">
        <span class="font-bold text-[#2B4C7E]">❤️ ${escapeHtml(item.reservado_por)}</span>
        <span class="text-slate-400 text-[10px] truncate max-w-[120px]">${escapeHtml(item.titulo)}</span>
      </div>
    </div>
  `).join("");
}

// --- FLUXO DE RESERVA E MODAIS ---

function handleSelectGift(id) {
  state.pendingGiftId = id;
  const gift = state.gifts.find(g => g.id === id);
  if (!gift || gift.status === "reservado") return;

  // Se o usuário ainda não se identificou, abre o modal de nome primeiro
  if (!state.guestName) {
    openGuestModal(false, true);
  } else {
    openConfirmModal(gift);
  }
}

// Abre Modal de Identificação
function openGuestModal(isEditing = false, andThenConfirm = false) {
  const modal = document.getElementById("guest-modal");
  const nameInput = document.getElementById("guest-name-input");
  const phoneInput = document.getElementById("guest-phone-input");
  const title = document.getElementById("guest-modal-title");

  if (nameInput) nameInput.value = state.guestName;
  if (phoneInput) phoneInput.value = state.guestPhone;
  if (title) title.textContent = isEditing ? "Alterar sua identificação" : "Quem está presenteando?";

  modal.dataset.andThenConfirm = andThenConfirm ? "true" : "false";
  modal.classList.remove("hidden");
  nameInput?.focus();
}

function closeGuestModal() {
  const modal = document.getElementById("guest-modal");
  modal?.classList.add("hidden");
}

function saveGuestIdentity(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById("guest-name-input");
  const phoneInput = document.getElementById("guest-phone-input");

  const name = nameInput?.value.trim();
  if (!name) {
    alert("Por favor, digite seu nome e sobrenome.");
    return;
  }

  state.guestName = name;
  state.guestPhone = phoneInput?.value.trim() || "";

  localStorage.setItem(STORAGE_KEYS.GUEST_NAME, state.guestName);
  localStorage.setItem(STORAGE_KEYS.GUEST_PHONE, state.guestPhone);

  const modal = document.getElementById("guest-modal");
  const shouldConfirm = modal.dataset.andThenConfirm === "true";
  closeGuestModal();
  renderGuestGreeting();

  if (shouldConfirm && state.pendingGiftId) {
    const gift = state.gifts.find(g => g.id === state.pendingGiftId);
    if (gift) openConfirmModal(gift);
  }
}

// Abre Modal de Confirmação do Presente
function openConfirmModal(gift) {
  const modal = document.getElementById("confirm-modal");
  const titleEl = document.getElementById("confirm-gift-title");
  const imgEl = document.getElementById("confirm-gift-img");
  const guestEl = document.getElementById("confirm-guest-name");
  const noteInput = document.getElementById("confirm-note-input");

  if (titleEl) titleEl.textContent = gift.titulo;
  if (imgEl) imgEl.src = gift.imagem_url;
  if (guestEl) guestEl.textContent = state.guestName;
  if (noteInput) noteInput.value = "";

  modal.classList.remove("hidden");
}

function closeConfirmModal() {
  const modal = document.getElementById("confirm-modal");
  modal?.classList.add("hidden");
  state.pendingGiftId = null;
}

// Confirmação final da reserva
function executeReservation() {
  if (!state.pendingGiftId || !state.guestName) return;

  const noteInput = document.getElementById("confirm-note-input");
  const note = noteInput?.value.trim() || null;

  const index = state.gifts.findIndex(g => g.id === state.pendingGiftId);
  if (index === -1) return;

  state.gifts[index] = {
    ...state.gifts[index],
    status: "reservado",
    reservado_por: state.guestName,
    telefone_convidado: state.guestPhone,
    recado: note,
    reservado_em: new Date().toISOString()
  };

  saveGifts();
  closeConfirmModal();
  renderAll();

  // Exibe popup de agradecimento / celebração
  openSuccessModal(state.gifts[index]);
}

function openSuccessModal(gift) {
  const modal = document.getElementById("success-modal");
  const textEl = document.getElementById("success-message-text");
  if (textEl) {
    textEl.innerHTML = `Obrigado, <strong>${escapeHtml(state.guestName)}</strong>! O presente <strong>"${escapeHtml(gift.titulo)}"</strong> foi marcado como reservado com muito carinho para o João Felipe!`;
  }
  modal?.classList.remove("hidden");
}

function closeSuccessModal() {
  const modal = document.getElementById("success-modal");
  modal?.classList.add("hidden");
}

// --- ÁREA DOS PAPAIS (ADMIN) ---

function openAdminAuth() {
  const modal = document.getElementById("admin-auth-modal");
  const passInput = document.getElementById("admin-password-input");
  if (passInput) passInput.value = "";
  modal?.classList.remove("hidden");
  passInput?.focus();
}

function closeAdminAuth() {
  document.getElementById("admin-auth-modal")?.classList.add("hidden");
}

function verifyAdminPassword(e) {
  if (e) e.preventDefault();
  const passInput = document.getElementById("admin-password-input");
  const expected = (window.APP_CONFIG && APP_CONFIG.senhaAdmin) || "joaofelipe";

  if (passInput?.value === expected) {
    state.isAdmin = true;
    closeAdminAuth();
    openAdminDashboard();
  } else {
    alert("Senha incorreta. Tente novamente.");
    passInput?.select();
  }
}

function openAdminDashboard() {
  const modal = document.getElementById("admin-dashboard-modal");
  renderAdminTable();
  modal?.classList.remove("hidden");
}

function closeAdminDashboard() {
  document.getElementById("admin-dashboard-modal")?.classList.add("hidden");
}

function renderAdminTable() {
  const tbody = document.getElementById("admin-table-body");
  if (!tbody) return;

  tbody.innerHTML = state.gifts.map((gift, idx) => {
    const isReserved = gift.status === "reservado";
    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/70 text-xs text-slate-700">
        <td class="p-3 font-medium">${idx + 1}</td>
        <td class="p-3 font-semibold text-slate-900">${escapeHtml(gift.titulo)}</td>
        <td class="p-3">${formatCategory(gift.categoria)}</td>
        <td class="p-3">
          ${isReserved ? 
            `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">Reservado</span>` : 
            `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Disponível</span>`
          }
        </td>
        <td class="p-3 font-medium text-[#2B4C7E]">
          ${isReserved ? escapeHtml(gift.reservado_por || "-") : "-"}
        </td>
        <td class="p-3 text-slate-500">
          ${isReserved && gift.telefone_convidado ? escapeHtml(gift.telefone_convidado) : "-"}
        </td>
        <td class="p-3 text-slate-500 max-w-xs truncate" title="${escapeHtml(gift.recado || '')}">
          ${isReserved && gift.recado ? `"${escapeHtml(gift.recado)}"` : "-"}
        </td>
        <td class="p-3">
          ${isReserved ? `
            <button onclick="adminFreeGift('${gift.id}')" class="text-rose-600 hover:text-rose-800 font-bold text-[11px] hover:underline">
              Liberar
            </button>
          ` : `
            <span class="text-slate-400 text-[10px]">-</span>
          `}
        </td>
      </tr>
    `;
  }).join("");
}

function adminFreeGift(id) {
  if (!confirm("Tem certeza que deseja liberar este presente novamente para outros convidados?")) return;

  const index = state.gifts.findIndex(g => g.id === id);
  if (index !== -1) {
    state.gifts[index] = {
      ...state.gifts[index],
      status: "disponivel",
      reservado_por: null,
      telefone_convidado: null,
      recado: null,
      reservado_em: null
    };
    saveGifts();
    renderAll();
    renderAdminTable();
  }
}

function exportAdminCsv() {
  let csv = "ID,Presente,Categoria,Status,Reservado Por,Telefone,Recado,Data\n";
  state.gifts.forEach(g => {
    const row = [
      g.id,
      `"${(g.titulo || '').replace(/"/g, '""')}"`,
      g.categoria,
      g.status,
      `"${(g.reservado_por || '').replace(/"/g, '""')}"`,
      `"${(g.telefone_convidado || '').replace(/"/g, '""')}"`,
      `"${(g.recado || '').replace(/"/g, '""')}"`,
      g.reservado_em || ''
    ];
    csv += row.join(",") + "\n";
  });

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cha_de_bebe_joao_felipe_lista_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// Resetar dados para o padrão inicial
function resetAllData() {
  if (confirm("Atenção: Isso resetará todos os presentes para o estado original inicial. Deseja continuar?")) {
    state.gifts = [...INITIAL_GIFTS];
    saveGifts();
    renderAll();
    renderAdminTable();
    alert("Lista restaurada para o padrão inicial!");
  }
}

// --- LISTENERS DE FILTROS E BUSCA ---
function setupEventListeners() {
  // Filtro de Categoria
  const categoryButtons = document.querySelectorAll(".filter-btn-category");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active-cat", "bg-[#2B4C7E]", "text-white"));
      categoryButtons.forEach(b => b.classList.add("bg-white", "text-slate-600"));
      
      btn.classList.add("active-cat", "bg-[#2B4C7E]", "text-white");
      btn.classList.remove("bg-white", "text-slate-600");

      state.activeCategory = btn.dataset.category || "todos";
      renderGiftsList();
    });
  });

  // Filtro de Status
  const statusButtons = document.querySelectorAll(".filter-btn-status");
  statusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      statusButtons.forEach(b => b.classList.remove("active-status", "bg-[#457B9D]", "text-white"));
      statusButtons.forEach(b => b.classList.add("bg-slate-100", "text-slate-600"));

      btn.classList.add("active-status", "bg-[#457B9D]", "text-white");
      btn.classList.remove("bg-slate-100", "text-slate-600");

      state.activeStatus = btn.dataset.status || "todos";
      renderGiftsList();
    });
  });

  // Campo de Busca
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderGiftsList();
    });
  }
}

// --- FUNÇÕES UTILITÁRIAS ---
function formatCategory(cat) {
  const map = {
    higiene: "Higiene & Cuidados",
    fraldas: "Fraldas & Lenços",
    quarto: "Quarto & Enxoval",
    alimentacao: "Alimentação & Passeio",
    roupinhas: "Roupas & Acessórios"
  };
  return map[cat] || cat;
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function copyPixKey() {
  const pix = (window.APP_CONFIG && APP_CONFIG.chavePix) || "contato@exemplo.com.br";
  navigator.clipboard.writeText(pix).then(() => {
    alert("Chave Pix copiada com sucesso!");
  }).catch(() => {
    prompt("Copie a chave Pix abaixo:", pix);
  });
}
