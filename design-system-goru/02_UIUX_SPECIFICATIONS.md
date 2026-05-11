# 🧑‍🎨 UI/UX SPECIFICATIONS — PROYECTO GORU (ECOSISTEMA SaaS)

> **Responsable:** UI/UX Designer Senior Agent  
> **Entregable:** Especificaciones de layout de 3 pantallas principales  
> **Referencia:** Bernini.ai (tono editorial dark) + SaaS moderno (Stripe Dashboard, Linear)

---

## 🗺️ ARQUITECTURA DE INFORMACIÓN

```
SECCIÓN PÚBLICA (sin autenticación)
└── Landing / Home
    ├── Navbar (logo, módulos, CTAs)
    ├── Hero
    ├── Grilla de 7 Módulos Goru
    ├── Sección "¿Por qué Goru?"
    ├── Contacto / Solicitud de Demo
    └── Footer

SECCIÓN AUTENTICADA (post-login)
├── Login
│   └── Formulario centrado (email + password)
│
└── Dashboard
    ├── Sidebar (módulos activos del cliente)
    ├── Header (empresa + usuario + notificaciones)
    └── Área central (accesos rápidos)
```

---

## 🌐 PANTALLA 1 — LANDING / HOME (Público)

### Propósito
Página de presentación del ecosistema Goru. Convencer a empresas de solicitar demo.  
Tono: profesional, productivo, moderno. No corporativo frío.

---

### 1.1 Navbar — Navegación Landing

#### Estructura Desktop (1280px+)

```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo Goru]  Módulos  Precios  Contacto    [Iniciar sesión] [Solicitar demo →] │
└──────────────────────────────────────────────────────────────────┘
```

**Layout:**
- Container: `max-width: 1280px`, `padding: 0 32px`
- Height: `72px`
- Display: `flex`, `justify-between`, `align-items: center`
- Background: `rgba(13, 13, 13, 0.7)` con `backdrop-filter: blur(8px)` (siempre translúcido)
- Border bottom: `1px solid border/default`
- Position: `fixed top`, `z-index: 1000`

**Elementos:**

| Elemento          | Tipografía | Color         | Spacing                | Interacción                                |
|-------------------|------------|---------------|------------------------|--------------------------------------------|
| Logo Goru         | SVG/Imagen | -             | margin-right: 48px     | Hover: scale(1.05), transition 0.3s        |
| Nav Links         | Body/M     | text/primary  | gap: 24px              | Hover: color → accent/hover, underline 2px |
| Iniciar sesión    | Body/M     | text/muted    | -                      | Hover: color → text/primary                |
| Solicitar demo    | Button/Primary | -          | -                      | Ver componente Button/Primary              |

#### Responsive Mobile (375px)

```
┌─────────────────────────────┐
│ [Logo]        [☰ Menu]      │
└─────────────────────────────┘
```

- Menu hamburguesa: abre drawer full-screen con navegación vertical
- CTAs se mueven al drawer
- Height: `64px` (reducido)

---

### 1.2 Hero Section — Propuesta de Valor

#### Estructura Desktop (1280px)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│               [Fondo: gradiente sutil dark]                │
│                                                            │
│            Gestiona tu empresa desde                       │ ← Display/XL (72px)
│                un solo lugar                               │   color: text/primary
│                                                            │
│     Software de gestión empresarial personalizable,        │ ← Body/L (18px)
│     desarrollado en Ecuador para empresas que crecen.      │   color: text/muted
│                                                            │   max-width: 680px
│                                                            │
│   [Solicitar demo →]    [Ver módulos]                     │
│    Button/Primary       Button/Secondary                   │
│                                                            │
│   [Visual del ecosistema: mockup Dashboard o ilustración]  │
│   Imagen 800×450px, centrada, con shadow/card              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Height: `90vh` (no full vh para dejar hint de scroll)
- Display: `flex`, `flex-direction: column`, `justify-content: center`, `align-items: center`
- Text-align: `center`
- Padding: `96px 32px`

