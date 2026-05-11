# 🧩 FIGMA COMPONENTS LIBRARY — PROYECTO GORU

> **Página:** 🧩 Components (dentro del archivo Figma)  
> **Metodología:** Atomic Design (Átomos → Moléculas → Organismos)  
> **Requisito:** Auto Layout obligatorio en todos los componentes

---

## 🔬 ÁTOMOS — Elementos base reutilizables

### Button/Primary

**Variantes:**
- State: `Default` | `Hover` | `Active` | `Disabled`
- Size: `MD` | `LG`

**Especificaciones (Size: MD, State: Default):**

```
┌─────────────────────────┐
│  Explorar el grupo  →   │
└─────────────────────────┘

Auto Layout:
  Direction: Horizontal
  Spacing: 8px (space/2)
  Padding: 12px 24px (space/3 space/6)
  Alignment: Center

Fill: {accent/primary} (#C9A84C)
Border: None
Border radius: {radius/md} (8px)

Text:
  Style: Body/M (DM Sans, Medium, 16px)
  Color: {neutral/0} (#050302) ← Texto oscuro sobre dorado
  
Icon (arrow →):
  Size: 20px
  Color: {neutral/0}
```

**Estados:**

| State    | Fill           | Text Color  | Transform     | Shadow      | Transition |
|----------|----------------|-------------|---------------|-------------|------------|
| Default  | accent/primary | neutral/0   | scale(1)      | none        | -          |
| Hover    | accent/hover   | neutral/0   | scale(1.02)   | glow/gold   | 0.2s ease  |
| Active   | accent/primary | neutral/0   | scale(0.98)   | none        | 0.1s ease  |
| Disabled | neutral/200    | neutral/700 | scale(1)      | none        | -          |

---

### Button/Secondary

**Especificaciones (Size: MD, State: Default):**

```
┌─────────────────────────┐
│  Próximas charlas       │
└─────────────────────────┘

Auto Layout:
  Direction: Horizontal
  Spacing: 8px
  Padding: 12px 24px
  Alignment: Center

Fill: Transparent
Border: 1px solid {accent/primary}
Border radius: {radius/md} (8px)

Text:
  Style: Body/M
  Color: {accent/primary}
```

**Estados:**

| State   | Border Color   | Background      | Text Color    |
|---------|----------------|-----------------|---------------|
| Default | accent/primary | transparent     | accent/primary|
| Hover   | accent/hover   | rgba(gold, 0.1) | accent/hover  |
| Active  | accent/primary | transparent     | accent/primary|

---

### Button/Ghost

**Especificaciones:**

```
Explorar →

Auto Layout:
  Direction: Horizontal
  Spacing: 6px
  Padding: 0 (sin fondo, solo texto + icono)

Text:
  Style: Body/M
  Color: {accent/primary}
  
Icon:
  Size: 20px
  Color: {accent/primary}
```

**Hover:** Icono se desplaza 4px a la derecha con `transition: transform 0.3s ease`

---

### Badge/Precio

**Variantes:**
- Type: `Paid` | `Free`

```
┌──────────┐
│   $45    │  ← Type: Paid
└──────────┘

┌─────────────────┐
│  Libre acceso   │  ← Type: Free
└─────────────────┘

Auto Layout:
  Direction: Horizontal
  Padding: 4px 12px (space/1 space/3)
  Border radius: {radius/full} (999px)

Type Paid:
  Fill: rgba(gold/200, 0.15)
  Border: 1px solid {accent/primary}
  Text: Caption, {accent/primary}

Type Free:
  Fill: rgba(green/200, 0.15)
  Border: 1px solid {brand/secondary}
  Text: Caption, {brand/secondary}
```

---

### Badge/Fecha

```
┌──────────────────┐
│  📅 21 Mayo 2026 │
└──────────────────┘

Auto Layout:
  Direction: Horizontal
  Spacing: 6px
  Padding: 4px 12px
  Border radius: {radius/full}

Fill: {bg/surface}
Border: 1px solid {border/default}

Icon: Emoji 📅 o Lucide Calendar, 16px
Text: Caption, {text/muted}
```

---

### Icon/Social

**Variantes:**
- Type: `Facebook` | `LinkedIn` | `Instagram`

```
[f]  ← Facebook icon, 24x24px

Fill: {text/muted}
Hover: {accent/primary}
Transition: color 0.2s ease
```

**Usar:** Lucide icons o Phosphor icons (consistente en todo el proyecto)

---

### Divider

```
─────────────────────────────────────

Height: 1px
Fill: {border/default}
Width: Fill container (Auto Layout con Hug en vertical, Fill en horizontal)
```

---

## 🧬 MOLÉCULAS — Combinaciones de átomos

### Card/Branch

**Variantes:**
- State: `Default` | `Hover` | `Active`

**Estructura (State: Default):**

