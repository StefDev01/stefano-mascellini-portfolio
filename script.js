/* ═══════════════════════════════════════════════════════════════════════════
   STEFANO MASCELLINI — PORTFOLIO
   HTML / CSS / JS vanilla. GSAP + ScrollTrigger + Lenis via CDN.
   Vedi BUILD-PLAN.md §21–§25.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────────────────────────────────
   1 · CONFIGURAZIONE — l’unico blocco da modificare a mano.
   ─────────────────────────────────────────────────────────────────────────── */
const SITE = {
  // Indirizzo pubblico di contatto, confermato da Stefano il 10 settembre 2026.
  email: "stefanomascellinilavoro@gmail.com",

  // "" → il form apre il client di posta (mailto).
  // Incollare qui un endpoint Formspree/Getform/Basin per inviare via HTTP.
  formEndpoint: "",

  // Vuoto → il link non viene mostrato affatto. Nessun link morto.
  social: { github: "", linkedin: "", telegram: "" },

  // Video: vuoto → si usa il fallback cinematografico in CSS.
  // Appena i clip Seedance sono pronti, incollare qui i percorsi.
  videos: {
    hero:    "",   // es. "assets/video/scene-01-hero.mp4"
    forms:   "",   // es. "assets/video/scene-02-forms.mp4"
    machine: ""    // es. "assets/video/scene-03-machine.mp4"
  },

  // ⚠️ Unica fonte per la striscia prodotti (§10) e i lavori (§16).
  // status: "" | "shipping" | "beta" | "dev"  — vedi Open Item #2.
  products: [
    { slug: "mutewell",   status: "", poster: "assets/img/work/mutewell.webp", href: "" },
    { slug: "cleancut",   status: "", poster: "assets/img/work/cleancut.webp", href: "" },
    { slug: "aegisos",    status: "", poster: "assets/img/work/aegisos.webp",  href: "" },
    // ⚠️ Manca l'icona di MT5 Bridge: finché poster resta vuoto la card usa il
    // segnaposto tipografico. Basta metterne una in assets/img/work/ e citarla qui.
    { slug: "mt5-bridge", status: "", poster: "", href: "" }
  ],

  timezone: "Europe/Rome"
};

/* ───────────────────────────────────────────────────────────────────────────
   2 · I18N
   ─────────────────────────────────────────────────────────────────────────── */
