# 📦 HANDOFF NOTES REACT — PROYECTO GORU

> **Destinatario:** Frontend Developer (React)  
> **De:** Figma Designer Senior Agent  
> **Propósito:** Implementar el ecosistema Goru en React con TypeScript

---

## 🎯 RESUMEN EJECUTIVO

**Stack confirmado:**
- React 18+ con TypeScript
- Routing: React Router v6
- Styling: CSS Modules o Tailwind CSS
- State: Context API + hooks (auth, módulos activos)
- Backend future: Node.js API + PostgreSQL

**Pantallas a implementar:**
1. Landing page (público) → `/`
2. Login (autenticación) → `/login`
3. Dashboard (post-login) → `/dashboard`

**Componentes React PascalCase ready:** Ver documento 03_FIGMA_COMPONENTS_REACT.md

---

## 1️⃣ TOKENS CSS — Sistema de Diseño

### Variables CSS (implementar en `src/styles/tokens.css`)

```css
:root {
  /* ===== COLORES PRIMITIVOS ===== */
  --color-gold-100: #E8C97A;
  --color-gold-200: #C9A84C;
  --color-gold-300: #A8893C;

  --color-neutral-0: #050302;
  --color-neutral-100: #0D0D0D;
  --color-neutral-150: #1A1A1A;
  --color-neutral-200: #2A2520;
  --color-neutral-700: #8A8070;
  --color-neutral-900: #F5F0E8;

  --color-success-100: #4ADE80;
  --color-success-200: #22C55E;
  --color-warning-100: #FBBF24;
  --color-warning-200: #F59E0B;
  --color-error-100: #F87171;
  --color-error-200: #EF4444;
  --color-info-100: #60A5FA;
  --color-info-200: #3B82F6;

  /* ===== MÓDULOS GORU ===== */
  --module-empresarial: #C9A84C;
  --module-empresarial-rgb: 201, 168, 76;
  
  --module-pos: #3B82F6;
  --module-pos-rgb: 59, 130, 246;
  
  --module-contable: #10B981;
  --module-contable-rgb: 16, 185, 129;
  
  --module-bancos: #8B5CF6;
  --module-bancos-rgb: 139, 92, 246;
  
  --module-proveedores: #F59E0B;
  --module-proveedores-rgb: 245, 158, 11;
  
  --module-rrhh: #EC4899;
  --module-rrhh-rgb: 236, 72, 153;
  
  --module-profesionales: #06B6D4;
  --module-profesionales-rgb: 6, 182, 212;

  /* ===== COLORES SEMÁNTICOS ===== */
  --bg-deep: var(--color-neutral-0);
  --bg-surface: var(--color-neutral-100);
  --bg-panel: var(--color-neutral-150);
  --border-default: var(--color-neutral-200);

  --text-primary: var(--color-neutral-900);
  --text-muted: var(--color-neutral-700);

  --accent-primary: var(--color-gold-200);
  --accent-hover: var(--color-gold-100);
  --accent-glow: var(--color-gold-100);

  --state-active: var(--color-success-200);
  --state-inactive: var(--color-error-100);
  --state-config: var(--color-warning-200);

  /* ===== TIPOGRAFÍA ===== */
  --font-display: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Tamaños */
  --text-display-xl: 72px;
  --text-display-l: 48px;
  --text-display-m: 36px;
  --text-heading-l: 28px;
  --text-heading-m: 22px;
  --text-body-l: 18px;
  --text-body-m: 16px;
  --text-body-s: 14px;
  --text-caption: 13px;

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
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-full: 999px;

  /* ===== SOMBRAS ===== */
  --shadow-card: 0px 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-panel: 0px 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-glow-gold: 0px 0px 24px rgba(201, 168, 76, 0.4);

  /* ===== TRANSICIONES ===== */
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 0.2s;
  --duration-normal: 0.3s;
  --duration-slow: 0.6s;
}
```

### Fuentes a importar

```tsx
// En index.html <head> o en CSS principal
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');
```

---

## 2️⃣ ESTRUCTURA DE COMPONENTES REACT