```
┌─────────────────────────┐
│                         │
│      [Logo 48px]        │ ← Centered, space/4 margin-bottom
│                         │
│     Dipromacom          │ ← Heading/M, text/primary, centered
│                         │
│  "Capacitación de alto  │ ← Body/M, text/muted, centered
│   impacto para prof..."  │   2 líneas max, line-clamp
│                         │
│     Explorar →          │ ← Button/Ghost, centered
│                         │
└─────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 16px (space/4) entre logo y título
           12px (space/3) entre título y tagline
           20px (space/5) entre tagline y CTA
  Padding: 24px (space/6)
  Alignment: Center horizontally
  
Dimensions:
  Width: Fill container (se adapta al grid)
  Height: Hug contents
  Min-height: 280px (para mantener consistencia visual)

Fill: {bg/surface}
Border: 1px solid {border/default}
Border radius: {radius/lg} (12px)
Effect: {shadow/card}
```

**Estados:**

| State   | Border          | Shadow             | Transform    | Effect     |
|---------|-----------------|--------------------|--------------|------------|
| Default | border/default  | shadow/card        | scale(1)     | none       |
| Hover   | accent/primary  | shadow/card        | scale(1.02)  | glow/gold  |
| Active  | accent/hover    | shadow/card        | scale(0.98)  | glow/gold  |

**Contenido de ejemplo para las 8 ramas:**

| Rama          | Tagline (max 2 líneas)                                         |
|---------------|----------------------------------------------------------------|
| Dipromacom    | "Capacitación de alto impacto para profesionales que deciden." |
| EsPro         | "La escuela donde los proyectos dejan de ser teoría."         |
| SuperPC       | "Tecnología que trabaja para tu negocio."                     |
| Indegor       | "Soluciones de ingeniería con visión estratégica."            |
| Spitze-Soft   | "Software a medida. Precisión alemana, alma ecuatoriana."     |
| FirstVision   | "Visión clara para decisiones que transforman."               |
| Goru Tickets  | "Tu acceso a los eventos que definen tu próximo paso."        |
| Goru Reservas | "Agenda tu tiempo. Nosotros hacemos el resto."                |

---

### Card/Event

**Estructura:**

```
┌─────────────────────────┐
│  [Imagen evento]        │ ← Height 180px, object-fit: cover
│  ┌──────┐ ┌──────┐     │ ← Badges position: absolute top-right
│  │21 May│ │ $45  │     │   dentro del frame de imagen
│  └──────┘ └──────┘     │
├─────────────────────────┤
│                         │
│ Gestión Ágil de         │ ← Heading/M, text/primary
│ Proyectos con Scrum     │   2 líneas max
│                         │
│ Por: Dipromacom         │ ← Caption, text/muted
│                         │
│ Más información →       │ ← Button/Ghost, left-aligned
│                         │
└─────────────────────────┘

Auto Layout (solo en el contenido abajo de la imagen):
  Direction: Vertical
  Spacing: 12px entre elementos
  Padding: 0 16px 16px 16px (sin padding arriba por imagen)
  
Dimensions:
  Width: 320px (fixed para scroll horizontal)
  Height: Hug contents

Fill: {bg/surface}
Border: 1px solid {border/default}
Border radius: {radius/lg}
Effect: {shadow/card}

Imagen (frame separado):
  Width: Fill container
  Height: 180px
  Clip content: Yes
  Border radius: {radius/lg} solo en top-left y top-right
```

**Estados:** Mismo hover que Card/Branch (glow + scale 1.02)

---

### Card/News (Variante Featured)

**Estructura:**

```
┌────────────────────────┐
│                        │
│  [Imagen featured]     │ ← Height 360px
│                        │
├────────────────────────┤
│                        │
│ Grupo González lanza   │ ← Display/M, text/primary
│ nueva iniciativa de RSE│
│                        │
│ La compañía anuncia un │ ← Body/L, text/muted, 3 líneas max
│ programa de becas para │
│ jóvenes ecuatorianos...│
│                        │
│ 15 Mayo 2026           │ ← Caption, text/muted
│                        │
│ Leer más →             │ ← Button/Ghost
│                        │
└────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 16px entre elementos
  Padding: 0 0 20px 0 (padding solo abajo)

Fill: {bg/surface}
Border: 1px solid {border/default}
Border radius: {radius/lg}
```

---

### Nav/Item

**Variantes:**
- State: `Default` | `Hover` | `Active`

```
Quiénes Somos

Text: Body/M
Color (Default): {text/primary}
Color (Hover): {accent/hover}
Color (Active): {accent/primary}

Indicator (underline on hover/active):
  Width: 100% on active, 0→100% on hover
  Height: 2px
  Color: {accent/hover}
  Position: absolute bottom -4px
```

---

### Input/Email (Newsletter)

```
┌─────────────────────────────────┐
│ Tu email para noticias...       │
└─────────────────────────────────┘

Auto Layout:
  Padding: 12px 16px
  
Fill: {bg/surface}
Border: 1px solid {border/default}
Border radius: {radius/md}

Text:
  Style: Body/M
  Color: {text/primary}
  Placeholder color: {text/muted}

Focus state:
  Border: 1px solid {accent/primary}
  Outline: none (usar border animado)
```

