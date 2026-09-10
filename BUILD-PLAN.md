# MASTER BUILD PLAN
## Stefano Mascellini — Portfolio
### Creative Brief + Complete Implementation Specification

> **Document type:** Creative brief (§1–§7) followed by build instructions for Claude Code (§8–§24).
> **Primary language:** Italian. **Secondary:** English via toggle.
> **Stack:** static HTML / CSS / vanilla JS. GSAP + ScrollTrigger + Lenis via CDN. No frameworks.
> **Target:** Awwwards-grade cinematic scroll storytelling.

---

## ⚠️ OPEN ITEMS — RESOLVE BEFORE PUBLISHING

These are the only places in this document where information was invented or assumed. Everything else comes from the interview or from Stefano's existing project files.

| # | Item | Status | Where it lives |
|---|---|---|---|
| 1 | **Public contact email** | Assumed `stefano.mascellini09@gmail.com`. A dedicated alias on a custom domain is strongly recommended for a public site. Editable at `SITE.email`. | §17 |
| 2 | **Project status labels** | The existing `Portfolio/content/projects.ts` marks all four as `UNCONFIRMED`. Decide per project: *Disponibile · Beta · In sviluppo*. They appear in two places. | §10, §16 |
| 3 | **Project one-liners** | Inferred from the feature flags in `Portfolio/content/projects.ts`. Confirm each line is accurate before launch. | §16 |
| 4 | **Project poster images** | Four screenshots/renders needed at `assets/img/work/`. Until they exist, designed monochrome placeholders. | §16, §25 |
| 5 | **Social links** | Empty by default. Fill `SITE.social` or the links do not render at all. | §18 |

> **No invented data.** The statistics strip has been removed at Stefano's direction and replaced by the four real products (§10). There are no made-up numbers anywhere on this site — every claim is verifiable.
> **No people on camera.** Per Stefano's direction, no identity reference image is used and no human figure appears in any of the three clips. See §5.

**Rule for the build:** the site must be complete, beautiful and shippable *before* any video exists. Every cinematic clip has a designed CSS/canvas fallback. Videos drop in later with zero refactoring.

---

# §1 — WEBSITE OVERVIEW

**Project name:** Stefano Mascellini — Portfolio
**Type:** Personal portfolio / independent software studio of one
**Domain of work:** Websites · Desktop & mobile applications · Automation bots · Debug & rescue

**What this site is:**
A single-page cinematic scroll experience that behaves like a short film about one idea: *things that should exist, get built — things that repeat, disappear into software.*

The visitor never reads a résumé. They fall through a sequence: a machine opens → the numbers land → the manifesto burns in → three disciplines → the origin story → how the work happens → the work itself → an invitation.

**Primary objective:** convert a stranger into a project conversation (form submission or email).
**Secondary objective:** establish that a single independent builder can deliver studio-grade work.

**Audience:**
- Founders and small teams with an idea and no technical partner
- Brands who need a site that doesn't look like a template
- Businesses drowning in a repetitive manual process
- Teams with an existing broken/abandoned codebase

**Success feels like:** *"This person is expensive, and worth it."*

**Language:** Italian is the source of truth. English is a first-class translation, not an afterthought. Toggle lives in the nav (`IT / EN`), persists in `localStorage`, updates `<html lang>`.

---

# §2 — CORE POSITIONING

### Positioning statement
> Stefano Mascellini builds the software an idea needs to exist — and deletes the work a human should never have been doing.

### The one-line promise
**IT:** «Dall'idea al software. Siti, applicazioni, automazioni.»
**EN:** "From idea to software. Websites, applications, automations."

### The belief (used as the manifesto)
**IT:** «Ogni idea merita un posto dove esistere. Ogni azione ripetuta merita di sparire dentro un software.»
**EN:** "Every idea deserves a place to exist. Every repeated action deserves to disappear into software."

### Category
Independent software craftsman. Not an agency (no account managers, no handoffs). Not a freelancer marketplace profile (no bidding, no commodity). A studio of one who signs the work.

### Differentiators
1. **One person, start to finish.** The person you talk to is the person who writes the code. Nothing is lost in translation because there is no translation.
2. **Two directions of value.** Most builders only add — a site, an app. Stefano also *subtracts*: the automation that removes work permanently.
3. **He builds his own products.** MuteWell, CleanCut, AegisOS, MT5 Bridge. The standard applied to client work is the standard applied to his own name.
4. **He walks into other people's code.** Debug & rescue is a stated service, not a favour. Most builders refuse this.

### Objection handling (baked into the copy)
- *"Can one person really do this?"* → the featured-work section, four shipped products.
- *"Will it be slow?"* → the process section: fixed scope, weekly deliveries.
- *"Will I be locked in?"* → footer/process line: "Il codice è tuo. Sempre."
- *"Is it expensive?"* → the products strip and featured work carry the proof of standard; price is settled at step 02 of the process, before any work starts.

---

# §3 — BRAND PERSONALITY

**Four words:** cinematic · premium · minimal · luxury.

### Voice
| We are | We are not |
|---|---|
| Calm, declarative, short sentences | Hyped, exclamation marks, emoji |
| Concrete ("un bot Telegram che risponde di notte") | Abstract ("soluzioni digitali innovative a 360°") |
| Confident without volume | Motivational-speaker energy |
| Technically literate, never jargon-drunk | Buzzword salad, "AI-powered synergy" |
| Warm at the human moments (the story) | Corporate-cold throughout |

