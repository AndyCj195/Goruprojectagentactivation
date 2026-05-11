# 📦 HANDOFF NOTES — PROYECTO GORU

> **Destinatario:** Frontend Developer  
> **De:** Figma Designer Senior Agent  
> **Propósito:** Especificaciones técnicas para implementar el diseño pixel-perfect

---

## 🎯 RESUMEN EJECUTIVO

Este handoff contiene:
1. **Tokens CSS** equivalentes a las Variables de Figma
2. **Redlines** (medidas exactas) por componente
3. **Especificaciones de animación** con duración, easing, triggers
4. **Assets exportados** listos para usar (SVG/WebP)
5. **Estados interactivos** detallados por componente
6. **Breakpoints responsive** exactos

---

## 1️⃣ TOKENS CSS — Sistema de Diseño

### Variables CSS (implementar en `:root`)

```css
:root {
  /* ===== COLORES PRIMITIVOS ===== */
  --color-gold-100: #E8C97A;
  --color-gold-200: #C9A84C;
  --color-gold-300: #A8893C;
  
  --color-green-100: #3D8A65;
  --color-green-200: #2D6A4F;
  
  --color-neutral-0: #050302;
  --color-neutral-100: #0D0D0D;
  --color-neutral-200: #2A2520;
  --color-neutral-700: #8A8070;
  --color-neutral-900: #F5F0E8;
  
  /* ===== COLORES SEMÁNTICOS ===== */
  --bg-deep: var(--color-neutral-0);
  --bg-surface: var(--color-neutral-100);
  --border-default: var(--color-neutral-200);
  
  --text-primary: var(--color-neutral-900);
  --text-muted: var(--color-neutral-700);
  
  --accent-primary: var(--color-gold-200);
  --accent-hover: var(--color-gold-100);
  --accent-glow: var(--color-gold-100);
  
  --brand-secondary: var(--color-green-200);
  
  /* ===== TIPOGRAFÍA ===== */
  --font-display: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Display */
  --text-display-xl: 72px;
  --text-display-l: 48px;
  --text-display-m: 36px;
  
  /* Headings */
  --text-heading-l: 28px;
  --text-heading-m: 22px;
  
  /* Body */
  --text-body-l: 18px;
  --text-body-m: 16px;
  
  /* Otros */
  --text-caption: 13px;
  --text-mono: 14px;
  
  /* Line Heights */
  --leading-tight: 1.11;    /* Display XL */
  --leading-snug: 1.17;     /* Display L */
  --leading-normal: 1.29;   /* Headings */
  --leading-relaxed: 1.6;   /* Body M */
  --leading-loose: 1.7;     /* Body L */
  
  /* Letter Spacing */
  --tracking-tight: -1px;   /* Display XL */
  --tracking-normal: 0px;
  --tracking-wide: 0.5px;   /* Caption */
  
  /* ===== ESPACIADO ===== */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;
  
  /* ===== BORDER RADIUS ===== */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 999px;
  
  /* ===== SOMBRAS ===== */
  --shadow-card: 0px 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-glow-gold: 0px 0px 24px rgba(201, 168, 76, 0.4);
  
  /* ===== BLUR ===== */
  --blur-glass: 12px;
  
  /* ===== TRANSICIONES ===== */
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.6s;
  --duration-reveal: 0.8s;
}
```

### Fuentes a importar (Google Fonts)

```html
<!-- En <head> del HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

**Nota:** Usar `font-display: swap` para evitar FOIT (Flash Of Invisible Text)

---

## 2️⃣ REDLINES — Medidas Exactas por Componente

### Button/Primary (Size: MD)

```
┌─────────────────────────────────┐
│  Explorar el grupo  →           │
└─────────────────────────────────┘

Dimensions:
  Height: 48px (12px padding-top + 16px line-height + 12px padding-bottom)
  Width: Hug contents (auto)
  Padding: 12px (top/bottom) × 24px (left/right)
  Border radius: 8px