const I18N = {
  it: {
    "a11y.skip":"Vai al contenuto",
    "nav.services":"Servizi","nav.work":"Lavori","nav.path":"Percorso","nav.contact":"Contatti",

    "hero.eyebrow":"Sviluppatore indipendente — Italia",
    "hero.l1":"Dall’idea","hero.l2":"al","hero.l3":"software.",
    "hero.sub":"Siti, applicazioni desktop e mobile, automazioni. Progettati e costruiti da una persona sola — come se fossero miei.",
    "hero.cta1":"Parliamo del tuo progetto","hero.cta2":"Guarda i lavori","hero.scroll":"Scorri",

    "products.eyebrow":"Quattro prodotti a mio nome","products.title":"Non solo per i clienti.",
    "platform.macos":"macOS","platform.windows":"Windows","platform.cross":"Multipiattaforma",
    "status.shipping":"Disponibile","status.beta":"Beta","status.dev":"In sviluppo",

    "mission.eyebrow":"Il motivo",
    "mission.title":"Ogni idea merita un posto dove esistere. Ogni azione ripetuta merita di sparire dentro un software.",
    "mission.body":"Non credo nei processi manuali sopravvissuti per abitudine. Se lo fai due volte allo stesso modo, può farlo una macchina. Io costruisco quella macchina — e il sito, o l’app, che le sta intorno.",
    "mission.ghost":"Idea",

    "break.eyebrow":"Tre forme","break.title":"Una persona sola. Dall’inizio alla fine.",
    "break.meta":"Stefano Mascellini — Italia",

    "pillars.eyebrow":"Cosa costruisco","pillars.title":"Tre discipline. Un solo standard.",
    "pillars.p1.title":"Siti web",
    "pillars.p1.body":"Siti che sembrano costruiti su misura, perché lo sono. Nessun template, nessun page builder: struttura, animazioni e performance scritte a mano.",
    "pillars.p1.tags":["Landing page","Portfolio","E-commerce","Web app","SEO tecnica","Performance"],
    "pillars.p2.title":"Applicazioni",
    "pillars.p2.body":"Desktop e mobile. Native dove serve, veloci sempre. Applicazioni che si installano una volta e poi si smette di pensarci.",
    "pillars.p2.tags":["macOS","Windows","iOS","Android","Menu bar tools","Interfacce native"],
    "pillars.p3.title":"Automazioni",
    "pillars.p3.body":"Bot Telegram, script Windows, pipeline che girano da sole. Quello che facevi a mano ogni giorno, semplicemente non lo fai più.",
    "pillars.p3.tags":["Bot Telegram","Automazioni Windows","Scraping","Integrazioni API","Job schedulati","Alert"],
    "rescue.eyebrow":"Debug & Rescue","rescue.lead":"Hai già un progetto e non funziona?",
    "rescue.body":"Entro nel codice scritto da qualcun altro, capisco cosa si è rotto e lo rimetto in piedi. Anche se è stato abbandonato a metà.",

    "story.eyebrow":"Come sono arrivato qui","story.title":"È iniziato tutto da una cosa noiosa.",
    "story.c1.title":"Il problema noioso",
    "story.c1.body":"C’era una cosa che dovevo fare ogni giorno. A mano. Sempre uguale. Non era difficile, era solo un furto di tempo, ripetuto all’infinito.",
    "story.c2.title":"La prima applicazione",
    "story.c2.body":"Un giorno ho smesso di lamentarmi e ho scritto un programma che lo facesse al posto mio. Ha funzionato. E quella cosa non l’ho più fatta.",
    "story.c3.title":"Gli altri",
    "story.c3.body":"Poi ho iniziato a vedere lo stesso problema ovunque. Persone intelligenti bloccate da lavori che nessuno dovrebbe fare. Ho iniziato a costruire per loro.",
    "story.c4.title":"Oggi",
    "story.c4.body":"Oggi costruisco siti, applicazioni e automazioni per persone e brand. Stessa regola di allora: se una macchina può farlo, che la faccia la macchina.",

    "process.line":"Tu vai a dormire. Il software no.",
    "process.eyebrow":"Come lavoro","process.title":"Quattro passi. Nessuna sorpresa.",
    "process.s1.title":"Ascolto",
    "process.s1.body":"Prima di scrivere una riga di codice voglio capire il problema vero. Spesso non è quello che pensavi.",
    "process.s2.title":"Progetto",
    "process.s2.body":"Scope fisso, tempi chiari, prezzo definito prima di iniziare. Niente preventivi che crescono in corsa.",
    "process.s3.title":"Costruisco",
    "process.s3.body":"Vedi avanzamenti reali ogni settimana, non un silenzio di due mesi seguito da una sorpresa.",
    "process.s4.title":"Consegno e resto",
    "process.s4.body":"Consegno il progetto e il codice: è tuo. E se serve, resto per farlo crescere.",

    "work.eyebrow":"Lavori selezionati","work.title":"Costruiti, rilasciati, in uso.",
    "work.mutewell":"Il microfono sotto controllo, dalla barra dei menu. Una scorciatoia, e sai sempre se ti stanno sentendo.",
    "work.cleancut":"Taglia i silenzi dai video e dall’audio, da solo. Ore di editing che si riducono a un’anteprima e un export.",
    "work.aegisos":"Orchestrazione di modelli AI con routing, fallback e controllo della spesa. Un pannello al posto del caos.",
    "work.mt5":"Legge i segnali, applica le regole di rischio ed esegue su MetaTrader 5. Il ponte tra un messaggio e un ordine.",
    "work.hint":"Scorri per vedere tutto","work.drag":"Trascina",

    "cta.l1":"Hai un’idea?","cta.l2":"Costruiamola.",
    "cta.sub":"Raccontami cosa hai in mente. Rispondo entro 24 ore, di persona.",
    "cta.or":"Oppure scrivimi direttamente:",
    "form.name":"Nome","form.email":"Email","form.type":"Cosa ti serve",
    "form.budget":"Budget indicativo (opzionale)","form.message":"Il progetto",
    "form.send":"Invia il messaggio","form.sending":"Invio…",
    "form.done":"Ricevuto. Ti rispondo entro 24 ore.",
    "form.doneMail":"Ti ho aperto il client di posta con il messaggio già pronto. Premi invio e ti rispondo entro 24 ore.",
    "form.typeOptions":["Sito web","Applicazione","Automazione","Debug di un progetto esistente","Altro"],
    "form.budgetOptions":["Da definire","Meno di 2.000 €","2.000 – 5.000 €","5.000 – 10.000 €","Oltre 10.000 €"],
    "form.errRequired":"Campo obbligatorio","form.errEmail":"Indirizzo email non valido",
    "form.subject":"Nuovo progetto — dal sito",

    "footer.tagline":"Software indipendente, costruito in Italia.",
    "footer.colophon":"Composto in Space Grotesk, Inter e JetBrains Mono. Costruito a mano.",
    "footer.country":"Italia",
    "rail.01":"01 — Origine","rail.02":"02 — Prodotti","rail.03":"03 — Motivo",
    "rail.04":"04 — Forme","rail.05":"05 — Servizi","rail.06":"06 — Percorso",
    "rail.07":"07 — Metodo","rail.08":"08 — Lavori","rail.09":"09 — Contatti"
  },

  en: {
    "a11y.skip":"Skip to content",
    "nav.services":"Services","nav.work":"Work","nav.path":"Path","nav.contact":"Contact",

    "hero.eyebrow":"Independent developer — Italy",
    "hero.l1":"From idea","hero.l2":"to","hero.l3":"software.",
    "hero.sub":"Websites, desktop and mobile applications, automations. Designed and built by one person — as if they were my own.",
    "hero.cta1":"Let’s talk about your project","hero.cta2":"See the work","hero.scroll":"Scroll",

    "products.eyebrow":"Four products under my own name","products.title":"Not just for clients.",
    "platform.macos":"macOS","platform.windows":"Windows","platform.cross":"Cross-platform",
    "status.shipping":"Available","status.beta":"Beta","status.dev":"In development",

    "mission.eyebrow":"The reason",
    "mission.title":"Every idea deserves a place to exist. Every repeated action deserves to disappear into software.",
    "mission.body":"I don’t believe in manual processes that survived out of habit. If you do it twice the same way, a machine can do it. I build that machine — and the site, or the app, that surrounds it.",
    "mission.ghost":"Idea",

    "break.eyebrow":"Three forms","break.title":"One person. Start to finish.",
    "break.meta":"Stefano Mascellini — Italy",

    "pillars.eyebrow":"What I build","pillars.title":"Three disciplines. One standard.",
    "pillars.p1.title":"Websites",
    "pillars.p1.body":"Websites that look tailor-made, because they are. No templates, no page builders: structure, motion and performance written by hand.",
    "pillars.p1.tags":["Landing page","Portfolio","E-commerce","Web app","Technical SEO","Performance"],
    "pillars.p2.title":"Applications",
    "pillars.p2.body":"Desktop and mobile. Native where it matters, fast always. Applications you install once and then stop thinking about.",
    "pillars.p2.tags":["macOS","Windows","iOS","Android","Menu bar tools","Native interfaces"],
    "pillars.p3.title":"Automation",
    "pillars.p3.body":"Telegram bots, Windows scripts, pipelines that run themselves. What you did by hand every day, you simply stop doing.",
    "pillars.p3.tags":["Telegram bots","Windows automation","Scraping","API integrations","Scheduled jobs","Alerts"],
    "rescue.eyebrow":"Debug & Rescue","rescue.lead":"Already have a project that doesn’t work?",
    "rescue.body":"I go into code written by someone else, find what broke, and put it back on its feet. Even if it was abandoned halfway.",

    "story.eyebrow":"How I got here","story.title":"It all started with something boring.",
    "story.c1.title":"The boring problem",
    "story.c1.body":"There was something I had to do every day. By hand. Always the same. It wasn’t hard — it was just theft of time, repeated forever.",
    "story.c2.title":"The first application",
    "story.c2.body":"One day I stopped complaining and wrote a program to do it for me. It worked. And I never did that thing again.",
    "story.c3.title":"Everyone else",
    "story.c3.body":"Then I started seeing the same problem everywhere. Smart people stuck doing work nobody should be doing. I started building for them.",
    "story.c4.title":"Today",
    "story.c4.body":"Today I build websites, applications and automations for people and brands. Same rule as back then: if a machine can do it, let the machine do it.",

    "process.line":"You go to sleep. The software doesn’t.",
    "process.eyebrow":"How I work","process.title":"Four steps. No surprises.",
    "process.s1.title":"Listen",
    "process.s1.body":"Before writing a line of code I want to understand the real problem. It’s often not the one you thought.",
    "process.s2.title":"Plan",
    "process.s2.body":"Fixed scope, clear timeline, price defined before we start. No estimates that grow along the way.",
    "process.s3.title":"Build",
    "process.s3.body":"You see real progress every week, not two months of silence followed by a surprise.",
    "process.s4.title":"Deliver & stay",
    "process.s4.body":"I hand over the project and the code: it’s yours. And if you need me, I stay to grow it.",

    "work.eyebrow":"Selected work","work.title":"Built, shipped, in use.",
    "work.mutewell":"Your microphone under control, from the menu bar. One shortcut, and you always know if you’re being heard.",
    "work.cleancut":"Cuts the silences out of video and audio by itself. Hours of editing reduced to a preview and an export.",
    "work.aegisos":"AI model orchestration with routing, fallback and spend control. One panel instead of chaos.",
    "work.mt5":"Reads the signals, applies risk rules and executes on MetaTrader 5. The bridge between a message and an order.",
    "work.hint":"Scroll to see everything","work.drag":"Drag",

    "cta.l1":"Got an idea?","cta.l2":"Let’s build it.",
    "cta.sub":"Tell me what you have in mind. I reply within 24 hours, personally.",
    "cta.or":"Or email me directly:",
    "form.name":"Name","form.email":"Email","form.type":"What you need",
    "form.budget":"Rough budget (optional)","form.message":"The project",
    "form.send":"Send the message","form.sending":"Sending…",
    "form.done":"Got it. I’ll reply within 24 hours.",
    "form.doneMail":"I’ve opened your mail client with the message ready. Hit send and I’ll reply within 24 hours.",
    "form.typeOptions":["Website","Application","Automation","Debugging an existing project","Other"],
    "form.budgetOptions":["To be defined","Under €2,000","€2,000 – 5,000","€5,000 – 10,000","Over €10,000"],
    "form.errRequired":"This field is required","form.errEmail":"Invalid email address",
    "form.subject":"New project — from the website",

    "footer.tagline":"Independent software, built in Italy.",
    "footer.colophon":"Set in Space Grotesk, Inter and JetBrains Mono. Built by hand.",
    "footer.country":"Italy",
    "rail.01":"01 — Origin","rail.02":"02 — Products","rail.03":"03 — Reason",
    "rail.04":"04 — Forms","rail.05":"05 — Services","rail.06":"06 — Path",
    "rail.07":"07 — Method","rail.08":"08 — Work","rail.09":"09 — Contact"
  }
};