### Voice rules for all copy
- Maximum ~14 words per headline line.
- Full stops inside headlines are allowed and encouraged — they slow the reader down. *"Dall'idea al software."*
- Never use "soluzioni", "a 360°", "chiavi in mano", "innovativo", "sinergia".
- Italian is informal-professional: **tu**, never *voi*/*Lei*.
- English translation matches rhythm, not word count. Translate the *beat*, not the words.

### The archetype
**The Craftsman / The Magician.** Someone who works alone at night, delivers something that feels inevitable in the morning, and does not explain how.

### Tone by section
| Section | Temperature |
|---|---|
| Hero | Cold. Silent. Inevitable. |
| Products strip | Factual. Mechanical. A manifest, not a pitch. |
| Manifesto | Hot. This is the one place with conviction. |
| Pillars | Precise. Technical. Confident. |
| Story | Human. First person. Almost quiet. |
| Process | Reassuring. Structured. |
| Work | Proud, understated. |
| CTA | Direct. An open hand. |

---

# §4 — VISUAL DIRECTION

### The concept: **TITANIO**

Machined space-grey aluminium in a black void, lit by one hard key light. Think: an unboxing shot at 2am. Product photography for something that has no product. The screen is a slab of anodised metal and light moves across it as you scroll.

**No colour accent.** Restraint *is* the luxury. The only "colour" in the entire site is the temperature of light — cold silver on metal, a faint warm bloom where a screen glows. Anything more would cheapen it.

### Material language
- **Surfaces:** near-black planes with a 1px titanium hairline edge, never a "card with a border radius and a drop shadow".
- **Light:** one directional specular sweep. Buttons and headline fills carry a slow-moving silver gradient sheen, like light travelling across brushed metal.
- **Depth:** achieved through *value* (near-black on black) and *blur*, never through shadow.
- **Grain:** an always-on film grain overlay at ~3.5% opacity, animated in steps. This single element does more for "cinematic" than any other decision.
- **Vignette:** a permanent soft radial vignette on the viewport. The frame is a lens, not a browser.

### Composition rules
- Huge type against enormous negative space. If it feels too empty, it is correct.
- Content sits on a 12-column grid but *deliberately breaks it* — headlines bleed past the left margin to the viewport edge.
- Full-bleed video sections alternate with tight, contained type sections. Wide → narrow → wide is the rhythm of the whole page.
- Hairline rules (1px, `--titanium`) act as chapter markers, and they *draw themselves* on scroll.

### Motion signature
Everything enters from *behind a mask*, never by fading in from nowhere. Text is revealed the way a curtain lifts. This is the single most important motion decision in the document — it is what separates this from a template.

### Anti-patterns — explicitly forbidden
- Gradient buttons, glassmorphism, neon glow, purple/blue tech gradients
- Emoji, stock icon sets, Lottie mascots
- Bouncy/elastic easing, spinning entrances, parallax on everything
- Rounded corners above 4px on structural elements
- More than two font families
- Scroll-jacking that fights the user's input

---

# §5 — HIGGSFIELD SEEDANCE 2.0 — ASSET GENERATION

### Global settings for every clip
| Parameter | Value |
|---|---|
| Model | **Higgsfield Seedance 2.0** — model id `seedance_2_0` |
| Resolution | **1080p** (1920×1080, 16:9) |
| Duration | **8–12 s** (per clip, see each scene) |
| Frame rate | 24 fps (cinematic shutter) |
| Aspect | 16:9 — mobile is handled by CSS `object-fit: cover`, do not regenerate vertically |
| Audio | None. This site is silent. |
| People on screen | **None.** No clip contains a person, a face or hands. |
| Continuity | **3 separate clips**, not one continuous shot (per Stefano's direction) |

### Verified generation parameters

Checked against the live model catalogue, not from memory:

```jsonc
{
  "model": "seedance_2_0",
  "prompt": "…",            // the scene prompt + global style suffix
  "duration": 10,            // 4–15
  "resolution": "1080p",     // 480p · 720p · 1080p · 4k
  "mode": "std",             // ⚠️ 1080p and 4k REQUIRE std; fast caps at 720p
  "aspect_ratio": "16:9",
  "bitrate_mode": "high",    // vale la pena: il grading è quasi tutto nero
  "genre": "auto",
  "generate_audio": false    // ⚠️ il default è TRUE — il sito è muto
}
```

> **Due trappole.** `generate_audio` è `true` di default: senza passarlo esplicitamente a `false` ogni clip arriva con audio generato, che qui non serve e costa. E `mode: "fast"` non arriva a 1080p — chiedere 1080p in fast fa scendere silenziosamente la risoluzione.

### Cost, measured with `get_cost` (no job submitted)

| Configuration | Credits |
|---|---|
| **Spec: `seedance_2_0`, std, 1080p, 10 s, muto** | **90** |
| `seedance_2_0`, fast, 720p, 4 s | 14 |
| `seedance_2_0_mini`, 480p, 8 s | 8 |
| `seedance_2_0_mini`, 480p, 7 s | 7 |
| `seedance_2_0`, fast, 480p, 4 s | 6 |

Tre clip alla spec = **~270 crediti**. Il costo scala con durata × risoluzione, quindi la scena 03 (12 s) costa circa un quinto in più della 01 e della 02.

**Stato al 10 settembre 2026:** saldo 7.01 crediti, piano free. Nessuna generazione lanciata — a 480p il clip sarebbe più morbido del fallback CSS, quindi si aspetta la ricarica. Il sito è completo e pubblicabile nel frattempo.

### No people — mandatory instruction
> ⚠️ **No clip on this site contains a person.** Per Stefano's direction, no identity reference image is attached to any generation, and no human figure, face or hands may appear in any output.
>
> This is a creative advantage, not a compromise. An object-only film has no face to drift between shots, no wardrobe to match, no "stock-footage actor" tell, and it ages far more slowly. The three clips become one coherent product film: **a machine opens · three forms assemble · the machine runs alone in an empty room.**
>
> Human presence is carried entirely by *absence* — the empty chair in Scene 03 — and by the first-person copy throughout the site. Handled this way it reads as more confident than a person on camera, not less.
>
> Enforce it via the negative prompt on **every** generation (`person, people, human figure, face, hands…`, below) and re-roll any output where a figure, silhouette or reflection of a person appears.


### Global style suffix — append to every prompt
```
Shot on 35mm anamorphic, shallow depth of field, single hard key light with deep
falloff, pure black void background, space grey machined aluminium surfaces, cold
silver specular highlights, no colour cast, heavy negative space, slow deliberate
camera, cinematic film grain, 24fps, photorealistic, premium product-film aesthetic,
no people, no text overlays, no captions, no logos, no watermark.
```

### Global negative prompt
```
person, people, human figure, face, portrait, hands, fingers, arms, silhouette of a
person, reflection of a person, crowd, text, captions, subtitles, watermark, logo,
ui overlay, readable interface text, colour grading with teal or orange, neon, purple,
blue tech glow, lens flare spam, fast cuts, whip pans, shaky handheld, stock footage
look, crowded background, clutter, morphing objects, warped geometry, low resolution,
oversharpened.
```

### Output naming and post-processing
Export each clip, then encode for web with the commands below. Store everything in `assets/video/`.

| Scene | Source name | Web assets |
|---|---|---|
| 01 | `scene-01-hero_raw.mp4` | `scene-01-hero.mp4` · `scene-01-hero.webm` · `scene-01-hero.webp` (poster) |
| 02 | `scene-02-forms_raw.mp4` | `scene-02-forms.mp4` · `.webm` · `.webp` |
| 03 | `scene-03-machine_raw.mp4` | `scene-03-machine.mp4` · `.webm` · `.webp` |

```bash
# 1) H.264 — universal, and the ONLY format that scrubs reliably in Safari.
#    -g 1 forces every frame to be a keyframe: this is what makes scroll-scrubbing smooth.
ffmpeg -i scene-01-hero_raw.mp4 -an -vf "scale=1920:-2,fps=24" \
  -c:v libx264 -profile:v high -crf 22 -preset slow -g 1 -pix_fmt yuv420p \
  -movflags +faststart assets/video/scene-01-hero.mp4

# 2) VP9/WebM — smaller, for Chrome/Firefox
ffmpeg -i scene-01-hero_raw.mp4 -an -vf "scale=1920:-2,fps=24" \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -g 1 assets/video/scene-01-hero.webm

# 3) Poster frame (also the reduced-motion + no-JS fallback image)
ffmpeg -i scene-01-hero_raw.mp4 -vf "select=eq(n\,12),scale=1920:-2" -frames:v 1 \
  -q:v 80 assets/video/scene-01-hero.webp
```
Repeat for scenes 02 and 03. **Budget: ≤ 4 MB per MP4.** If a clip exceeds it, raise `-crf` to 24–26 before reducing resolution.

> **Why `-g 1` matters:** scroll-scrubbing sets `video.currentTime` on every frame. With normal GOP spacing the browser must decode from the previous keyframe each time, which stutters. All-intra encoding costs file size and buys buttery scrubbing. This is non-negotiable for scenes 01 and 03.

---

# §6 — THE THREE CINEMATIC SCENES

---

## SCENE 01 — «L'APERTURA» / *The Opening*
**Placement:** Hero. Pinned, scroll-scrubbed. The first thing anyone sees.
**Duration:** 10 s · **On screen:** object only, no person
**Narrative job:** The machine opens and the promise comes out of it. The site *boots*.

**Prompt — paste into Seedance 2.0:**
```
Extreme cinematic product shot in a pure black void. A closed space grey machined
aluminium laptop rests on an invisible black surface, lit by a single hard key light
raking across the brushed metal lid, cold silver specular highlight travelling along
its edge. The laptop begins to open in perfect slow motion — the screen half lifting
upward while the keyboard base simultaneously tilts downward, unfolding symmetrically
like a precision instrument. A blade of soft white light escapes from the widening
seam between the two halves, growing brighter as the gap opens, spilling across the
metal and into the void. Fine dust particles drift through the light beam. The camera
performs one slow continuous dolly push-in toward the seam with a subtle downward
tilt, the reflection on the aluminium sliding as the angle changes. The shot ends with
the laptop fully open, the screen a clean field of glowing white light, the void
around it absolute black.

Shot on 35mm anamorphic, shallow depth of field, single hard key light with deep
falloff, pure black void background, space grey machined aluminium surfaces, cold
silver specular highlights, no colour cast, heavy negative space, slow deliberate
camera, cinematic film grain, 24fps, photorealistic, premium product-film aesthetic,
no text overlays, no captions, no logos, no watermark.
```

**Direction notes:**
- The screen must end as a **blank white glow, never showing an interface**. The website's own headline is what emerges from that light, in real HTML type — not baked into the video. That's the trick: the video hands off to the page.
- Keep the final second nearly static. The scrub ends there, and any drift will read as a glitch.
- If the "both halves unfolding" motion produces artefacts, re-roll with: *"the lid lifting while the base settles downward"* — same read, easier for the model.

**How the site uses it:** pinned 200vh section, `currentTime` scrubbed to scroll progress, hero headline masked-reveals in sync with the seam of light, then the whole frame scales up and dissolves into the next section.

---

## SCENE 02 — «LE TRE FORME» / *The Three Forms*
**Placement:** Between the manifesto and the three pillars. Full-bleed, ambient loop.
**Duration:** 9 s · **On screen:** objects only, no person
**Narrative job:** Show the three disciplines as three physical objects before naming them in words. The section that follows is Siti · Applicazioni · Automazioni — this clip is its title card.

**Prompt — paste into Seedance 2.0:**
```
Extreme cinematic product shot in a pure black void. Three slabs of space grey machined
aluminium float in the darkness, weightless and perfectly still at first: a wide
landscape panel, a tall narrow slab the proportion of a phone, and a small deep block.
A single hard key light rakes across them, cold silver specular highlights sliding along
their milled edges, each casting no shadow into the infinite black. The three forms
begin to rotate slowly and drift into alignment with each other, their faces catching
the light one after another as they turn, thin blades of pale white light igniting along
the seams where each slab's face meets its edge. Fine dust particles drift through the
key light. The camera performs one slow continuous orbit around the group, the
reflections travelling across the brushed metal as the angle changes, the composition
resolving with the three forms locked in a clean diagonal arrangement, wide empty black
space on the left of frame.

Shot on 35mm anamorphic, shallow depth of field, single hard key light with deep
falloff, pure black void background, space grey machined aluminium surfaces, cold
silver specular highlights, no colour cast, heavy negative space, slow deliberate
camera, cinematic film grain, 24fps, photorealistic, premium product-film aesthetic,
no people, no text overlays, no captions, no logos, no watermark.
```

**Direction notes:**
- The three slabs must stay **abstract objects**, never mockups. The moment one shows a browser chrome or an app icon it becomes a template screenshot.
- Faces stay dark metal or pure light — **never a readable interface**. Readable UI dates instantly.
- The wide empty black on the left of the final composition is deliberate: the section's headline sits in it.
- If the model struggles with three objects at once, re-roll with *"three metal panels of different proportions"* — the read survives.

**How the site uses it:** full-bleed 100vh loop, muted, `playsinline`, played only while in viewport. Headline in the negative space on the left. Scroll-linked `scale: 1.08 → 1.0` for weight without parallax noise.

---

## SCENE 03 — «LA MACCHINA CHE LAVORA DA SOLA» / *The Machine That Works Alone*
**Placement:** Opening the process / automation section. Pinned, scroll-scrubbed.
**Duration:** 12 s · **On screen:** empty room, no person — *the absence is the shot*
**Narrative job:** The emotional payload of the entire site. The work is happening and nobody is there.

**Prompt — paste into Seedance 2.0:**
```
Cinematic night interior of an empty minimal space grey room, near-total darkness. A
wall of screens glows quietly in cold silver monochrome light, the only light source in
the room. An empty desk chair sits in the foreground, pushed back and turned slightly
away, half lit by the screen glow, clearly just vacated. On the desk a closed laptop and
a still coffee cup catch a thin rim of light. The screens are working entirely by
themselves: pale lines of terminal text cascading upward, small notification panels
pulsing softly one after another in sequence, progress indicators filling themselves,
all abstract and unreadable. Dust drifts slowly through the beam of screen light. The
camera holds completely still on the empty chair for a long beat, then begins one very
slow push-in past it toward the glowing screens, the dark empty room widening around the
light. The shot ends close on the screens still running alone in the darkness.

Shot on 35mm anamorphic, shallow depth of field, single hard key light with deep
falloff, pure black void background, space grey machined aluminium surfaces, cold
silver specular highlights, no colour cast, heavy negative space, slow deliberate
camera, cinematic film grain, 24fps, photorealistic, premium product-film aesthetic,
no people, no text overlays, no captions, no logos, no watermark.
```

**Direction notes:**
- **The empty chair is the whole thesis in one prop.** It must be clearly, deliberately empty — pushed back and angled, never neatly tucked in. Keep it in frame for the first third of the clip.
- Notifications pulse **in sequence, never simultaneously**. It has to read as a system working through a queue, not as a screensaver.
- The long still hold at the start is what makes the push-in land. Resist the urge to move immediately.
- Re-roll immediately if any figure, silhouette or reflection of a person appears in the screens or the room.

**How the site uses it:** pinned scrub over 220vh. At the scroll frame where the camera leaves the empty chair behind, the line «Tu vai a dormire. Il software no.» / *"You go to sleep. The software doesn't."* mask-reveals over the running screens, then the four process steps count in.

---


# §7 — WEBSITE STRUCTURE

Single page. Nine acts. One continuous fall.

```
┌─ 00  PRELOADER — «Sipario»            counter 00→100, hairline, curtain lift
├─ ▸   NAV — fixed, minimal              wordmark · IT/EN · Contatti
│
├─ 01  HERO                              SCENE 01 scrubbed · huge kinetic title
├─ 02  PRODUCTS STRIP                    4 prodotti · manifest rows + marquee
├─ 03  MISSION / MANIFESTO               kinetic typography, no imagery
├─ ▸   SCENE 02 — full-bleed break       «Le tre forme»
├─ 04  THREE PILLARS                     Siti · Applicazioni · Automazioni (+ Debug)
├─ 05  STORY — «Il percorso»             4 chapters, horizontal on desktop
├─ 06  PROCESS / SERVICE                 SCENE 03 scrubbed · 4 steps
├─ 07  FEATURED WORK                     4 projects, horizontal scroll gallery
├─ 08  FINAL CTA                         form + email, huge type
└─ 09  FOOTER                            wordmark, links, colophon, clock
```

**Scroll length:** ~1500 vh desktop (≈15 viewport heights), ~1400 vh mobile. Measured on the build, not estimated. Long enough to be a film, short enough to finish.

**Rhythm map** — this is what stops it feeling like a scroll-effect demo reel:

| Act | Density | Motion |
|---|---|---|
| Hero | empty | pinned scrub — heavy |
| Products strip | dense | quick, mechanical |
| Manifesto | empty | slow kinetic type |
| Scene 02 | full-bleed | ambient, almost none |
| Pillars | dense | interactive |
| Story | medium | horizontal drift |
| Process | full-bleed | pinned scrub — heavy |
| Work | dense | horizontal, tactile |
| CTA | empty | still |

Two pinned scrub sections only (Hero, Process). Any more and the page becomes exhausting.

---

# §8 — PRELOADER — «SIPARIO»

**Duration:** 1.6 s minimum, exits as soon as the hero poster + fonts are ready.

- Full-viewport `--void` panel.
- Centre-left: a mono counter `00 → 100`, `clamp(3rem, 10vw, 8rem)`, tabular numerals, tightly tracked.
- A 1px `--titanium` hairline under it grows `scaleX: 0 → 1` in lockstep with the counter.
- Bottom-left, small mono: `STEFANO MASCELLINI — PORTFOLIO ©2026`
- On complete: counter mask-wipes upward, then the panel splits into two halves that slide off top and bottom (`clip-path` inset), revealing the hero already mid-motion. **Never fade the preloader out.** The curtain must move.
- `body { overflow: hidden }` during preload; released on completion, and Lenis is started only then.
- **Timeout guard:** if assets are not ready after 3.5 s, exit anyway. A preloader must never trap a user.
- `prefers-reduced-motion`: preloader is skipped entirely.

---

# §9 — HERO SECTION

**Structure:** `<section id="hero">` — 250vh tall, inner wrapper pinned for the duration.

**Layers, back to front:**
1. `<video>` Scene 01, `muted playsinline preload="auto"`, `object-fit: cover`, poster `scene-01-hero.webp`.
2. Radial vignette + a bottom-to-top `--void` gradient scrim so type always has contrast.
3. Type layer.
4. Grain (global, sits above everything at `z-index: 9999`, `pointer-events: none`).

**Copy — Italian:**
- Eyebrow (mono, letterspaced): `SVILUPPATORE INDIPENDENTE — ITALIA`
- Headline, three lines, enormous:
  ```
  DALL'IDEA
  AL
  SOFTWARE.
  ```
- Subline: «Siti, applicazioni desktop e mobile, automazioni. Progettati e costruiti da una persona sola — come se fossero miei.»
- Primary CTA: `Parliamo del tuo progetto`
- Secondary CTA: `Guarda i lavori`
- Scroll cue, bottom-right, mono: `SCORRI` + a 1px line that pulses downward

**Copy — English:**
- Eyebrow: `INDEPENDENT DEVELOPER — ITALY`
- Headline: `FROM IDEA` / `TO` / `SOFTWARE.`
- Subline: "Websites, desktop and mobile applications, automations. Designed and built by one person — as if they were my own."
- CTAs: `Let's talk about your project` · `See the work` · `SCROLL`

**Composition:** the machine sits **centred**, and the headline sits **centred over its lit screen**. The screen is the light source the title comes out of — that is the whole shot, so nothing is offset to one side.

**Type treatment:**
- `font-size: clamp(2.6rem, min(13.5vw, 19vh), 15rem)`, weight 700, `line-height: 0.86`, `letter-spacing: -0.045em`, uppercase, centred. The `19vh` ceiling exists because three lines this large do not fit a short viewport — without it, `SOFTWARE.` falls off the bottom.
- The word **`SOFTWARE.`** carries the silver sheen gradient fill, the other two lines are `--platinum`. One accent, not three.
- **Legibility over the light:** `.hero__content` carries a `drop-shadow()` halo, *not* a dark scrim behind the block. Any ellipse large enough to cover the title also covers the screen and kills the light — the two cannot share a pixel. `drop-shadow` works on the painted alpha, so the dark halo follows the letterforms and the light survives between them. It is also the only option that works on the `.sheen` line: that text is transparent with a clipped background, so a `text-shadow` would draw a black silhouette instead of a halo.
- The rest zoom is deliberately low (`1.2`) so the title is **wider than the screen** — `DALL'IDEA` and `SOFTWARE.` overhang onto black and read cleanly, while `AL` sits in the middle of the glare. Zooming in further at rest puts every line on white and no amount of halo saves it.

**Choreography — two phases.**

**Phase A — the opening. Plays by itself on load, ~2.8 s.** Not tied to scroll: bound to scroll, the first frame of the site would be a dark screen with only an eyebrow on it, and the headline is the LCP element.

| t | What happens |
|---|---|
| 0.00 | Laptop closed, centred. Eyebrow visible. |
| 0.00→2.40 | Lid rotates `--open` 0 → 1. Screen fills with light on `--open²`. |
| 0.00→2.80 | Camera pushes in: `--zoom` 1 → 1.2. |
| 0.95 | Line 1 `DALL'IDEA` mask-reveals out of the light. |
| 1.06 | Line 2 `AL` — the line that lands in the middle of the glare. |
| 1.17 | Line 3 `SOFTWARE.`, sheen fill running. |
| ~1.7 | Subline, then CTAs, rise in (`y: 24 → 0`). |

**Phase B — the dive. Scrubbed on the pinned scroll.** The push-in continues until the camera is inside the screen.

| `p` | What happens |
|---|---|
| 0.00→0.78 | `--zoom` 1.2 → 4.6. The bezel leaves frame; the light fills everything. `video.currentTime` scrubs in step when a clip is present. |
| 0.70→1.00 | `.hero__content` `scale: 1 → 1.18`, `opacity → 0`. |
| 0.72→1.00 | `.hero__media` `opacity → 0`, `blur(0 → 7px)`. Section 02 rises out of the light. |

Phases A and B are separate timelines on purpose. Auto-advancing the progress of a scrubbed timeline fights ScrollTrigger, which snaps it straight back to the scroll position.

**No-video fallback (must look intentional):** a real MacBook, built in CSS 3D and opening on a real hinge — not an abstract slab. Geometry: `.mac__world` is the desk plane (`rotateX(63deg)`); the base lies on it unrotated, carrying a keyboard deck and trackpad; the lid is hinged on the **rear** edge (`transform-origin: 50% 0`) and rotates `0 → 102deg`, standing up and leaning very slightly toward camera. The lid's outer face is machined aluminium and its **backface** is the screen (`rotateY(180deg)` + `backface-visibility: hidden`) — so you see the shell when it is closed and the screen as it rises, exactly as in life. The screen fills with white light on `--open²`, and a blurred beam spills into the void.

Driven by the same GSAP timeline as the video, so the choreography is identical: `--open` 0 → 0.18 during the intro, 0.18 → 1 across the scrub. Enabled automatically whenever `SITE.videos.hero` is empty, the video fails to load, or `prefers-reduced-motion` is set.

> The sign of the lid rotation is the whole trick and it is easy to get backwards: `rotateX(-102deg)` folds the lid *down and behind* the desk while still showing the aluminium face. Verify against the transform chain, not by eye — at small sizes a wrongly-folded lid still reads as "a dark shape" and passes a glance.

---

# §10 — PRODUCTS STRIP — «QUATTRO PRODOTTI»

> Replaces the statistics strip. Stefano has no figures worth publishing, and four shipped products are stronger proof than four invented numbers. This band is the **first thing after the hero**: before any claim about what he can do, here is what already exists.

**Structure:** a full-width band, `--obsidian` background, 1px `--titanium` hairlines top and bottom that draw themselves `scaleX: 0 → 1` on enter.

**Eyebrow:** `QUATTRO PRODOTTI A MIO NOME` / `FOUR PRODUCTS UNDER MY OWN NAME`
**Line:** «Non solo per i clienti.» / "Not just for clients."

**Format — a manifest, not a card grid.** Four rows, each a single line, separated by hairlines. Deliberately *undesigned*: index, name, platform, status. It reads like a shipping list, which is exactly the tone — factual, mechanical, no selling.

| # | Name | Platform | Status |
|---|---|---|---|
| `01` | **MuteWell** | macOS | ⚠️ *see Open Item #2* |
| `02` | **CleanCut** | macOS | ⚠️ |
| `03` | **AegisOS** | Multipiattaforma / Cross-platform | ⚠️ |
| `04` | **MT5 Bridge** | Windows | ⚠️ |

**Row layout (desktop):** `grid-template-columns: 64px 1fr 200px 140px 40px`
`index` · `name` · `platform` · `status` · `↗`
Row height `clamp(72px, 9vh, 108px)` — generous, so four rows carry real presence.

**Type:** index and platform in JetBrains Mono `--ash`; **name in Space Grotesk 700, `clamp(1.5rem, 3.6vw, 2.9rem)`, `--platinum`**, tracking `-0.03em`. Status as a small mono pill with a 1px `--titanium` border.

**Animation:**
- Top hairline draws `scaleX: 0 → 1` (0.9 s, `expo.out`), then each row's own hairline draws with `stagger: 0.09`.
- Row content mask-reveals upward (`yPercent: 110 → 0`) 0.15 s behind its hairline — the line arrives, then the name rises onto it.
- `ScrollTrigger` at `start: "top 78%"`, `once: true`.
- **No counters, no numbers animating.** The mechanical feel now comes from the staggered hairlines.

**Interaction:**
- Whole row is a link. Hover: row background lifts to `--graphite`, name goes pure `--white`, the `↗` slides 4px up-right, and the silver sheen sweeps the index left→right over 0.7 s. Sibling rows drop to `opacity: 0.45`.
- Clicking scrolls to that project's card in the Featured Work gallery (§16) and centres it horizontally — `lenis.scrollTo(gallery)` then `gallery.scrollTo({left, behavior:'smooth'})`.
- Desktop only for the dimming and sheen; mobile rows stay fully lit.

**Marquee** — directly beneath, a slow infinite scroll (~55 s per cycle, pure CSS transform, duplicated track for seamlessness), mono, `--ash`, uppercase, bullet-separated:

`SITI WEB · APP DESKTOP · APP MOBILE · BOT TELEGRAM · AUTOMAZIONI WINDOWS · WEB APP · DEBUG & RESCUE ·`

Direction reverses subtly with scroll direction (multiply the tween `timeScale` by ±1) — a small, expensive-feeling detail.

**Relationship to §16:** this strip carries **names only, no descriptions or images**. §16 carries the substance — visuals, one-liners, detail. Announce here, deliver there. Both render from the same `SITE.products` array, so a project is edited in exactly one place.

---


# §11 — MISSION SECTION

**Concept:** Pure kinetic typography. No image, no video, no card. The most restrained screen on the site, and the loudest.

**Layout:** centred column, `max-width: 20ch`, vertically generous (`min-height: 100vh`, content centred).

**Eyebrow:** `IL MOTIVO` / `THE REASON`

**Statement — Italian:**
```
Ogni idea merita
un posto dove esistere.

Ogni azione ripetuta
merita di sparire
dentro un software.
```
**English:**
```
Every idea deserves
a place to exist.

Every repeated action
deserves to disappear
into software.
```

**Closing paragraph — IT:**
«Non credo nei processi manuali sopravvissuti per abitudine. Se lo fai due volte allo stesso modo, può farlo una macchina. Io costruisco quella macchina — e il sito, o l'app, che le sta intorno.»

**EN:** "I don't believe in manual processes that survived out of habit. If you do it twice the same way, a machine can do it. I build that machine — and the site, or the app, that surrounds it."

**Animation — the signature moment of the site:**
- Text is split to **words** (custom splitter, see §22 — GSAP SplitText is a paid Club plugin and must not be used).
- Each word sits in an `overflow: hidden` wrapper; the word itself starts at `y: 110%`, `rotate: 4deg`.
- On scroll, words rise into place with `stagger: 0.045`, `ease: expo.out`, scrubbed to scroll (`scrub: 1`) so the reader physically pulls the sentence into existence.
- The two phrases **«un posto dove esistere»** and **«sparire dentro un software»** get the silver sheen fill and a slightly longer hold.
- Behind the type: an enormous ghost word `IDEA` at `font-size: 42vw`, `color: --steel`, `opacity: 0.5`, drifting `x: -8% → 8%` across the section on scroll. Sits below the type, above the background.
- Reduced motion: everything simply fades in at 0.4 s, no transforms.

---

# §12 — SCENE 02 BREAK — «LE TRE FORME»

A full-bleed 100vh video band between the manifesto and the pillars. Breathing room, and a visual title card for the three disciplines that follow.

- `<video>` Scene 02, `autoplay muted loop playsinline`, `object-fit: cover`. Play/pause driven by IntersectionObserver — never let an offscreen video decode.
- Left-side scrim `linear-gradient(90deg, var(--void) 0%, transparent 62%)` for type contrast.
- In the negative space, bottom-left:
  - Eyebrow: `TRE FORME` / `THREE FORMS`
  - Headline: «Una persona sola. / Dall'inizio alla fine.» / "One person. / Start to finish."
  - Small mono line: `STEFANO MASCELLINI — ITALIA`
- The positioning line does the human work here: the clip shows objects, the copy names the person behind them. Object + first-person claim is a stronger pairing than a face on camera.
- Scroll-linked `scale: 1.08 → 1.0` on the video, mask-reveal on the type.
- Fallback: the poster `.webp` as a `background-image` with a slow `scale` drift. Visually complete without the clip.

---


# §13 — THREE PILLARS SECTION

**Eyebrow:** `COSA COSTRUISCO` / `WHAT I BUILD`
**Section title:** «Tre discipline. Un solo standard.» / "Three disciplines. One standard."

**Layout:** three full-width horizontal rows (not a 3-up card grid — rows feel editorial and premium, grids feel like a services page). Each row: index number · title · description · capability list. Separated by 1px `--titanium` hairlines that draw on enter.

---
**`01` — SITI WEB / WEBSITES**
IT: «Siti che sembrano costruiti su misura, perché lo sono. Nessun template, nessun page builder: struttura, animazioni e performance scritte a mano.»
EN: "Websites that look tailor-made, because they are. No templates, no page builders: structure, motion and performance written by hand."
Capabilities: `Landing page` · `Portfolio` · `E-commerce` · `Web app` · `SEO tecnica` · `Performance`

**`02` — APPLICAZIONI / APPLICATIONS**
IT: «Desktop e mobile. Native dove serve, veloci sempre. Applicazioni che si installano una volta e poi si smette di pensarci.»
EN: "Desktop and mobile. Native where it matters, fast always. Applications you install once and then stop thinking about."
Capabilities: `macOS` · `Windows` · `iOS` · `Android` · `Menu bar tools` · `Interfacce native`

**`03` — AUTOMAZIONI / AUTOMATION**
IT: «Bot Telegram, script Windows, pipeline che girano da sole. Quello che facevi a mano ogni giorno, semplicemente non lo fai più.»
EN: "Telegram bots, Windows scripts, pipelines that run themselves. What you did by hand every day, you simply stop doing."
Capabilities: `Bot Telegram` · `Automazioni Windows` · `Scraping` · `Integrazioni API` · `Job schedulati` · `Alert`
---

**Supporting band — DEBUG & RESCUE** (a distinct, narrower block under the three rows, inset with a `--graphite` fill):
IT: «**Hai già un progetto e non funziona?** Entro nel codice scritto da qualcun altro, capisco cosa si è rotto e lo rimetto in piedi. Anche se è stato abbandonato a metà.»
EN: "**Already have a project that doesn't work?** I go into code written by someone else, find what broke, and put it back on its feet. Even if it was abandoned halfway."

**Interaction:**
- Hovering a row lifts it (`y: -4px`), brightens the title to pure white, and sweeps the silver sheen across the index number left→right over 0.7 s.
- A cursor-following radial spotlight (`radial-gradient` at `--mx/--my` CSS vars, 420px, ~7% white) lights the hovered row. Desktop only.
- Non-hovered rows drop to `opacity: 0.45` — the reader is being *directed*.
- Rows enter with a per-row stagger, hairline `scaleX` first, then content.
- Mobile: no hover, no spotlight. Rows animate in on scroll and stay fully lit.

---

# §14 — STORY SECTION — «IL PERCORSO»

**Eyebrow:** `COME SONO ARRIVATO QUI` / `HOW I GOT HERE`
**Title:** «È iniziato tutto da una cosa noiosa.» / "It all started with something boring."

**Format:** four chapters. Desktop: a **pinned horizontal scroll track** (vertical wheel input translates the track on X). Mobile: a plain vertical stack. Each chapter is a `min-width: 62vw` panel with a huge mono index behind it.

---
**`01` — IL PROBLEMA NOIOSO / THE BORING PROBLEM**
IT: «C'era una cosa che dovevo fare ogni giorno. A mano. Sempre uguale. Non era difficile, era solo un furto di tempo, ripetuto all'infinito.»
EN: "There was something I had to do every day. By hand. Always the same. It wasn't hard — it was just theft of time, repeated forever."

**`02` — LA PRIMA APPLICAZIONE / THE FIRST APPLICATION**
IT: «Un giorno ho smesso di lamentarmi e ho scritto un programma che lo facesse al posto mio. Ha funzionato. E quella cosa non l'ho più fatta.»
EN: "One day I stopped complaining and wrote a program to do it for me. It worked. And I never did that thing again."

**`03` — GLI ALTRI / EVERYONE ELSE**
IT: «Poi ho iniziato a vedere lo stesso problema ovunque. Persone intelligenti bloccate da lavori che nessuno dovrebbe fare. Ho iniziato a costruire per loro.»
EN: "Then I started seeing the same problem everywhere. Smart people stuck doing work nobody should be doing. I started building for them."

**`04` — OGGI / TODAY**
IT: «Oggi costruisco siti, applicazioni e automazioni per persone e brand. Stessa regola di allora: se una macchina può farlo, che la faccia la macchina.»
EN: "Today I build websites, applications and automations for people and brands. Same rule as back then: if a machine can do it, let the machine do it."
---

**Visual:** each panel carries its index as a `28vw` outlined numeral (`-webkit-text-stroke: 1px var(--titanium)`, transparent fill) sitting behind the text. A horizontal progress hairline under the track fills 0→100% across the four chapters.

**Motion:** the track moves with `scrub: 1`. Panels have a mild counter-parallax on their inner text (`xPercent: 8 → -8`) so the layers separate. Titles mask-reveal as each panel crosses the viewport centre.

---

# §15 — PROCESS / SERVICE SECTION

**Opens with SCENE 03, pinned and scrubbed** — 220vh.

The empty room plays as the reader scrolls. At `p ≈ 0.45`, exactly as the camera leaves the empty chair behind and pushes toward the screens still working alone, this line mask-reveals in the centre of the screen at `clamp(2.5rem, 7vw, 7rem)`:

> **IT:** «Tu vai a dormire. Il software no.»
> **EN:** "You go to sleep. The software doesn't."

Then, over the still-running screens, the process steps count in.


**Eyebrow:** `COME LAVORO` / `HOW I WORK`
**Title:** «Quattro passi. Nessuna sorpresa.» / "Four steps. No surprises."

| # | IT | EN |
|---|---|---|
| **01 — ASCOLTO** | «Prima di scrivere una riga di codice voglio capire il problema vero. Spesso non è quello che pensavi.» | **LISTEN** — "Before writing a line of code I want to understand the real problem. It's often not the one you thought." |
| **02 — PROGETTO** | «Scope fisso, tempi chiari, prezzo definito prima di iniziare. Niente preventivi che crescono in corsa.» | **PLAN** — "Fixed scope, clear timeline, price defined before we start. No estimates that grow along the way." |
| **03 — COSTRUISCO** | «Vedi avanzamenti reali ogni settimana, non un silenzio di due mesi seguito da una sorpresa.» | **BUILD** — "You see real progress every week, not two months of silence followed by a surprise." |
| **04 — CONSEGNO E RESTO** | «Consegno il progetto e il codice: è tuo. E se serve, resto per farlo crescere.» | **DELIVER & STAY** — "I hand over the project and the code: it's yours. And if you need me, I stay to grow it." |

**Layout:** a 2×2 grid on desktop, stacked on mobile, over a dimmed `scene-03` poster background. Each step: a mono index, a hairline that draws left→right, title, body. Staggered entrance, `0.1` between steps.

---

# §16 — FEATURED WORK SECTION

**Eyebrow:** `LAVORI SELEZIONATI` / `SELECTED WORK`
**Title:** «Costruiti, rilasciati, in uso.» / "Built, shipped, in use."

**Format:** a horizontal drag/scroll gallery (native `overflow-x` with scroll-snap **plus** pointer-drag and wheel-to-horizontal mapping — never a bespoke scrolljack). Cards are `clamp(300px, 34vw, 520px)` wide, `4/5` aspect.

> This is where the four products from §10 pay off. The strip named them; this section shows them. Same source array (`SITE.products`), different depth — the strip has names only, this has media, one-liners and detail.
>
> ⚠️ Descriptions below are **inferred** from the feature flags in Stefano's existing `content/projects.ts`. Confirm each line, and set a real status label, before launch.

| Project | Platform | IT one-liner | EN one-liner |
|---|---|---|---|
| **MuteWell** | macOS | «Il microfono sotto controllo, dalla barra dei menu. Una scorciatoia, e sai sempre se ti stanno sentendo.» | "Your microphone under control, from the menu bar. One shortcut, and you always know if you're being heard." |
| **CleanCut** | macOS | «Taglia i silenzi dai video e dall'audio, da solo. Ore di editing che si riducono a un'anteprima e un export.» | "Cuts the silences out of video and audio by itself. Hours of editing reduced to a preview and an export." |
| **AegisOS** | Multipiattaforma | «Orchestrazione di modelli AI con routing, fallback e controllo della spesa. Un pannello al posto del caos.» | "AI model orchestration with routing, fallback and spend control. One panel instead of chaos." |
| **MT5 Bridge** | Windows | «Legge i segnali, applica le regole di rischio ed esegue su MetaTrader 5. Il ponte tra un messaggio e un ordine.» | "Reads the signals, applies risk rules and executes on MetaTrader 5. The bridge between a message and an order." |

**Card design:**
- `--graphite` fill, 1px `--titanium` edge, `border-radius: 4px` (structural, never soft).
- Media area on top (project poster from `assets/img/work/`), a slow `scale: 1.0 → 1.06` on hover.
- Meta row in mono: platform · status.
- Title in display, body in Inter, `--silver`.
- Hover: a diagonal silver sheen sweeps the card in 0.8 s; the card tilts ±3° following the pointer (`rotateX/rotateY`, `perspective: 1200px`); the edge brightens to `--ash`.
- Drag cursor becomes a custom `↔ TRASCINA / DRAG` label. Grabbing feels physical (`cursor: grabbing`, momentum on release).

> **Risk disclaimer: removed at Stefano's request (10 Sep 2026).** An earlier draft carried a line under the gallery stating that MT5 Bridge is an automation tool, is not financial advice, and that trading risks capital. It is no longer on the site. Noted here because Stefano's own `Portfolio/content/projects.ts` marks this project `requiresRiskDisclaimer: true` — if that flag is ever acted on again, this is the copy that was there.

Below the gallery, a hairline row: `SCORRI PER VEDERE TUTTO` + a progress bar reflecting horizontal position.

---

# §17 — FINAL CTA SECTION

**Concept:** the page empties out. Back to void. One question, one form.

**Headline** (largest type on the page after the hero, `clamp(3rem, 11vw, 12rem)`):
```
IT:  HAI UN'IDEA?
     COSTRUIAMOLA.

EN:  GOT AN IDEA?
     LET'S BUILD IT.
```
`COSTRUIAMOLA.` / `LET'S BUILD IT.` carries the sheen fill.

**Subline IT:** «Raccontami cosa hai in mente. Rispondo entro 24 ore, di persona.»
**EN:** "Tell me what you have in mind. I reply within 24 hours, personally."

**Form** — 2-column desktop, single column mobile:
| Field | IT | EN | Type |
|---|---|---|---|
| name | Nome | Name | text, required |
| email | Email | Email | email, required |
| type | Cosa ti serve | What you need | select: Sito web / Applicazione / Automazione / Debug di un progetto esistente / Altro |
| budget | Budget indicativo *(opzionale)* | Rough budget *(optional)* | select: < 2k / 2–5k / 5–10k / 10k+ / Da definire |
| message | Il progetto | The project | textarea, required, 5 rows |

**Submit button:** `Invia il messaggio` / `Send the message` — full-width on mobile, a bordered slab with a sheen sweep on hover and a magnetic pull on the cursor.

**Field styling:** no boxes. Each field is a **hairline-underlined baseline** with a floating mono label above it. On focus the hairline draws from left to right in `--platinum` and the label brightens. This alone reads as luxury.

**Validation:** native HTML5 constraints + a light JS pass. Errors appear as a small mono line under the field, `--ash`, never red boxes.

**Submission (no backend — static site):**
- Default implementation: build a `mailto:` payload to `SITE.email` with a pre-filled subject and body, and show the success state.
- The form `action` is a single constant (`SITE.formEndpoint`) so swapping in Formspree/Getform/Basin later is a one-line change. Comment this clearly in `script.js`.
- Success state: form mask-wipes out, replaced by «Ricevuto. Ti rispondo entro 24 ore.» / "Got it. I'll reply within 24 hours." with an animated check drawn via SVG `stroke-dashoffset`.

**Direct email fallback**, always visible beneath the form:
`Oppure scrivimi direttamente:` / `Or email me directly:` → `SITE.email` as a large link with an underline-wipe hover.

> ⚠️ Confirm which address should be public before launch (see Open Items #3).

---

# §18 — FOOTER

Minimal, structural, no marketing.

```
┌──────────────────────────────────────────────────────────────┐
│  STEFANO MASCELLINI                    Servizi    Contatti   │
│  Software indipendente,                Lavori     Email      │
│  costruito in Italia.                  Percorso   GitHub     │
│                                                              │
│  ──────────────────────────── hairline ───────────────────── │
│                                                              │
│  © 2026 Stefano Mascellini    ITALIA · 14:32:07    IT / EN   │
└──────────────────────────────────────────────────────────────┘
```

- Wordmark in display type, `clamp(2rem, 6vw, 5rem)`, `--steel` — present but receding.
- Tagline IT: «Software indipendente, costruito in Italia.» / EN: "Independent software, built in Italy."
- **Live local clock** in mono, `Europe/Rome`, ticking every second. Tiny detail, enormous "someone actually made this" signal.
- Colophon, mono, `--ash`: `Composto in Space Grotesk, Inter e JetBrains Mono. Costruito a mano.`
- Language toggle repeats here.
- Social links render only if `SITE.social` values are non-empty — never ship a dead `#` link.
- Back-to-top: the wordmark itself is the trigger, with a Lenis smooth `scrollTo(0)`.

---

# §19 — COMPLETE VISUAL STYLE GUIDE

### Colour tokens
```css
:root {
  /* Ground */
  --void:      #050506;   /* page background, deepest */
  --obsidian:  #0A0B0D;   /* alternating section bands */
  --graphite:  #121417;   /* cards, inset panels */
  --steel:     #1C1F24;   /* raised surfaces, ghost type */

  /* Structure */
  --titanium:  #2E333A;   /* all hairlines, borders */
  --titanium-hi:#484E57;  /* hover borders */

  /* Type */
  --ash:       #767D87;   /* muted, captions, labels */
  --silver:    #B4BAC2;   /* body copy */
  --platinum:  #E8EAED;   /* headlines, primary */
  --white:     #FFFFFF;   /* accents only */

  /* Light */
  --sheen: linear-gradient(100deg,
    #6E757F 0%, #B4BAC2 34%, #FFFFFF 50%, #B4BAC2 66%, #6E757F 100%);
  --glow: 0 0 80px rgba(232,234,237,0.06);
  --scrim-b: linear-gradient(to top, var(--void) 0%, transparent 70%);
  --scrim-l: linear-gradient(90deg, var(--void) 0%, transparent 62%);
}
```
**Contrast check:** `--silver` on `--void` ≈ 9.9:1, `--ash` on `--void` ≈ 4.9:1 (small text only at ≥14px), `--platinum` on `--void` ≈ 16:1. All pass WCAG AA.

**Light theme:** none. This site is dark, permanently and deliberately. Set `color-scheme: dark`.

### Spacing scale (8px base)
```css
--s-1:4px; --s-2:8px; --s-3:16px; --s-4:24px; --s-5:40px;
--s-6:64px; --s-7:96px; --s-8:144px; --s-9:220px;
--gutter: clamp(20px, 5vw, 88px);
--maxw: 1560px;
```
Section vertical rhythm: `padding-block: clamp(96px, 14vh, 220px)`.

### Grid
12 columns, `gap: clamp(16px, 2vw, 32px)`, max width `--maxw`, centred, `--gutter` outside. Headlines are permitted to break out of the grid to the left edge.

### Radii, borders, elevation
- Radius: `2px` structural, `4px` cards, `999px` pills/buttons only. Nothing else.
- Borders: always `1px solid var(--titanium)`. Never 2px. Never a colour.
- **No box-shadows anywhere.** Depth comes from value and blur. `--glow` is a light bloom, not a shadow.

### Grain (global, always on)
```css
.grain{
  position:fixed; inset:-50%; z-index:9999; pointer-events:none;
  opacity:.035; mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,…feTurbulence baseFrequency='0.82' numOctaves='3'…");
  animation:grain 1s steps(6) infinite;
}
@keyframes grain{ 0%{transform:translate(0,0)} 20%{transform:translate(-3%,3%)}
  40%{transform:translate(2%,-4%)} 60%{transform:translate(-4%,-2%)}
  80%{transform:translate(3%,2%)} 100%{transform:translate(0,0)} }
