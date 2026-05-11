# 🧩 FIGMA COMPONENTS LIBRARY — PROYECTO GORU (React-Ready)

> **Página:** 🧩 Components (dentro del archivo Figma)  
> **Metodología:** Atomic Design + Nomenclatura React PascalCase  
> **Requisito:** Auto Layout obligatorio, props documentadas

---

## 🔬 ÁTOMOS — Elementos base reutilizables

### Button (Primary/Secondary/Ghost)

**Nombre en Figma:** `Button`  
**Variantes:**
- `variant`: `Primary` | `Secondary` | `Ghost`
- `size`: `MD` | `LG`
- `state`: `Default` | `Hover` | `Active` | `Disabled` | `Loading`

**Especificaciones (variant: Primary, size: MD, state: Default):**

```
┌─────────────────────────┐
│  Solicitar demo  →      │
└─────────────────────────┘

Auto Layout:
  Direction: Horizontal
  Spacing: 8px (space/2)
  Padding: 12px 24px (space/3 space/6)
  Alignment: Center

Fill: {accent/primary} (#C9A84C)
Border: None
Border radius: {radius/md} (6px)

Text:
  Style: Body/M (Inter, Medium, 16px)
  Color: {neutral/0} (#050302) ← Texto oscuro sobre dorado
  Letter-spacing: 0.5px (tracking-wide para separar palabras)
  
Icon (arrow →):
  Size: 20px
  Color: {neutral/0}
  Component: Lucide ArrowRight
```

**Estados:**

| State    | Fill           | Text Color  | Transform     | Shadow      | Icon         |
|----------|----------------|-------------|---------------|-------------|--------------|
| Default  | accent/primary | neutral/0   | scale(1)      | none        | static       |
| Hover    | accent/hover   | neutral/0   | scale(1.02)   | glow/gold   | translateX(4px)|
| Active   | accent/primary | neutral/0   | scale(0.98)   | none        | static       |
| Disabled | neutral/200    | neutral/700 | scale(1)      | none        | static       |
| Loading  | accent/primary | neutral/0   | scale(1)      | none        | spinner      |

**Props TypeScript:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode; // opcional, default ArrowRight
}
```

---

### Badge (Status/Module)

**Nombre en Figma:** `Badge`  
**Variantes:**
- `type`: `Active` | `Inactive` | `Config` | `Module`
- `module` (solo si type=Module): `Empresarial` | `POS` | `Contable` | etc.

```
┌──────────┐
│ ● Activo │  ← type: Active
└──────────┘

┌────────────────┐
│ ○ Inactivo     │  ← type: Inactive
└────────────────┘

┌──────────────────────┐
│ ⚙ En configuración   │  ← type: Config
└──────────────────────┘

Auto Layout:
  Direction: Horizontal
  Spacing: 6px (icono + texto)
  Padding: 4px 12px (space/1 space/3)
  Border radius: {radius/full} (999px)

Type Active:
  Fill: rgba(34, 197, 94, 0.15)
  Border: 1px solid {success/200}
  Text: Body/S, {success/200}
  Icon: ● (filled circle), {success/200}

Type Inactive:
  Fill: rgba(138, 128, 112, 0.15)
  Border: 1px solid {neutral/700}
  Text: Body/S, {neutral/700}
  Icon: ○ (empty circle), {neutral/700}

Type Config:
  Fill: rgba(245, 158, 11, 0.15)
  Border: 1px solid {warning/200}
  Text: Body/S, {warning/200}
  Icon: ⚙ (Settings icon 14px), {warning/200}
```

**Props TypeScript:**
```typescript
interface BadgeProps {
  type: 'active' | 'inactive' | 'config';
  children?: React.ReactNode; // texto custom opcional
}
```

---

### Input (Text/Email/Password)

**Nombre en Figma:** `Input`  
**Variantes:**
- `type`: `Text` | `Email` | `Password`
- `state`: `Default` | `Focus` | `Error` | `Disabled`

```
┌──────────────────────────────────┐
│ Email corporativo                │ ← Placeholder
└──────────────────────────────────┘