### Árbol de componentes sugerido

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── ModuleIcon.tsx
│   │   └── Divider.tsx
│   │
│   ├── molecules/
│   │   ├── ModuleCard.tsx
│   │   ├── DashboardModuleCard.tsx
│   │   ├── SidebarItem.tsx
│   │   └── NavLink.tsx
│   │
│   ├── organisms/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ModuleGrid.tsx
│   │   ├── LoginForm.tsx
│   │   ├── DashboardSidebar.tsx
│   │   └── DashboardHeader.tsx
│   │
│   └── layouts/
│       ├── LandingLayout.tsx
│       ├── DashboardLayout.tsx
│       └── AuthLayout.tsx
│
├── pages/
│   ├── Landing.tsx
│   ├── Login.tsx
│   └── Dashboard.tsx
│
├── context/
│   ├── AuthContext.tsx
│   └── ModulesContext.tsx
│
├── types/
│   ├── modules.ts
│   └── auth.ts
│
├── hooks/
│   ├── useAuth.ts
│   └── useModules.ts
│
├── data/
│   └── modules.ts  ← Data estática de los 7 módulos
│
└── styles/
    ├── tokens.css
    ├── global.css
    └── animations.css
```

---

## 3️⃣ TIPOS TYPESCRIPT

### `src/types/modules.ts`

```typescript
export type ModuleType =
  | 'empresarial'
  | 'pos'
  | 'contable'
  | 'bancos'
  | 'proveedores'
  | 'rrhh'
  | 'profesionales';

export type ModuleStatus = 'active' | 'inactive' | 'config';

export interface Module {
  id: ModuleType;
  name: string;
  description: string;
  color: string;
  colorRgb: string;
  status: ModuleStatus;
  path?: string; // ruta del módulo (para redirección futura)
}

export interface ModuleCardProps {
  module: Module;
  variant?: 'landing' | 'dashboard';
  onClick?: () => void;
}
```

### `src/types/auth.ts`

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  companyName: string;
  activeModules: ModuleType[];
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}
```

---

## 4️⃣ DATA ESTÁTICA — Módulos Goru

### `src/data/modules.ts`

```typescript
import { Module, ModuleType } from '../types/modules';

export const MODULES_DATA: Record<ModuleType, Omit<Module, 'status'>> = {
  empresarial: {
    id: 'empresarial',
    name: 'Gestión Empresarial',
    description: 'Control total de tu empresa: facturación, inventario, reportes.',
    color: '#C9A84C',
    colorRgb: '201, 168, 76',
    path: '/modules/empresarial'
  },
  pos: {
    id: 'pos',
    name: 'Punto de Venta',
    description: 'Sistema POS completo: ventas rápidas, inventario en tiempo real.',
    color: '#3B82F6',
    colorRgb: '59, 130, 246',
    path: '/modules/pos'
  },
  contable: {
    id: 'contable',
    name: 'Gestión Contable',
    description: 'Contabilidad automatizada: balance, libro diario, estados financieros.',
    color: '#10B981',
    colorRgb: '16, 185, 129',
    path: '/modules/contable'
  },
  bancos: {
    id: 'bancos',
    name: 'Gestión de Bancos',
    description: 'Conciliación bancaria automática, control de cuentas múltiples.',
    color: '#8B5CF6',
    colorRgb: '139, 92, 246',
    path: '/modules/bancos'
  },
  proveedores: {
    id: 'proveedores',
    name: 'Pago de Proveedores',
    description: 'Gestión de cuentas por pagar, calendario de pagos, historial.',
    color: '#F59E0B',
    colorRgb: '245, 158, 11',
    path: '/modules/proveedores'
  },
  rrhh: {
    id: 'rrhh',
    name: 'Recursos Humanos',
    description: 'Nómina, asistencia, vacaciones, reportes de RRHH completos.',
    color: '#EC4899',
    colorRgb: '236, 72, 153',
    path: '/modules/rrhh'
  },
  profesionales: {
    id: 'profesionales',
    name: 'Profesionales Independientes',
    description: 'Gestión para freelancers y consultores: proyectos, facturación.',
    color: '#06B6D4',
    colorRgb: '6, 182, 212',
    path: '/modules/profesionales'
  }
};

// Mock de módulos activos por usuario (hardcoded para demo)
export const MOCK_USER_MODULES: Module[] = [
  { ...MODULES_DATA.empresarial, status: 'active' },
  { ...MODULES_DATA.pos, status: 'active' },
  { ...MODULES_DATA.contable, status: 'active' },
  { ...MODULES_DATA.bancos, status: 'inactive' },
  { ...MODULES_DATA.proveedores, status: 'config' },
  { ...MODULES_DATA.rrhh, status: 'inactive' },
  { ...MODULES_DATA.profesionales, status: 'inactive' }
];
```

