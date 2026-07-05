# Fabio Piscopo — Astrologo e Tarologo

Sito vetrina statico (HTML/CSS/JS, senza dipendenze esterne), pronto per la
pubblicazione gratuita su GitHub Pages.

## Struttura

- `index.html` — tutta la struttura e i contenuti del sito
- `css/style.css` — stili; tutte le scelte grafiche (colori, font, spaziature)
  sono variabili CSS in cima al file, pensate per essere iterate con Claude Design
- `js/main.js` — cielo stellato animato, menu mobile, animazioni di comparsa
- `fonts/` — font self-hosted (Cormorant Garamond e Source Sans 3, licenze OFL incluse)
- `favicon.svg` — icona del sito (luna e stella)

## Dati da personalizzare

Cerca i segnaposto tra `[PARENTESI]` in `index.html`:

| Sezione | Cosa inserire |
| --- | --- |
| Chi sono | `[ANNI DI ESPERIENZA]`, `[COME TI SEI AVVICINATO …]`, `[FORMAZIONE …]`, foto (`[FOTO]` → `img/fabio.jpg`) |
| Servizi | durata e prezzo di ogni servizio (ora indicati come "in arrivo") |
| Testimonianze | `[TESTIMONIANZA 1/2/3]` con recensioni reali |
| Contatti | `[EMAIL]`, `[NUMERO-WHATSAPP]` (formato internazionale, es. 39333…), `[PROFILO-INSTAGRAM]` |

## Pubblicazione su GitHub Pages

Su GitHub: **Settings → Pages → Source: Deploy from a branch**, scegliendo il
branch principale e la cartella `/ (root)`.