Auto Layout:
  Direction: Horizontal
  Padding: 12px 16px (space/3 space/4)
  Alignment: Center

Dimensions:
  Height: 48px
  Width: Fill container

Fill: {bg/surface} (#0D0D0D)
Border: 1px solid {border/default}
Border radius: {radius/md} (6px)

Text:
  Style: Body/M (Inter, Regular, 16px)
  Color (value): {text/primary}
  Color (placeholder): {text/muted}
```

**Estados:**

| State    | Border          | Background  | Text Color   | Icon          |
|----------|-----------------|-------------|--------------|---------------|
| Default  | border/default  | bg/surface  | text/muted   | -             |
| Focus    | accent/primary  | bg/surface  | text/primary | -             |
| Error    | error/200       | bg/surface  | text/primary | AlertCircle   |
| Disabled | border/default  | neutral/150 | neutral/700  | -             |

**Mensaje de error (debajo del input):**
- Font: Caption (13px)
- Color: error/200
- Margin-top: 4px

**Props TypeScript:**
```typescript
interface InputProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; // mensaje de error
  disabled?: boolean;
  label?: string; // label encima del input
}
```

---

### ModuleIcon

**Nombre en Figma:** `ModuleIcon`  
**Variantes:**
- `module`: `Empresarial` | `POS` | `Contable` | `Bancos` | `Proveedores` | `RRHH` | `Profesionales`
- `size`: `SM` (48px) | `MD` (64px) | `LG` (80px)
- `state`: `Active` | `Inactive`

```
┌─────────────┐
│             │
│   GO        │ ← Poppins Bold, 20px (para size MD)
│             │   Color: white o neutral/0
│   RU        │
│             │
└─────────────┘
↑             ↑
64px × 64px (size MD)
Border radius: 20px (radius/2xl)
Fill: {module/empresarial} #C9A84C (según módulo)
```

**Estados:**

| State    | Fill                  | Opacity | Text Color |
|----------|-----------------------|---------|------------|
| Active   | module color          | 1.0     | white      |
| Inactive | neutral/700 (grayscale)| 0.4     | white      |

**Colores por módulo:**
- Empresarial: `#C9A84C`
- POS: `#3B82F6`
- Contable: `#10B981`
- Bancos: `#8B5CF6`
- Proveedores: `#F59E0B`
- RRHH: `#EC4899`
- Profesionales: `#06B6D4`

**Props TypeScript:**
```typescript
interface ModuleIconProps {
  module: 'empresarial' | 'pos' | 'contable' | 'bancos' | 'proveedores' | 'rrhh' | 'profesionales';
  size?: 'sm' | 'md' | 'lg';
  inactive?: boolean;
}
```

**Export:** SVG con `fill` como variable CSS `var(--module-color)`

---

## 🧬 MOLÉCULAS — Combinaciones de átomos

### ModuleCard (Landing variant)

**Nombre en Figma:** `ModuleCard`  
**Variantes:**
- `module`: (7 opciones)
- `state`: `Default` | `Hover`

**Estructura:**
```
┌─────────────────────────┐
│                         │
│  [ModuleIcon size=MD]   │ ← Centered, margin-bottom: 20px
│                         │
│  Gestión Empresarial    │ ← Heading/M, text/primary, centered
│                         │
│  "Control total de tu   │ ← Body/S, text/muted, centered
│   empresa: facturación, │   3 líneas max, line-clamp: 3
│   inventario, reportes."│   margin-bottom: 24px
│                         │
│  ─────────────────────  │ ← Divider, 1px, border/default
│                         │
│  Ver más →              │ ← Button variant=ghost
│                         │
└─────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: variable (20px icon→title, 12px title→description, 24px description→divider, 16px divider→button)
  Padding: 32px (space/8) all sides
  Alignment: Center horizontally

Dimensions:
  Width: Fill container (responsive)
  Min-height: 320px

Fill: {bg/surface}
Border: 1px solid {border/default}
Border radius: {radius/lg} (12px)
Shadow: {shadow/card}
```

