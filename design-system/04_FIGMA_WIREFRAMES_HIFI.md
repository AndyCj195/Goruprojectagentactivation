# 📐 WIREFRAMES & HI-FI SCREENS — PROYECTO GORU

> **Páginas:** 📐 Wireframes | 🖥️ Desktop 1280px | 📱 Mobile 375px  
> **Estado:** Wireframes ✅ | Desktop Hi-Fi ✅ | Mobile Hi-Fi ✅

---

## 📐 WIREFRAMES — Lo-Fi (Escala de grises)

### Propósito
Validar estructura y jerarquía visual sin distracciones de color o tipografía final.

### Convenciones de Wireframes

```
Paleta de grises:
- Fondo: #1A1A1A (gris oscuro, simula dark mode)
- Surfaces: #2A2A2A
- Bordes: #3A3A3A
- Texto principal: #E0E0E0
- Texto secundario: #888888
- Acento (placeholders de dorado): #AAAAAA

Tipografía temporal:
- Todos los textos: Inter (placeholder, NO será la final)
- Headings: Inter Bold
- Body: Inter Regular

Componentes:
- Botones: rectangulos con borde
- Imágenes: placeholder con X diagonal + label "[Image]"
- Iconos: círculos o cuadrados con label "[Icon]"
```

### Frames de Wireframes (página 📐 Wireframes)

```
Frame 1: Home — Wireframe Full Page (1280x5000px aprox)
├── [NAVBAR - gris #2A2A2A, 72px height]
├── [HERO - texto centrado, 2 rectángulos botones, 100vh]
├── [BRANCH GRID - 8 rectángulos en grid 4x2]
├── [EVENTS - 3 rectángulos horizontales con scroll indicator]
├── [NEWS - 1 rect grande + 2 pequeños layout asimétrico]
└── [FOOTER - 4 columnas de texto + newsletter box]

Anotaciones en wireframe:
- Flechas indicando scroll direction
- Labels de secciones: "Hero Section", "Branch Grid", etc.
- Medidas clave: "72px", "100vh", "gap: 24px"
```

**Validación antes de Hi-Fi:**
- ✅ Jerarquía visual clara (headline > subheadline > CTAs)
- ✅ Espaciado consistente (múltiplos de 4px)
- ✅ Grid de branches balanceado visualmente
- ✅ Scroll horizontal de eventos es obvio
- ✅ Footer no compite con contenido principal

---

## 🖥️ DESKTOP HI-FI — 1280px

### Frame principal: `Home — Desktop 1280px`

**Dimensiones del frame:** 1280px width × altura variable (≈5000px para scroll completo)

### Sección 1: Navbar (Desktop)

```
Frame: navbar-desktop
Dimensions: 1280px × 72px
Position: Fixed top (simular con frame separado)

┌──────────────────────────────────────────────────────────────────┐
│ [Logo Goru SVG]  Quiénes Somos  Ramas  Eventos  RSE  Public.    │
│                                                                  │
│                      Goru Tickets  Goru Reservas  Iniciar sesión →│
└──────────────────────────────────────────────────────────────────┘

Componentes usados:
- Logo: Exportar SVG dorado #C9A84C, 32px height
- 5x Nav/Item (componente de biblioteca)
- 3x Button/Ghost (componente de biblioteca)

Background: {bg/deep} #050302
```

**Variante Sticky (frame separado para handoff):**
- Mismo frame duplicado con nombre `navbar-desktop-sticky`
- Background: rgba(5, 3, 2, 0.85)
- Effect: {blur/glass} aplicado
- Border bottom: 1px solid {border/default}

---

### Sección 2: Hero Section (Desktop)

```
Frame: hero-desktop
Dimensions: 1280px × 900px (ajustar a viewport real en código)

Background:
- Fill 1: Linear gradient
  - Color 1: #050302 (top)
  - Color 2: #0D0D0D 95% (bottom)
  - Angle: 180°
- Fill 2: Noise texture (opcional, modo Overlay, 3% opacity)

┌────────────────────────────────────────────────────────────┐
│                                                            │
│                                                            │
│                El ecosistema que mueve                     │ ← Display/XL
│                    lo que importa.                         │   #F5F0E8
│                                                            │
│      Goru es el punto de convergencia de soluciones       │ ← Body/L
│      empresariales diseñadas para el Ecuador real:         │   #8A8070
│      educación, tecnología, gestión y servicios            │   max-width: 680px
│                   en un solo lugar.                        │
│                                                            │
│   [Explorar el grupo →]      [Próximas charlas]           │
│    (Button/Primary)          (Button/Secondary)            │
│                                                            │
│                                                            │
│                         ↓                                  │ ← Icon 24px
│                    (scroll icon)                           │   #C9A84C
│                                                            │
└────────────────────────────────────────────────────────────┘

Componentes:
- 1x Headline: texto con style Display/XL, color {text/primary}
- 1x Subheadline: texto con style Body/L, color {text/muted}, centered
- 2x Buttons: instancias de Button/Primary y Button/Secondary
- 1x Scroll indicator: Lucide ChevronDown icon, 24px, color {accent/primary}

Spacing:
- Headline → Subheadline: 24px (space/6)
- Subheadline → CTAs: 32px (space/8)
- CTAs → Scroll icon: auto (position absolute bottom: 48px)

Alignment: Todo centrado horizontal y verticalmente
```

