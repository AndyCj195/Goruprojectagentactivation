# 🧑‍🎨 UI/UX SPECIFICATIONS — PROYECTO GORU

> **Responsable:** UI/UX Designer Senior Agent  
> **Entregable:** Especificaciones de layout por sección del Home  
> **Referencia:** Bernini.ai (tono editorial, dark mode, animaciones refinadas)

---

## 🗺️ ARQUITECTURA DE LA PÁGINA HOME

```
┌─────────────────────────────────────────┐
│  NAVBAR (sticky)                        │ ← 72px height
├─────────────────────────────────────────┤
│                                         │
│  HERO SECTION                           │ ← 100vh (viewport height)
│  "El ecosistema que mueve lo que importa"
│                                         │
├─────────────────────────────────────────┤
│  BRANCH GRID (Terminal de ramas)        │ ← Auto height
│  8 tarjetas de ramas del grupo          │
├─────────────────────────────────────────┤
│  EVENTS SECTION (Próximas charlas)      │ ← Auto height
│  Scroll horizontal de event cards       │
├─────────────────────────────────────────┤
│  NEWS SECTION (Últimas noticias)        │ ← Auto height
│  Layout editorial asimétrico            │
├─────────────────────────────────────────┤
│  FOOTER (Dark, multi-columna)           │ ← Auto height
└─────────────────────────────────────────┘
```

---

## 1️⃣ NAVBAR — Sticky Navigation

### Propósito
Navegación corporativa persistente con accesos rápidos a servicios clave.

### Estructura Desktop (1280px+)