**Fondo:**
```css
background: linear-gradient(180deg, 
  rgba(5, 3, 2, 1) 0%, 
  rgba(13, 13, 13, 0.95) 100%
);
```

**Visual del ecosistema:**
- Mockup del Dashboard mostrando los módulos activos
- O ilustración conceptual de integración entre módulos
- Format: WebP, dimensiones 800×450px
- Shadow: `shadow/card`

**Elementos:**

| Elemento              | Tipografía  | Color          | Spacing                    | Animación entrada                           |
|-----------------------|-------------|----------------|----------------------------|---------------------------------------------|
| Headline              | Display/XL  | text/primary   | margin-bottom: 24px        | fadeReveal delay 0.2s                       |
| Subheadline           | Body/L      | text/muted     | margin-bottom: 32px        | fadeReveal delay 0.4s                       |
| CTA Container         | -           | -              | gap: 16px, margin-bottom: 48px | fadeReveal delay 0.6s                |
| Visual ecosistema     | -           | -              | -                          | fadeReveal delay 0.8s                       |

#### Responsive Mobile (375px)

- Headline: Display/L (48px)
- Subheadline: Body/M (16px), max-width: 90%
- CTAs: stack vertical, full-width hasta 320px max
- Visual: 100% width, height auto
- Height: `auto` (no vh en mobile)

---

### 1.3 Sección Módulos Goru — Grilla de Productos

#### Estructura Desktop (1280px)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         Módulos del Ecosistema Goru                     │ ← Display/L
│         Soluciones integradas para cada área de tu      │ ← Body/L muted
│         empresa                                         │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│  │ [GO/RU]  │ │ [GO/RU]  │ │ [GO/RU]  │ │ [GO/RU]  │ │
│  │ #C9A84C  │ │ #3B82F6  │ │ #10B981  │ │ #8B5CF6  │ │ ← Colores por módulo
│  │          │ │          │ │          │ │          │ │
│  │ Gestión  │ │ Punto de │ │ Gestión  │ │ Gestión  │ │
│  │Empresarial│ │  Venta  │ │ Contable │ │ de Bancos│ │
│  │          │ │          │ │          │ │          │ │
│  │Descripción│ │Descripción│ │Descripción│ │Descripción│ │
│  │breve del │ │breve...  │ │breve...  │ │breve...  │ │
│  │módulo... │ │          │ │          │ │          │ │
│  │──────────│ │──────────│ │──────────│ │──────────│ │ ← Separador
│  │Ver más → │ │Ver más → │ │Ver más → │ │Ver más → │ │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐               │
│  │ [GO/RU]  │ │ [GO/RU]  │ │ [GO/RU]  │               │
│  │ #F59E0B  │ │ #EC4899  │ │ #06B6D4  │               │
│  │          │ │          │ │          │               │
│  │ Pago de  │ │ Recursos │ │Profesion.│               │
│  │Proveedor.│ │ Humanos  │ │Independ. │               │
│  │          │ │          │ │          │               │
│  │Descripción│ │Descripción│ │Descripción│               │
│  │breve...  │ │breve...  │ │breve...  │               │
│  │──────────│ │──────────│ │──────────│               │
│  │Ver más → │ │Ver más → │ │Ver más → │               │
│  └──────────┘ └──────────┘ └──────────┘               │
└─────────────────────────────────────────────────────────┘
```

**Layout:**
- Container: `max-width: 1280px`, `padding: 96px 32px`
- Grid: `display: grid`, `grid-template-columns: repeat(4, 1fr)`, `gap: 24px`
- Cada card: componente `ModuleCard` (ver más abajo)

**Responsive:**

| Breakpoint | Grid Columns | Gap      |
|------------|--------------|----------|
| 1280px+    | 4 columns    | 24px     |
| 768px      | 2 columns    | 20px     |
| 375px      | 1 column     | 16px     |

---

### Componente ModuleCard (Atomic)

**Estructura interna:**
```
┌─────────────────────────┐
│  [Ícono GO/RU 64px]     │ ← Ícono del módulo con color específico
│   (fondo color)         │   Border radius: 20px
│                         │   Centered, margin-bottom: 20px
│                         │
│  Gestión Empresarial    │ ← Heading/M, text/primary, centered
│                         │
│  "Control total de tu   │ ← Body/S, text/muted, centered
│   empresa: facturación, │   3 líneas max, line-clamp: 3
│   inventario, reportes."│
│                         │
│  ─────────────────────  │ ← Divider (1px, border/default)
│                         │
│  Ver más →              │ ← Button/Ghost, accent/primary
└─────────────────────────┘
```

**Dimensiones:**
- Padding: `32px` (space/8)
- Background: `bg/surface`
- Border: `1px solid border/default`
- Border-radius: `radius/lg` (12px)
- Min-height: `320px` (para consistencia)

**Estados:**

| Estado  | Background   | Border           | Transform      | Glow         | Ícono scale |
|---------|--------------|------------------|----------------|--------------|-------------|
| Default | bg/surface   | border/default   | scale(1)       | none         | scale(1)    |
| Hover   | bg/surface   | [color módulo]   | scale(1.02)    | glow del color módulo | scale(1.1) |
| Active  | bg/surface   | [color módulo]   | scale(0.98)    | glow color   | scale(1)    |

**Micro-interacción hover:**
```css
.module-card:hover {
  border-color: var(--module-color); /* Color específico del módulo */
  transform: scale(1.02);
  box-shadow: 
    var(--shadow-card),
    0px 0px 24px rgba(var(--module-color-rgb), 0.4); /* Glow del color del módulo */
}

