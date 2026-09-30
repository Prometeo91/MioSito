# MioSito - sito vetrina di Fabio Piscopo, astrologo e tarologo

Sito statico di una pagina (HTML/CSS/JS puri, nessuna dipendenza, nessun CDN),
pubblicato su GitHub Pages dal branch `main` con dominio `fabiopiscopo.com`.

## Struttura

- `index.html` - tutta la pagina: header/nav, hero, `#chi-sono`, `#servizi`,
  `#come-funziona`, `#testimonianze`, `#caelum`, `#contatti`, footer
- `css/style.css` - tutte le scelte grafiche sono variabili CSS in cima al file
- `js/main.js` - cielo stellato, menu mobile, animazioni di comparsa
- `fonts/` - Cormorant Garamond e Source Sans 3, self-hosted (licenze OFL)
- `img/fabio.jpg` - foto profilo
- `ricerche/` - PDF della ricerca sui ritorni di Saturno e Urano
- `CNAME` - dominio personalizzato, non toccare

## Convenzioni di scrittura (obbligatorie)

- Lingua: italiano, tono caldo ma professionale, seconda persona singolare
  verso il lettore ("troverai", "il tuo tema natale")
- Trattino semplice `-` sempre. Mai il trattino lungo (em dash `—` o `&mdash;`),
  né nell'HTML né nel README né nei commit
- Lettere accentate e apostrofi nell'HTML come entità: `&egrave;` `&agrave;`
  `&rsquo;` `&laquo;` `&raquo;` ecc. Non usare i caratteri Unicode diretti
- Virgolette per titoli e citazioni: caporali `&laquo; &raquo;`
- Non modificare i contenuti astrologici (interpretazioni, date, nomi di
  servizi) senza istruzione esplicita. Le modifiche di forma sono libere
- Segnaposto ancora presenti, da lasciare finché non arrivano i dati:
  `[PROFILO-INSTAGRAM]` e `[PROFILO - da inserire]` (link Instagram),
  `[TESTIMONIANZA 1/2/3]` e `[Nome], [città]` (testimonianze),
  "Durata e prezzo: in arrivo" (card dei servizi)

## Convenzioni di codice

- Nessuna libreria esterna, nessun font o script da CDN
- Nuovi valori di design (colori, spaziature) vanno aggiunti come variabili
  CSS in cima a `style.css`, non inline
- `prefers-reduced-motion` va rispettato per ogni animazione nuova
- Contrasto minimo WCAG AA sui testi
- Immagini nuove: dimensioni esplicite, `alt` in italiano, peso contenuto

## Git

- Sviluppo sul branch `claude/astrologer-portfolio-prompt-b0x535`; il merge su
  `main` lo fa il proprietario (o su sua richiesta esplicita)
- Messaggi di commit in italiano, all'imperativo, una riga di sintesi
- Mai nomi di modelli AI nei messaggi di commit, nei commenti o nei file del sito
- Non aprire pull request se non richiesto

## Verifica locale

```
setsid python3 -m http.server 8765 --directory /home/user/MioSito >/dev/null 2>&1 &
curl -sI http://localhost:8765/ | head -1
```

Screenshot con Playwright: Chromium è in `/opt/pw-browsers/chromium`
(`executablePath`), non lanciare `playwright install`. Controllare sempre sia
375px di larghezza (mobile) sia 1280px (desktop).