---

## 5️⃣ COMPONENTES REACT — ESPECIFICACIONES

### Button Component

```tsx
// src/components/atoms/Button.tsx
import { ArrowRight, Loader2 } from 'lucide-react';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  type = 'button'
}: ButtonProps) {
  const defaultIcon = icon || <ArrowRight size={20} />;

  return (
    <button
      type={type}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${fullWidth ? styles.fullWidth : ''}
      `}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {children}
      {loading ? (
        <Loader2 size={20} className={styles.spinner} />
      ) : (
        defaultIcon
      )}
    </button>
  );
}
```

**CSS Module (`Button.module.css`):**

```css
.button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
  border: none;
  outline: none;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Variantes */
.primary {
  background: var(--accent-primary);
  color: var(--bg-deep);
}

.primary:hover:not(:disabled) {
  background: var(--accent-hover);
  transform: scale(1.02);
  box-shadow: var(--shadow-glow-gold);
}

.secondary {
  background: transparent;
  border: 1px solid var(--accent-primary);
  color: var(--accent-primary);
}

.secondary:hover:not(:disabled) {
  background: rgba(201, 168, 76, 0.1);
  color: var(--accent-hover);
}

.ghost {
  background: transparent;
  color: var(--accent-primary);
}

.ghost:hover:not(:disabled) {
  color: var(--accent-hover);
}

.ghost:hover:not(:disabled) svg {
  transform: translateX(4px);
}

/* Tamaños */
.md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-body-m);
  border-radius: var(--radius-md);
  height: 48px;
}

.lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-body-l);
  border-radius: var(--radius-md);
  height: 56px;
}

