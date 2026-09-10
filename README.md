# Stefano Mascellini — Portfolio

Sito statico. Solo HTML, CSS e JavaScript vanilla. Nessun framework, nessuna build.
GSAP + ScrollTrigger + Lenis arrivano da CDN.

Il progetto è costruito da **BUILD-PLAN.md**, che resta la fonte di verità per
direzione creativa, copy e specifiche tecniche.

```
index.html      struttura, tutti i testi in italiano, tutti gli agganci data-i18n
style.css       token, atmosfera, sezioni, responsive, motion ridotto
script.js       configurazione + i18n + animazioni
assets/         video, immagini
```

## Avviare in locale

Basta aprire `index.html` col browser: il sito funziona da `file://`, tutti i
percorsi sono relativi.

Per un server locale:

```bash
python3 -m http.server 8137 --bind 127.0.0.1
```

### Nota sul preview integrato

`.claude/launch.json` è configurato in **attach**: punta a `http://localhost:8137`
e non avvia nessun processo. Il server va acceso a mano col comando qui sopra,
poi il preview ci si attacca.

Il motivo: il launcher del preview gira in un sandbox che non ha accesso a
`~/Documents`. Se prova ad avviare lui il server, `python3 -m http.server` muore
prima ancora di leggere gli argomenti:

```
File "http/server.py", line 1274, in <module>
  parser.add_argument('--directory', '-d', default=os.getcwd(),
PermissionError: [Errno 1] Operation not permitted
```

L'errore indica `--directory`, ma non è quello il problema: `os.getcwd()` viene
valutato al momento dell'import, prima del parsing, e fallisce con **EPERM**
perché la working directory ereditata è dentro `~/Documents`. Passare
`--directory`, o aggiungere un `cd`, non serve a niente — anche `/bin/sh` non
riesce a fare `getcwd` in quel sandbox. L'unica via è avviare il server da un
processo che quel permesso ce l'ha, e attaccarcisi.

## Le uniche cose da modificare

Tutto quello che cambia nel tempo vive in **un solo oggetto**, in cima a `script.js`:

```js
const SITE = {
  email: "…",              // indirizzo pubblico di contatto
  formEndpoint: "",        // vuoto = il form apre il client di posta
  social: { … },           // un campo vuoto = il link non viene mostrato
  videos: { … },           // vuoto = fallback cinematografico in CSS
  products: [ … ]          // status, poster e link dei quattro prodotti
};
```

### Aggiungere i video

1. Generare i tre clip con Higgsfield Seedance 2.0 usando i prompt in `BUILD-PLAN.md` §6.
2. Codificarli per il web con i comandi `ffmpeg` in `BUILD-PLAN.md` §5.
   Il flag `-g 1` non è opzionale: senza, lo scrub allo scroll scatta.
3. Mettere `.mp4`, `.webm` e `.webp` (poster) in `assets/video/`.
4. Compilare `SITE.videos`:

```js
videos: {
  hero:    "assets/video/scene-01-hero.mp4",
  forms:   "assets/video/scene-02-forms.mp4",
  machine: "assets/video/scene-03-machine.mp4"
}
```

Il percorso serve solo come base: il sito carica da solo `.webm`, `.mp4` e `.webp`.
Finché i campi restano vuoti **non parte nessuna richiesta** e si vedono i fallback
in CSS — il sito è completo anche senza i video.

### Aggiungere i poster dei progetti

Mettere le immagini in `assets/img/work/` e compilare `poster` in `SITE.products`.
Se il file manca, l'immagine si rimuove da sola e resta il segnaposto disegnato.

### Far arrivare il form via email

Con `formEndpoint` vuoto il form apre il client di posta dell'utente.
Per riceverlo via HTTP basta incollare un endpoint (Formspree, Getform, Basin):

```js
formEndpoint: "https://formspree.io/f/xxxxxxx"
```

### Stato dei prodotti

`status` accetta `"shipping"`, `"beta"`, `"dev"` oppure `""` (nessuna etichetta).
Le etichette sono tradotte in entrambe le lingue.

## Lingua

Italiano di default, inglese dal selettore `IT / EN`. Nessun reload: i testi vengono
sostituiti al volo e la scelta resta in `localStorage`. Le traduzioni sono in `I18N`
dentro `script.js` — una chiave per stringa, `it` e `en` affiancati.

## Comportamenti da conoscere

- **Senza JavaScript** il sito resta completamente leggibile: tutti i contenuti sono
  nell'HTML e gli stati nascosti sono attivi solo con la classe `js`.
- **`prefers-reduced-motion`** disattiva preloader, Lenis, cursore, scrub e grana
  animata, e mostra tutto in forma statica.
- **Da mobile** lo smooth scroll è disattivato di proposito: l'inerzia nativa è migliore.
- I video fuori schermo vengono messi in pausa: è la prima causa di scatti allo scroll.

## Prima di pubblicare

Vedi la tabella *Open Items* in cima a `BUILD-PLAN.md`:

1. Confermare l'email pubblica (`SITE.email`).
2. Impostare lo stato reale dei quattro prodotti.
3. Verificare le descrizioni dei progetti.
4. Aggiungere i poster in `assets/img/work/`.
5. Compilare o lasciare vuoti i social.
