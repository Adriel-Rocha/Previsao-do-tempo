# 🌤️ Previsão do Tempo

Aplicação web que exibe informações climáticas de qualquer cidade do mundo, com fundo dinâmico e bandeiras nacionais.

---

## ✅ Funcionalidades

- 🔍 Busca por nome da cidade.
- 🌡️ Exibe temperatura, clima, umidade e velocidade do vento.
- 🏴 Mostra a bandeira do país da cidade pesquisada.
- 🖼️ Muda o **background da página** com uma imagem da cidade buscada.
- 🌍 Interface simples e responsiva.

---

## ✅ Tecnologias utilizadas

### 🖥️ Frontend
- HTML5
- CSS3
- JavaScript Vanilla (puro)
- Deploy via **GitHub Pages**

### ⚙️ Backend
- Node.js com Express.js
- Axios (requisições HTTP)
- Deploy via **Render.com**

---

## ✅ APIs utilizadas

- **OpenWeatherMap API:** Dados climáticos em tempo real.
- **Google Custom Search JSON API:** Busca de imagem relacionada à cidade.
- **FlagsAPI:** Exibe a bandeira do país (https://flagsapi.com).

---

## ✅ Como funciona

1. O usuário digita o nome da cidade e clica na lupa.
2. O frontend envia a cidade ao backend hospedado na Render.
3. O backend:
   - Busca os dados climáticos na OpenWeather API.
   - Busca uma imagem da cidade via Google Custom Search API.
4. O frontend:
   - Exibe o clima.
   - Atualiza o background com a imagem da cidade.
   - Mostra a bandeira do país via FlagsAPI.

---

## ✅ Como rodar localmente

### 🔗 Clonar o projeto

```bash
git clone https://github.com/Adriel-Rocha/Previsao-do-tempo.git
cd seu-repo
```

### ▶️ Backend (Node.js)
1. Crie um arquivo .env com as suas chaves de API:

```bash
OPENWEATHER_API_KEY=sua_key_openweather
GOOGLE_API_KEY=sua_key_google
GOOGLE_SEARCH_ENGINE_ID=seu_cx_id
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o servidor local:
   
```bash
npm start
```

### ▶️ Frontend
Basta abrir o arquivo index.html no navegador localmente, ou acessar via GitHub Pages caso queira publicar.

---

## ✅ Deploy online (exemplo)

- Frontend (GitHub Pages):
    https://adriel-rocha.github.io/Previsao-do-tempo/

- Backend (Render):
    https://weather-backend-utcz.onrender.com/

---

## ✅ Melhorias futuras (To-do)

- Melhorar o tratamento de erros.

- Adicionar previsão estendida (vários dias).

- Melhorar o design mobile.

- Otimizar tempo de resposta.

---

## ✅ Licença
Projeto aberto sob licença MIT.

---

## ✅ Autor
Adriel Rocha
https://www.linkedin.com/in/adriel-francisco-rocha/

---
