# 🎨 FIGMA FILE STRUCTURE — PROYECTO GORU (ECOSISTEMA SaaS)

> **Archivo Figma:** `Goru — Ecosistema de Gestión Empresarial`  
> **Estado:** Tokens configurados ✅ | Pantallas pendientes ⏳  
> **Designer:** Figma Designer Senior Agent

---

## 📑 ESTRUCTURA DE PÁGINAS

```
📁 Goru — Ecosistema de Gestión Empresarial
├── 🎨 Design Tokens          ← Variables, estilos, sistema base
├── 🧩 Components              ← Biblioteca atómica reutilizable (React-ready)
├── 📐 Wireframes              ← Lo-fi, escala de grises (3 pantallas)
├── 🖥️ Desktop — 1280px        ← Hi-fi por pantallas
├── 📱 Mobile — 375px          ← Hi-fi responsive
├── 🔄 Prototype flows         ← Landing → Login → Dashboard
└── 📦 Handoff notes           ← Redlines, exports, specs React
```

---

## 🎨 PÁGINA 1 — DESIGN TOKENS

### Variables de Color (Figma Variables → Color)

#### Primitivos (Color Variables)

```
Collection: Primitives/Color

gold/100    #E8C97A    ← Glow y highlights
gold/200    #C9A84C    ← Acento principal (brand Goru)
gold/300    #A8893C    ← Variante oscura

neutral/0   #050302    ← Fondo deep (Bernini reference)
neutral/100 #0D0D0D    ← Surfaces y cards
neutral/150 #1A1A1A    ← Sidebar, paneles Dashboard
neutral/200 #2A2520    ← Bordes sutiles
neutral/700 #8A8070    ← Texto muted
neutral/900 #F5F0E8    ← Texto principal (cálido)

success/100 #4ADE80    ← Módulo activo
success/200 #22C55E    ← Success states
warning/100 #FBBF24    ← En configuración
warning/200 #F59E0B    ← Warning states
error/100   #F87171    ← Módulo inactivo
error/200   #EF4444    ← Error states
info/100    #60A5FA    ← Info states
info/200    #3B82F6    ← Primary info
```

#### Colores por Módulo Goru (según íconos proporcionados)

```
Collection: Modules/Color

module/empresarial     #C9A84C    ← Dorado (gestión empresarial)
module/pos             #3B82F6    ← Azul (punto de venta)
module/contable        #10B981    ← Verde (contable)
module/bancos          #8B5CF6    ← Morado (bancos)
module/proveedores     #F59E0B    ← Naranja (proveedores)
module/rrhh            #EC4899    ← Rosa (recursos humanos)
module/profesionales   #06B6D4    ← Cyan (profesionales independientes)
```

**Nota:** Estos colores son preliminares. Ajustar según imagen de referencia de íconos cuando se proporcione.

#### Semánticos (Referencia a Primitivos)

```
Collection: Semantic/Color

bg/deep            → {neutral/0}
bg/surface         → {neutral/100}
bg/panel           → {neutral/150}
border/default     → {neutral/200}
text/primary       → {neutral/900}
text/muted         → {neutral/700}
accent/primary     → {gold/200}
accent/hover       → {gold/100}
accent/glow        → {gold/100}

state/active       → {success/200}
state/inactive     → {error/100}
state/config       → {warning/200}
```

**Modo:** Solo `Dark Mode` (único tema del proyecto)

---

### Text Styles (Figma Text Styles)

```
Familia principal: Poppins (Display/Headings - suave y moderna)
Familia secundaria: Inter (Body/UI - legibilidad óptima)
Familia terciaria: JetBrains Mono (Code/Data - tablas Dashboard)
```

| Nombre Style          | Familia      | Peso      | Tamaño | Line Height | Letter Spacing | Uso                          |
|-----------------------|--------------|-----------|--------|-------------|----------------|------------------------------|
| Display/XL            | Poppins      | Bold      | 72px   | 80px (1.11) | -1px           | Hero headline Landing        |
| Display/L             | Poppins      | Bold      | 48px   | 56px (1.17) | -0.5px         | Section titles Landing       |
| Display/M             | Poppins      | SemiBold  | 36px   | 44px (1.22) | 0px            | Dashboard page titles        |
| Heading/L             | Poppins      | SemiBold  | 28px   | 36px (1.29) | 0px            | Subsection headings          |
| Heading/M             | Poppins      | Medium    | 22px   | 30px (1.36) | 0px            | Card headings, Sidebar items |
| Body/L                | Inter        | Regular   | 18px   | 30.6px (1.7)| 0px            | Párrafos Landing             |
| Body/M                | Inter        | Regular   | 16px   | 25.6px (1.6)| 0px            | Texto general, forms         |
| Body/S                | Inter        | Regular   | 14px   | 21px (1.5)  | 0px            | Labels, metadata Dashboard   |
| Caption               | Inter        | Regular   | 13px   | 18px (1.38) | 0.5px          | Badges, timestamps           |
| Mono                  | JetBrains Mono | Regular | 14px   | 20px (1.43) | 0px            | Tablas, datos Dashboard      |
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
**Uso:** Hover en module cards, botones CTA activos

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