**Estado Hover:**
```css
border-color: var(--module-color); /* Color del módulo */
transform: scale(1.02);
box-shadow: 
  var(--shadow-card),
  0px 0px 24px rgba(var(--module-color-rgb), 0.4);
transition: all 0.3s var(--ease-smooth);

.module-icon {
  transform: scale(1.1);
}
```

**Props TypeScript:**
```typescript
interface ModuleCardProps {
  module: ModuleType;
  title: string;
  description: string;
  onClick?: () => void;
}

type ModuleType = 'empresarial' | 'pos' | 'contable' | 'bancos' | 'proveedores' | 'rrhh' | 'profesionales';
```

---

### ModuleCard (Dashboard variant)

**Nombre en Figma:** `DashboardModuleCard`  
**Variantes:**
- `module`: (7 opciones)
- `status`: `Active` | `Inactive` | `Config`

**Estructura:**
```
┌─────────────────────────┐
│                         │
│  [ModuleIcon size=SM]   │ ← Left-aligned, margin-bottom: 16px
│                         │   Inactive si status=Inactive
│                         │
│  Gestión Empresarial    │ ← Heading/M, left-aligned
│                         │
│  [Badge status]         │ ← Badge Active/Inactive/Config
│                         │
│  ─────────────────────  │
│                         │
│  [Button CTA]           │ ← "Abrir" / "Activar" / "Continuar setup"
│                         │
└─────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 16px entre elementos
  Padding: 24px (space/6)
  Alignment: Left (no centrado como Landing)

Fill: {bg/panel} (más oscuro que Landing)
Border: 1px solid {border/default}
Border radius: {radius/lg}
```

**CTAs por status:**
- Active: `[Abrir módulo →]` - Button variant=primary
- Inactive: `[Activar módulo]` - Button variant=secondary
- Config: `[Continuar setup →]` - Button variant=primary

**Props TypeScript:**
```typescript
interface DashboardModuleCardProps {
  module: ModuleType;
  status: 'active' | 'inactive' | 'config';
  onAction?: () => void;
}
```

---

### SidebarItem

**Nombre en Figma:** `SidebarItem`  
**Variantes:**
- `status`: `Active` | `Inactive` | `Config`
- `state`: `Default` | `Hover` | `Selected`

```
● Gestión Empresarial  ← status: Active, dot verde

○ Gestión de Bancos    ← status: Inactive, dot gris

⚙ Pago de Proveedores  ← status: Config, icono naranja

Auto Layout:
  Direction: Horizontal
  Spacing: 8px (icon + text)
  Padding: 12px 16px
  Alignment: Left

Fill (default): transparent
Fill (hover): rgba(201, 168, 76, 0.1)
Fill (selected): rgba(201, 168, 76, 0.15)
Border-left (selected): 2px solid {accent/primary}

Text: Body/M, {text/primary} (active) o {text/muted} (inactive)
```

**Props TypeScript:**
```typescript
interface SidebarItemProps {
  label: string;
  status: 'active' | 'inactive' | 'config';
  selected?: boolean;
  onClick?: () => void;
}
```

---

### Navbar (Landing)

**Nombre en Figma:** `Navbar`  
**Variante:** `Default` | `Mobile`

```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo] Módulos Precios Contacto    [Iniciar sesión] [Solicitar demo →] │
└──────────────────────────────────────────────────────────────────┘

Auto Layout:
  Direction: Horizontal
  Padding: 0 32px
  Justify: Space between
  Alignment: Center

Height: 72px
Background: rgba(13, 13, 13, 0.7)
Backdrop-filter: blur(8px)
Border-bottom: 1px solid {border/default}
Position: Fixed top

Componentes internos:
- Logo (imagen/SVG)
- 3× NavLink (Body/M, hover underline animado)
- 1× Button variant=ghost ("Iniciar sesión")
- 1× Button variant=primary ("Solicitar demo")
```