```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo Goru]  Quiénes Somos  Ramas  Eventos  RSE  Publicaciones  │
│                                                                  │
│                           [Goru Tickets] [Goru Reservas] [Iniciar sesión →] │
└──────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Container: `max-width: 1280px`, `padding: 0 space/8 (32px)`
- Height: `72px`
- Display: `flex`, `justify-between`, `align-items: center`
- Background: `bg/deep` con `backdrop-filter: blur(12px)` **solo al hacer scroll >100px**
- Border bottom: `1px solid border/default` al activar sticky

**Elementos:**

| Elemento          | Tipografía | Color         | Spacing                | Interacción                                |
|-------------------|------------|---------------|------------------------|--------------------------------------------|
| Logo Goru         | SVG 32px   | gold/200      | margin-right: space/12 | Hover: scale(1.05), transition 0.3s        |
| Nav Links         | Body/M     | text/primary  | gap: space/6 (24px)    | Hover: color → accent/hover, underline 2px |
| Accesos rápidos   | Caption    | text/muted    | gap: space/4 (16px)    | Hover: color → text/primary                |
| Botón Iniciar     | Body/M     | Button/Ghost  | -                      | Ver componente Button/Ghost                |

### Responsive Mobile (375px)

```
┌─────────────────────────────┐
│ [Logo]        [☰ Menu]      │
└─────────────────────────────┘
```

- Menu hamburguesa: abre drawer full-screen con navegación vertical
- Links de accesos rápidos: se mueven al drawer también
- Height: `64px` (reducido)

### Micro-interacciones

```css
/* Efecto de aparición sticky */
.navbar--sticky {
  background: rgba(5, 3, 2, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-default);
  animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideDown {
  from { transform: translateY(-100%); }
  to   { transform: translateY(0); }
}

/* Hover en nav links */
.nav-link {
  position: relative;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-hover);
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover::after {
  width: 100%;
}
```

---

## 2️⃣ HERO SECTION — Terminal Editorial

### Propósito
Presentar la propuesta de valor de Goru como "terminal corporativa" con impacto visual máximo.

### Estructura Desktop (1280px)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│               [Fondo: gradiente sutil dark + noise]        │
│                                                            │
│             El ecosistema que mueve                        │ ← Display/XL (72px)
│                 lo que importa.                            │   color: text/primary
│                                                            │
│     Goru es el punto de convergencia de soluciones        │ ← Body/L (18px)
│     empresariales diseñadas para el Ecuador real:          │   color: text/muted
│     educación, tecnología, gestión y servicios             │   max-width: 680px
│                  en un solo lugar.                         │
│                                                            │
│   [Explorar el grupo →]    [Próximas charlas]             │
│    Button/Primary          Button/Secondary                │
│                                                            │
│                                                            │
│              ↓ (icono scroll indicator)                    │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Height: `100vh` (full viewport)
- Display: `flex`, `flex-direction: column`, `justify-content: center`, `align-items: center`
- Text-align: `center`
- Padding: `space/16 space/8` (64px 32px)

**Fondo:**
```css
background: linear-gradient(180deg, 
  rgba(5, 3, 2, 1) 0%, 
  rgba(13, 13, 13, 0.95) 100%
);
/* Noise texture overlay (opcional, sutil) */
background-image: url('/assets/noise-texture.png');
background-blend-mode: overlay;
opacity: 0.03;
```

**Elementos:**

| Elemento              | Tipografía  | Color          | Spacing                    | Animación entrada                           |
|-----------------------|-------------|----------------|----------------------------|---------------------------------------------|
| Headline              | Display/XL  | text/primary   | margin-bottom: space/6     | fadeReveal delay 0.2s                       |
| Subheadline           | Body/L      | text/muted     | margin-bottom: space/8     | fadeReveal delay 0.4s                       |
| CTA Container         | -           | -              | gap: space/4, margin-top: space/8 | fadeReveal delay 0.6s            |
| Scroll indicator      | Icon 24px   | accent/primary | position: absolute, bottom: space/8 | bounce animation infinite    |

### Responsive Mobile (375px)

- Headline: Display/L (48px) en lugar de XL
- Subheadline: Body/M (16px), max-width: 90%
- CTAs: stack vertical (`flex-direction: column`), full-width hasta 320px max
- Height: `90vh` (evitar corte en móviles pequeños)

### Micro-interacciones

```css
/* Animación de entrada */
@keyframes fadeReveal {
  from { 
    opacity: 0; 
    transform: translateY(24px); 
    filter: blur(4px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
    filter: blur(0); 
  }
}

.hero__headline {
  animation: fadeReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0;
}

.hero__subheadline {
  animation: fadeReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}

.hero__cta {
  animation: fadeReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
  opacity: 0;
}

/* Scroll indicator bounce */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.scroll-indicator {
  animation: bounce 2s ease-in-out infinite;
}
```

---

## 3️⃣ BRANCH GRID — Terminal de Ramas

### Propósito
Mostrar las 8 ramas del grupo como "nodos" de la terminal corporativa.

### Estructura Desktop (1280px)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         Nuestras Ramas                                  │ ← Display/L
│         El grupo que conecta soluciones                 │ ← Body/L muted
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ Dipromo  │ │  EsPro   │ │ SuperPC  │ │ Indegor  │ │
│  │  [icon]  │ │  [icon]  │ │  [icon]  │ │  [icon]  │ │
│  │ Tagline  │ │ Tagline  │ │ Tagline  │ │ Tagline  │ │
│  │ [CTA →]  │ │ [CTA →]  │ │ [CTA →]  │ │ [CTA →]  │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ Spitze   │ │FirstVsn  │ │  Goru    │ │  Goru    │ │
│  │  [icon]  │ │  [icon]  │ │ Tickets  │ │ Reservas │ │
│  │ Tagline  │ │ Tagline  │ │ Tagline  │ │ Tagline  │ │
│  │ [CTA →]  │ │ [CTA →]  │ │ [CTA →]  │ │ [CTA →]  │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
└─────────────────────────────────────────────────────────┘
```

**Layout:**
- Container: `max-width: 1280px`, `padding: space/16 space/8`
- Grid: `display: grid`, `grid-template-columns: repeat(4, 1fr)`, `gap: space/6`
- Cada card: componente `Card/Branch` (ver más abajo)

### Responsive

| Breakpoint | Grid Columns | Gap      |
|------------|--------------|----------|
| 1280px+    | 4 columns    | space/6  |
| 768px      | 2 columns    | space/4  |
| 375px      | 1 column     | space/4  |

### Componente Card/Branch

**Estructura interna:**
```
┌─────────────────────────┐
│  [Logo/Icon 48px]       │ ← Centered, margin-bottom: space/4
│                         │
│  Nombre de la Rama      │ ← Heading/M, text/primary
│                         │
│  "Tagline descriptivo   │ ← Body/M, text/muted, 2 líneas max
│   de la rama aquí."     │   line-clamp: 2
│                         │
│  Explorar →             │ ← Button/Ghost, accent/primary
└─────────────────────────┘
```

**Dimensiones:**
- Aspect ratio: `1:1.2` (card ligeramente vertical)
- Padding: `space/6` (24px)
- Background: `bg/surface`
- Border: `1px solid border/default`
- Border-radius: `radius/lg` (12px)

**Estados:**

| Estado  | Background   | Border           | Shadow       | Transform      | Glow         |
|---------|--------------|------------------|--------------|----------------|--------------|
| Default | bg/surface   | border/default   | shadow/card  | scale(1)       | none         |
| Hover   | bg/surface   | accent/primary   | shadow/card  | scale(1.02)    | glow/gold    |
| Active  | bg/surface   | accent/hover     | shadow/card  | scale(0.98)    | glow/gold    |

### Micro-interacciones

```css
.branch-card {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.branch-card:hover {
  border-color: var(--accent-primary);
  transform: scale(1.02);
  box-shadow: 
    0px 8px 32px rgba(0, 0, 0, 0.6),
    0px 0px 24px rgba(201, 168, 76, 0.4); /* glow */
}

.branch-card:active {
  transform: scale(0.98);
}

/* Animación de entrada escalonada */
.branch-card:nth-child(1) { animation-delay: 0.1s; }
.branch-card:nth-child(2) { animation-delay: 0.2s; }
.branch-card:nth-child(3) { animation-delay: 0.3s; }
/* ... hasta 8 */
```

---

## 4️⃣ EVENTS SECTION — Próximas Charlas

### Propósito
Destacar eventos/charlas organizadas por las ramas del grupo.

### Estructura Desktop (1280px)

```
┌───────────────────────────────────────────────────────────────┐
│  Próximas Charlas                          [Ver todas →]      │ ← Display/M + Button/Ghost
│  Los eventos que definen tu próximo paso.                     │ ← Body/L muted
│                                                                │
│  ┌─────────────────────┐                                      │
│  │ [Imagen evento]     │ ← Scroll horizontal                  │
│  │ 21 May • $45        │ ← Badge/Fecha + Badge/Precio         │
│  │                     │                                      │
│  │ Gestión Ágil de     │ ← Heading/M                          │
│  │ Proyectos con Scrum │                                      │
│  │                     │                                      │
│  │ Por: Dipromacom     │ ← Caption, text/muted                │
│  │ [Más info →]        │ ← Button/Ghost                       │
│  └─────────────────────┘                                      │
│     ← → (3 cards visibles, scroll infinito)                   │
└───────────────────────────────────────────────────────────────┘
```

**Layout:**
- Container: `max-width: 1280px`, `padding: space/12 space/8`
- Cards: scroll horizontal con `overflow-x: auto`, `scroll-snap-type: x mandatory`
- Gap entre cards: `space/6`

### Componente Card/Event

**Estructura:**
```
┌─────────────────────────┐
│ [Imagen 16:9]           │ ← object-fit: cover, height: 180px
├─────────────────────────┤
│ [Badge Fecha][Badge $]  │ ← Absolute top-right de imagen, gap: space/2
│                         │
│ Título del Evento       │ ← Heading/M, 2 líneas max, line-clamp: 2
│                         │
│ Por: Nombre de la rama  │ ← Caption, text/muted
│                         │
│ Más información →       │ ← Button/Ghost, accent/primary
└─────────────────────────┘
```

**Dimensiones:**
- Width: `320px` (fixed para scroll horizontal)
- Background: `bg/surface`
- Border: `1px solid border/default`
- Border-radius: `radius/lg`
- Padding: `0 0 space/4 space/4` (sin padding arriba por imagen)

**Estados:** Misma lógica de hover que `Card/Branch` (glow dorado, scale 1.02)

### Responsive Mobile (375px)

- Cards: width `280px`, scroll horizontal mantenido
- Padding container: `space/8 space/4`

---

## 5️⃣ NEWS SECTION — Últimas Noticias

### Propósito
Layout editorial asimétrico para destacar noticias/publicaciones del grupo.

### Estructura Desktop (1280px)

```
┌─────────────────────────────────────────────────────────┐
│  Últimas Noticias               [Ver todas →]           │
│                                                         │
│  ┌────────────────────────┐  ┌───────────┐             │
│  │                        │  │ [Imagen]  │             │
│  │  [Imagen grande]       │  │           │             │
│  │  featured              │  ├───────────┤             │
│  │                        │  │ Título 2  │             │
│  ├────────────────────────┤  │ Excerpt   │             │
│  │ Título Principal       │  └───────────┘             │
│  │                        │                            │
│  │ Excerpt de la noticia  │  ┌───────────┐             │
│  │ principal más largo... │  │ [Imagen]  │             │
│  │                        │  │           │             │
│  │ [Leer más →]           │  ├───────────┤             │
│  └────────────────────────┘  │ Título 3  │             │
│                              │ Excerpt   │             │
│                              └───────────┘             │
└─────────────────────────────────────────────────────────┘
```

**Layout:**
- Grid: `display: grid`, `grid-template-columns: 2fr 1fr`, `gap: space/6`
- Columna izquierda: 1 card grande (featured)
- Columna derecha: 2 cards medianas verticales

### Componente Card/News

**Card Grande (Featured):**
- Imagen: height `360px`, aspect `16:9`
- Título: Display/M
- Excerpt: Body/L, 3 líneas max

**Cards Medianas:**
- Imagen: height `180px`, aspect `16:9`
- Título: Heading/M
- Excerpt: Body/M, 2 líneas max

### Responsive Mobile (375px)

- Grid: `grid-template-columns: 1fr` (stack vertical)
- Todas las cards: mismo estilo que "Card Mediana"

---

## 6️⃣ FOOTER — Dark Multi-columna

### Propósito
Navegación secundaria, links institucionales, redes sociales, newsletter.

### Estructura Desktop (1280px)

```
┌───────────────────────────────────────────────────────────────┐
│  [Logo Goru]      Ramas             Servicios       Legal     │
│                   • Dipromacom      • Tickets       • Términos│
│  Grupo González   • EsPro           • Reservas      • Privacid│
│  construyendo     • SuperPC         • Giftcards     • Cookies │
│  futuro desde     • Indegor         • Publicaciones           │
│  Ecuador.         • Spitze-Soft                               │
│                   • FirstVision                               │
│                                                                │
│  ┌─────────────────────────────────┐                          │
│  │ Tu email para noticias...       │ [Suscribirse →]          │
│  └─────────────────────────────────┘                          │
│                                                                │
│  ───────────────────────────────────────────────────────────  │
│                                                                │
│  © 2026 Grupo González. Todos los derechos reservados.        │
│  [Facebook] [LinkedIn] [Instagram]                            │
└───────────────────────────────────────────────────────────────┘
```

**Layout:**
- Background: `bg/deep`
- Border-top: `1px solid border/default`
- Padding: `space/16 space/8 space/8 space/8`
- Grid superior: `grid-template-columns: 2fr 1fr 1fr 1fr`, `gap: space/8`

**Elementos:**

| Sección       | Tipografía | Color        | Spacing                  |
|---------------|------------|--------------|--------------------------|
| Logo + tagline| Body/M     | text/muted   | max-width: 280px         |
| Column headers| Heading/M  | text/primary | margin-bottom: space/4   |
| Links         | Body/M     | text/muted   | gap: space/3, hover: text/primary |
| Newsletter    | -          | -            | margin-top: space/8      |
| Copyright     | Caption    | text/muted   | text-center              |
| Social icons  | Icon 24px  | text/muted   | gap: space/4, hover: accent/primary |

### Responsive Mobile (375px)

- Grid: `grid-template-columns: 1fr` (stack vertical)
- Cada columna: margin-bottom `space/6`
- Social icons: centrados

---

## 🎬 ANIMACIONES GLOBALES

### Scroll Reveal (elementos entran al hacer scroll)

```css
/* Aplicar a secciones completas */
.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Trigger:** Intersection Observer cuando elemento está 20% visible en viewport

### Prefers Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .scroll-reveal {
    opacity: 1;
    transform: none;
  }
}
```

---

## ✅ CHECKLIST DE ESPECIFICACIONES ENTREGADAS

- [x] Navbar: estructura, responsive, sticky behavior, micro-interacciones
- [x] Hero: layout, copy, animaciones de entrada, responsive
- [x] Branch Grid: grid responsive, componente Card/Branch con 3 estados
- [x] Events Section: scroll horizontal, Card/Event, badges
- [x] News Section: layout asimétrico, Card/News featured + medianas
- [x] Footer: multi-columna, newsletter, redes sociales
- [x] Animaciones: fadeReveal, scroll-reveal, hover effects
- [x] Responsive: breakpoints 375px / 768px / 1280px
- [x] Accesibilidad: prefers-reduced-motion, contraste verificado

---

*Especificaciones entregadas por: UI/UX Designer Senior Agent*  
*Próximo paso: Figma Designer construye componentes y pantallas Hi-Fi*  
*Fecha: Mayo 11, 2026*