#### shadow/panel
```
Type: Drop Shadow
Color: #000000
X: 0px
Y: 4px
Blur: 16px
Spread: 0px
Opacity: 40%
```
**Uso:** Sidebar Dashboard, formulario Login

#### blur/glass
```
Type: Background Blur
Radius: 12px
```
**Uso:** Navbar sticky, overlays, modals

---

### Spacing (Figma Variables → Number)

```
Collection: Primitives/Spacing

space/1     4px      ← Micro gaps
space/2     8px      ← Padding interno badges
space/3     12px     ← Small gaps
space/4     16px     ← Base spacing
space/5     20px     ← Medium gaps
space/6     24px     ← Card padding
space/8     32px     ← Section padding
space/12    48px     ← Large gaps entre secciones
space/16    64px     ← Extra large vertical
space/24    96px     ← Landing section padding
space/32    128px    ← Max section spacing
```

**Sistema:** Basado en 4px (escala: 1/2/3/4/5/6/8/12/16/24/32)

---

### Border Radius (Figma Variables → Number)

```
Collection: Primitives/Radius

radius/sm    4px     ← Badges, tags
radius/md    6px     ← Buttons, inputs
radius/lg    12px    ← Cards
radius/xl    16px    ← Panels, modals
radius/2xl   20px    ← Module icons (fondo redondeado)
radius/full  999px   ← Pills, avatars circulares
```

---

### Iconography (Guidelines)

#### Íconos de Módulos Goru

**Estructura del ícono:**
```
┌─────────────────┐
│  [Fondo color]  │ ← Border radius: radius/2xl (20px)
│                 │   Size: 64px × 64px (Landing), 48px × 48px (Dashboard)
│    GO / RU      │ ← Texto en dos líneas, color: white o neutral/0
│                 │   Font: Poppins Bold
└─────────────────┘
```

**Colores de fondo por módulo:**
- Gestión Empresarial: `#C9A84C` (dorado)
- Punto de Venta: `#3B82F6` (azul)
- Contable: `#10B981` (verde)
- Bancos: `#8B5CF6` (morado)
- Proveedores: `#F59E0B` (naranja)
- RRHH: `#EC4899` (rosa)
- Profesionales: `#06B6D4` (cyan)

**Exportar como:** SVG con fill parametrizable (color del fondo como variable CSS)

#### Íconos UI generales

**Librería:** Lucide Icons (React-compatible)
- Tamaños: 16px (small), 20px (medium), 24px (large)
- Color: variable según contexto (text/primary, text/muted, accent/primary)

---

## ✅ VERIFICACIÓN DE TOKENS

- [x] Variables de color configuradas (Primitivos + Semánticos + Módulos)
- [x] Text Styles creados (10 estilos)
- [x] Effects creados (4 estilos: glow, card shadow, panel shadow, blur)
- [x] Spacing Variables configuradas (11 valores)
- [x] Border Radius Variables configuradas (6 valores)
- [x] Fuentes cargadas: Poppins, Inter, JetBrains Mono
- [x] Guidelines de iconografía de módulos Goru
- [x] Modo Dark configurado como único theme

---

## 🚫 RESTRICCIONES APLICADAS

- ❌ NO se usó Times New Roman, Playfair Display (cambiado a Poppins/Inter)
- ❌ NO se crearon gradientes purple o azul eléctrico genérico
- ✅ Paleta basada en dorado #C9A84C + colores individuales por módulo
- ✅ Fondo base `#050302` respetado (Bernini reference)
- ✅ Tokens semánticos referencian primitivos (cambio centralizado)
- ✅ Nomenclatura compatible con React (PascalCase para componentes)

---

## 📌 PRÓXIMOS PASOS

**Pendiente para Fase 2 (UI/UX Designer):**
- Especificaciones de layout de 3 pantallas: Landing, Login, Dashboard
- Comportamiento responsive (375px / 1280px)
- Micro-interacciones y flujo Landing → Login → Dashboard
- Diferenciación visual: público (marketing) vs autenticado (producto)

**Pendiente para Fase 3 (Figma Designer - segunda pasada):**
- Construcción de componentes React-ready con Auto Layout
- Wireframes lo-fi de 3 pantallas
- Pantallas Hi-Fi (Desktop → Mobile)
- Handoff con nomenclatura PascalCase y props de componentes

---

*Documento generado por: Figma Designer Senior Agent | Proyecto Goru*  
*Fecha: Mayo 11, 2026 | Versión: 1.0*