```
Mobile: `opacity: .02`, animation disabled (battery).

### Vignette
```css
.vignette{ position:fixed; inset:0; z-index:9998; pointer-events:none;
  background:radial-gradient(ellipse at center,
    transparent 42%, rgba(5,5,6,.55) 100%); }
```

### Imagery treatment
All photography/video is desaturated to near-monochrome (`filter: saturate(0.25) contrast(1.08)`), so nothing ever breaks the palette.

---

# §20 — TYPOGRAPHY

### Families (Google Fonts, single stylesheet request, `display=swap`)
| Role | Family | Weights | Used for |
|---|---|---|---|
| **Display** | **Space Grotesk** | 500, 700 | All headlines, wordmark, project names |
| **Body** | **Inter** | 400, 500 | Paragraphs, form fields, everything readable |
| **Mono** | **JetBrains Mono** | 400, 500 | Eyebrows, indices, platform and status labels, clock, meta |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
Fallback stacks: `'Space Grotesk', 'Helvetica Neue', Arial, sans-serif` · `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` · `'JetBrains Mono', ui-monospace, 'SF Mono', monospace`.

### Scale
```css
--t-hero:    clamp(3.5rem, 13.5vw, 15rem);   /* h1 hero */
--t-display: clamp(2.6rem, 8.5vw, 8rem);     /* section titles */
--t-h2:      clamp(2rem, 5vw, 4.2rem);       /* pillar / story titles */
--t-h3:      clamp(1.25rem, 2.2vw, 1.85rem); /* card titles */
--t-lead:    clamp(1.05rem, 1.5vw, 1.4rem);  /* sublines */
--t-body:    clamp(0.98rem, 1.1vw, 1.1rem);  /* paragraphs */
--t-mono:    clamp(0.68rem, 0.8vw, 0.8rem);  /* eyebrows, labels */
```

### Rules
- **Display:** uppercase, `font-weight: 700`, `letter-spacing: -0.045em`, `line-height: 0.86`. The bigger the type, the tighter the tracking — this is what makes huge type look designed rather than zoomed.
- **Mono / eyebrow:** uppercase, `letter-spacing: 0.22em`, `--ash`. Always preceded by a 24px hairline rule inline.
- **Body:** `line-height: 1.62`, `max-width: 62ch`, `--silver`, weight 400.
- **Numerals:** `font-variant-numeric: tabular-nums` on the preloader counter and the footer clock, so digits never reflow while they change.
- Italian typographic details: use the correct apostrophe `’` (U+2019) in `DALL’IDEA`, `un’idea`; use `«guillemets»` for pull quotes; never `'` straight quotes.
- Never letterspace lowercase body text. Never justify.
- `text-wrap: balance` on headlines, `text-wrap: pretty` on paragraphs.