/* ───────────────────────────────────────────────────────────────────────────
   3 · UTILITÀ
   ─────────────────────────────────────────────────────────────────────────── */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE    = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
/* Su telefono niente sezioni fissate: due scrub in pin sono due schermate e mezza
   di scorrimento prima di arrivare a un contenuto. Vedi BUILD-PLAN §24. */
const MOBILE  = window.matchMedia("(max-width: 767px)").matches;
const EASE = "expo.out";
/* Stato nascosto delle parole prima del reveal. Un solo posto, perché i valori
   sono legati fra loro: la maschera .w ha un padding-bottom per le discendenti,
   e la rotazione iniziale solleva gli angoli di (larghezza/2)·sin(θ) — sulle
   parole larghe basta poco perché una fetta resti visibile a pagina aperta.
   145% copre il padding più il sollevamento anche sulle righe più lunghe. */
const HIDDEN = { yPercent: 145, rotate: 2.5 };

let lang = "it";
let lenis = null;
/** Timeline di testo agganciate allo scroll: vanno ricostruite al cambio lingua. */
const rebuilders = [];

/** Avvolge ogni parola in `.w > .wi` per il reveal mascherato (§21). */
function splitWords(el) {
  if (!el) return [];
  if (el.dataset.text === undefined) el.dataset.text = el.textContent;
  const words = el.dataset.text.split(/\s+/).filter(Boolean);
  el.textContent = "";
  return words.map((word, i) => {
    const outer = document.createElement("span");
    outer.className = "w";
    const inner = document.createElement("span");
    inner.className = "wi";
    inner.textContent = word;
    outer.appendChild(inner);
    el.appendChild(outer);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    return inner;
  });
}

/** Reveal standard della casa: le parole salgono da dietro la loro maschera. */
function revealWords(el, opts = {}) {
  if (!el) return;
  const words = splitWords(el);
  if (REDUCED) { gsap.set(words, { yPercent: 0, rotate: 0 }); el.classList.add("is-in"); return; }
  gsap.set(words, HIDDEN);
  gsap.to(words, {
    yPercent: 0, rotate: 0, duration: 1.05, ease: EASE, stagger: 0.045,
    scrollTrigger: { trigger: opts.trigger || el, start: opts.start || "top 84%", once: true },
    onStart: () => el.classList.add("is-in")
  });
}

