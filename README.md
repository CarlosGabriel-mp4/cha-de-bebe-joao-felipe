# Chá de Bebê do João Felipe ⚓

Site interativo de lista de presentes com o tema **Marinheiro / Náutico em Aquarela**, criado especialmente para o Chá de Bebê do **João Felipe**, filho da **Victoria e do Felipe**.

---

## 🎨 Identidade Visual e Recursos

* **Identidade Visual:** Segue à risca o monograma oficial em aquarela **"JF"**, com tons de azul marinho (`#2B4C7E`), azul serenity (`#8EAECF`), dourado suave (`#E5B869`) e barquinho veleiro com ondas suaves.
* **Sistema Anti-duplicidade em Tempo Real:** Conforme um convidado escolhe um presente, o item passa instantaneamente para **"Não disponível"**, evitando presentes repetidos.
* **Identificação Amigável:** O convidado informa seu nome (e telefone opcional), que fica salvo no navegador (`localStorage`) para que ele não precise digitar de novo.
* **Mural de Recados:** Os convidados podem deixar mensagens carinhosas para a Victoria, o Felipe e o João Felipe.
* **Links Diretos para as Lojas:** Sugestão direta na Amazon / Mercado Livre do produto desejado.
* **Chave Pix Opcional:** Espaço elegante para quem preferir presentear em dinheiro ou mora em outra cidade.
* **Área dos Papais (Painel Administrativo):** Acesso protegido por senha (`joaofelipe`) no rodapé, permitindo acompanhar quem escolheu cada item, liberar presentes cancelados e exportar a lista para Excel/CSV.

---

## 🚀 Como Publicar Gratuitamente no GitHub Pages (`github.io`)

1. Crie uma conta no [GitHub](https://github.com) se ainda não tiver.
2. Crie um novo repositório chamado `cha-de-bebe-joao-felipe` (deixe como **Público**).
3. Faça o upload de todos os arquivos desta pasta:
   * `index.html`
   * `app.js`
   * `config.js`
   * `items-data.js`
   * `style.css`
   * pasta `assets/` (com a imagem `logo-joao-felipe.jpg`)
4. No repositório no GitHub, vá em:
   * **Settings** (Configurações) ➔ **Pages** (no menu lateral esquerdo).
   * Em **Branch**, selecione `main` (ou `master`) e a pasta `/ (root)`.
   * Clique em **Save**.
5. Pronto! Em 1 minuto o site estará no ar no endereço:  
   `https://seu-usuario.github.io/cha-de-bebe-joao-felipe/`

---

## ☁️ Conexão Opcional com o Supabase (Banco de Dados na Nuvem)

O site funciona imediatamente sem precisar de nenhum servidor (usando armazenamento no navegador).  
Para que todos os convidados vejam as reservas em tempo real na nuvem entre diferentes celulares:

1. Acesse [supabase.com](https://supabase.com) e crie um projeto gratuito.
2. No menu **SQL Editor**, copie e execute o código do arquivo `supabase_schema.sql`.
3. Em **Project Settings** ➔ **API**, copie a **Project URL** e a **Anon Public Key**.
4. Cole esses dois valores dentro do arquivo `config.js`:
   ```javascript
   supabaseUrl: "https://seu-projeto.supabase.co",
   supabaseAnonKey: "sua-anon-key-aqui"
   ```
Pronto! Toda reserva feita por qualquer convidado será atualizada em tempo real para todos!