### The sheen fill (the one "premium" flourish)
```css
.sheen{
  background:var(--sheen); background-size:250% 100%;
  -webkit-background-clip:text; background-clip:text; color:transparent;
  animation:sheen 7s linear infinite;
}
@keyframes sheen{ to{ background-position:-250% 0 } }
```
Rule: **one sheen element per viewport, maximum.** It stops being luxurious the moment it becomes decoration.

---

# §21 — ANIMATION DIRECTION

### Principles
1. **Nothing fades in from nowhere.** Everything arrives from behind a mask or an edge.
2. **One hero motion per screen.** Supporting elements move less, never more.
3. **Slow in, fast settle.** `expo.out` / `cubic-bezier(0.16, 1, 0.3, 1)` everywhere.
4. **Scrubbed, not triggered,** for anything cinematic. The user drives the film.
5. **Motion has weight.** Nothing overshoots. No bounce, ever.

### Easing and duration
```js
const EASE = "expo.out";                 // gsap
const EASE_IO = "power3.inOut";          // scrubbed / continuous
// CSS: cubic-bezier(.16,1,.3,1)
```
| Move | Duration |
|---|---|
| Micro (hover, focus, colour) | 0.22–0.35 s |
| Standard reveal | 0.8–1.1 s |
| Cinematic (curtain, hero handoff) | 1.2–1.6 s |
| Stagger between siblings | 0.06–0.10 s |

