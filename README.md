<div align="center">

# 📡 RADAR
### Anime · KDrama · Manga · Manhwa Intelligence Dashboard

**A free, real-time dashboard for everything you watch and read.**  
No account. No app store. No cost. Just open and use.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-radarblush-ff2d55?style=for-the-badge)](https://radar-blush.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00b4ff?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-34d399?style=for-the-badge)](https://github.com/Venkata-Mohith/radar/pulls)
[![Built with Vanilla JS](https://img.shields.io/badge/Built_with-Vanilla_JS-ffd700?style=for-the-badge)](https://radarapp.io)

</div>

---

## 🌟 What is RADAR?

RADAR is an open-source intelligence dashboard for anime, KDrama, manga, and manhwa fans. Think of it as your personal Bloomberg Terminal for entertainment — everything you care about in one place, live, free, and beautiful.

Inspired by [World Monitor](https://worldmonitor.app), built using only free APIs and a single HTML file. No frameworks. No build step. No monthly fee.

> **"If World Monitor tracks the world, RADAR tracks your watchlist."**

---

## ✨ Features at a Glance

| Feature | Description |
|---------|-------------|
| 📺 **Anime Schedule** | Currently airing by day, most popular, fan favorites |
| 🎬 **KDrama** | Airing, trending, and top-rated Korean dramas |
| ▶ **Streaming** | New Netflix drops, trending, and top-rated shows |
| 📖 **Manga** | Publishing now, most popular, fan favorites |
| 🇰🇷 **Manhwa** | Korean webtoons filtered by genre |
| ⏱ **Countdowns** | Real-time episode timers — including from your personal lists |
| 🏆 **Top 50** | All-time rankings for Anime, Manga, Manhwa, and TV Shows |
| 📅 **Calendar** | Visual 7-day episode schedule powered by AniList |
| 🔥 **Community Buzz** | Live hot posts from r/anime and r/kdrama |
| 🎲 **Surprise Me** | Random show picker with synopsis, trailer and streaming links |
| 🎭 **Mood Filter** | Filter everything by genre in one click |
| 🔍 **Universal Search** | Search anime, manga, and TV shows simultaneously |
| 📋 **My Lists** | 4-tier tracking: Plan · Watching · Completed · Dropped |
| 📊 **My Stats** | Genre breakdown, avg score, binge hours, smart recommendations |
| 🤖 **Smart Recs** | Taste-profile algorithm suggests what to watch next — 100% free |
| 📝 **Notes & Rating** | Personal notes and 10-star ratings per show |
| 📤 **Import / Export** | Sync your lists between devices via JSON |
| 🌓 **Dark / Light Theme** | Full theme toggle |
| 📱 **PWA** | Install on Android, iOS, or desktop — no app store needed |

---

## 🚀 Live Demo

**[radar-blush](https://radar-blush.vercel.app/)**

Works on every device. On mobile, tap **Share → Add to Home Screen** to install it like a native app.

---

## 📱 Install on Any Device

No app store needed — RADAR is a **Progressive Web App (PWA)**.

| Platform | Steps |
|----------|-------|
| 📱 **Android** (Chrome) | Tap ⋮ menu → *Add to Home screen* |
| 🍎 **iOS / iPadOS** (Safari) | Tap ⬆ Share → *Add to Home Screen* |
| 🖥️ **Windows / Mac** (Chrome / Edge) | Click the ⊕ icon in the address bar → *Install* |

---

## 🛠️ Tech Stack

RADAR is intentionally simple — one HTML file, no build tools, no frameworks.

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla HTML, CSS, JavaScript |
| **Hosting** | Vercel (serverless) |
| **Anime & Manga data** | [Jikan API](https://jikan.moe) (MAL) + [AniList GraphQL](https://anilist.co/graphiql) |
| **KDrama & Netflix** | [TMDB API](https://www.themoviedb.org) via Vercel serverless proxy |
| **Community** | Reddit JSON API |
| **Fonts** | Bebas Neue · Crimson Pro · DM Mono (Google Fonts) |

---

## 📂 Project Structure

```
radar/
├── index.html       # The entire frontend (~2200 lines, single file)
├── vercel.json      # Vercel routing config
├── api/
│   └── tmdb.js      # Serverless TMDB proxy — keeps API key secret
└── README.md
```

The whole app lives in `index.html`. No build process, no node_modules, no complexity — open it and read it.

---

## 🔧 Running Locally

```bash
# Clone the repo
git clone https://github.com/Venkata-Mohith/radar.git
cd radar

# Option 1 — Just open the file
# Anime, manga, manhwa features work immediately
open index.html

# Option 2 — Full local dev with TMDB (KDrama, Netflix, Trailers)
npm install -g vercel

# Create a .env.local file with your free TMDB key
echo "TMDB_API_KEY=your_key_here" > .env.local

# Run local dev server
vercel dev
# Open http://localhost:3000
```

Get a free TMDB key at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) — takes 2 minutes, no credit card.

---

## 🤝 Contributing

RADAR is a young, open project with a lot of room to grow — contributions of all kinds are welcome!

### Ways to contribute

- 🐛 **Found a bug?** [Open an issue](https://github.com/Venkata-Mohith/radar/issues)
- 💡 **Have a feature idea?** [Start a discussion](https://github.com/Venkata-Mohith/radar/discussions)
- 🔨 **Want to write code?** Fork → branch → PR (see below)
- 🌍 **Want to translate?** Help us add i18n support
- ⭐ **Just want to help?** Star the repo — it helps others find it

### Submitting a Pull Request

1. **Fork** the repo and clone it locally
2. **Create a branch** — `git checkout -b feature/your-feature-name`
3. **Make your changes** in `index.html` or `api/tmdb.js`
4. **Test it** — run locally with `vercel dev` or just open `index.html`
5. **Open a PR** with a clear description of what you changed and why

No experience with PRs? No problem — [here's a beginner guide](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

---

## 🎯 Good First Issues

New to the project? Here are some great places to start:

- [ ] Add more streaming platforms (Amazon Prime, Disney+, Hulu)
- [ ] Add Live Action tab — J-dramas, C-dramas, Thai dramas
- [ ] Improve offline mode with proper service worker caching
- [ ] Add chart.js visualisations to the My Stats page
- [ ] Improve accessibility — ARIA labels, keyboard navigation
- [ ] Add i18n support — Japanese, Korean, Portuguese, etc.
- [ ] Add a "New Season" release alert system
- [ ] Better character / voice actor search results
- [ ] Add more mood filter genres
- [ ] Write documentation or improve the README

---

## 📡 Data Sources & Credits

This project wouldn't exist without these free APIs:

- **[MyAnimeList](https://myanimelist.net)** via [Jikan API](https://jikan.moe) — anime and manga data
- **[AniList](https://anilist.co)** — airing schedules, countdowns, manhwa, rankings
- **[TMDB](https://www.themoviedb.org)** — KDrama, Netflix, trailers, TV rankings
- **[Reddit](https://reddit.com)** — r/anime and r/kdrama community posts

---

## 📄 License

MIT License — free to use, fork, modify, and distribute. See [LICENSE](LICENSE).

---

## 🙏 Acknowledgements

Inspired by [World Monitor](https://worldmonitor.app) by [@eliehabib](https://github.com/koala73) — proof that one developer with an AI can build something genuinely useful.

Built entirely with [Claude](https://claude.ai) as the vibe-coding partner.

---

<div align="center">

**Built with ❤️ for the anime and KDrama community**

[radar-blush](https://radar-blush.vercel.app/) · [Report Bug](https://github.com/Venkata-Mohith/radar/issues) · [Request Feature](https://github.com/Venkata-Mohith/radar/discussions)

**⭐ Star this repo if RADAR is useful to you — it helps others find it! ⭐**

</div>