/** Fade+rise per i blocchi non-titolo. */
function revealBlock(el, opts = {}) {
  if (!el) return;
  if (REDUCED) { gsap.set(el, { opacity: 1 }); return; }
  gsap.fromTo(el, { opacity: 0, y: 24 }, {
    opacity: 1, y: 0, duration: .9, ease: EASE, delay: opts.delay || 0,
    scrollTrigger: { trigger: opts.trigger || el, start: opts.start || "top 88%", once: true }
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   4 · I18N — nessun reload, sostituzione mascherata
   ─────────────────────────────────────────────────────────────────────────── */
function t(key) {
  const v = I18N[lang][key];
  return v === undefined ? I18N.it[key] : v;
}

function applyLang(next, animate) {
  lang = next;
  document.documentElement.lang = next;
  localStorage.setItem("sm-lang", next);

  $$(".lang__btn").forEach(b => {
    const on = b.dataset.lang === next;
    b.classList.toggle("is-active", on);
    if (b.hasAttribute("aria-pressed")) b.setAttribute("aria-pressed", String(on));
  });

  const swap = () => {
    $$("[data-i18n]").forEach(el => {
      const val = t(el.dataset.i18n);
      if (typeof val !== "string") return;
      if (el.hasAttribute("data-split")) {
        delete el.dataset.text;
        el.textContent = val;
        const words = splitWords(el);
        // Se il reveal è già avvenuto le nuove parole devono restare visibili.
        gsap.set(words, el.classList.contains("is-in") || REDUCED
          ? { yPercent: 0, rotate: 0 } : HIDDEN);
      } else {
        el.textContent = val;
      }
    });

    $$("[data-i18n-list]").forEach(ul => {
      const items = t(ul.dataset.i18nList);
      if (!Array.isArray(items)) return;
      ul.innerHTML = "";
      items.forEach(txt => { const li = document.createElement("li"); li.textContent = txt; ul.appendChild(li); });
    });

    $$("[data-i18n-options]").forEach(sel => {
      const items = t(sel.dataset.i18nOptions);
      if (!Array.isArray(items)) return;
      Array.from(sel.options).forEach((opt, i) => { if (items[i]) opt.textContent = items[i]; });
    });

    const ghost = $("#misGhost"); if (ghost) ghost.textContent = t("mission.ghost");
    applyProducts();
    updateMailLink();
    rebuilders.forEach(fn => fn());
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  };

  if (!animate || REDUCED) { swap(); return; }

  // Solo i nodi visibili: gli altri non devono perdere il loro reveal.
  const nodes = $$("[data-i18n], [data-i18n-list]").filter(el => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < innerHeight;
  });
  gsap.timeline()
    .to(nodes, { opacity: 0, y: -8, duration: .22, ease: "power2.in", stagger: .004 })
    .add(swap)
    .fromTo(nodes, { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: .45, ease: EASE, stagger: .006, clearProps: "transform" });
}

function initI18N() {
  // L'italiano è la lingua del sito, non un default negoziabile con il browser:
  // si cambia solo se il visitatore lo ha scelto esplicitamente.
  const saved = localStorage.getItem("sm-lang");
  const start = (saved === "it" || saved === "en") ? saved : "it";
  $$(".lang__btn").forEach(btn =>
    btn.addEventListener("click", () => { if (btn.dataset.lang !== lang) applyLang(btn.dataset.lang, true); }));
  applyLang(start, false);
}

/* ───────────────────────────────────────────────────────────────────────────
   5 · PRODOTTI — status, poster e link dalla config
   ─────────────────────────────────────────────────────────────────────────── */
function applyProducts() {
  SITE.products.forEach(p => {
    const label = p.status ? t("status." + p.status) : "";
    $$(`[data-slug="${p.slug}"] [data-status]`).forEach(el => { el.textContent = label; });

    if (p.poster) {
      const media = $(`.card[data-slug="${p.slug}"] .card__media`);
      if (media && !media.querySelector("img")) {
        const img = document.createElement("img");
        img.src = p.poster; img.alt = ""; img.loading = "lazy"; img.decoding = "async";
        img.width = 512; img.height = 512;
        // Se il file non c'è si torna al segnaposto tipografico, senza buchi.
        img.addEventListener("error", () => {
          img.remove(); media.classList.remove("card__media--icon");
        }, { once: true });
        media.classList.add("card__media--icon");
        media.prepend(img);
      }
    }
  });
}

function initSocial() {
  const host = $("#social"); if (!host) return;
  const labels = { github: "GitHub", linkedin: "LinkedIn", telegram: "Telegram" };
  Object.entries(SITE.social).forEach(([k, url]) => {
    if (!url) return;                       // vuoto → nessun link morto
    const a = document.createElement("a");
    a.href = url; a.textContent = labels[k];
    a.target = "_blank"; a.rel = "noopener noreferrer";
    a.dataset.cursor = "link";
    host.appendChild(a);
  });
}

function updateMailLink() {
  const a = $("#mailLink"); if (!a) return;
  a.href = "mailto:" + SITE.email;
  a.textContent = SITE.email;
}

/* ───────────────────────────────────────────────────────────────────────────
   6 · VIDEO — sorgenti solo se configurate (nessun 404)
   ─────────────────────────────────────────────────────────────────────────── */
function mountVideo(video, path, sectionSel) {
  if (!video || !path || REDUCED) return null;
  const section = $(sectionSel);
  const base = path.replace(/\.(mp4|webm)$/i, "");
  ["webm", "mp4"].forEach(ext => {
    const s = document.createElement("source");
    s.src = `${base}.${ext}`; s.type = `video/${ext}`;
    video.appendChild(s);
  });
  video.poster = `${base}.webp`;
  video.addEventListener("error", () => section && section.classList.remove("has-video"), { once: true });
  if (section) section.classList.add("has-video");
  video.load();
  return video;
}

/** Mette in pausa i video fuori schermo: è la prima causa di scatti allo scroll. */
function autoPause(video) {
  if (!video) return;
  new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) video.play().catch(() => {}); else video.pause();
  }), { rootMargin: "200px" }).observe(video);
}

/* ───────────────────────────────────────────────────────────────────────────
   7 · PRELOADER
   ─────────────────────────────────────────────────────────────────────────── */