### The masked reveal — the house animation
```js
// Every heading in the site uses this.
function revealLines(el, opts = {}) {
  const words = splitWords(el);                // §22
  gsap.set(words, { yPercent: 112, rotate: 3 });
  return gsap.to(words, {
    yPercent: 0, rotate: 0, duration: 1.05, ease: EASE,
    stagger: 0.045,
    scrollTrigger: { trigger: el, start: "top 84%", once: true, ...opts }
  });
}
```
Each word lives inside `<span class="w"><span class="wi">…</span></span>` where `.w { overflow:hidden; display:inline-block }`.

### Video scrubbing
```js
function scrubVideo(video, trigger, endProgress = 0.75){
  const st = { trigger, start:"top top", end:"bottom bottom", scrub: 1.1 };
  const obj = { t: 0 };
  gsap.to(obj, {
    t: 1, ease:"none", scrollTrigger: st,
    onUpdate(){
      if (!video.duration) return;
      const p = Math.min(obj.t / endProgress, 1);
      video.currentTime = p * video.duration;
    }
  });
}
```
- Wait for `loadedmetadata` before wiring. Call `video.play().then(()=>video.pause())` once on first user gesture to force the decoder awake on iOS.
- Guard with `requestVideoFrameCallback` where available for smoother seeks.
- **Image-sequence alternative** (documented, not default): if scrubbing proves unreliable on target devices, swap to 90 `.webp` frames at 1600px drawn to a `<canvas>` with the identical progress mapping. Keep the function signature the same so it's a one-line swap.