.fullWidth {
  width: 100%;
  justify-content: center;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

### ModuleIcon Component

```tsx
// src/components/atoms/ModuleIcon.tsx
import styles from './ModuleIcon.module.css';
import { ModuleType } from '../../types/modules';

interface ModuleIconProps {
  module: ModuleType;
  size?: 'sm' | 'md' | 'lg';
  inactive?: boolean;
}

const SIZES = {
  sm: 48,
  md: 64,
  lg: 80
};

const FONT_SIZES = {
  sm: 16,
  md: 20,
  lg: 24
};

export function ModuleIcon({
  module,
  size = 'md',
  inactive = false
}: ModuleIconProps) {
  const dimension = SIZES[size];
  const fontSize = FONT_SIZES[size];

  return (
    <div
      className={`${styles.moduleIcon} ${inactive ? styles.inactive : ''}`}
      style={{
        width: dimension,
        height: dimension,
        fontSize: fontSize,
        // Color CSS variable será aplicado desde parent con data-module
      }}
      data-module={module}
    >
      <span>GO</span>
      <span>RU</span>
    </div>
  );
}
```

**CSS Module:**

```css
.moduleIcon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-2xl);
  font-family: var(--font-display);
  font-weight: 700;
  color: white;
  line-height: 1;
  gap: 2px;
  transition: transform var(--duration-normal) var(--ease-smooth);
  background: var(--module-color); /* CSS variable dinámica */
}

.moduleIcon.inactive {
  filter: grayscale(1);
  opacity: 0.4;
}

/* Colores por módulo via data attribute */
.moduleIcon[data-module="empresarial"] {
  --module-color: var(--module-empresarial);
}

.moduleIcon[data-module="pos"] {
  --module-color: var(--module-pos);
}

.moduleIcon[data-module="contable"] {
  --module-color: var(--module-contable);
}

.moduleIcon[data-module="bancos"] {
  --module-color: var(--module-bancos);
}

.moduleIcon[data-module="proveedores"] {
  --module-color: var(--module-proveedores);
}

.moduleIcon[data-module="rrhh"] {
  --module-color: var(--module-rrhh);
}

.moduleIcon[data-module="profesionales"] {
  --module-color: var(--module-profesionales);
}
```

---

### ModuleCard Component (Landing variant)

```tsx
// src/components/molecules/ModuleCard.tsx
import { ModuleIcon } from '../atoms/ModuleIcon';
import { Button } from '../atoms/Button';
import { Module } from '../../types/modules';
import styles from './ModuleCard.module.css';

interface ModuleCardProps {
  module: Module;
  onClick?: () => void;
}

export function ModuleCard({ module, onClick }: ModuleCardProps) {
  return (
    <div
      className={styles.moduleCard}
      onClick={onClick}
      data-module={module.id}
      style={{
        '--module-color': module.color,
        '--module-color-rgb': module.colorRgb
      } as React.CSSProperties}
    >
      <ModuleIcon module={module.id} size="md" />

      <h3 className={styles.title}>{module.name}</h3>

      <p className={styles.description}>{module.description}</p>

      <div className={styles.divider} />

      <Button variant="ghost">Ver más</Button>
    </div>
  );
}
```

**CSS Module:**

```css
.moduleCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-8);
  min-height: 320px;
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-smooth);
}

.moduleCard:hover {
  border-color: var(--module-color);
  transform: scale(1.02);
  box-shadow:
    var(--shadow-card),
    0px 0px 24px rgba(var(--module-color-rgb), 0.4);
}

.moduleCard:hover .moduleIcon {
  transform: scale(1.1);
}

.title {
  font-family: var(--font-display);
  font-size: var(--text-heading-m);
  font-weight: 600;
  color: var(--text-primary);
  margin-top: var(--space-5);
  margin-bottom: var(--space-3);
  line-height: 1.4;
}

.description {
  font-family: var(--font-body);
  font-size: var(--text-body-s);
  color: var(--text-muted);
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--space-6);
}

.divider {
  width: 100%;
  height: 1px;
  background: var(--border-default);
  margin-bottom: var(--space-5);
}
```

---

## 6️⃣ ROUTING — React Router v6

### `src/App.tsx`

```tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
```

### ProtectedRoute Component

```tsx
// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>; // O spinner component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
```

---

## 7️⃣ CONTEXT API — Autenticación

### `src/context/AuthContext.tsx`

```tsx
import { createContext, useState, useCallback, ReactNode } from 'react';
import { User, AuthContextType } from '../types/auth';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    
    // Simulación de login (reemplazar con API call real)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    setUser({
      id: '1',
      name: 'Juan Pérez',
      email: email,
      companyName: 'Mi Empresa S.A.',
      activeModules: ['empresarial', 'pos', 'contable']
    });
    
    setLoading(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
```

---

## 8️⃣ ANIMACIONES CSS

### `src/styles/animations.css`

```css
/* Fade Reveal (Hero elements) */
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

.fade-reveal {
  animation: fadeReveal 0.8s var(--ease-smooth) forwards;
  opacity: 0;
}

.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
.delay-600 { animation-delay: 0.6s; }
.delay-800 { animation-delay: 0.8s; }

/* Scroll Reveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Prefers Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .fade-reveal,
  .scroll-reveal {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 9️⃣ TESTING CHECKLIST

### Funcionalidad
- [ ] Navegación Landing → Login → Dashboard funciona
- [ ] Login con credenciales mock redirige a Dashboard
- [ ] Logout redirige a Login
- [ ] ProtectedRoute bloquea acceso sin autenticación
- [ ] Módulos activos se muestran correctamente en Dashboard

### UI/UX
- [ ] Colores por módulo se aplican correctamente (7 colores)
- [ ] Hover effects funcionan (glow dorado por módulo)
- [ ] Animaciones fadeReveal en Hero
- [ ] Responsive: 375px / 768px / 1280px
- [ ] Sidebar Dashboard colapsa a drawer en mobile

### Performance
- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Lazy loading de imágenes

### Accesibilidad
- [ ] Lighthouse Accessibility = 100
- [ ] Contraste WCAG AA verificado
- [ ] Focus visible en todos los elementos interactivos
- [ ] ARIA labels en botones icon-only
- [ ] Navegación con teclado funcional

---

## ✅ CHECKLIST FINAL

- [x] Tokens CSS completos (colores módulos, tipografía, espaciado)
- [x] Componentes React TypeScript con props
- [x] Data estática de 7 módulos Goru
- [x] Routing React Router v6
- [x] Context API para autenticación
- [x] Animaciones CSS (fadeReveal, scroll-reveal)
- [x] CSS Modules para componentes
- [x] Protected Routes
- [x] Responsive guidelines
- [x] Testing checklist

**Listo para implementación.** 🚀

---

*Handoff React entregado por: Figma Designer Senior Agent*  
*Stack: React 18 + TypeScript + React Router v6 + CSS Modules*  
*Fecha: Mayo 11, 2026*
