# 📜 Fatos Históricos (1920 - 2022)

Uma aplicação web interativa e profissional que permite explorar eventos históricos marcantes ocorridos entre os anos de 1920 e 2022. O projeto conta com uma API robusta desenvolvida em Node.js e um frontend moderno com design premium.

🚀 **Link do Projeto:** [https://api-historical-facts-iota.vercel.app/](https://api-historical-facts-iota.vercel.app/)

---

## ✨ Funcionalidades

- 🕰️ **Linha do Tempo Interativa:** Explore fatos históricos de 1920 a 2022.
- 🖼️ **Imagens Contextuais:** Cada fato marcante é acompanhado por uma imagem profissional selecionada (via Pexels).
- 📱 **Design Responsivo:** Interface otimizada para dispositivos móveis, tablets e desktops.
- 🎨 **Estética Moderna:** Design baseado em Glassmorphism com animações suaves e transições fluidas.
- 🔍 **API REST:** Endpoints para consulta de fatos por ano específico.
- ⚡ **Auto-Reload:** Configurado com Nodemon para um desenvolvimento ágil.

---

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Hospedagem:** Vercel
- **Imagens:** Pexels API/CDN
- **Design:** Glassmorphism, CSS Animations, Google Fonts (Inter)

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/fau-33/-APIHistoricalFacts.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd -APIHistoricalFacts
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   _O servidor iniciará na porta `8080` ([http://localhost:8080](http://localhost:8080))_

---

## 📡 API Endpoints

### Buscar todos os fatos

`GET /api/fatos`
Retorna um JSON com todos os fatos históricos cadastrados.

### Buscar fato por ano

`GET /api/fato?ano=1969`
| Parâmetro | Tipo | Descrição |
| :--- | :--- | :--- |
| `ano` | `query` | O ano do fato histórico (ex: 1969, 1945, 2020) |

**Exemplo de Resposta (Status 200):**

```json
{
  "ano": {
    "Ano": "1969",
    "Fato": "Neil Armstrong pisa na Lua"
  }
}
```

---

## 📂 Estrutura do Projeto

```text
├── public/                 # Arquivos do Frontend
│   ├── index.html          # Página principal
│   ├── style.css           # Estilização (Glassmorphism)
│   └── app.js              # Lógica do frontend e integração com API
├── index.js                # Servidor Express e rotas
├── servico.js              # Lógica de negócio (filtros)
├── fatos.js                # Banco de dados de fatos (JSON)
├── vercel.json             # Configurações de deploy Vercel
└── package.json            # Dependências e scripts
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas!

1. Faça um Fork do projeto.
2. Crie uma Branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`).
4. Push para a Branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está sob a licença ISC.

---

Desenvolvido por [fau-33](https://github.com/fau-33) 🚀