### Section-by-section motion index
| Section | Motion |
|---|---|
| Preloader | counter tween → mask wipe → clip-path curtain split |
| Hero | pinned scrub, video `currentTime`, 3 staggered line reveals, exit scale+blur |
| Products strip | hairlines draw (`scaleX`, stagger 0.09), row names mask-reveal, CSS marquee |
| Manifesto | scrubbed word-by-word rise, ghost word `x` drift |
| Scene 02 | scale 1.08→1.0 scrub, type mask reveal |
| Pillars | hairline draw, row stagger, hover spotlight + sheen sweep |
| Story | pinned horizontal `xPercent` track, counter-parallax on text |
| Process | pinned scrub, mid-scroll line reveal, 4-step stagger |
| Work | horizontal drag + snap, card tilt, sheen sweep, progress bar |
| CTA | headline reveal, field hairline draw on focus, success mask-wipe |
| Footer | hairline draw, clock tick |

### Global
- `gsap.ticker.lagSmoothing(0)` and Lenis driven off the GSAP ticker.
- `ScrollTrigger.config({ ignoreMobileResize: true })` to stop iOS URL-bar resize from firing refreshes.
- `ScrollTrigger.refresh()` after fonts load (`document.fonts.ready`) — otherwise every pin start is measured against the wrong layout.
- A single `ScrollTrigger.matchMedia` / `gsap.matchMedia()` block splits desktop / mobile / reduced-motion behaviour.