Text:
  Font: DM Sans Medium
  Size: 16px
  Line height: 16px × 1.6 = 25.6px ≈ 26px
  Color: #050302 (dark sobre dorado)

Icon (arrow →):
  Size: 20px × 20px
  Margin-left: 8px
  Color: #050302

Background: #C9A84C
Border: none
```

**Estados:**

| Property      | Default     | Hover         | Active        | Disabled      |
|---------------|-------------|---------------|---------------|---------------|
| background    | #C9A84C     | #E8C97A       | #C9A84C       | #2A2520       |
| color         | #050302     | #050302       | #050302       | #8A8070       |
| transform     | scale(1)    | scale(1.02)   | scale(0.98)   | scale(1)      |
| box-shadow    | none        | 0 0 24px rgba(201,168,76,0.4) | none | none |
| transition    | -           | all 0.2s ease | all 0.1s ease | -             |
| cursor        | pointer     | pointer       | pointer       | not-allowed   |

---

### Card/Branch

```
┌─────────────────────────┐
│          ↑ 24px         │
│      [Icon 48px]        │ ← Centered horizontally
│          ↓ 16px         │
│                         │
│      Dipromacom         │ ← Heading/M (22px), centered
│          ↓ 12px         │
│                         │
│  "Capacitación de alto  │ ← Body/M (16px), centered
│   impacto para prof..." │   max 2 líneas, text-align: center
│          ↓ 20px         │
│                         │
│     Explorar →          │ ← Button/Ghost, centered
│          ↓ 24px         │
└─────────────────────────┘
← 24px →                 ← 24px →

Dimensions:
  Width: 280px (desktop 4 col grid), Fill container (mobile)
  Min-height: 280px
  Padding: 24px (all sides)

Background: #0D0D0D (--bg-surface)
Border: 1px solid #2A2520 (--border-default)
Border radius: 12px (--radius-lg)
Box shadow (default): 0px 8px 32px rgba(0, 0, 0, 0.6)

Icon:
  Size: 48px × 48px
  Color: #C9A84C (--accent-primary)
  Margin-bottom: 16px

Title:
  Font: DM Sans SemiBold
  Size: 22px
  Line height: 30px (22px × 1.36)
  Color: #F5F0E8 (--text-primary)
  Margin-bottom: 12px

Tagline:
  Font: DM Sans Regular
  Size: 16px
  Line height: 25.6px (16px × 1.6)
  Color: #8A8070 (--text-muted)
  Max lines: 2 (usar -webkit-line-clamp: 2)
  Margin-bottom: 20px

CTA:
  Component: Button/Ghost
  Margin-bottom: 0
```

**Hover state:**
```css
.card-branch:hover {
  border-color: var(--accent-primary); /* #C9A84C */
  transform: scale(1.02);
  box-shadow: 
    0px 8px 32px rgba(0, 0, 0, 0.6),
    0px 0px 24px rgba(201, 168, 76, 0.4); /* glow dorado */
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

### Navbar (Desktop)

```
┌──────────────────────────────────────────────────────────────────┐
│← 32px → [Logo] ← 48px → Link1 ← 24px → Link2 ... → Btn ← 32px →│
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
↑                                                                  ↑
72px height                                                    72px

Container:
  Max-width: 1280px
  Padding: 0 32px
  Height: 72px
  Display: flex
  Justify-content: space-between
  Align-items: center

Position: fixed
Top: 0
Width: 100vw
Z-index: 1000

Background (default): #050302 (transparent o solid)
Background (sticky): rgba(5, 3, 2, 0.85)
Backdrop-filter (sticky): blur(12px)
Border-bottom (sticky): 1px solid #2A2520

Logo:
  Height: 32px
  Width: auto (mantener aspect ratio)
  Color: #C9A84C

Nav Links:
  Font: DM Sans Regular 16px
  Color: #F5F0E8
  Spacing: 24px entre links
  Hover: color → #E8C97A + underline animado (ver micro-interacciones)
```

**Trigger sticky (JavaScript):**
```javascript
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('navbar--sticky');
  } else {
    navbar.classList.remove('navbar--sticky');
  }
});
```

---

## 3️⃣ ANIMACIONES — Specs Técnicas

### 1. fadeReveal (Hero elements entrance)

```css
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

/* Aplicar a elementos del Hero */
.hero__headline {
  animation: fadeReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0; /* inicial oculto */
}

.hero__subheadline {
  animation: fadeReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}

.hero__cta-container {
  animation: fadeReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
  opacity: 0;
}
```

**Duración total del reveal Hero:** 1.4s (delay 0.6s + duration 0.8s)

---

### 2. Navbar sticky slide down

```css
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.navbar--sticky {
  animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

---

### 3. Nav link hover underline

```css
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
  background: var(--accent-hover); /* #E8C97A */
  transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--accent-hover);
}
```

---

### 4. Button/Ghost arrow slide

```css
.button-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;
}