---

### Sección 3: Branch Grid (Desktop)

```
Frame: branch-grid-desktop
Dimensions: 1280px × auto (Hug contents)
Padding: 96px 32px (space/24 space/8)

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│               Nuestras Ramas                                │ ← Display/L
│     El grupo que conecta soluciones                         │ ← Body/L muted
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │[Icon]    │ │[Icon]    │ │[Icon]    │ │[Icon]    │      │
│  │Dipromo.. │ │EsPro     │ │SuperPC   │ │Indegor   │      │
│  │"Tagline" │ │"Tagline" │ │"Tagline" │ │"Tagline" │      │
│  │Explorar→ │ │Explorar→ │ │Explorar→ │ │Explorar→ │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │[Icon]    │ │[Icon]    │ │[Icon]    │ │[Icon]    │      │
│  │Spitze... │ │FirstVsn  │ │Tickets   │ │Reservas  │      │
│  │"Tagline" │ │"Tagline" │ │"Tagline" │ │"Tagline" │      │
│  │Explorar→ │ │Explorar→ │ │Explorar→ │ │Explorar→ │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Componentes:
- 1x Título sección (Display/L, centered)
- 1x Subtitle (Body/L, text/muted, centered)
- 8x Card/Branch (instancias del componente)

Grid (simulado con Auto Layout):
- Direction: Horizontal, Wrap enabled
- Spacing: 24px horizontal y vertical
- Max-width del contenedor: 1280px
- Cada card: width 280px (4 cards × 280px + 3 gaps × 24px = 1192px < 1280px ✓)

Background: {bg/deep}
```

**Assets de ejemplo para icons de ramas:**
- Dipromacom: icono "Graduación" (Lucide GraduationCap)
- EsPro: icono "Proyectos" (Lucide Briefcase)
- SuperPC: icono "Monitor" (Lucide Monitor)
- Indegor: icono "Construcción" (Lucide HardHat)
- Spitze-Soft: icono "Código" (Lucide Code)
- FirstVision: icono "Ojo" (Lucide Eye)
- Goru Tickets: icono "Ticket" (Lucide Ticket)
- Goru Reservas: icono "Calendar" (Lucide Calendar)

Color de icons: {accent/primary} #C9A84C, size 48px

---

### Sección 4: Events Section (Desktop)

```
Frame: events-section-desktop
Dimensions: 1280px × auto
Padding: 96px 32px

┌───────────────────────────────────────────────────────────┐
│  Próximas Charlas                    [Ver todas →]       │
│  Los eventos que definen tu próximo paso.                │
│                                                           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│  │[Img]    │ │[Img]    │ │[Img]    │ │[Img]    │ →     │
│  │21 May $45│ │5 Jun Lib│ │12 Jun   │ │...      │       │
│  │         │ │         │ │         │ │         │       │
│  │Gestión  │ │Liderazgo│ │Scrum... │ │...      │       │
│  │Ágil...  │ │Equipos  │ │         │ │         │       │
│  │         │ │         │ │         │ │         │       │
│  │Por: Dipr│ │Por: EsPr│ │Por: Dipr│ │         │       │
│  │Más info→│ │Más info→│ │Más info→│ │Más info→│       │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
│  ← →  (scroll indicators)                                │
└───────────────────────────────────────────────────────────┘

Componentes:
- 1x Header (Display/M + Button/Ghost "Ver todas →", flex space-between)
- 1x Subtitle (Body/L, text/muted)
- 4x Card/Event (instancias, en container con scroll horizontal)

Cards container:
- Auto Layout Horizontal, NO wrap
- Spacing: 24px
- Overflow: indicar "scroll-x" en handoff para developer
- Width: Fixed 1280px (se desborda intencionalmente para scroll)

Placeholder images:
- Usar imágenes de Unsplash relacionadas a: "business training", "conference", "team meeting"
- Dimensiones: 320px × 180px
- Formato: WebP para handoff
```

---

### Sección 5: News Section (Desktop)