---

# §22 — INTERACTION DESIGN

### Custom cursor (desktop, pointer: fine only)
- A 7px `--platinum` dot (instant) + a 34px 1px-`--titanium` ring (lerped at 0.14) — the lag between them is what makes it feel expensive.
- States: `link` → ring scales to 2.2× and inverts (`mix-blend-mode: difference`); `drag` → ring becomes a pill with `↔ TRASCINA`; `video` → ring shows a play glyph; `text` → ring collapses to an I-beam bar.
- Runs on a single rAF loop, transforms only. Hidden entirely on touch devices and under `prefers-reduced-motion`.

### Magnetic buttons
Primary CTAs and the submit button pull toward the cursor within a 90px radius: `x/y = delta * 0.32`, `quickTo` for 60fps, springing back on leave. The label moves at `0.5×` the container for a subtle parallax inside the button.

### Hover behaviours
| Element | Behaviour |
|---|---|
| Text link | 1px underline wipes in from left (0.3 s), out to the right |
| Nav item | mono label flips up, duplicate flips in from below (`overflow: hidden`) |
| Pillar row | spotlight follows cursor · siblings dim to 0.45 · sheen sweep on index |
| Work card | ±3° tilt · media `scale(1.06)` · diagonal sheen sweep · border brightens |
| Button | sheen sweep across fill, border → `--platinum`, magnetic pull |
| Form field | hairline draws left→right, label brightens and shifts up 2px |

### Navigation
- Fixed, `height: 72px`, `backdrop-filter: blur(14px)` over an 80%-opaque `--void`.
- Hides on scroll down past 400px, reveals on scroll up — with a 0.35 s ease, never a jump.
- Wordmark left · links centre (Servizi · Lavori · Percorso) · `IT / EN` + `Contatti` right.
- The active section's nav link gets a small mono `—` prefix, driven by ScrollTrigger.
- Mobile: wordmark + a 2-line burger that morphs to an X; menu is a full-screen `--void` panel, links stagger in at `--t-display` size with a mask reveal, background scroll locked via Lenis `stop()`.

### Language toggle
`IT / EN` in mono. The inactive locale is `--ash`, active is `--platinum`, separated by a hairline `/`.
On switch: all `[data-i18n]` nodes mask-wipe out (`yPercent: -100`, stagger 0.012), swap `textContent`, wipe back in. **Not a page reload.** `<html lang>` updates, choice persists in `localStorage`, and `ScrollTrigger.refresh()` fires after the swap because Italian and English text lengths differ enough to change section heights.

### Feedback and states
- `:focus-visible` → 2px `--platinum` outline at 3px offset. Never remove focus rings.
- All interactive targets ≥ 44×44px on touch.
- Buttons have a 0.98 `scale` active state, 0.1 s.
- Form errors and the success state are announced via `aria-live="polite"`.

---

# §23 — SCROLL BEHAVIOR

### Lenis configuration
```js
const lenis = new Lenis({
  duration: 1.15,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  syncTouch: false,          // native momentum on touch — do NOT smooth mobile
  touchMultiplier: 1.6,
  wheelMultiplier: 1.0,
  lerp: 0.085,
  autoRaf: false             // GSAP drives the loop
});
gsap.ticker.add(time => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
lenis.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(document.body, { /* … */ });
```

### Rules
- **Two pinned sections only:** Hero and Process. Everything else scrolls freely.
- **No snapping.** Snap fights the reader and kills the "buttery" feel.
- Anchor links use `lenis.scrollTo(target, { offset: -72, duration: 1.4 })`.
- Lenis is `stop()`-ed during preload, while the mobile menu is open, and on form success.
- A 2px scroll-progress rail is fixed to the right viewport edge, `--titanium` track / `--platinum` fill, plus a mono chapter label (`01 — ORIGINE`) that updates per section. Desktop only.
- Wheel input inside the horizontal Work gallery maps `deltaY → scrollLeft`; when the gallery hits either end, control returns to vertical scroll immediately (no trapping).
- `overscroll-behavior-y: none` on `html` to kill pull-to-refresh interference.
- Restore scroll to top on reload (`history.scrollRestoration = "manual"`) — a pinned hero restored mid-scroll looks broken.

---

# §24 — MOBILE BEHAVIOR

Mobile is **not** the desktop experience scaled down. It is a re-cut of the same film.

### Breakpoints
```css
/* base = mobile-first */
@media (min-width: 640px)  { /* tablet  */ }
@media (min-width: 1024px) { /* desktop */ }
@media (min-width: 1440px) { /* large   */ }
```

### What changes
| Desktop | Mobile |
|---|---|
| Hero pinned video scrub | short autoplay `loop muted playsinline` clip, no pin, type reveals on scroll |
| Process pinned scrub | poster background + on-scroll reveals |
| Story horizontal track | vertical stack of 4 chapters |
| Work horizontal gallery | kept horizontal (thumb-swipe is natural here) with scroll-snap, cards `82vw` |
| Products strip, 5-column rows | same four rows, 2 lines each: name on top, platform · status beneath |
| Custom cursor | removed entirely |
| Magnetic buttons | removed |
| Hover spotlights / tilt | removed |
| Nav links inline | full-screen menu overlay |
| Grain animated @ 3.5% | static @ 2% |
| Scroll progress rail | removed |
| Lenis smooth touch | **off** — native momentum only |

### Mobile-specific requirements
- Type scale floors: hero `3.5rem`, section titles `2.6rem`. Still huge — do not shrink to "safe".
- `100dvh` (not `100vh`) for every full-height section, so the iOS URL bar never crops content.
- Videos: `playsinline`, `muted`, `preload="none"` except the hero, `poster` always set. If `navigator.connection.saveData` is true, **skip video entirely** and use posters.
- Tap targets ≥ 44px, gutters `20px`, no horizontal overflow anywhere (`overflow-x: clip` on `body`).
- Form: single column, `font-size: 16px` minimum on inputs (prevents iOS auto-zoom), correct `inputmode` and `autocomplete`.
- Test at 375×667 (iPhone SE) as the true floor.

### `prefers-reduced-motion: reduce`
A complete alternate path, not a degraded one:
- Preloader skipped; Lenis not initialised (native scroll).
- All videos replaced by their poster `.webp`.
- All reveals become a 0.35 s opacity fade with no transform.
- Marquee, grain animation, sheen animation, clock tick all static.
- Every piece of content remains reachable and readable.

---

# §25 — TECHNICAL IMPLEMENTATION

## File structure
```
PortfolioFinal/
├── index.html
├── style.css
├── script.js
├── BUILD-PLAN.md
├── README.md
└── assets/
    ├── video/
    │   ├── scene-01-hero.mp4 / .webm / .webp
    │   ├── scene-02-forms.mp4 / .webm / .webp
    │   └── scene-03-machine.mp4 / .webm / .webp
    └── img/
        ├── work/ mutewell.webp · cleancut.webp · aegisos.webp · mt5-bridge.webp
        ├── og-image.jpg            (1200×630)
        └── favicon.svg · favicon-32.png · apple-touch-icon.png
```
No `reference/` folder: no identity image is used, because no clip contains a person (§5).
**All paths relative.** The site must run from `file://` and from any subdirectory without modification.

## CDN dependencies — exact tags, in this order, before `script.js`
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js"></script>
<script src="script.js" defer></script>
```
> **Do not use GSAP SplitText, ScrollSmoother or any other Club plugin** — they are licensed. Word/char splitting is hand-written in `script.js` (§21). Lenis exposes the global `Lenis`.

## `index.html` — requirements
- `<!doctype html>`, `<html lang="it">` (JS updates it on toggle).
- Meta: charset, viewport (`width=device-width, initial-scale=1, viewport-fit=cover`), description (IT), `theme-color: #050506`, `color-scheme: dark`.
- Open Graph + Twitter card, `og:image` → `assets/img/og-image.jpg`.
- JSON-LD `Person` schema: name, jobTitle `Software Developer`, `knowsAbout`, `email`, `url`.
- Semantic landmarks: `<header>`, `<main>`, `<section>` with `aria-labelledby`, `<footer>`.
- Skip link as the first focusable element: «Vai al contenuto».
- Every translatable node carries `data-i18n="section.key"`; attributes use `data-i18n-attr="placeholder:form.name.ph"`.
- `<noscript>`: a stylesheet block that reveals all content (`opacity: 1; transform: none`) so the page is fully readable without JS. **This is a hard requirement** — a portfolio that is blank without JS is a broken portfolio.

## `script.js` — module order
```js
/* 1 */  const SITE = { … }          // ← all editable content constants (below)
/* 2 */  const I18N = { it:{…}, en:{…} }
/* 3 */  utils: splitWords, splitChars, lerp, clamp, prefersReducedMotion, isTouch
/* 4 */  initI18N()                  // read localStorage → apply → wire toggle
/* 5 */  initPreloader()             // → resolves a promise
/* 6 */  initLenis()                 // + GSAP ticker binding + scrollerProxy
/* 7 */  initCursor(), initMagnetic()
/* 8 */  initNav()
/* 9 */  gsap.matchMedia() → desktop / mobile / reduced-motion branches
/*10 */    initHero(), initProducts(), initManifesto(), initSceneBreak(),
/*11 */    initPillars(), initStory(), initProcess(), initWork()
/*12 */  initForm(), initFooterClock(), initProgressRail()
/*13 */  document.fonts.ready.then(() => ScrollTrigger.refresh())
```

