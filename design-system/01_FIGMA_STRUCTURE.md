# 🎨 FIGMA FILE STRUCTURE — PROYECTO GORU

> **Archivo Figma:** `Goru — Portal Corporativo | Grupo González`  
> **Estado:** Tokens configurados ✅ | Pantallas pendientes ⏳  
> **Designer:** Figma Designer Senior Agent

---

## 📑 ESTRUCTURA DE PÁGINAS

```
📁 Goru — Portal Corporativo
├── 🎨 Design Tokens          ← Variables, estilos, sistema base
├── 🧩 Components              ← Biblioteca atómica reutilizable
├── 📐 Wireframes              ← Lo-fi, escala de grises
├── 🖥️ Desktop — 1280px        ← Hi-fi por secciones
├── 📱 Mobile — 375px          ← Hi-fi responsive
├── 🔄 Prototype flows         ← Navegación conectada
└── 📦 Handoff notes           ← Redlines, exports, specs
```

---

## 🎨 PÁGINA 1 — DESIGN TOKENS

### Variables de Color (Figma Variables → Color)

#### Primitivos (Color Variables)
```
Collection: Primitives/Color

gold/100    #E8C97A    ← Glow y highlights
gold/200    #C9A84C    ← Acento principal (brand)
gold/300    #A8893C    ← Variante oscura

green/100   #3D8A65    ← Verde hover
green/200   #2D6A4F    ← Verde institucional GG

neutral/0   #050302    ← Fondo deep (Bernini reference)
neutral/100 #0D0D0D    ← Surfaces y cards
neutral/200 #2A2520    ← Bordes sutiles
neutral/700 #8A8070    ← Texto muted
neutral/900 #F5F0E8    ← Texto principal (cálido)
```

#### Semánticos (Referencia a Primitivos)
```
Collection: Semantic/Color

bg/deep            → {neutral/0}
bg/surface         → {neutral/100}
border/default     → {neutral/200}
text/primary       → {neutral/900}
text/muted         → {neutral/700}
accent/primary     → {gold/200}
accent/hover       → {gold/100}
accent/glow        → {gold/100}
brand/secondary    → {green/200}
```

**Modo:** Solo `Dark Mode` (único tema del proyecto)

---

### Text Styles (Figma Text Styles)

```
Familia principal: Playfair Display (Display/Editorial)
Familia secundaria: DM Sans (Body/UI)
Familia terciaria: JetBrains Mono (Code/Monospace)
```

| Nombre Style          | Familia           | Peso      | Tamaño | Line Height | Letter Spacing | Uso                          |
|-----------------------|-------------------|-----------|--------|-------------|----------------|------------------------------|
| Display/XL            | Playfair Display  | Bold      | 72px   | 80px (1.11) | -1px           | Hero headline                |
| Display/L             | Playfair Display  | Bold      | 48px   | 56px (1.17) | -0.5px         | Section titles               |
| Display/M             | Playfair Display  | SemiBold  | 36px   | 44px (1.22) | 0px            | Card titles grandes          |
| Heading/L             | DM Sans           | SemiBold  | 28px   | 36px (1.29) | 0px            | Subsection headings          |
| Heading/M             | DM Sans           | Medium    | 22px   | 30px (1.36) | 0px            | Card headings                |
| Body/L                | DM Sans           | Regular   | 18px   | 30.6px (1.7)| 0px            | Párrafos principales         |
| Body/M                | DM Sans           | Regular   | 16px   | 25.6px (1.6)| 0px            | Texto general                |
| Caption               | DM Sans           | Regular   | 13px   | 18px (1.38) | 0.5px          | Badges, fechas, metadata     |
| Mono                  | JetBrains Mono    | Regular   | 14px   | 20px (1.43) | 0px            | Code snippets (si aplica)    |
```

**Color de texto:** Aplicar desde Variables semánticas (`text/primary`, `text/muted`)

---

### Effects (Figma Styles → Effects)

#### glow/gold
```
Type: Drop Shadow
Color: #C9A84C
X: 0px
Y: 0px
Blur: 24px
Spread: 0px
Opacity: 40%
```
**Uso:** Hover en cards de ramas, botones primary activos

#### shadow/card
```
Type: Drop Shadow
Color: #000000
X: 0px
Y: 8px
Blur: 32px
Spread: 0px
Opacity: 60%
```
**Uso:** Elevación de cards en estado default

#### blur/glass
```
Type: Background Blur
Radius: 12px
```
**Uso:** Navbar sticky al hacer scroll, overlays

---

### Spacing (Figma Variables → Number)

```
Collection: Primitives/Spacing

space/1     4px      ← Micro gaps
space/2     8px      ← Padding interno badges
space/3     12px     ← Small gaps
space/4     16px     ← Base spacing
space/6     24px     ← Medium gaps
space/8     32px     ← Section padding
space/12    48px     ← Large gaps entre secciones
space/16    64px     ← Extra large vertical
space/24    96px     ← Hero padding
space/32    128px    ← Max section spacing
```

**Sistema:** Basado en 4px (escala t-shirt: 1/2/3/4/6/8/12/16/24/32)

---

### Border Radius (Figma Variables → Number)

```
Collection: Primitives/Radius

radius/sm    4px     ← Badges
radius/md    8px     ← Buttons
radius/lg    12px    ← Cards
radius/xl    16px    ← Modals
radius/full  999px   ← Pills, avatars circulares
```

---

## ✅ VERIFICACIÓN DE TOKENS

- [x] Variables de color configuradas (Primitivos + Semánticos)
- [x] Text Styles creados (9 estilos)
- [x] Effects creados (3 estilos: glow, shadow, blur)
- [x] Spacing Variables configuradas (10 valores)
- [x] Border Radius Variables configuradas (5 valores)
- [x] Fuentes cargadas: Playfair Display, DM Sans, JetBrains Mono
- [x] Modo Dark configurado como único theme

---

## 🚫 RESTRICCIONES APLICADAS

- ❌ NO se usó Inter, Roboto, ni system fonts
- ❌ NO se crearon gradientes purple o azul eléctrico
- ✅ Paleta 100% basada en el análisis del brief (dorado + verde + neutral cálido)
- ✅ Fondo base `#050302` respetado (Bernini reference)
- ✅ Tokens semánticos referencian primitivos (cambio centralizado)

---

## 📌 PRÓXIMOS PASOS

**Pendiente para Fase 2 (UI/UX Designer):**
- Especificaciones de layout por sección
- Comportamiento responsive (375px / 1280px)
- Micro-interacciones y animaciones

**Pendiente para Fase 3 (Figma Designer - segunda pasada):**
- Construcción de componentes con Auto Layout
- Wireframes lo-fi
- Pantallas Hi-Fi (Desktop → Mobile)
- Handoff con redlines

---

*Documento generado por: Figma Designer Senior Agent | Proyecto Goru*  
*Fecha: Mayo 11, 2026 | Versión: 1.0*