```
Frame: news-section-desktop
Dimensions: 1280px × auto
Padding: 96px 32px

┌─────────────────────────────────────────────────────────┐
│  Últimas Noticias               [Ver todas →]           │
│                                                         │
│  ┌────────────────────────┐  ┌───────────┐             │
│  │                        │  │ [Imagen]  │             │
│  │  [Imagen Featured]     │  │ 360×200   │             │
│  │  640×360               │  ├───────────┤             │
│  │                        │  │ Noticia 2 │             │
│  ├────────────────────────┤  │ Excerpt   │             │
│  │ Grupo González lanza   │  │ corto...  │             │
│  │ nueva iniciativa RSE   │  │           │             │
│  │                        │  │ 10 May 26 │             │
│  │ La compañía anuncia... │  │ Leer más→ │             │
│  │                        │  └───────────┘             │
│  │ 15 Mayo 2026           │                            │
│  │ Leer más →             │  ┌───────────┐             │
│  └────────────────────────┘  │ [Imagen]  │             │
│                              │ 360×200   │             │
│                              ├───────────┤             │
│                              │ Noticia 3 │             │
│                              │ Excerpt   │             │
│                              │ corto...  │             │
│                              │           │             │
│                              │ 8 May 26  │             │
│                              │ Leer más→ │             │
│                              └───────────┘             │
└─────────────────────────────────────────────────────────┘

Layout:
- Grid: 2 columnas, 2fr (izquierda) + 1fr (derecha)
- Gap: 24px (space/6)
- Columna izquierda: 1x Card/News Featured
- Columna derecha: 2x Card/News Mediana (stack vertical, gap 24px)

Componentes:
- 1x Header (Display/M + Button/Ghost)
- 1x Card/News variante Featured (Display/M title, Body/L excerpt)
- 2x Card/News variante Mediana (Heading/M title, Body/M excerpt)

Placeholder images:
- Featured: 640×360px, tema "corporate social responsibility" o "business growth"
- Medianas: 360×200px cada una
```

---

### Sección 6: Footer (Desktop)

```
Frame: footer-desktop
Dimensions: 1280px × auto
Padding: 96px 32px 32px 32px
Border top: 1px solid {border/default}
Background: {bg/deep}

┌───────────────────────────────────────────────────────────┐
│  [Logo Goru]      Ramas             Servicios       Legal │
│  32px height      • Dipromacom      • Tickets       • Términos
│                   • EsPro           • Reservas      • Privacidad
│  Grupo González   • SuperPC         • Giftcards     • Cookies
│  construyendo     • Indegor         • Publicaciones         │
│  futuro desde     • Spitze-Soft                             │
│  Ecuador.         • FirstVision                             │
│                                                              │
│  ┌──────────────────────────────────────┐                   │
│  │ Tu email para noticias...            │ [Suscribirse →]   │
│  └──────────────────────────────────────┘                   │
│                                                              │
│  ──────────────────────────────────────────────────────────│
│                                                              │
│  © 2026 Grupo González. Todos los derechos reservados.      │
│  [Facebook] [LinkedIn] [Instagram]                           │
└──────────────────────────────────────────────────────────────┘

Layout superior (4 columnas):
- Auto Layout Horizontal
- Spacing: 64px entre columnas
- Cada columna: Auto Layout Vertical, spacing 12px entre links

Columna 1 (Logo + tagline):
- Logo: 32px height, color {accent/primary}
- Tagline: Body/M, color {text/muted}, max-width 240px

Columnas 2-4 (Links):
- Header: Heading/M, color {text/primary}, margin-bottom 16px
- Links: Body/M, color {text/muted}, hover → {text/primary}

Newsletter section:
- Auto Layout Horizontal
- Input/Email (width 400px) + Button/Primary
- Margin-top: 48px desde columnas

Divider:
- Width: 100%, Height 1px, Color {border/default}
- Margin: 48px vertical

Bottom section:
- Auto Layout Horizontal, justify space-between
- Copyright: Caption, {text/muted}
- Social icons: 3x Icon/Social (24px), spacing 16px
```

---

## 📱 MOBILE HI-FI — 375px

### Frame principal: `Home — Mobile 375px`

**Dimensiones:** 375px width × altura variable (≈6500px, más alto por stacking vertical)

### Cambios clave vs Desktop:

#### 1. Navbar Mobile

```
Frame: navbar-mobile
Dimensions: 375px × 64px (height reducido)

┌─────────────────────────┐
│ [Logo 28px]   [☰ Menu]  │
└─────────────────────────┘

- Logo: reducido a 28px height
- Menu hamburguesa: icono 24px, position absolute right 16px
- Nav links: ocultos, se muestran en drawer (frame separado)
```

**Drawer menu (frame separado `navbar-drawer-mobile`):**
```
┌─────────────────────────┐
│ [✕ Cerrar]              │
│                         │
│ Quiénes Somos           │
│ Ramas                   │
│ Eventos                 │
│ RSE                     │
│ Publicaciones           │
│                         │
│ ─────────────────────   │
│                         │
│ Goru Tickets            │
│ Goru Reservas           │
│ Comprar Giftcard        │
│                         │
│ [Iniciar sesión →]      │
│                         │
└─────────────────────────┘

Dimensions: 375px × 100vh
Background: {bg/surface}
Padding: 64px 24px
Links: Display vertical, spacing 24px, Body/L size
```