**The single editable config object — put it at the very top of the file, commented:**
```js
const SITE = {
  email: "stefano.mascellini09@gmail.com",   // ⚠️ CONFIRM before launch — see BUILD-PLAN Open Items #1
  formEndpoint: "",                          // "" = mailto fallback. Paste a Formspree/Getform URL to go live.
  social: { github: "", linkedin: "", telegram: "" },  // empty = link is not rendered
  // ⚠️ Single source of truth for BOTH the products strip (§10) and featured work (§16).
  // Set a real `status` per project — see BUILD-PLAN Open Items #2.
  products: [
    { slug:"mutewell",   name:"MuteWell",   platform:"macos",           status:"",
      poster:"assets/img/work/mutewell.webp",   href:"" },
    { slug:"cleancut",   name:"CleanCut",   platform:"macos",           status:"",
      poster:"assets/img/work/cleancut.webp",   href:"" },
    { slug:"aegisos",    name:"AegisOS",    platform:"cross-platform",  status:"",
      poster:"assets/img/work/aegisos.webp",    href:"" },
    { slug:"mt5-bridge", name:"MT5 Bridge", platform:"windows",         status:"",
      poster:"assets/img/work/mt5-bridge.webp", href:"" }
  ],                                         // platform/status/one-liners resolve through I18N keys
  timezone: "Europe/Rome"
};
```

## Performance budget — non-negotiable
| Metric | Target |
|---|---|
| LCP | < 2.0 s on 4G |
| CLS | < 0.02 |
| INP | < 200 ms |
| Total JS (excl. CDN) | < 45 KB unminified **of code**. Measured: 41.8 KB code + 12.6 KB of IT/EN copy in `I18N` = 54.3 KB. The copy is content, not logic — it would weigh the same in the HTML — so it is budgeted separately. |
| CSS | < 60 KB |
| Each video | ≤ 4 MB |
| Lighthouse Perf / A11y / Best / SEO | ≥ 90 / 100 / 100 / 100 |

**Techniques required:**
- `<link rel="preload" as="image" href="assets/video/scene-01-hero.webp">` — the hero poster is the LCP element.
- Hero video `preload="auto"`; scenes 02 and 03 `preload="none"`, loaded via IntersectionObserver at `rootMargin: "200px"`.
- `<source type="video/webm">` first, `type="video/mp4"` second.
- Pause every offscreen video (IntersectionObserver) — decoding offscreen video is the single biggest scroll-jank source.
- `will-change` applied only during an active animation, removed on complete (`onComplete: () => gsap.set(el,{clearProps:"willChange"})`).
- `content-visibility: auto` + `contain-intrinsic-size` on below-fold sections.
- Transforms and opacity only. **Never animate `top`, `left`, `width`, `height`, `margin` or `filter: blur` on a large surface** (the hero exit blur is the one exception, on a compositor layer, at low radius).
- All images `width`/`height` attributes set, `loading="lazy"` + `decoding="async"` below the fold.
- One `resize` handler, debounced 150 ms, calling `ScrollTrigger.refresh()`.

## Accessibility — required
- WCAG 2.1 AA contrast throughout (values verified in §19).
- Full keyboard path: skip link → nav → sections → form → footer. Focus never trapped except in the open mobile menu (which traps deliberately and returns focus to the burger on close).
- Decorative video: `aria-hidden="true"`. Meaningful imagery: real `alt` in the active language.
- Form: every input has a real `<label>` (visually the floating mono label), `aria-describedby` for errors, `aria-live="polite"` for the success message.
- `prefers-reduced-motion` path fully implemented (§24).
- Language toggle sets `document.documentElement.lang` — screen readers must switch pronunciation.

## Browser support
Chrome/Edge 100+, Safari 15.4+, Firefox 100+, iOS Safari 15.4+, Android Chrome 100+. Graceful, non-broken degradation below that.

## Build order for Claude Code
1. `index.html` skeleton — all sections, all `data-i18n` hooks, semantic + accessible, **no styling**. Verify the page reads correctly as plain HTML.
2. `style.css` — tokens, reset, typography, grid, grain, vignette, then section by section. Verify the site is beautiful and complete **static, with zero JS**.
3. `script.js` — config, i18n, then Lenis + GSAP, then section modules in page order.
4. Placeholder assets: generate poster-coloured `.webp` stand-ins so layout is correct before real video exists.
5. Verify: reduced-motion path · no-JS path · 375px width · keyboard-only pass · both languages.
6. `README.md`: how to replace videos, edit `SITE.products`, swap the form endpoint, and deploy.

## Definition of done
- [ ] Both languages complete, toggle instant, no layout break in either
- [ ] Renders correctly and fully with JS disabled
- [ ] No console errors, no 404s, no dead `#` links
- [ ] `prefers-reduced-motion` gives a complete, still, readable site
- [ ] Keyboard-only navigation reaches and operates every control
- [ ] 375px → 2560px with no horizontal overflow at any width
- [ ] Videos absent → site still looks finished (fallbacks active)
- [ ] Lighthouse targets met
- [ ] All ⚠️ Open Items resolved or explicitly signed off

---

*Master Build Plan — Stefano Mascellini Portfolio. Prepared 10 September 2026.*


---

# §26 — SCOSTAMENTI DAL PIANO / DEVIATIONS, AND WHY

The build follows this document except in the six places below. Each was a deliberate call made while implementing, and each is recorded here so the plan and the code do not contradict each other.

### 1 · The opening plays on load; the scroll is the dive that follows
**Plan:** the three lines land as the seam of light peaks, during the pinned scrub.
**Build:** two phases (§9). The machine opens, the camera pushes in, and the three lines rise out of the light — all automatically, in the first ~2.8 s. Scroll then continues the same push-in from `--zoom` 1.2 to 4.6, straight into the screen, before the hero dissolves.
**Why:** at `p = 0` the visitor has not scrolled yet, so a scroll-bound headline means the first thing anyone sees is a dark frame with one line of eyebrow text — bad as a first impression, and bad for LCP, since the headline *is* the largest contentful paint. Splitting it keeps the plan's actual intent (the title is born from the screen light) and adds the move the scroll was always meant to carry: the camera going *into* the machine rather than merely fading away from it.

### 2 · No pinned sections on mobile
**Plan:** hero unpinned on mobile; process replaced by poster + reveals.
**Build:** neither the hero nor the process section pins below 768px. The machine finishes opening during the intro; the process room is a single 86dvh band with the line revealed on scroll.
**Why:** the plan's own §24 asks for this for the hero. Applying it to the process section as well follows the same reasoning — two pinned scrubs on a phone is two and a half screens of scrolling before reaching any content.

### 3 · Story chapters stack below 1024px, and scroll horizontally without JS
**Plan:** horizontal pinned track on desktop, vertical stack on mobile.
**Build:** as planned, plus two fixes found in testing. The stack breakpoint is 1024px (matching where the pin is skipped, so layout and behaviour can never disagree), and `.story__viewport` is `overflow-x: auto` by default, only becoming `hidden` under the `.js` class.
**Why:** without the second fix, chapters 2–4 were unreachable entirely with JavaScript disabled — the track never moves and the overflow was clipped. A portfolio that hides three quarters of its own story is broken, not degraded.

### 4 · Videos are opt-in through `SITE.videos`
**Plan:** `<video>` elements reference `assets/video/…` directly.
**Build:** the video paths are empty strings in `SITE`. Nothing is requested until they are filled in; the CSS fallbacks carry the site until then.
**Why:** the plan requires the site to ship complete before any clip exists. Hard-coded paths to files that do not exist yet mean three 404s and three failed decodes on every visit. One config line per clip turns them on.

### 5 · The `mailto` path says what actually happened
**Plan:** success state reads «Ricevuto. Ti rispondo entro 24 ore.»
**Build:** that message is used only when `SITE.formEndpoint` is set and the POST succeeded. With the `mailto` fallback the message is «Ti ho aperto il client di posta con il messaggio già pronto. Premi invio…».
**Why:** with `mailto` nothing has been received by anyone — the message has only been drafted in the visitor's mail client, and they still have to send it. Announcing a delivery that has not happened would cost a real enquiry every time someone closed the draft.

### 6 · Italian is the default regardless of browser language
**Plan:** Italian is the source of truth, English via toggle.
**Build:** the site opens in Italian for everyone; `navigator.language` is ignored. Only an explicit choice, stored in `localStorage`, switches it.
**Why:** an early implementation auto-selected English for English-locale browsers, which meant most foreign visitors would never see the Italian the site is written in. The toggle is the mechanism for changing language; the browser is not.

---

## Verified on the build

- Both languages, instant swap, no reload, no layout break; `<html lang>` follows
- Renders complete and readable with JavaScript disabled (verified on a scriptless copy)
- No console errors, no 404s, no dead links (empty socials render nothing)
- 340 CSS rules, all parsed; all three font families loaded
- Weight: `index.html` 27.2 KB · `style.css` 39.3 KB · `script.js` 54.3 KB (41.8 KB code + 12.6 KB bilingual copy)
- No horizontal overflow at 375px; no horizontal overflow at 1600px
- Keyboard order starts at the skip link and reaches every control
- Form: required-field and email validation, HTTP endpoint path, `mailto` path, success state
- Site looks finished with zero videos present — all three fallbacks active
- Hero fallback verified frame by frame at `--open` 0 / 0.28 / 0.5 / 1; opening + zoom verified on the real scroll (`--zoom` 1.2 at rest → 2.63 → 4.05 → 4.6, hero opacity 0 at the end)