function initPreloader() {
  const pre = $("#preloader");
  if (!pre || REDUCED) { pre && pre.remove(); document.body.style.overflow = ""; return Promise.resolve(); }

  document.body.style.overflow = "hidden";
  const count = $("#preCount");
  const bar = $(".preloader__bar i");
  const obj = { v: 0 };

  return new Promise(resolve => {
    const finish = () => {
      gsap.timeline({ onComplete: () => { pre.remove(); document.body.style.overflow = ""; resolve(); } })
        .to(".preloader__inner, .preloader__meta", { yPercent: -120, opacity: 0, duration: .7, ease: "power3.in" })
        .to(pre, { clipPath: "inset(50% 0 50% 0)", duration: 1, ease: EASE }, "-=.25");
    };

    gsap.to(obj, {
      v: 100, duration: 1.6, ease: "power2.inOut",
      onUpdate: () => { count.textContent = String(Math.round(obj.v)).padStart(2, "0"); },
      onComplete: finish
    });
    gsap.to(bar, { scaleX: 1, duration: 1.6, ease: "power2.inOut" });

    // Guardia: un preloader non deve mai intrappolare l’utente. Rimozione secca,
    // senza animazione: se siamo qui qualcosa sta già andando storto.
    setTimeout(() => {
      if (!document.body.contains(pre)) return;
      gsap.killTweensOf(obj);
      gsap.killTweensOf(pre);
      pre.remove();
      document.body.style.overflow = "";
      resolve();
    }, 3500);
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   8 · LENIS + GSAP
   ─────────────────────────────────────────────────────────────────────────── */
function initLenis() {
  if (REDUCED || typeof Lenis === "undefined") return;
  lenis = new Lenis({
    duration: 1.15,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,            // su touch resta l’inerzia nativa
    touchMultiplier: 1.6,
    lerp: .085,
    autoRaf: false
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
}

function goTo(target, offset = -70) {
  if (lenis) lenis.scrollTo(target, { offset, duration: 1.4 });
  else target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initAnchors() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      closeMenu();
      goTo(el);
    });
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   9 · CURSORE + MAGNETICI
   ─────────────────────────────────────────────────────────────────────────── */
function initCursor() {
  if (!FINE || REDUCED) return;
  const el = $("#cursor"), dot = $(".cursor__dot"), ring = $(".cursor__ring");
  document.body.classList.add("has-cursor");

  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    const hit = e.target.closest("[data-cursor]");
    const kind = hit ? hit.dataset.cursor : "";
    el.classList.toggle("is-link", kind === "link");
    el.classList.toggle("is-drag", kind === "drag");
    if (kind === "drag") el.dataset.label = "↔ " + t("work.drag").toUpperCase();
  }, { passive: true });

  gsap.ticker.add(() => {
    rx += (mx - rx) * .14; ry += (my - ry) * .14;
    dot.style.transform  = `translate(${mx}px,${my}px)`;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    el.style.setProperty("--cx", rx + "px");
    el.style.setProperty("--cy", ry + "px");
  });
}

function initMagnetic() {
  if (!FINE || REDUCED) return;
  $$("[data-magnetic]").forEach(btn => {
    const label = btn.querySelector("span");
    const xTo = gsap.quickTo(btn, "x", { duration: .5, ease: EASE });
    const yTo = gsap.quickTo(btn, "y", { duration: .5, ease: EASE });
    const lx  = label ? gsap.quickTo(label, "x", { duration: .5, ease: EASE }) : null;
    const ly  = label ? gsap.quickTo(label, "y", { duration: .5, ease: EASE }) : null;

    btn.addEventListener("pointermove", e => {
      const r = btn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      xTo(dx * .32); yTo(dy * .32);
      if (lx) { lx(dx * .16); ly(dy * .16); }
    });
    btn.addEventListener("pointerleave", () => {
      xTo(0); yTo(0); if (lx) { lx(0); ly(0); }
    });
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   10 · NAV + MENU
   ─────────────────────────────────────────────────────────────────────────── */
let menuOpen = false;

function closeMenu() {
  if (!menuOpen) return;
  const menu = $("#menu"), burger = $("#burger");
  menuOpen = false;
  burger.setAttribute("aria-expanded", "false");
  gsap.to(menu, { opacity: 0, duration: .3, ease: "power2.in",
    onComplete: () => { menu.hidden = true; gsap.set(menu, { clearProps: "opacity" }); } });
  if (lenis) lenis.start();
  burger.focus();
}

function initNav() {
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  let last = 0;

  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate: self => {
      const y = self.scroll();
      nav.classList.toggle("is-stuck", y > 40);
      if (menuOpen) return;
      const down = y > last && y > 400;
      gsap.to(nav, { yPercent: down ? -100 : 0, duration: .35, ease: EASE, overwrite: true });
      last = y;
    }
  });

  burger.addEventListener("click", () => {
    if (menuOpen) return closeMenu();
    menuOpen = true;
    burger.setAttribute("aria-expanded", "true");
    menu.hidden = false;
    if (lenis) lenis.stop();
    const links = $$(".menu__links a");
    gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: .35, ease: EASE });
    gsap.fromTo(links, { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: .8, ease: EASE, stagger: .06, delay: .1 });
    links[0].focus();
  });

  addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  // Link attivo nella nav
  const map = { prodotti: "servizi", servizi: "servizi", lavori: "lavori", percorso: "percorso" };
  ["servizi", "lavori", "percorso"].forEach(id => {
    const sec = document.getElementById(id); if (!sec) return;
    ScrollTrigger.create({
      trigger: sec, start: "top 50%", end: "bottom 50%",
      onToggle: self => {
        const link = $(`.nav__links a[data-nav="${map[id]}"]`);
        if (link) link.classList.toggle("is-active", self.isActive);
      }
    });
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   11 · HERO
   ─────────────────────────────────────────────────────────────────────────── */
function initHero() {
  const hero = $("#hero"), pin = $(".hero__pin");
  const scene = $(".mac__scene"), mac = $(".mac__world");
  const video = mountVideo($("#heroVideo"), SITE.videos.hero, "#hero");

  const lines = $$(".hero__l").map(el => splitWords(el));
  const flat = lines.flat();
  const markIn = () => $$(".hero__l").forEach(l => l.classList.add("is-in"));

  if (REDUCED) {
    gsap.set(flat, { yPercent: 0 });
    gsap.set([".hero__sub", ".hero__cta"], { opacity: 1 });
    markIn();
    if (mac) mac.style.setProperty("--open", "1");
    return;
  }

  gsap.set(flat, HIDDEN);
  gsap.set([".hero__sub", ".hero__cta"], { y: 24 });

  /* ── APERTURA — parte da sola al caricamento ──────────────────────────
     Il coperchio si alza, la camera entra nello schermo, e le tre righe
     salgono dalla luce mentre si apre. Non è agganciata allo scroll: se
     lo fosse, il primo fotogramma del sito sarebbe uno schermo vuoto. */
  const intro = gsap.timeline({ delay: .15, onComplete: markIn });

  if (mac)   intro.fromTo(mac,   { "--open": 0 }, { "--open": 1,    duration: 2.4, ease: "power2.inOut" }, 0);
  if (scene) intro.fromTo(scene, { "--zoom": 1 }, { "--zoom": 1.2, duration: 2.8, ease: "power2.inOut" }, 0);

  // le righe entrano mentre lo schermo si accende, non prima
  intro.to(flat, { yPercent: 0, rotate: 0, duration: 1.15, ease: EASE, stagger: .11 }, .95)
       .to(".hero__sub", { opacity: 1, y: 0, duration: .9, ease: EASE }, "-=.45")
       .to(".hero__cta", { opacity: 1, y: 0, duration: .9, ease: EASE }, "-=.75");

  // Mobile: nessun pin, la sequenza sopra è tutto ciò che serve.
  if (MOBILE) return;

  /* ── SCROLL — la carrellata continua fino dentro lo schermo ──────────── */
  const state = { p: 0 };
  gsap.timeline({
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom bottom",
                     pin: pin, scrub: 1.1, anticipatePin: 1 }
  })
  .to(state, {
    p: 1, ease: "none", duration: .78,
    onUpdate: () => {
      const k = clamp(state.p / .78, 0, 1);
      if (scene) scene.style.setProperty("--zoom", String(1.2 + k * 3.4));
      if (video && video.duration) video.currentTime = k * video.duration;
    }
  }, 0)
  .to(".hero__content", { scale: 1.18, opacity: 0, duration: .3, ease: "power2.in" }, .7)
  .to(".hero__media",   { opacity: 0, filter: "blur(7px)", duration: .3, ease: "power2.in" }, .72)
  .to(".hero__scroll",  { opacity: 0, duration: .1 }, .04);

  // iOS non decodifica finché non c'è un gesto: lo sblocchiamo al primo tocco.
  if (video) {
    const wake = () => { video.play().then(() => video.pause()).catch(() => {}); };
    addEventListener("pointerdown", wake, { once: true });
    addEventListener("touchstart", wake, { once: true, passive: true });
  }
}

/* ───────────────────────────────────────────────────────────────────────────
   12 · PRODOTTI + MARQUEE
   ─────────────────────────────────────────────────────────────────────────── */
function initProducts() {
  revealWords($(".products__line"));
  revealBlock($(".products .eyebrow"));

  const rows = $$(".manifest__row");
  if (!REDUCED) {
    rows.forEach((row, i) => {
      const inner = row.querySelector("a");
      gsap.to(row, {
        "--sx": 1, duration: .9, ease: EASE, delay: i * .09,
        scrollTrigger: { trigger: ".manifest", start: "top 78%", once: true }
      });
      gsap.fromTo(inner, { yPercent: 40, opacity: 0 }, {
        yPercent: 0, opacity: 1, duration: .95, ease: EASE, delay: i * .09 + .15,
        scrollTrigger: { trigger: ".manifest", start: "top 78%", once: true }
      });
    });
  }

  // Click su una riga → la card corrispondente, centrata.
  rows.forEach(row => row.addEventListener("click", e => {
    e.preventDefault();
    const gallery = $("#gallery");
    const card = $(`.card[data-slug="${row.dataset.slug}"]`);
    goTo($("#lavori"));
    if (gallery && card) setTimeout(() => {
      gallery.scrollTo({ left: card.offsetLeft - (gallery.clientWidth - card.clientWidth) / 2, behavior: "smooth" });
    }, 700);
  }));

  // Marquee: la direzione segue lo scroll.
  const track = $("#marquee");
  if (track && !REDUCED) {
    const half = track.scrollWidth / 2;
    const tween = gsap.to(track, { x: -half, duration: 55, ease: "none", repeat: -1 });
    ScrollTrigger.create({ start: 0, end: "max",
      onUpdate: self => { tween.timeScale(self.direction === 1 ? 1 : -1); } });
  }
}

/* ───────────────────────────────────────────────────────────────────────────
   13 · MISSIONE
   ─────────────────────────────────────────────────────────────────────────── */
function initMission() {
  const el = $(".mission__statement");
  revealBlock($(".mission .eyebrow"));
  revealBlock($(".mission__body"), { delay: .1 });

  if (REDUCED || !el) { el && splitWords(el).forEach(w => gsap.set(w, { yPercent: 0 })); return; }

  // Il lettore tira la frase dentro l'esistenza scorrendo: reveal agganciato allo scroll.
  const build = () => {
    const prev = ScrollTrigger.getById("misText");
    if (prev) prev.kill();
    const words = $$(".w > .wi", el);
    gsap.set(words, HIDDEN);
    gsap.to(words, {
      yPercent: 0, rotate: 0, ease: "none", stagger: .045,
      scrollTrigger: { id: "misText", trigger: el, start: "top 82%", end: "bottom 62%",
                       scrub: 1, onEnter: () => el.classList.add("is-in") }
    });
  };
  splitWords(el);
  build();
  rebuilders.push(build);

  gsap.fromTo("#misGhost", { xPercent: -8 }, {
    xPercent: 8, ease: "none",
    scrollTrigger: { trigger: ".mission", start: "top bottom", end: "bottom top", scrub: 1 }
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   14 · BREAK — LE TRE FORME
   ─────────────────────────────────────────────────────────────────────────── */
function initBreak() {
  const video = mountVideo($("#formsVideo"), SITE.videos.forms, "#forme");
  autoPause(video);
  revealBlock($(".break .eyebrow"));
  revealWords($(".break__title"));
  revealBlock($(".break__meta"), { delay: .15 });

  if (REDUCED) return;
  gsap.fromTo(".break__media", { scale: 1.08 }, {
    scale: 1, ease: "none",
    scrollTrigger: { trigger: "#forme", start: "top bottom", end: "bottom top", scrub: 1 }
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   15 · PILASTRI
   ─────────────────────────────────────────────────────────────────────────── */
function initPillars() {
  revealBlock($(".pillars .eyebrow"));
  revealWords($("#pilTitle"));
  revealBlock($(".rescue"));

  $$(".pillar").forEach((p, i) => {
    revealBlock(p, { delay: i * .08, start: "top 86%" });
    if (!FINE) return;
    p.addEventListener("pointermove", e => {
      const r = p.getBoundingClientRect();
      p.style.setProperty("--mx", (e.clientX - r.left) + "px");
      p.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   16 · PERCORSO — traccia orizzontale
   ─────────────────────────────────────────────────────────────────────────── */
function initStory() {
  revealBlock($(".story .eyebrow"));
  revealWords($("#stoTitle"));

  const track = $("#storyTrack"), fill = $("#storyFill");
  if (!track) return;

  $$(".chapter").forEach((c, i) => revealBlock(c, { delay: i * .06, start: "top 90%" }));

  // Sotto i 1024px i capitoli sono impilati (vedi §24): niente traccia orizzontale.
  if (REDUCED || innerWidth < 1024) { gsap.set(fill, { scaleX: 1 }); return; }

  const distance = () => Math.max(0, track.scrollWidth - innerWidth + parseFloat(getComputedStyle(track).paddingLeft));

  gsap.to(track, {
    x: () => -distance(), ease: "none",
    scrollTrigger: {
      trigger: ".story__viewport", start: "center center",
      end: () => "+=" + distance(), pin: ".story__viewport", scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: self => gsap.set(fill, { scaleX: self.progress })
    }
  });

  gsap.to(".chapter__body, .chapter__title", {
    xPercent: -6, ease: "none",
    scrollTrigger: { trigger: ".story__viewport", start: "center center",
                     end: () => "+=" + distance(), scrub: 1, invalidateOnRefresh: true }
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   17 · PROCESSO
   ─────────────────────────────────────────────────────────────────────────── */
function initProcess() {
  const video = mountVideo($("#machineVideo"), SITE.videos.machine, "#processo");
  const line = $("#processLine"), pin = $(".process__pin");

  revealBlock($(".process .eyebrow"));
  revealWords($("#proTitle"));

  $$(".step").forEach((s, i) => {
    revealBlock(s, { delay: i * .1, start: "top 88%" });
    if (!REDUCED) gsap.fromTo(s.querySelector(".step__rule"), { scaleX: 0 }, {
      scaleX: 1, duration: 1, ease: EASE, delay: i * .1 + .1,
      scrollTrigger: { trigger: s, start: "top 88%", once: true }
    });
  });

  if (REDUCED) { splitWords(line).forEach(w => gsap.set(w, { yPercent: 0 })); return; }

  if (MOBILE) { revealWords(line, { trigger: pin, start: "top 60%" }); return; }

  const END = () => "+=" + innerHeight * 0.9;

  // Il pin e lo scrub del video: costruiti una volta sola, mai ricostruiti.
  const state = { p: 0 };
  gsap.timeline({
    scrollTrigger: { trigger: "#processo", start: "top top", end: END,
                     pin: pin, scrub: 1.1, anticipatePin: 1, invalidateOnRefresh: true }
  })
  .to(state, {
    p: 1, ease: "none", duration: 1,
    onUpdate: () => { if (video && video.duration) video.currentTime = state.p * video.duration; }
  }, 0)
  .fromTo(".process__media", { scale: 1.14 }, { scale: 1, ease: "none", duration: 1 }, 0);

  // La frase vive su una sua timeline: al cambio lingua si ricostruisce da sola.
  const build = () => {
    const prev = ScrollTrigger.getById("procLine");
    if (prev) prev.kill();
    const words = $$(".w > .wi", line);
    gsap.set(words, HIDDEN);
    gsap.set(line, { opacity: 1 });
    gsap.timeline({
      scrollTrigger: { id: "procLine", trigger: "#processo", start: "top top", end: END,
                       scrub: 1.1, invalidateOnRefresh: true,
                       onUpdate: self => line.classList.toggle("is-in", self.progress > .45) }
    })
    .to({}, { duration: .42 })
    .to(words, { yPercent: 0, rotate: 0, duration: .3, ease: EASE, stagger: .05 })
    .to({}, { duration: .16 })
    .to(line, { opacity: 0, duration: .12 });
  };
  splitWords(line);
  build();
  rebuilders.push(build);
}

/* ───────────────────────────────────────────────────────────────────────────
   18 · LAVORI — galleria orizzontale
   ─────────────────────────────────────────────────────────────────────────── */
function initWork() {
  revealBlock($(".work .eyebrow"));
  revealWords($("#worTitle"));

  const g = $("#gallery"), fill = $("#workFill");
  if (!g) return;

  $$(".card").forEach((c, i) => revealBlock(c, { delay: i * .07, trigger: g, start: "top 88%" }));

  const progress = () => {
    const max = g.scrollWidth - g.clientWidth;
    gsap.set(fill, { scaleX: max > 0 ? clamp(g.scrollLeft / max, .04, 1) : 1 });
  };
  g.addEventListener("scroll", progress, { passive: true });
  progress();

  // Rotellina verticale → scorrimento orizzontale, senza intrappolare la pagina.
  g.addEventListener("wheel", e => {
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    const max = g.scrollWidth - g.clientWidth;
    const atStart = g.scrollLeft <= 0, atEnd = g.scrollLeft >= max - 1;
    if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) return;  // restituisce lo scroll
    e.preventDefault();
    g.scrollLeft += e.deltaY;
  }, { passive: false });

  // Trascinamento con inerzia.
  let down = false, startX = 0, startL = 0, moved = 0, vx = 0, lastX = 0, raf = 0;
  g.addEventListener("pointerdown", e => {
    if (e.pointerType === "touch") return;   // su touch basta lo scroll nativo
    down = true; moved = 0; startX = lastX = e.clientX; startL = g.scrollLeft;
    g.classList.add("is-drag"); cancelAnimationFrame(raf);
  });
  addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - startX;
    moved = Math.abs(dx);
    vx = e.clientX - lastX; lastX = e.clientX;
    g.scrollLeft = startL - dx;
  });
  addEventListener("pointerup", () => {
    if (!down) return;
    down = false; g.classList.remove("is-drag");
    let v = vx * 12;
    const glide = () => {
      v *= .92; g.scrollLeft -= v;
      if (Math.abs(v) > .5) raf = requestAnimationFrame(glide);
    };
    glide();
  });
  // Un trascinamento non deve attivare il link della card.
  g.addEventListener("click", e => { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } }, true);

  // Tastiera
  g.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { g.scrollLeft += 320; e.preventDefault(); }
    if (e.key === "ArrowLeft")  { g.scrollLeft -= 320; e.preventDefault(); }
  });

  // Inclinazione della card verso il puntatore.
  if (FINE && !REDUCED) $$(".card").forEach(card => {
    const rX = gsap.quickTo(card, "rotationX", { duration: .6, ease: EASE });
    const rY = gsap.quickTo(card, "rotationY", { duration: .6, ease: EASE });
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      rY(((e.clientX - r.left) / r.width - .5) * 6);
      rX(((e.clientY - r.top) / r.height - .5) * -6);
    });
    card.addEventListener("pointerleave", () => { rX(0); rY(0); });
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   19 · FORM
   ─────────────────────────────────────────────────────────────────────────── */
function initForm() {
  const form = $("#form"), done = $("#formDone");
  if (!form) return;

  revealWords($(".cta__l[data-i18n='cta.l1']"));
  revealWords($(".cta__l[data-i18n='cta.l2']"));
  revealBlock($(".cta__sub"));

  const setErr = (field, msg) => {
    field.classList.toggle("is-err", !!msg);
    const s = field.querySelector("[data-err]");
    if (s) s.textContent = msg || "";
  };

  const validate = () => {
    let ok = true;
    $$(".field", form).forEach(field => {
      const input = field.querySelector("input, textarea");
      if (!input || !input.required) return;
      const v = input.value.trim();
      if (!v) { setErr(field, t("form.errRequired")); ok = false; }
      else if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        setErr(field, t("form.errEmail")); ok = false;
      } else setErr(field, "");
    });
    return ok;
  };

  $$(".field input, .field textarea", form).forEach(i =>
    i.addEventListener("input", () => setErr(i.closest(".field"), "")));

  const succeed = (key = "form.done") => {
    const msg = done.querySelector("p");
    msg.dataset.i18n = key;
    msg.textContent = t(key);
    gsap.timeline()
      .to(form, { opacity: 0, y: -16, duration: .5, ease: "power2.in",
                  onComplete: () => { form.hidden = true; done.hidden = false; } })
      .fromTo(done, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .7, ease: EASE })
      .fromTo(".tick path", { strokeDashoffset: 44 }, { strokeDashoffset: 0, duration: .8, ease: EASE }, "-=.4");
  };

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!validate()) return;

    const data = Object.fromEntries(new FormData(form).entries());

    // Con un endpoint configurato si invia via HTTP; altrimenti si apre il client di posta.
    if (SITE.formEndpoint) {
      const btn = form.querySelector("button[type=submit] span");
      const old = btn.textContent; btn.textContent = t("form.sending");
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST", headers: { "Accept": "application/json" }, body: new FormData(form)
        });
        if (!res.ok) throw new Error(res.status);
        succeed();
      } catch (err) {
        btn.textContent = old;
        setErr($(".field--full", form), t("form.errRequired"));
      }
      return;
    }

    const body = [
      `${t("form.name")}: ${data.name}`,
      `${t("form.email")}: ${data.email}`,
      `${t("form.type")}: ${data.type}`,
      `${t("form.budget")}: ${data.budget || "—"}`,
      "",
      data.message
    ].join("\n");
    // Qui il messaggio non è stato ricevuto da nessuno: è solo stato preparato.
    // Dirlo com'è, invece di annunciare una consegna che non è avvenuta.
    window.location.href = `mailto:${SITE.email}` +
      `?subject=${encodeURIComponent(t("form.subject"))}&body=${encodeURIComponent(body)}`;
    succeed("form.doneMail");
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   20 · FOOTER — orologio + barra di avanzamento
   ─────────────────────────────────────────────────────────────────────────── */
function initClock() {
  const el = $("#clock"); if (!el) return;
  const fmt = new Intl.DateTimeFormat("it-IT", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: false, timeZone: SITE.timezone
  });
  const tick = () => { el.textContent = fmt.format(new Date()); };
  tick();
  if (!REDUCED) setInterval(tick, 1000);

  const copy = $("#copy");
  if (copy) copy.textContent = `© ${new Date().getFullYear()} Stefano Mascellini`;

  gsap.fromTo(".foot__rule", { scaleX: 0 }, {
    scaleX: 1, duration: 1.2, ease: EASE,
    scrollTrigger: { trigger: ".foot", start: "top 85%", once: true }
  });
}

function initRail() {
  const fill = $("#railFill"), label = $("#railLabel");
  if (!fill) return;

  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate: self => gsap.set(fill, { scaleY: self.progress })
  });

  const sections = [
    ["#hero", "rail.01"], ["#prodotti", "rail.02"], ["#missione", "rail.03"],
    ["#forme", "rail.04"], ["#servizi", "rail.05"], ["#percorso", "rail.06"],
    ["#processo", "rail.07"], ["#lavori", "rail.08"], ["#contatti", "rail.09"]
  ];
  sections.forEach(([sel, key]) => {
    const el = $(sel); if (!el) return;
    ScrollTrigger.create({
      trigger: el, start: "top 60%", end: "bottom 40%",
      onToggle: self => { if (self.isActive) label.textContent = t(key); }
    });
  });
}

/* ───────────────────────────────────────────────────────────────────────────
   21 · AVVIO
   ─────────────────────────────────────────────────────────────────────────── */
function boot() {
  if (typeof gsap === "undefined") {
    // Senza GSAP il sito resta leggibile: rimuoviamo gli stati nascosti.
    document.documentElement.classList.replace("js", "no-js");
    const pre = $("#preloader"); if (pre) pre.remove();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);
  ScrollTrigger.config({ ignoreMobileResize: true });
  history.scrollRestoration = "manual";

  initI18N();
  initSocial();
  updateMailLink();
  initAnchors();

  initPreloader().then(() => {
    initLenis();
    initCursor();
    initMagnetic();
    initNav();

    initHero();
    initProducts();
    initMission();
    initBreak();
    initPillars();
    initStory();
    initProcess();
    initWork();
    initForm();
    initClock();
    if (FINE) initRail();

    document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());

    let rt;
    addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => ScrollTrigger.refresh(), 150);
    });
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