---

## 🏗️ ORGANISMOS — Secciones completas

### Navbar (Organismo completo)

```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo 32px]  <Nav/Item>  <Nav/Item>  ...  <Button/Ghost>        │
└──────────────────────────────────────────────────────────────────┘

Auto Layout:
  Direction: Horizontal
  Padding: 20px 32px (space/5 space/8)
  Spacing: 48px entre logo y nav, 24px entre nav items
  Justify: Space between
  Alignment: Center

Background: {bg/deep} (default)
Background Sticky: rgba(5, 3, 2, 0.85) + backdrop-filter blur(12px)
Border bottom: 1px solid {border/default} (solo en sticky)

Height: 72px (fixed)
Width: Fill container
Position: Fixed top
```

**Componentes internos:**
- 1x Logo (SVG o imagen)
- 5x Nav/Item (links principales)
- 3x Button/Ghost (accesos rápidos: Tickets, Reservas, Iniciar sesión)

**Responsive Mobile:**
- Logo permanece
- Nav/Item y Buttons: ocultos
- Hamburger menu: visible (icono 24px)

---

### HeroSection

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                                                            │
│                El ecosistema que mueve                     │
│                    lo que importa.                         │
│                                                            │
│      Goru es el punto de convergencia de soluciones       │
│      empresariales diseñadas para el Ecuador real...      │
│                                                            │
│         [Button/Primary]  [Button/Secondary]               │
│                                                            │
│                         ↓                                  │
│                                                            │
└────────────────────────────────────────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 24px entre headline y subheadline
           32px entre subheadline y CTAs
  Padding: 96px 32px (space/24 space/8)
  Alignment: Center horizontally y verticalmente
  
Dimensions:
  Width: Fill container
  Height: 100vh (usar viewport height en código)

Background: 
  Fill: Linear gradient (ver especificación en 02_UIUX_SPECIFICATIONS.md)
  + Noise texture overlay opcional
```

**Componentes internos:**
- 1x Headline (Text: Display/XL)
- 1x Subheadline (Text: Body/L, max-width: 680px)
- 1x Frame con 2 Buttons (Auto Layout Horizontal, spacing 16px)
- 1x Scroll indicator icon (position absolute bottom)

---

### BranchGrid

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│               Nuestras Ramas                                │
│     El grupo que conecta soluciones                         │
│                                                             │
│  <Card/Branch> <Card/Branch> <Card/Branch> <Card/Branch>   │
│  <Card/Branch> <Card/Branch> <Card/Branch> <Card/Branch>   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 48px entre header y grid
  Padding: 96px 32px (space/24 space/8)
  Alignment: Center

Grid (frame interno con Auto Layout → simular grid):
  Direction: Horizontal, Wrap
  Spacing: 24px (space/6)
  Max-width: 1280px
  Cada card: Fixed width 280px (en desktop se calculan 4 columnas)
```

**Responsive:**
- Desktop (1280px+): 4 columnas
- Tablet (768px): 2 columnas (cards crecen a ~360px width)
- Mobile (375px): 1 columna (cards fill container con max-width 360px)

---

### EventsSection

```
┌───────────────────────────────────────────────────────────┐
│  Próximas Charlas                    [Ver todas →]       │
│  Los eventos que definen tu próximo paso.                │
│                                                           │
│  <Card/Event> <Card/Event> <Card/Event> → scroll         │
│  ← →                                                      │
└───────────────────────────────────────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 32px entre header y cards
  Padding: 96px 32px

Cards container:
  Direction: Horizontal (no wrap)
  Spacing: 24px
  Overflow: scroll horizontal (implementar en código)
```

---

### Footer

```
┌───────────────────────────────────────────────────────────┐
│  [Logo + tagline]   [Col Ramas]   [Col Servicios]  [Legal]
│                                                           │
│  Newsletter input + button                                │
│                                                           │
│  ──────────────────────────────────────────────────────── │
│                                                           │
│  © 2026 Grupo González...        [Social icons]          │
└───────────────────────────────────────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 48px entre secciones
  Padding: 96px 32px 32px 32px

Grid superior (frame interno):
  Direction: Horizontal
  Spacing: 64px
  Columns: Auto Layout con 4 frames verticales (Logo, Ramas, Servicios, Legal)

Border top: 1px solid {border/default}
Background: {bg/deep}
```

---

## ✅ COMPONENTES CONSTRUIDOS

- [x] Átomos (7): Button/Primary, Secondary, Ghost | Badge/Precio, Fecha | Icon/Social | Divider
- [x] Moléculas (5): Card/Branch, Card/Event, Card/News | Nav/Item | Input/Email
- [x] Organismos (5): Navbar, HeroSection, BranchGrid, EventsSection, Footer

**Próximo paso:** Wireframes lo-fi en página 📐 Wireframes

---

*Componentes construidos por: Figma Designer Senior Agent*  
*Todos usan Auto Layout ✅ | Variables de tokens aplicadas ✅*  
*Fecha: Mayo 11, 2026*