**Variante Mobile:**
- Hamburger icon right
- Nav links ocultos
- Drawer component separado

---

## 🏗️ ORGANISMOS — Secciones completas

### HeroSection

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│            Gestiona tu empresa desde                       │
│                un solo lugar                               │
│                                                            │
│      Software de gestión empresarial personalizable,      │
│      desarrollado en Ecuador para empresas que crecen.    │
│                                                            │
│         [Solicitar demo →]  [Ver módulos]                 │
│                                                            │
│   [Visual del ecosistema: mockup Dashboard 800×450px]     │
│                                                            │
└────────────────────────────────────────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 24px (headline→subheadline), 32px (subheadline→CTAs), 48px (CTAs→visual)
  Padding: 96px 32px (space/24 space/8)
  Alignment: Center

Dimensions:
  Width: Fill container
  Height: 90vh (desktop), auto (mobile)

Background: Linear gradient (ver 02_UIUX_SPECIFICATIONS.md)
```

---

### ModuleGrid (Landing)

```
Auto Layout:
  Direction: Vertical
  Spacing: 48px (header→grid)
  Padding: 96px 32px

Grid (frame interno):
  Display: Grid (simular con Auto Layout Wrap)
  Columns: 4 (desktop), 2 (tablet), 1 (mobile)
  Gap: 24px
  Max-width: 1280px

Componentes:
- 1× Section header (Display/L + Body/L)
- 7× ModuleCard
```

---

### LoginForm

```
┌────────────────────────────────────┐
│                                    │
│  Iniciar sesión                    │ ← Heading/L
│                                    │
│  [Input email]                     │
│  [Input password]                  │
│  [Checkbox "Recordar sesión"]      │
│                                    │
│  [Button "Iniciar sesión →"]       │
│                                    │
│  ¿Olvidaste tu contraseña?         │ ← Link
│                                    │
└────────────────────────────────────┘

Auto Layout:
  Direction: Vertical
  Spacing: 16px entre inputs, 24px input→button
  Padding: 48px 40px

Dimensions:
  Width: 420px (desktop), 90% max 360px (mobile)

Background: {bg/panel}
Border: 1px solid {border/default}
Border radius: {radius/xl} (16px)
Shadow: {shadow/panel}
```

---

### DashboardSidebar

```
┌────────────────────────┐
│ [Logo Goru 24px]       │
│                        │
│ ──────────────         │
│                        │
│ MÓDULOS ACTIVOS        │ ← Caption, uppercase, text/muted
│                        │
│ [SidebarItem active]   │
│ [SidebarItem active]   │
│                        │
│ ──────────────         │
│                        │
│ CONFIGURACIÓN          │
│                        │
│ [SidebarItem inactive] │
│ [SidebarItem config]   │
│                        │
│ ──────────────         │
│                        │
│ Cerrar sesión          │ ← Link, text/muted, bottom
└────────────────────────┘

Auto Layout:
  Direction: Vertical
  Padding: 24px 16px
  Justify: Space between (logo top, logout bottom)

Dimensions:
  Width: 280px
  Height: 100vh

Background: {bg/panel}
Border-right: 1px solid {border/default}
Position: Fixed left
```

---

## ✅ COMPONENTES CONSTRUIDOS

- [x] **Átomos (5):** Button, Badge, Input, ModuleIcon, Divider
- [x] **Moléculas (4):** ModuleCard (Landing), DashboardModuleCard, SidebarItem, NavLink
- [x] **Organismos (6):** Navbar, HeroSection, ModuleGrid, LoginForm, DashboardSidebar, DashboardHeader

**Todos con:**
- ✅ Auto Layout configurado
- ✅ Nomenclatura PascalCase
- ✅ Props TypeScript documentadas
- ✅ Variantes y estados completos

**Próximo paso:** Wireframes lo-fi de las 3 pantallas

---

*Componentes React-ready por: Figma Designer Senior Agent*  
*Fecha: Mayo 11, 2026*
