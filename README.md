# Fabio Piscopo — Astrologo e Tarologo

Sito vetrina statico (HTML/CSS/JS, senza dipendenze esterne), pronto per la
pubblicazione gratuita su GitHub Pages.

## Struttura

- `index.html` — tutta la struttura e i contenuti del sito
- `css/style.css` — stili; tutte le scelte grafiche (colori, font, spaziature)
  sono variabili CSS in cima al file, pensate per essere iterate con Claude Design
- `js/main.js` — cielo stellato animato, menu mobile, animazioni di comparsa
- `fonts/` — font self-hosted (Cormorant Garamond e Source Sans 3, licenze OFL incluse)
- `ricerche/` — pubblicazioni scaricabili (la ricerca sui ritorni di Saturno e Urano, in PDF)
- `favicon.svg` — icona del sito (luna e stella)

## Dati da personalizzare

Cerca i segnaposto tra `[PARENTESI]` in `index.html`:

| Sezione | Cosa inserire |
| --- | --- |
| Chi sono | foto (`[FOTO]` → `img/fabio.jpg`) — la bio è completa |
| Servizi | durata e prezzo di ogni servizio (ora indicati come "in arrivo") |
| Testimonianze | `[TESTIMONIANZA 1/2/3]` con recensioni reali |
| Contatti | `[EMAIL]`, `[NUMERO-WHATSAPP]` (formato internazionale, es. 39333…), `[PROFILO-INSTAGRAM]` |
| Caelum | quando l'app sarà su Google Play: nella sezione `#caelum` sostituire il badge "Presto su Google Play" e la CTA "Scrivimi" con il link reale allo store |

## Pubblicazione su GitHub Pages

Su GitHub: **Settings → Pages → Source: Deploy from a branch**, scegliendo il
branch principale e la cartella `/ (root)`.