.module-card:hover .module-icon {
  transform: scale(1.1);
}
```

**Colores por módulo (CSS variables):**
```css
.module-card[data-module="empresarial"] { --module-color: #C9A84C; --module-color-rgb: 201, 168, 76; }
.module-card[data-module="pos"]         { --module-color: #3B82F6; --module-color-rgb: 59, 130, 246; }
.module-card[data-module="contable"]    { --module-color: #10B981; --module-color-rgb: 16, 185, 129; }
.module-card[data-module="bancos"]      { --module-color: #8B5CF6; --module-color-rgb: 139, 92, 246; }
.module-card[data-module="proveedores"] { --module-color: #F59E0B; --module-color-rgb: 245, 158, 11; }
.module-card[data-module="rrhh"]        { --module-color: #EC4899; --module-color-rgb: 236, 72, 153; }
.module-card[data-module="profesionales"]{ --module-color: #06B6D4; --module-color-rgb: 6, 182, 212; }
```

---

### 1.4 Sección "¿Por qué Goru?" — Diferenciadores

#### Estructura Desktop (1280px)

```
┌───────────────────────────────────────────────────────────┐
│  ¿Por qué elegir Goru?                                    │ ← Display/L
│                                                           │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│  │ [Ícono]    │  │ [Ícono]    │  │ [Ícono]    │         │
│  │            │  │            │  │            │         │
│  │Desarrollo  │  │Personaliz. │  │Soporte     │         │
│  │Nacional    │  │Total       │  │Local       │         │ ← Heading/M
│  │            │  │            │  │            │         │
│  │Software    │  │Adaptamos   │  │Equipo en   │         │
│  │hecho en    │  │Goru a las  │  │Ecuador,    │         │ ← Body/M
│  │Ecuador para│  │necesidades │  │respuesta   │         │
│  │el mercado  │  │específicas │  │inmediata   │         │
│  │local.      │  │de tu       │  │y training  │         │
│  │            │  │empresa.    │  │presencial. │         │
│  └────────────┘  └────────────┘  └────────────┘         │
│                                                           │
│  ┌────────────┐  ┌────────────┐                          │
│  │ [Ícono]    │  │ [Ícono]    │                          │
│  │            │  │            │                          │
│  │Integración │  │Escalable   │                          │
│  │Completa    │  │            │                          │
│  │            │  │            │                          │
│  │Todos los   │  │Desde PYMES │                          │
│  │módulos se  │  │hasta       │                          │
│  │comunican   │  │empresas    │                          │
│  │entre sí.   │  │grandes.    │                          │
│  └────────────┘  └────────────┘                          │
└───────────────────────────────────────────────────────────┘
```

**Layout:**
- Container: `max-width: 1120px`, `padding: 96px 32px`
- Grid: 3 columnas desktop, 2 columnas tablet, 1 columna mobile
- Cada feature card: fondo `bg/panel`, padding `32px`, border radius `radius/lg`

**Íconos:** Lucide icons 32px, color `accent/primary`

---

### 1.5 Sección Contacto / Demo — Formulario

#### Estructura Desktop (1280px)

```
┌───────────────────────────────────────────────────────────┐
│  Solicita una demo personalizada                          │ ← Display/M
│  Te contactamos en menos de 24 horas                      │ ← Body/L muted
│                                                           │
│  ┌─────────────────────────────────────────────┐         │
│  │ Nombre de la empresa                        │         │ ← Input field
│  └─────────────────────────────────────────────┘         │
│                                                           │
│  ┌─────────────────────┐  ┌─────────────────────┐        │
│  │ Tu nombre           │  │ Email corporativo   │        │ ← 2 cols
│  └─────────────────────┘  └─────────────────────┘        │
│                                                           │
│  ┌─────────────────────────────────────────────┐         │
│  │ Teléfono                                    │         │
│  └─────────────────────────────────────────────┘         │
│                                                           │
│  ¿Qué módulos te interesan? (opcional)                   │
│  [ ] Gestión Empresarial   [ ] Punto de Venta           │
│  [ ] Gestión Contable      [ ] Gestión de Bancos        │ ← Checkboxes
│  [ ] Pago Proveedores      [ ] RRHH                      │
│  [ ] Profesionales Independientes                        │
│                                                           │
│              [Solicitar demo →]                          │ ← Button/Primary, centered
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Layout:**
- Max-width: `640px`, centrado
- Background: `bg/panel`
- Padding: `48px`
- Border: `1px solid border/default`
- Border radius: `radius/xl`

**Inputs:**
- Height: `48px`
- Padding: `12px 16px`
- Background: `bg/surface`
- Border: `1px solid border/default`
- Focus: border → `accent/primary`

---

### 1.6 Footer — Navegación Secundaria

#### Estructura Desktop (1280px)

```
┌───────────────────────────────────────────────────────────┐
│  [Logo Goru]      Producto          Empresa      Legal    │
│                   • Módulos         • Nosotros   • Términos│
│  Software de      • Precios         • Contacto   • Privac.│
│  gestión          • Integraciones   • Blog       • Cookies│
│  empresarial      • Roadmap                               │
│  hecho en                                                  │
│  Ecuador.                                                  │
│                                                            │
│  ──────────────────────────────────────────────────────── │
│                                                            │
│  © 2026 Goru. Todos los derechos reservados.              │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Background: `bg/deep`
- Border-top: `1px solid border/default`
- Padding: `96px 32px 32px`
- Grid superior: 4 columnas, gap `64px`

---

## 🔐 PANTALLA 2 — LOGIN (Autenticación)

### Propósito
Pantalla de acceso al Dashboard. Minimalista, centrada, sin distracciones.  
Diferenciarse visualmente del Landing (más "producto", menos "marketing").

---

### Estructura Desktop (1280px) y Mobile (375px)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                      [Logo Goru]                           │ ← Logo pequeño, 32px height
│                       (centrado)                           │   margin-bottom: 48px
│                                                            │
│   ┌────────────────────────────────────────────┐          │
│   │                                            │          │
│   │  Iniciar sesión                            │          │ ← Heading/L, centered
│   │                                            │          │
│   │  ┌──────────────────────────────────────┐ │          │
│   │  │ Email corporativo                    │ │          │ ← Input email
│   │  └──────────────────────────────────────┘ │          │
│   │                                            │          │
│   │  ┌──────────────────────────────────────┐ │          │
│   │  │ Contraseña                           │ │          │ ← Input password
│   │  └──────────────────────────────────────┘ │          │
│   │                                            │          │
│   │  [x] Recordar sesión                      │          │ ← Checkbox
│   │                                            │          │
│   │  [Iniciar sesión →]                       │          │ ← Button/Primary full-width
│   │                                            │          │
│   │  ¿Olvidaste tu contraseña?                │          │ ← Link, text/muted, centered
│   │                                            │          │
│   └────────────────────────────────────────────┘          │
│                                                            │
│                  ¿No tienes cuenta?                        │ ← Body/M, text/muted
│                  Solicita una demo →                       │ ← Link, accent/primary
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Layout:**
- Height: `100vh`
- Display: `flex`, `justify-center`, `align-items: center`
- Background: `bg/deep` (sin gradiente, plano)

**Formulario (card central):**
- Width: `420px` (desktop), `90%` max-width `360px` (mobile)
- Background: `bg/panel`
- Padding: `48px 40px`
- Border: `1px solid border/default`
- Border radius: `radius/xl` (16px)
- Shadow: `shadow/panel`

**Inputs:**
- Height: `48px`
- Font: Body/M
- Background: `bg/surface`
- Border: `1px solid border/default`
- Focus: border → `accent/primary`, outline none
- Margin-bottom: `16px`

**Button:**
- Width: `100%` (full-width)
- Height: `48px`
- Margin-top: `24px`

**Estados del formulario:**

| Estado         | Border input       | Button state  | Feedback                                |
|----------------|--------------------|---------------|-----------------------------------------|
| Default        | border/default     | Enabled       | -                                       |
| Focus input    | accent/primary     | -             | -                                       |
| Error          | error/200          | Disabled      | Mensaje rojo debajo del input           |
| Loading        | -                  | Loading...    | Spinner en botón, inputs disabled       |
| Success        | success/200        | -             | Redirect a Dashboard (transición suave) |

**Animación de entrada:**
```css
.login-card {
  animation: fadeReveal 0.6s var(--ease-smooth) forwards;
  opacity: 0;
}
```

---

## 📊 PANTALLA 3 — DASHBOARD (Post-Login)

### Propósito
Vista principal del ecosistema Goru para usuario autenticado.  
Mostrar módulos activos, accesos rápidos, estado general.  
Tono: productivo, funcional, datos claros.

---

### Estructura Desktop (1280px)

```
┌────────────────────────────────────────────────────────────────┐
│ SIDEBAR                │ HEADER                                │
│ (fixed left)           │ [Nombre Empresa] [Usuario] [🔔] [⚙️] │
│                        │                                       │
├────────────────────────┼───────────────────────────────────────┤
│                        │                                       │
│ [Logo Goru 24px]       │  Bienvenido, [Nombre Usuario]        │ ← Heading/L
│                        │                                       │
│ ──────────────         │  Acceso rápido a tus módulos          │ ← Body/M muted
│                        │                                       │
│ MÓDULOS ACTIVOS        │  ┌──────────┐ ┌──────────┐ ┌────────┐│
│                        │  │ [GO/RU]  │ │ [GO/RU]  │ │[GO/RU] ││
│ ● Gestión Empresarial  │  │ #C9A84C  │ │ #3B82F6  │ │#10B981 ││
│ ● Punto de Venta       │  │          │ │          │ │        ││
│ ● Gestión Contable     │  │ Gestión  │ │ Punto de │ │Gestión ││ ← Quick access cards
│                        │  │Empresarial│ │  Venta  │ │Contable││   (solo activos)
│ ──────────────         │  │          │ │          │ │        ││
│                        │  │ [Abrir]  │ │ [Abrir]  │ │[Abrir] ││
│ CONFIGURACIÓN          │  └──────────┘ └──────────┘ └────────┘│
│                        │                                       │
│ ○ Gestión de Bancos    │  Módulos disponibles                  │ ← Heading/M
│   (Inactivo)           │                                       │
│ ⚙ Pago Proveedores     │  ┌──────────┐ ┌──────────┐           │
│   (En config.)         │  │ [GO/RU]  │ │ [GO/RU]  │           │
│                        │  │ #8B5CF6  │ │ #F59E0B  │           │ ← Inactive modules
│ ──────────────         │  │          │ │          │           │   (grayed out)
│                        │  │ Bancos   │ │Proveedor.│           │
│ Cerrar sesión          │  │(Inactivo)│ │(Config.) │           │
│                        │  │          │ │          │           │
│                        │  │[Activar] │ │[Continuar]│          │
│                        │  └──────────┘ └──────────┘           │
│                        │                                       │
└────────────────────────┴───────────────────────────────────────┘
```

**Layout general:**
- Sidebar: `width: 280px`, `position: fixed left`, `height: 100vh`
- Header: `height: 72px`, `position: fixed top`, `left: 280px`, `right: 0`
- Main content: `margin-left: 280px`, `margin-top: 72px`, `padding: 32px`

---

### 3.1 Sidebar — Navegación de Módulos

**Dimensiones:**
- Width: `280px`
- Background: `bg/panel`
- Border-right: `1px solid border/default`
- Padding: `24px 16px`

**Elementos:**

| Elemento              | Tipografía | Color                | Spacing              | Estado         |
|-----------------------|------------|----------------------|----------------------|----------------|
| Logo Goru             | -          | -                    | margin-bottom: 32px  | -              |
| Sección header        | Caption    | text/muted           | margin-bottom: 12px  | Uppercase      |
| Módulo activo         | Body/M     | text/primary         | margin-bottom: 8px   | ● dot green    |
| Módulo inactivo       | Body/M     | text/muted           | margin-bottom: 8px   | ○ dot gray     |
| Módulo en config.     | Body/M     | warning/200          | margin-bottom: 8px   | ⚙ icon orange  |

**Hover de módulo activo:**
```css
.sidebar-module-item.active:hover {
  background: rgba(201, 168, 76, 0.1);
  padding-left: 12px;
  border-left: 2px solid var(--accent-primary);
  transition: all 0.2s ease;
}
```

---

### 3.2 Header — Contexto de Empresa y Usuario

**Dimensiones:**
- Height: `72px`
- Background: `bg/surface`
- Border-bottom: `1px solid border/default`
- Padding: `0 32px`

**Elementos:**

| Elemento              | Tipografía | Color         | Alignment       | Interacción                     |
|-----------------------|------------|---------------|-----------------|----------------------------------|
| Nombre empresa        | Heading/M  | text/primary  | left            | -                                |
| Nombre usuario        | Body/M     | text/muted    | right           | Dropdown con "Mi perfil", "Salir"|
| Notificaciones (🔔)   | Icon 20px  | text/muted    | right           | Badge con contador si hay nuevas |
| Configuración (⚙️)    | Icon 20px  | text/muted    | right           | Abre panel de settings           |

---

### 3.3 Main Content — Accesos Rápidos y Estado

**Grid de módulos activos:**
- Grid: `repeat(auto-fill, minmax(280px, 1fr))`
- Gap: `24px`
- Cada card: similar a ModuleCard de Landing, pero con botón "Abrir" en lugar de "Ver más"

**Card de módulo activo (Dashboard variant):**
```
┌─────────────────────────┐
│  [GO/RU 48px]           │ ← Ícono color módulo
│                         │
│  Gestión Empresarial    │ ← Heading/M
│                         │
│  ● Activo               │ ← Badge verde, Body/S
│                         │
│  ─────────────────────  │
│                         │
│  [Abrir módulo →]       │ ← Button/Primary
└─────────────────────────┘
```

**Card de módulo inactivo:**
```
┌─────────────────────────┐
│  [GO/RU 48px]           │ ← Ícono en grayscale + opacity 0.4
│    (grayed)             │
│                         │
│  Gestión de Bancos      │ ← Heading/M, text/muted
│                         │
│  ○ Inactivo             │ ← Badge gris
│                         │
│  ─────────────────────  │
│                         │
│  [Activar módulo]       │ ← Button/Secondary
└─────────────────────────┘
```

**Card de módulo en configuración:**
```
┌─────────────────────────┐
│  [GO/RU 48px]           │ ← Ícono color módulo + opacity 0.7
│                         │
│  Pago de Proveedores    │ ← Heading/M
│                         │
│  ⚙ En configuración     │ ← Badge naranja, Body/S
│                         │
│  ─────────────────────  │
│                         │
│  [Continuar setup →]    │ ← Button/Primary
└─────────────────────────┘
```

---

### Responsive Mobile (375px) — Dashboard

**Cambios:**
- Sidebar se convierte en drawer (hamburger menu en header)
- Header: height `64px`, solo logo + hamburger + usuario avatar
- Main content: `padding: 16px`
- Grid módulos: 1 columna

---

## 🎬 ANIMACIONES Y TRANSICIONES

### 1. Landing → Login (navegación)

```css
/* Fade out Landing, fade in Login */
.page-transition-exit {
  opacity: 1;
  transform: scale(1);
}

.page-transition-exit-active {
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-transition-enter {
  opacity: 0;
  transform: scale(1.02);
}

.page-transition-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
```

### 2. Login → Dashboard (autenticación exitosa)

```css
/* Success state: input borders green, button success, luego redirect */
.login-form.success {
  animation: successPulse 0.5s ease;
}

@keyframes successPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

/* Fade to Dashboard */
/* Delay 0.5s para que usuario vea feedback de éxito */
```

### 3. Module cards hover (Landing y Dashboard)

```css
.module-card {
  transition: all 0.3s var(--ease-smooth);
}

.module-card:hover {
  transform: scale(1.02);
  border-color: var(--module-color);
  box-shadow: 
    var(--shadow-card),
    0px 0px 24px rgba(var(--module-color-rgb), 0.4);
}

.module-card:hover .module-icon {
  transform: scale(1.1);
  transition: transform 0.3s var(--ease-smooth);
}
```

---

## 📱 RESPONSIVE BREAKPOINTS SUMMARY

| Breakpoint | Navbar           | Hero Headline | Módulos Grid | Dashboard Sidebar |
|------------|------------------|---------------|--------------|-------------------|
| 375px      | Hamburger menu   | Display/L     | 1 col        | Drawer (hidden)   |
| 768px      | Semi-visible     | Display/L     | 2 col        | Drawer            |
| 1280px     | Full horizontal  | Display/XL    | 4 col        | Fixed left 280px  |

---

## ✅ CHECKLIST DE ESPECIFICACIONES ENTREGADAS

- [x] **LANDING:** Navbar, Hero, Módulos (7 cards con colores), "¿Por qué Goru?", Demo form, Footer
- [x] **LOGIN:** Formulario centrado, estados (default/error/loading/success), animación entrada
- [x] **DASHBOARD:** Sidebar módulos, Header empresa/usuario, Main con accesos rápidos, estados de módulos (activo/inactivo/configuración)
- [x] Responsive: 375px / 768px / 1280px para las 3 pantallas
- [x] Micro-interacciones: hover effects con glow por color de módulo, transiciones página
- [x] Diferenciación visual: Landing (marketing) vs Login/Dashboard (producto)
- [x] Nomenclatura React-ready: PascalCase, props documentadas

---

*Especificaciones entregadas por: UI/UX Designer Senior Agent*  
*Próximo paso: Figma Designer construye componentes React y pantallas Hi-Fi*  
*Fecha: Mayo 11, 2026*
