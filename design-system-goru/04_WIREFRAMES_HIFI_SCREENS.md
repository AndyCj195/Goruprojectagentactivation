# 📐 WIREFRAMES & HI-FI SCREENS — PROYECTO GORU

> **Páginas:** 📐 Wireframes | 🖥️ Desktop 1280px | 📱 Mobile 375px  
> **Estado:** Wireframes ✅ | Desktop Hi-Fi ✅ | Mobile Hi-Fi ✅  
> **Pantallas:** Landing, Login, Dashboard

---

## 📐 WIREFRAMES — Lo-Fi (Escala de grises)

### Convenciones

```
Paleta de grises:
- Fondo: #1A1A1A (gris oscuro, simula dark mode)
- Surfaces: #2A2A2A
- Bordes: #3A3A3A
- Texto principal: #E0E0E0
- Texto secundario: #888888
- Acento (placeholder dorado): #AAAAAA

Tipografía temporal:
- Todos: Inter Regular/Bold (placeholder)

Componentes:
- Botones: rectangulos con borde
- Módulos: cuadrados con "GO/RU" texto
- Imágenes: placeholder con X diagonal
```

### Frame 1: Landing Wireframe (1280×6000px aprox)

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR (#2A2A2A, 72px)                                      │
│ [Logo] Link Link Link    [Btn ghost] [Btn primary]          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ HERO (90vh, #1A1A1A)                                        │
│                Headline grande                              │
│             Subheadline mediano                             │
│                                                             │
│         [Btn primary] [Btn secondary]                       │
│                                                             │
│         [X Placeholder Image 800×450]                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ MÓDULOS (padding 96px)                                      │
│         Módulos del Ecosistema Goru                         │
│                                                             │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                      │
│  │GO/RU │ │GO/RU │ │GO/RU │ │GO/RU │                      │
│  │      │ │      │ │      │ │      │                      │
│  │Title │ │Title │ │Title │ │Title │                      │
│  │Desc  │ │Desc  │ │Desc  │ │Desc  │                      │
│  │──────│ │──────│ │──────│ │──────│                      │
│  │[CTA] │ │[CTA] │ │[CTA] │ │[CTA] │                      │
│  └──────┘ └──────┘ └──────┘ └──────┘                      │
│                                                             │
│  ┌──────┐ ┌──────┐ ┌──────┐                               │
│  │GO/RU │ │GO/RU │ │GO/RU │                               │
│  └──────┘ └──────┘ └──────┘                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ¿POR QUÉ GORU? (padding 96px)                              │
│                                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                   │
│  │[Ícono]   │ │[Ícono]   │ │[Ícono]   │                   │
│  │Title     │ │Title     │ │Title     │                   │
│  │Descripción│ │Descripción│ │Descripción│                   │
│  └──────────┘ └──────────┘ └──────────┘                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ DEMO FORM (padding 96px, centered 640px)                   │
│                                                             │
│  ┌─────────────────────────────────┐                       │
│  │ [Input: Empresa]                │                       │
│  │ [Input: Nombre] [Input: Email]  │                       │
│  │ [Input: Teléfono]               │                       │
│  │ [ ] Checkboxes módulos          │                       │
│  │ [Btn: Solicitar demo →]         │                       │
│  └─────────────────────────────────┘                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ FOOTER (#2A2A2A, border-top)                               │
│  [Logo] Links Links Links                                  │
│  Copyright                                                  │
└─────────────────────────────────────────────────────────────┘
```

### Frame 2: Login Wireframe (1280×900px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                     [Logo pequeño]                          │
│                                                             │
│            ┌─────────────────────────┐                      │
│            │                         │                      │
│            │  Iniciar sesión         │                      │
│            │                         │                      │
│            │  [Input: Email]         │                      │
│            │  [Input: Password]      │                      │
│            │  [ ] Recordar           │                      │
│            │                         │                      │
│            │  [Btn: Iniciar sesión]  │                      │
│            │                         │                      │
│            │  ¿Olvidaste contraseña? │                      │
│            │                         │                      │
│            └─────────────────────────┘                      │
│                                                             │
│                 ¿No tienes cuenta?                          │
│                 Solicita demo →                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Frame 3: Dashboard Wireframe (1280×900px)

```
┌────────────────────┬────────────────────────────────────────┐
│ SIDEBAR (280px)    │ HEADER (72px)                          │
│                    │ [Empresa] [Usuario] [🔔] [⚙]          │
│ [Logo]             ├────────────────────────────────────────┤
│                    │                                        │
│ ──────────         │ Bienvenido, Usuario                    │
│                    │                                        │
│ MÓDULOS ACTIVOS    │ Acceso rápido a tus módulos            │
│                    │                                        │
│ ● Empresarial      │ ┌──────┐ ┌──────┐ ┌──────┐           │
│ ● POS              │ │GO/RU │ │GO/RU │ │GO/RU │           │
│ ● Contable         │ │Title │ │Title │ │Title │           │
│                    │ │●Activo│ │●Activo│ │●Activo│           │
│ ──────────         │ │[Abrir]│ │[Abrir]│ │[Abrir]│           │
│                    │ └──────┘ └──────┘ └──────┘           │
│ CONFIGURACIÓN      │                                        │
│                    │ Módulos disponibles                    │
│ ○ Bancos (inactivo)│                                        │
│ ⚙ Proveedores (cfg)│ ┌──────┐ ┌──────┐                    │
│                    │ │GO/RU │ │GO/RU │                    │
│ ──────────         │ │○Inact│ │⚙Cfg  │                    │
│                    │ │[Activ]│ │[Cont.]│                    │
│ Cerrar sesión      │ └──────┘ └──────┘                    │
│                    │                                        │
└────────────────────┴────────────────────────────────────────┘
```

---

## 🖥️ DESKTOP HI-FI — 1280px

### Pantalla 1: Landing Desktop (1280×6000px aprox)

#### Sección 1.1: Navbar

```
Frame: navbar-landing-desktop
Dimensions: 1280px × 72px
Position: Fixed top

┌──────────────────────────────────────────────────────────────────┐
│ [Logo Goru SVG]  Módulos  Precios  Contacto    Iniciar sesión  [Solicitar demo →] │
└──────────────────────────────────────────────────────────────────┘

Background: rgba(13, 13, 13, 0.7)
Backdrop-filter: blur(8px)
Border-bottom: 1px solid {border/default} (#2A2520)

Logo:
- Imagen importada (usar la proporcionada)
- Height: 32px, width: auto
- Position: left, margin-left: 32px

Nav Links (Módulos, Precios, Contacto):
- Font: Inter Medium 16px
- Color: {text/primary} (#F5F0E8)
- Spacing: 24px gap
- Hover: color → {accent/hover}, underline animado 2px

Iniciar sesión:
- Font: Inter Medium 16px
- Color: {text/muted} (#8A8070)
- Hover: color → {text/primary}

Solicitar demo:
- Component: Button variant=primary
```

#### Sección 1.2: Hero

```
Frame: hero-landing-desktop
Dimensions: 1280px × 900px (90vh aprox)

Background:
- Linear gradient: 
  - Stop 1: rgba(5, 3, 2, 1) at 0%
  - Stop 2: rgba(13, 13, 13, 0.95) at 100%
  - Angle: 180deg (top to bottom)

┌────────────────────────────────────────────────────────────┐
│                                                            │
│                                                            │
│            Gestiona tu empresa desde                       │ ← Poppins Bold 72px
│                un solo lugar                               │   #F5F0E8
│                                                            │   letter-spacing: -1px
│                                                            │   line-height: 80px
│                                                            │   centered
│                                                            │
│      Software de gestión empresarial personalizable,      │ ← Inter Regular 18px
│      desarrollado en Ecuador para empresas que crecen.    │   #8A8070
│                                                            │   max-width: 680px
│                                                            │   line-height: 30.6px
│                                                            │   centered
│                                                            │
│         [Solicitar demo →]  [Ver módulos]                 │ ← Buttons con gap: 16px
│          (Button/Primary)   (Button/Secondary)             │
│                                                            │
│                                                            │
│   ┌──────────────────────────────────────────────────┐   │
│   │ [Mockup Dashboard o Visual del Ecosistema]       │   │ ← Imagen 800×450px
│   │ Placeholder: ilustración de integración módulos  │   │   Shadow: shadow/card
│   └──────────────────────────────────────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘

Animaciones entrada (opacity 0 inicial):
- Headline: fadeReveal delay 0.2s
- Subheadline: fadeReveal delay 0.4s
- CTAs: fadeReveal delay 0.6s
- Visual: fadeReveal delay 0.8s
```

#### Sección 1.3: Módulos Goru

```
Frame: modules-grid-landing-desktop
Dimensions: 1280px × auto
Padding: 96px 32px

Header:
  ┌─────────────────────────────────────┐
  │ Módulos del Ecosistema Goru         │ ← Poppins Bold 48px, #F5F0E8, centered
  │ Soluciones integradas para cada     │ ← Inter Regular 18px, #8A8070
  │ área de tu empresa                  │
  └─────────────────────────────────────┘
  Margin-bottom: 48px

Grid (Auto Layout Wrap):
  Direction: Horizontal, Wrap
  Gap: 24px horizontal, 24px vertical
  Justify: Center

7× ModuleCard (component instances):

Card 1: Gestión Empresarial
- ModuleIcon: GO/RU con fondo #C9A84C
- Title: "Gestión Empresarial"
- Description: "Control total de tu empresa: facturación, inventario, reportes."
- Hover: border #C9A84C, glow rgba(201, 168, 76, 0.4)

Card 2: Punto de Venta
- ModuleIcon: GO/RU con fondo #3B82F6
- Title: "Punto de Venta"
- Description: "Sistema POS completo: ventas rápidas, inventario en tiempo real."
- Hover: border #3B82F6, glow rgba(59, 130, 246, 0.4)

Card 3: Gestión Contable
- ModuleIcon: GO/RU con fondo #10B981
- Title: "Gestión Contable"
- Description: "Contabilidad automatizada: balance, libro diario, estados financieros."
- Hover: border #10B981, glow rgba(16, 185, 129, 0.4)

Card 4: Gestión de Bancos
- ModuleIcon: GO/RU con fondo #8B5CF6
- Title: "Gestión de Bancos"
- Description: "Conciliación bancaria automática, control de cuentas múltiples."
- Hover: border #8B5CF6, glow rgba(139, 92, 246, 0.4)

Card 5: Pago de Proveedores
- ModuleIcon: GO/RU con fondo #F59E0B
- Title: "Pago de Proveedores"
- Description: "Gestión de cuentas por pagar, calendario de pagos, historial."
- Hover: border #F59E0B, glow rgba(245, 158, 11, 0.4)

Card 6: Recursos Humanos
- ModuleIcon: GO/RU con fondo #EC4899
- Title: "Recursos Humanos"
- Description: "Nómina, asistencia, vacaciones, reportes de RRHH completos."
- Hover: border #EC4899, glow rgba(236, 72, 153, 0.4)

Card 7: Profesionales Independientes
- ModuleIcon: GO/RU con fondo #06B6D4
- Title: "Profesionales Independientes"
- Description: "Gestión para freelancers y consultores: proyectos, facturación."
- Hover: border #06B6D4, glow rgba(6, 182, 212, 0.4)

Grid responsive:
- 1280px+: 4 columnas
- 768-1279px: 2 columnas
- 375-767px: 1 columna
```

#### Sección 1.4: ¿Por qué Goru?

```
Frame: why-goru-desktop
Dimensions: 1280px × auto
Padding: 96px 32px
Max-width: 1120px (centrado)

Header:
  "¿Por qué elegir Goru?" ← Poppins Bold 48px, centered
  Margin-bottom: 48px

Grid: 3 columnas desktop (2 cols tablet, 1 col mobile)
Gap: 32px

Feature Card 1:
  ┌─────────────────────────┐
  │ [Ícono Lucide 32px]     │ ← MapPin, color #C9A84C
  │                         │
  │ Desarrollo Nacional     │ ← Poppins SemiBold 22px
  │                         │
  │ Software hecho en       │ ← Inter Regular 16px, #8A8070
  │ Ecuador para el mercado │   line-height: 1.6
  │ local. Entendemos tus   │
  │ necesidades reales.     │
  └─────────────────────────┘
  Background: {bg/panel} (#1A1A1A)
  Padding: 32px
  Border-radius: 12px

Feature Card 2:
  Ícono: Settings, color #C9A84C
  Title: "Personalización Total"
  Description: "Adaptamos Goru a las necesidades específicas de tu empresa."

Feature Card 3:
  Ícono: Headphones, color #C9A84C
  Title: "Soporte Local"
  Description: "Equipo en Ecuador, respuesta inmediata y training presencial."

Feature Card 4:
  Ícono: Link2, color #C9A84C
  Title: "Integración Completa"
  Description: "Todos los módulos se comunican entre sí. Datos unificados."

Feature Card 5:
  Ícono: TrendingUp, color #C9A84C
  Title: "Escalable"
  Description: "Desde PYMES hasta empresas grandes. Crece con tu negocio."
```

#### Sección 1.5: Formulario Demo

```
Frame: demo-form-desktop
Dimensions: 1280px × auto
Padding: 96px 32px

Header:
  "Solicita una demo personalizada" ← Poppins SemiBold 36px, centered
  "Te contactamos en menos de 24 horas" ← Inter Regular 18px, #8A8070

Formulario (centrado, max-width: 640px):
  Background: {bg/panel}
  Padding: 48px
  Border: 1px solid {border/default}
  Border-radius: 16px

  [Input: Nombre de la empresa] ← Full width
  
  [Input: Tu nombre] [Input: Email corporativo] ← 2 columnas (50% each)
  
  [Input: Teléfono] ← Full width
  
  ¿Qué módulos te interesan? (opcional) ← Inter Medium 16px
  
  Checkboxes (grid 2 columnas):
  [ ] Gestión Empresarial
  [ ] Punto de Venta
  [ ] Gestión Contable
  [ ] Gestión de Bancos
  [ ] Pago de Proveedores
  [ ] Recursos Humanos
  [ ] Profesionales Independientes
  
  [Solicitar demo →] ← Button/Primary, centered, margin-top: 32px
```

#### Sección 1.6: Footer

```
Frame: footer-landing-desktop
Dimensions: 1280px × auto
Padding: 96px 32px 32px
Background: {bg/deep}
Border-top: 1px solid {border/default}

Grid 4 columnas:

Columna 1:
  [Logo Goru 28px]
  "Software de gestión empresarial hecho en Ecuador."
  ← Inter Regular 16px, #8A8070, max-width: 240px

Columna 2:
  "Producto" ← Poppins SemiBold 22px
  • Módulos
  • Precios
  • Integraciones
  • Roadmap

Columna 3:
  "Empresa"
  • Nosotros
  • Contacto
  • Blog

Columna 4:
  "Legal"
  • Términos
  • Privacidad
  • Cookies

Divider (full width, 1px, margin 48px vertical)

Bottom section:
  "© 2026 Goru. Todos los derechos reservados." ← Inter Regular 13px, #8A8070
```

---

### Pantalla 2: Login Desktop (1280×900px)

```
Frame: login-desktop
Dimensions: 1280px × 900px
Background: {bg/deep} (#050302) flat, sin gradiente

┌────────────────────────────────────────────────────────────┐
│                                                            │
│                      [Logo Goru 32px]                      │ ← Centered
│                       margin-top: 80px                     │
│                       margin-bottom: 48px                  │
│                                                            │
│   ┌────────────────────────────────────────────┐          │
│   │                                            │          │
│   │  Iniciar sesión                            │          │ ← Poppins SemiBold 28px
│   │                                            │          │   centered
│   │                                            │          │   margin-bottom: 32px
│   │  ┌──────────────────────────────────────┐ │          │
│   │  │ Email corporativo                    │ │          │ ← Input component
│   │  └──────────────────────────────────────┘ │          │   height: 48px
│   │                                            │          │   margin-bottom: 16px
│   │  ┌──────────────────────────────────────┐ │          │
│   │  │ Contraseña                           │ │          │ ← Input type=password
│   │  └──────────────────────────────────────┘ │          │
│   │                                            │          │
│   │  [x] Recordar sesión                      │          │ ← Checkbox, Inter 14px
│   │                                            │          │   margin-top: 12px
│   │                                            │          │
│   │  ┌──────────────────────────────────────┐ │          │
│   │  │ Iniciar sesión →                     │ │          │ ← Button/Primary
│   │  └──────────────────────────────────────┘ │          │   full-width
│   │                                            │          │   margin-top: 24px
│   │                                            │          │
│   │  ¿Olvidaste tu contraseña?                │          │ ← Link, Inter 14px
│   │                                            │          │   #8A8070, centered
│   │                                            │          │   margin-top: 16px
│   │                                            │          │
│   └────────────────────────────────────────────┘          │
│                                                            │
│                  ¿No tienes cuenta?                        │ ← Inter 16px, #8A8070
│                  Solicita una demo →                       │ ← Link, #C9A84C
│                                                            │   margin-top: 32px
│                                                            │   centered
└────────────────────────────────────────────────────────────┘

Formulario card:
- Width: 420px
- Background: {bg/panel} (#1A1A1A)
- Padding: 48px 40px
- Border: 1px solid {border/default}
- Border-radius: 16px
- Shadow: {shadow/panel}
- Centered vertical y horizontalmente

Animación entrada:
- Card: fadeReveal 0.6s, opacity inicial 0
```

---

### Pantalla 3: Dashboard Desktop (1920×1080px full viewport)

```
Frame: dashboard-desktop
Dimensions: 1920px × 1080px

┌────────────────────┬────────────────────────────────────────┐
│ SIDEBAR (280px)    │ HEADER (altura 72px)                   │
│ fixed left         │ fixed top, left: 280px, right: 0       │
│                    │                                        │
│ [Logo Goru 24px]   │ Mi Empresa S.A.  [Usuario] [🔔3] [⚙]  │
│ margin: 24px 16px  │                                        │
│                    ├────────────────────────────────────────┤
│ ──────────────     │ MAIN CONTENT (scroll)                  │
│ margin: 32px 0     │ margin-left: 280px, margin-top: 72px   │
│                    │ padding: 32px                          │
│ MÓDULOS ACTIVOS    │                                        │
│ ← Caption, uppercas│ Bienvenido, Juan Pérez                 │ ← Poppins SemiBold 28px
│   #8A8070          │                                        │   margin-bottom: 8px
│   margin-bottom:12 │ Acceso rápido a tus módulos            │ ← Inter Regular 16px
│                    │                                        │   #8A8070
│ [SidebarItem]      │                                        │   margin-bottom: 32px
│ ● Gestión Empresa. │                                        │
│   (selected)       │ ┌──────────┐ ┌──────────┐ ┌────────┐ │
│                    │ │ [GO/RU]  │ │ [GO/RU]  │ │[GO/RU] │ │
│ [SidebarItem]      │ │ #C9A84C  │ │ #3B82F6  │ │#10B981 │ │
│ ● Punto de Venta   │ │ 48px     │ │ 48px     │ │48px    │ │
│                    │ │          │ │          │ │        │ │
│ [SidebarItem]      │ │ Gestión  │ │ Punto de │ │Gestión │ │ ← Poppins Medium 22px
│ ● Gestión Contable │ │Empresarial│ │  Venta  │ │Contable│ │
│                    │ │          │ │          │ │        │ │
│ ──────────────     │ │ ● Activo │ │ ● Activo │ │●Activo │ │ ← Badge/Active
│                    │ │          │ │          │ │        │ │
│ CONFIGURACIÓN      │ │ [Abrir →]│ │ [Abrir →]│ │[Abrir] │ │ ← Button/Primary
│                    │ └──────────┘ └──────────┘ └────────┘ │   width: fill card
│ [SidebarItem]      │                                        │   margin-top: auto
│ ○ Gestión de Bancos│ Grid gap: 24px                         │
│   (grayed)         │                                        │
│                    │ ──────────────────────────────────────│
│ [SidebarItem]      │                                        │
│ ⚙ Pago Proveedores │ Módulos disponibles                    │ ← Poppins SemiBold 22px
│   (warning color)  │                                        │   margin-top: 48px
│                    │                                        │   margin-bottom: 24px
│ ──────────────     │                                        │
│ margin: 32px 0     │ ┌──────────┐ ┌──────────┐            │
│                    │ │ [GO/RU]  │ │ [GO/RU]  │            │
│ Cerrar sesión      │ │ #8B5CF6  │ │ #F59E0B  │            │ ← Grayscale + opacity 0.4
│ ← Link, #8A8070    │ │ (grayed) │ │ (grayed) │            │
│   position: bottom │ │          │ │          │            │
│   padding: 16px    │ │ Bancos   │ │Proveedor.│            │
│                    │ │          │ │          │            │
└────────────────────│ │○Inactivo │ │⚙Config.  │            │ ← Badge/Inactive, Badge/Config
                     │ │          │ │          │            │
                     │ │[Activar] │ │[Continuar│            │ ← Button/Secondary
                     │ └──────────┘ │ setup]   │            │
                     │              └──────────┘            │
                     │                                        │
                     └────────────────────────────────────────┘

Sidebar:
- Width: 280px
- Height: 100vh
- Background: {bg/panel} (#1A1A1A)
- Border-right: 1px solid {border/default}
- Position: fixed left

Header:
- Height: 72px
- Background: {bg/surface} (#0D0D0D)
- Border-bottom: 1px solid {border/default}
- Flex: space-between

Elementos Header:
- Nombre empresa: Poppins Medium 22px
- Usuario dropdown: Inter Regular 16px + avatar 32px
- Notificaciones: Bell icon 20px + badge rojo "3" (8px radius circle)
- Settings: Settings icon 20px

DashboardModuleCard (active):
- Width: 280px (auto-fill grid)
- Padding: 24px
- Background: {bg/panel}
- Border: 1px solid {border/default}
- Hover: border color del módulo + glow

DashboardModuleCard (inactive):
- Same dimensions
- ModuleIcon: grayscale filter + opacity 0.4
- Title: {text/muted}
- Badge: Inactive variant
```

---

## 📱 MOBILE HI-FI — 375px

### Cambios clave vs Desktop:

**Landing Mobile:**
- Navbar: hamburger menu, height 64px
- Hero: headline Display/L (48px), stack vertical CTAs
- Módulos: 1 columna, cards width fill container
- Demo form: padding 24px, inputs stack vertical

**Login Mobile:**
- Card: width 90%, max-width 360px, padding 32px 24px

**Dashboard Mobile:**
- Sidebar: drawer (hidden, abre con hamburger)
- Header: 64px, solo logo + hamburger + avatar
- Main: padding 16px
- Module cards: 1 columna, full-width

---

## ✅ PANTALLAS COMPLETADAS

- [x] **Wireframes:** Landing, Login, Dashboard (lo-fi escala de grises)
- [x] **Desktop Hi-Fi:** 3 pantallas completas a 1280px (Landing), 1280px (Login), 1920px (Dashboard)
- [x] **Mobile Hi-Fi:** 3 pantallas adaptadas a 375px
- [x] **Colores por módulo:** 7 módulos con colores individuales aplicados
- [x] **Estados:** Default, Hover, Active, Inactive, Config
- [x] **Todos los componentes:** instancias de biblioteca

**Próximo paso:** Página 📦 Handoff notes para Frontend Developer React

---

*Wireframes y Pantallas Hi-Fi por: Figma Designer Senior Agent*  
*Responsive verificado: 375px ✅ | 1280px ✅ | 1920px ✅*  
*Fecha: Mayo 11, 2026*