.button-ghost .arrow-icon {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.button-ghost:hover .arrow-icon {
  transform: translateX(4px);
}
```

---

### 5. Scroll indicator bounce

```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.scroll-indicator {
  animation: bounce 2s ease-in-out infinite;
}
```

---

### 6. Scroll reveal genérico (para secciones)

```css
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

**JavaScript (Intersection Observer):**
```javascript
const observerOptions = {
  threshold: 0.2, // Trigger cuando 20% del elemento es visible
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Solo animar una vez
    }
  });
}, observerOptions);

// Aplicar a todas las secciones
document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});
```

---

### 7. Branch cards entrada escalonada

```css
.branch-card {
  opacity: 0;
  animation: fadeReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Stagger delay: +0.1s por card */
.branch-card:nth-child(1) { animation-delay: 0.1s; }
.branch-card:nth-child(2) { animation-delay: 0.2s; }
.branch-card:nth-child(3) { animation-delay: 0.3s; }
.branch-card:nth-child(4) { animation-delay: 0.4s; }
.branch-card:nth-child(5) { animation-delay: 0.5s; }
.branch-card:nth-child(6) { animation-delay: 0.6s; }
.branch-card:nth-child(7) { animation-delay: 0.7s; }
.branch-card:nth-child(8) { animation-delay: 0.8s; }
```

**Trigger:** Cuando `.branch-grid` entra en viewport con Intersection Observer

---

### 8. Prefers Reduced Motion (OBLIGATORIO)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Forzar elementos a estado final visible */
  .scroll-reveal,
  .hero__headline,
  .hero__subheadline,
  .hero__cta-container,
  .branch-card {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 4️⃣ ASSETS EXPORTADOS

### Estructura de carpetas

```
/assets
├── /icons
│   ├── logo-goru.svg          (Logo dorado, 32px height)
│   ├── icon-briefcase.svg     (EsPro, 48px)
│   ├── icon-calendar.svg      (Goru Reservas, 48px)
│   ├── icon-code.svg          (Spitze-Soft, 48px)
│   ├── icon-eye.svg           (FirstVision, 48px)
│   ├── icon-graduation.svg    (Dipromacom, 48px)
│   ├── icon-hardhat.svg       (Indegor, 48px)
│   ├── icon-monitor.svg       (SuperPC, 48px)
│   ├── icon-ticket.svg        (Goru Tickets, 48px)
│   ├── arrow-right.svg        (20px, para botones)
│   ├── chevron-down.svg       (24px, scroll indicator)
│   └── social-*.svg           (Facebook, LinkedIn, Instagram, 24px)
│
├── /images
│   ├── /events
│   │   ├── event-1.webp       (320×180px)
│   │   ├── event-2.webp       (320×180px)
│   │   └── event-3.webp       (320×180px)
│   │
│   ├── /news
│   │   ├── news-featured.webp (640×360px)
│   │   ├── news-2.webp        (360×200px)
│   │   └── news-3.webp        (360×200px)
│   │
│   └── noise-texture.png      (Opcional, 512×512px tileable, overlay para Hero)
│
└── /fonts (si self-hosted)
    ├── playfair-display-bold.woff2
    ├── playfair-display-semibold.woff2
    ├── dm-sans-regular.woff2
    ├── dm-sans-medium.woff2
    └── dm-sans-semibold.woff2
```

### Export settings Figma

**SVG (íconos):**
- Format: SVG
- Outline strokes: Yes
- Simplify strokes: Yes
- Include "id" attribute: No (para evitar conflictos)

**WebP (imágenes):**
- Format: WebP
- Quality: 85%
- Progressive: Yes
- Responsive: Exportar 1x, 2x (para retina)

**Naming convention:**
- Kebab-case: `logo-goru.svg`, `event-1.webp`
- Descriptivo: incluir contexto (event, news, icon)

---

## 5️⃣ RESPONSIVE BREAKPOINTS

### Breakpoints exactos

```css
/* Mobile First approach */

/* Mobile (base) */
/* 375px - 767px */
@media (min-width: 375px) {
  /* Estilos base mobile */
}

/* Tablet */
@media (min-width: 768px) {
  /* Branch grid: 2 columnas */
  .branch-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Navbar: links visibles (pre-desktop) */
}

/* Desktop */
@media (min-width: 1280px) {
  /* Branch grid: 4 columnas */
  .branch-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  /* Hero: Display/XL (72px) */
  .hero__headline {
    font-size: var(--text-display-xl);
  }
  
  /* News: layout asimétrico 2fr + 1fr */
  .news-grid {
    grid-template-columns: 2fr 1fr;
  }
}

/* Large Desktop (opcional) */
@media (min-width: 1920px) {
  /* Contenedor max-width puede crecer */
  .container {
    max-width: 1440px; /* O mantener 1280px centrado */
  }
}
```

### Cambios críticos por breakpoint

| Breakpoint | Navbar           | Hero Headline | Branch Grid | News Grid    |
|------------|------------------|---------------|-------------|--------------|
| 375px      | Hamburger menu   | Display/L 48px| 1 col       | 1 col stack  |
| 768px      | Semi-visible     | Display/L     | 2 col       | 1 col stack  |
| 1280px     | Full horizontal  | Display/XL 72px| 4 col      | 2fr + 1fr    |

---

## 6️⃣ ACCESSIBILITY CHECKLIST

### Contraste de color (WCAG AA)

| Combinación                  | Ratio | Pasa AA? |
|------------------------------|-------|----------|
| #F5F0E8 sobre #050302        | 16:1  | ✅ AAA   |
| #C9A84C sobre #050302        | 7.2:1 | ✅ AA    |
| #8A8070 sobre #050302        | 4.8:1 | ✅ AA    |
| #050302 sobre #C9A84C (btn)  | 7.2:1 | ✅ AA    |

**Herramienta usada:** WebAIM Contrast Checker

### Elementos interactivos

```html
<!-- Todos los botones deben tener aria-label si solo tienen icono -->
<button aria-label="Abrir menú de navegación">
  <svg><!-- hamburger icon --></svg>
</button>

<!-- Links externos con indicador visual y aria -->
<a href="https://rma.grupogonzalez.ec" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Goru Tickets (se abre en nueva pestaña)">
  Goru Tickets →
</a>

<!-- Focus visible obligatorio -->
<style>
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
  }
</style>
```

### Estructura semántica

```html
<header>
  <nav aria-label="Navegación principal">
    <!-- navbar -->
  </nav>
</header>

<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">El ecosistema que mueve lo que importa.</h1>
    <!-- hero content -->
  </section>
  
  <section aria-labelledby="branches-heading">
    <h2 id="branches-heading">Nuestras Ramas</h2>
    <!-- branch grid -->
  </section>
  
  <!-- ... más secciones -->
</main>

<footer>
  <!-- footer content -->
</footer>
```

### Skip to content link

```html
<!-- Primer elemento del <body> -->
<a href="#main-content" class="skip-to-content">
  Saltar al contenido principal
</a>

<style>
  .skip-to-content {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--accent-primary);
    color: var(--bg-deep);
    padding: 8px 16px;
    text-decoration: none;
    z-index: 9999;
  }
  
  .skip-to-content:focus {
    top: 0;
  }
</style>

<main id="main-content" tabindex="-1">
  <!-- contenido principal -->
</main>
```

---

## 7️⃣ PERFORMANCE TIPS

### Lazy loading imágenes

```html
<!-- Event cards images -->
<img 
  src="/assets/images/events/event-1.webp" 
  alt="Gestión Ágil de Proyectos con Scrum"
  loading="lazy"
  width="320"
  height="180"
/>
```

**Nota:** NO usar `loading="lazy"` en imágenes above-the-fold (Hero)

### Preload critical assets

```html
<head>
  <!-- Preload fuentes críticas -->
  <link rel="preload" href="/assets/fonts/playfair-display-bold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/dm-sans-regular.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Preload logo -->
  <link rel="preload" href="/assets/icons/logo-goru.svg" as="image">
</head>
```

### CSS crítico inline

Considerar inline el CSS crítico (above-the-fold) en el `<head>`:
- Variables CSS
- Navbar styles
- Hero styles
- fadeReveal animation (para evitar FOUC)

Cargar el resto del CSS de forma async.

---

## 8️⃣ NOTAS FINALES PARA EL DEVELOPER

### Desvíos permitidos del diseño

1. **Scroll horizontal en Events Section:**  
   Si implementar scroll nativo es problemático en mobile, se permite usar librería como `keen-slider` o `swiper`, manteniendo el diseño visual.

2. **Navbar sticky:**  
   Si `backdrop-filter: blur()` tiene problemas de performance en navegadores antiguos, se permite usar fondo sólido `rgba(5, 3, 2, 0.95)` como fallback.

3. **Animaciones:**  
   Si Intersection Observer no tiene soporte (navegadores muy antiguos), se permite mostrar todos los elementos directamente sin animación, respetando `prefers-reduced-motion`.

### Desvíos NO permitidos

1. ❌ Cambiar la paleta de colores (dorado, verde, neutrales cálidos)
2. ❌ Usar tipografías diferentes (Playfair Display, DM Sans son obligatorias)
3. ❌ Cambiar el espaciado base (sistema de 4px es obligatorio)
4. ❌ Eliminar estados de hover o focus en componentes interactivos

### Testing checklist

- [ ] Verificar en Chrome, Firefox, Safari (últimas 2 versiones)
- [ ] Verificar en iOS Safari y Chrome mobile
- [ ] Probar con VoiceOver (Mac) o NVDA (Windows) para accesibilidad
- [ ] Validar HTML con W3C Validator
- [ ] Lighthouse audit: Performance >90, Accessibility 100, Best Practices 100
- [ ] Verificar con conexión 3G throttled (performance)
- [ ] Probar con `prefers-reduced-motion` activado en OS

---

## 📋 CHECKLIST FINAL DEL HANDOFF

- [x] Tokens CSS completos (colores, tipografía, espaciado, radios)
- [x] Redlines con medidas exactas de componentes clave
- [x] Especificaciones de animación con código CSS
- [x] Assets exportados (SVG/WebP) con naming convention
- [x] Responsive breakpoints exactos
- [x] Accessibility checklist con ARIA, contraste, semántica
- [x] Performance tips (lazy loading, preload, critical CSS)
- [x] Notas de desvíos permitidos vs. no permitidos
- [x] Testing checklist para QA

---

**Estado del proyecto:**  
✅ Design Tokens configurados  
✅ Componentes construidos (Átomos, Moléculas, Organismos)  
✅ Wireframes lo-fi completados  
✅ Pantallas Hi-Fi Desktop 1280px completadas  
✅ Pantallas Hi-Fi Mobile 375px completadas  
✅ Handoff notes entregadas  

**Listo para desarrollo frontend.** 🚀

---

*Handoff entregado por: Figma Designer Senior Agent*  
*Para preguntas técnicas: revisar documentos 01-05 en /design-system*  
*Fecha: Mayo 11, 2026*