---

#### 2. Hero Mobile

```
Dimensions: 375px × 90vh (reducido para móviles pequeños)

                El ecosistema         ← Display/L (48px)
               que mueve lo que           reducido de XL
                   importa.

    Goru es el punto de convergencia  ← Body/M (16px)
    de soluciones empresariales...        reducido de L
                                          max-width: 90%

         [Explorar el grupo →]        ← Buttons stack
         [Próximas charlas]               vertical
                                          full-width
                                          max-width: 320px

Spacing:
- Headline → Subheadline: 20px (reducido de 24px)
- Subheadline → CTAs: 28px (reducido de 32px)
- Padding: 64px 20px (space/16 space/5)

Buttons:
- Direction: Vertical (stack)
- Spacing: 12px entre botones
- Width: Fill container hasta max-width 320px
```

---

#### 3. Branch Grid Mobile

```
Grid: 1 columna (stack vertical)
Spacing: 20px entre cards (reducido de 24px)
Padding: 64px 20px

Cada card:
- Width: Fill container (con padding 20px = 335px aprox)
- Height: Hug (mantiene proporción)

┌───────────────────┐
│                   │
│    [Icon 48px]    │
│                   │
│   Dipromacom      │
│                   │
│  "Capacitación de │
│   alto impacto..."│
│                   │
│   Explorar →      │
│                   │
└───────────────────┘

↓ (spacing 20px)

┌───────────────────┐
│   EsPro           │
│   ...             │
└───────────────────┘

... (6 cards más)
```

---

#### 4. Events Section Mobile

```
Header stack vertical:
  Próximas Charlas        ← Display/M (36px)
  Los eventos que...      ← Body/M
  [Ver todas →]           ← Button/Ghost, left-aligned

Cards: Scroll horizontal mantenido
- Card width: 280px (reducido de 320px)
- Spacing: 20px
- Overflow-x: scroll
- Container padding: 0 20px (cards sangran en los bordes)

Visual cue: Card 2 parcialmente visible en el borde derecho
```

---

#### 5. News Section Mobile

```
Layout: 1 columna (stack vertical)
Spacing: 20px entre cards

Card Featured: mismo diseño que Card Mediana
- Imagen: 335×190px (proporcional al width)
- Título: Display/M (36px, reducido de Display/L)
- Excerpt: Body/M, 2 líneas max (reducido de 3)

Todas las cards: mismo estilo, sin jerarquía visual diferenciada
(en mobile, el scroll hace la jerarquía)
```

---

#### 6. Footer Mobile

```
Layout: 1 columna (stack vertical)
Padding: 64px 20px 24px 20px

┌─────────────────────────┐
│ [Logo 28px]             │
│ Grupo González          │
│ construyendo futuro...  │
│                         │
│ ───────────────────     │
│                         │
│ Ramas                   │ ← Heading/M
│ • Dipromacom            │
│ • EsPro                 │
│ • SuperPC               │
│ • ...                   │
│                         │
│ ───────────────────     │
│                         │
│ Servicios               │
│ • Tickets               │
│ • Reservas              │
│ • ...                   │
│                         │
│ ───────────────────     │
│                         │
│ Legal                   │
│ • Términos              │
│ • Privacidad            │
│                         │
│ ───────────────────     │
│                         │
│ Newsletter              │
│ [Input email]           │
│ [Suscribirse →]         │
│                         │
│ ───────────────────     │
│                         │
│ © 2026 Grupo González   │
│                         │
│ [f] [in] [ig]           │ ← Centered, spacing 20px
└─────────────────────────┘

Cada sección: margin-bottom 32px
Dividers: entre cada sección, 1px solid {border/default}
```

---

## ✅ PANTALLAS COMPLETADAS

- [x] Wireframes: Home completo lo-fi en escala de grises
- [x] Desktop 1280px: 6 secciones (Navbar, Hero, Branch Grid, Events, News, Footer)
- [x] Mobile 375px: 6 secciones adaptadas + Navbar drawer
- [x] Variantes: Navbar sticky desktop, Menu drawer mobile
- [x] Assets exportados: placeholder images para events y news
- [x] Todos los componentes usan instancias de la biblioteca ✅

**Próximo paso:** Página 📦 Handoff notes para el Frontend Developer

---

*Wireframes y Pantallas Hi-Fi por: Figma Designer Senior Agent*  
*Responsive verificado: 375px ✅ | 1280px ✅*  
*Fecha: Mayo 11, 2026*
