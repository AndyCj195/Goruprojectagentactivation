# Goru — Contexto Completo del Proyecto
> Documento de referencia para refactorización y portabilidad del diseño a PHP u otro stack.

---

## 1. ¿Qué es Goru?

**Goru** es un ecosistema de software de gestión empresarial desarrollado en Ecuador. Está orientado a empresas de todos los tamaños (PYMES hasta corporaciones) y cumple con normativas locales ecuatorianas (SRI, IESS, Código de Trabajo).

El producto se organiza en **dos módulos principales**, cada uno con **11 submódulos** que se pueden activar de forma independiente.

---

## 2. Identidad Visual y Design Tokens

### Paleta de colores

| Token CSS                  | Valor hex / rgba             | Uso                                      |
|---------------------------|------------------------------|------------------------------------------|
| `--bg-deep`               | `#050302`                    | Fondo base de toda la app                |
| `--bg-surface`            | `#0D0D0D`                    | Fondo de secciones secundarias           |
| `--bg-panel`              | `#111111` aprox.             | Cards, paneles, inputs                   |
| `--text-primary`          | `#F5F5F0`                    | Texto principal                          |
| `--text-muted`            | `#888880` aprox.             | Texto secundario / placeholders          |
| `--accent-primary`        | `#C9A84C`                    | Dorado — acento principal (Goru gold)    |
| `--accent-hover`          | `#D4B86A` aprox.             | Dorado claro para hover                  |
| `--border-default`        | `rgba(255,255,255,0.08)`     | Bordes de cards y dividers               |
| `--shadow-card`           | `0 4px 40px rgba(0,0,0,0.4)` | Sombra de cards                         |

### Tipografías (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
```

| Token CSS           | Fuente    | Uso                             |
|--------------------|-----------|----------------------------------|
| `--font-display`   | Poppins   | Títulos, headings, badges        |
| `--font-body`      | Inter     | Párrafos, labels, inputs, UI     |

### Border radius
- Cards grandes: `24px`
- Cards medianas: `20px`
- Cards pequeñas / chips: `12–14px`
- Chips / badges pill: `999px`
- Navbar islands: `28px`

### Animaciones clave

```css
@keyframes fadeReveal {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

- Duración estándar: `0.6s`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` → guardado en `--ease-smooth`
- Delays escalonados para grillas: `0.1s × índice`

---

## 3. Estructura de Rutas

El portal es un SPA con React Router (Data Mode / `createBrowserRouter`). En PHP se implementaría como rutas independientes o un router ligero.

| URL          | Página        | Descripción                                                  |
|-------------|---------------|--------------------------------------------------------------|
| `/`          | Inicio        | Hero + sección "¿Por qué Goru?"                              |
| `/servicios` | Servicios     | 2 módulos principales con submódulos expandibles via modal   |
| `/nosotros`  | Nosotros      | Misión, Visión, 4 valores corporativos                       |
| `/contacto`  | Contacto      | Formulario de solicitud de demo + datos de contacto          |
| `/faqs`      | FAQs          | Acordeón de preguntas frecuentes (último en el nav)          |

---

## 4. Layout Global (Root / Shell)

Todas las páginas comparten:

```
┌──────────────────────────────────────────────┐
│  NAVBAR (fixed, z-50, top-0)                 │
├──────────────────────────────────────────────┤
│                                              │
│  <contenido de la página>                    │
│                                              │
├──────────────────────────────────────────────┤
│  FOOTER                                      │
└──────────────────────────────────────────────┘
```

### Navbar — "Islas flotantes"

Inspiración: `bernini.ai`. El navbar se compone de **4 islas independientes** con `position: fixed`, `backdrop-filter: blur(8px)`, fondo `rgba(13,13,13,0.7)` y `border-radius: 28px`.

```
[LOGO ISLAND]     [NAV LINKS ISLAND — centrado]     [LANG ISLAND]  [SOCIAL ISLAND]
 left: 32px        width: 420px, height: 56px         right: 208px    right: 32px
 width: 160px                                         width: 100px    width: 160px
```

**Links de navegación (en orden):**
1. Inicio → `/`
2. Servicios → `/servicios`
3. Nosotros → `/nosotros`
4. Contacto → `/contacto`
5. FAQs → `/faqs`

**Comportamiento activo:** el link de la página actual se colorea con `--accent-primary` y muestra una línea de 2px debajo.

**Selector de idiomas:** botón `ES | EN` con dropdown al hover. Delay de 200ms en el cierre para evitar parpadeo. Implementado con `useContext` (LanguageContext).

**Mobile:** las 3 islas derechas se ocultan. Aparece un botón hamburguesa (≡) que despliega un drawer desde el top.

### Footer

4 columnas: Logo + descripción | Producto | Empresa | Legal.
Debajo: copyright `© 2026 Goru` + iconos de redes sociales (Facebook, Instagram, X/Twitter).
Borde superior `1px solid var(--border-default)`.

---

## 5. Páginas — Detalle por Sección

### 5.1 Inicio (`/`)

**Hero:**
- Fondo: `linear-gradient(180deg, #050302 0%, rgba(13,13,13,0.95) 100%)`
- `min-height: 90vh`, contenido centrado
- Título H1 (Poppins Bold, 5xl–7xl responsive, `letter-spacing: -1px`):
  > "Gestiona tu empresa desde un solo lugar"
- Subtítulo (Inter, xl, color muted):
  > "Software de gestión empresarial personalizable, desarrollado en Ecuador para empresas que crecen."
- 2 CTAs:
  - **Primario** "Solicitar demo" → `/contacto`
  - **Secundario** "Ver servicios" → `/servicios`
- Placeholder visual: card con texto `[Mockup del Dashboard Goru]`
- Animación de entrada: `fadeReveal` con delays escalonados (0.2s, 0.4s, 0.6s, 0.8s)
- Ícono `ChevronDown` dorado animado (bounce) al fondo del hero

**Sección ¿Por qué Goru? (5 cards):**

| Ícono    | Título                    | Descripción                                                              |
|---------|---------------------------|--------------------------------------------------------------------------|
| MapPin  | Desarrollo Nacional       | Software hecho en Ecuador para el mercado local.                         |
| Settings| Personalización Total     | Adaptamos Goru a las necesidades específicas de tu empresa.              |
| Headphones | Soporte Local          | Equipo en Ecuador, respuesta inmediata y training presencial.            |
| Link2   | Integración Completa      | Todos los módulos se comunican entre sí. Datos unificados.               |
| TrendingUp | Escalable             | Desde PYMES hasta empresas grandes. Crece con tu negocio.                |

Cards: `bg-panel`, `border-radius: 20px`, padding `32px`, ícono dorado arriba.

---

### 5.2 Servicios (`/servicios`)

**Grilla 2 columnas** (1 columna en mobile) con las 2 tarjetas de módulos principales.

**Anatomía de cada card:**
```
┌─────────────────────────────────────────┐
│ ▬▬▬ (línea de acento en color del módulo, top)
│                                         │
│ [BADGE pill] "Módulo Principal"         │
│ Nombre del módulo (H2, Poppins Bold)    │
│ Descripción (Inter, muted)              │
│                                         │
│ "Incluye N submódulos"                  │
│ [chip] [chip] [chip] ...                │
│                                         │
│ ─────────────────────────────────────── │
│ Conocer más →                           │
└─────────────────────────────────────────┘
```

**Al hacer clic en "Conocer más"** → abre un **modal overlay** (full-screen):
- Backdrop: `rgba(5,3,2,0.82)` + `backdrop-filter: blur(12px)`
- Card centrada: max-width `860px`, max-height `85vh`, scrollable
- Header: badge + nombre + descripción + botón X (cerrar)
- Grilla 3 cols (2 en tablet, 1 en mobile) con cada submódulo como card
- Cierre: clic fuera del card, tecla `Escape`, o botón X
- Animación de entrada: `translateY(24px) scale(0.97)` → `translateY(0) scale(1)`, 280ms

**Chips de submódulos — interacción hover:**
- Sube `translateY(-2px)` + `scale(1.04)`
- Intensifica fondo y borde
- Añade `box-shadow` glow en el color del submódulo
- Transición: 180ms ease

---

### 5.3 Módulos Principales y Submódulos

Ambos módulos comparten los mismos **11 submódulos**:

#### Módulo 1 — Gestión Empresarial
- Color acento: `#C9A84C` (dorado Goru)
- Descripción: "El núcleo de tu empresa. Integra y unifica todos los submódulos especializados en una sola plataforma centralizada para un control total."

#### Módulo 2 — Gestión de Portafolio y Proyectos
- Color acento: `#84CC16` (verde lima)
- Descripción: "Administra proyectos, portafolios y recursos de manera eficiente. Visualiza el avance, asigna tareas y controla presupuestos en tiempo real."

#### Submódulos (compartidos por ambos módulos):

| Nombre                        | Color     | Descripción placeholder                                                      |
|-------------------------------|-----------|-------------------------------------------------------------------------------|
| Recursos Humanos              | `#EC4899` | Gestión de nómina, asistencia, vacaciones y reportes completos del equipo.    |
| Punto de Venta                | `#EF4444` | Sistema POS completo con ventas rápidas e inventario en tiempo real.          |
| Control de Acceso             | `#A855F7` | Gestión de permisos, roles y niveles de seguridad para cada usuario.          |
| Bancos                        | `#3B82F6` | Conciliación bancaria automática y control de cuentas múltiples.              |
| Facturación Electrónica       | `#7C3AED` | Emisión de comprobantes electrónicos cumpliendo normativas del SRI.           |
| CRM                           | `#06B6D4` | Gestión de relaciones con clientes, seguimiento de ventas y oportunidades.    |
| Pago de Proveedores           | `#9333EA` | Gestión de cuentas por pagar, calendario de pagos e historial completo.       |
| Profesionales Independientes  | `#F59E0B` | Herramientas para freelancers: proyectos, tiempos y facturación.              |
| Tickets                       | `#6B7280` | Sistema de soporte interno para gestionar incidencias y solicitudes.          |
| Contabilidad                  | `#10B981` | Contabilidad automatizada: balance, libro diario y estados financieros.       |
| Gestión de Citas              | `#F472B6` | Agendamiento inteligente de citas, reservas y gestión de calendarios.         |

> **Nota:** Las descripciones de submódulos son placeholders. El cliente proporcionará las descripciones definitivas.

---

### 5.4 Nosotros (`/nosotros`)

**Sección Quiénes somos:**
- Subtítulo pequeño: "Quiénes somos" (dorado, uppercase, tracking-widest)
- H1: "El ecosistema que impulsa a las empresas ecuatorianas"
- Párrafo intro sobre la misión de Goru

**2 cards: Misión y Visión**

**Misión** (acento dorado `#C9A84C`, ícono `Target`):
> "Democratizar el acceso a tecnología de gestión empresarial de alto nivel para las empresas ecuatorianas. Desarrollamos software modular, accesible y personalizable que simplifica los procesos operativos, potencia la toma de decisiones y acompaña el crecimiento de cada negocio, desde la PYME hasta la corporación."

**Visión** (acento verde `#84CC16`, ícono `Eye`):
> "Ser el ecosistema de software empresarial de referencia en Latinoamérica, reconocido por su capacidad de adaptación, profundidad funcional e impacto real en la productividad de las organizaciones. Aspiramos a un futuro donde cada empresa en la región tenga las herramientas para competir con excelencia."

**4 valores (grilla 2×2):**

| Valor         | Descripción                                                    |
|--------------|----------------------------------------------------------------|
| Innovación    | Tecnología de vanguardia aplicada al contexto local            |
| Transparencia | Procesos claros, precios justos y comunicación directa         |
| Compromiso    | Acompañamos a nuestros clientes en cada etapa                  |
| Excelencia    | Estándares internacionales con sensibilidad ecuatoriana        |

---

### 5.5 Contacto (`/contacto`)

Layout de **2 columnas** (1 en mobile):

**Columna izquierda — Datos de contacto:**
- Card: Email → `contacto@goru.ec`
- Card: Teléfono → `+593 99 999 9999`
- Card: Ubicación → Ecuador
- Card especial: "Respuesta en menos de 24 horas" con dot indicator dorado con glow

**Columna derecha — Formulario:**
- Campos: Nombre de empresa, Nombre, Email corporativo, Teléfono, Textarea (módulos de interés / descripción)
- CTA: "Enviar solicitud" (botón primario dorado, full width)
- Inputs: `bg-panel`, `border-radius: 12px`, focus con borde dorado

---

### 5.6 FAQs (`/faqs`)

Acordeón expandible. 8 preguntas:

1. ¿Qué es Goru?
2. ¿Qué incluye el módulo de Gestión Empresarial?
3. ¿Goru cumple con las normativas ecuatorianas?
4. ¿Necesito conocimientos técnicos para usar Goru?
5. ¿Puedo personalizar Goru para mi empresa?
6. ¿Qué tipo de soporte ofrecen?
7. ¿Mis datos están seguros?
8. ¿Cómo es el proceso de implementación?

**Comportamiento del acordeón:**
- Cada item: `bg-surface`, `border: 1px solid var(--border-default)`, `border-radius: 12px`
- Botón de pregunta: texto a la izquierda + ícono `ChevronDown` dorado a la derecha
- Al abrir: `ChevronDown` rota 180°, el contenido aparece con `max-height` transition (0 → 500px)
- Hover en el botón: `bg-panel`

---

## 6. Componentes Reutilizables

### ButtonGoru
3 variantes: `primary`, `secondary`, `ghost`

```
primary:   bg dorado (#C9A84C), texto oscuro, hover scale(1.05)
secondary: border dorado, texto dorado, hover bg rgba(201,168,76,0.1)
ghost:     sin fondo, texto dorado, flecha animada al hover
```
- Siempre incluye ícono `ArrowRight` al final
- `border-radius: 12px`, `height: 48px`, `padding: 0 24px`
- Prop `fullWidth` para botones de ancho completo

### FAQItem
Acordeón individual. Props: `question: string`, `answer: string`. Estado interno `isOpen`.

### SubmoduleChip
Pill con color propio por submódulo. Hover: levita + glow + intensifica color.

---

## 7. Interacciones y Animaciones Clave

| Elemento                     | Interacción                                                              |
|-----------------------------|--------------------------------------------------------------------------|
| Hero                        | Fade-in escalonado al montar (delays 0.2s, 0.4s, 0.6s, 0.8s)           |
| Cards de features/módulos   | `fadeReveal` con delay escalonado por índice                             |
| Chips de submódulos         | Hover: `translateY(-2px) scale(1.04)` + glow en color propio            |
| Modal de submódulos         | Backdrop blur + card scale/fade de entrada y salida (280ms)             |
| Cards en modal              | `fadeReveal` escalonado (delay `0.04s × índice`)                        |
| NavLink activo              | Color dorado + underline de 2px                                          |
| FAQ acordeón                | `max-height` transition + rotación de chevron                           |
| ChevronDown hero            | `bounce` infinito                                                        |
| Botones                     | `hover:scale(1.05)` en primary, gap animado en links "Conocer más"      |

---

## 8. Estructura de Archivos (React)

```
src/
├── app/
│   ├── App.tsx                  ← RouterProvider únicamente
│   ├── Root.tsx                 ← Layout compartido: NavbarGoru + Outlet + Footer
│   ├── routes.ts                ← createBrowserRouter con 5 rutas + NotFound
│   ├── components/
│   │   ├── NavbarGoru.tsx       ← Navbar con 4 islas flotantes
│   │   ├── ButtonGoru.tsx       ← Botón con 3 variantes
│   │   ├── FAQItem.tsx          ← Acordeón individual
│   │   ├── LanguageSelector.tsx ← Selector ES/EN con dropdown
│   │   └── XLogo.tsx            ← SVG del logo de X (Twitter)
│   ├── context/
│   │   └── LanguageContext.tsx  ← Context de idioma (ES/EN)
│   └── pages/
│       ├── Inicio.tsx           ← Hero + ¿Por qué Goru?
│       ├── Servicios.tsx        ← 2 módulos + modal de submódulos
│       ├── Nosotros.tsx         ← Misión + Visión + Valores
│       ├── Contacto.tsx         ← Formulario de demo + datos
│       ├── FAQs.tsx             ← Acordeón de 8 preguntas
│       └── NotFound.tsx         ← 404
├── imports/
│   └── GRUPO-GR-LOGO-SLOGAN.png ← Logo de Goru (se usa con import ES module)
└── styles/
    ├── fonts.css                ← @import Google Fonts (Poppins + Inter)
    ├── theme.css                ← CSS custom properties + @theme inline Tailwind
    └── index.css                ← Tailwind base + animaciones globales
```

---

## 9. Notas para la Implementación en PHP

1. **CSS:** Todos los tokens están en `:root` como CSS custom properties. Se pueden copiar directamente a un archivo `styles.css` global sin necesidad de Tailwind. Los nombres de clase de Tailwind como `text-[var(--text-primary)]` se pueden reemplazar por clases CSS estáticas.

2. **Router:** Cada ruta es una página PHP independiente (`index.php`, `servicios.php`, `nosotros.php`, etc.) o se puede usar un router ligero (Slim, Laravel, o `switch` manual con `.htaccess`).

3. **Navbar activo:** En PHP se detecta la ruta actual con `$_SERVER['REQUEST_URI']` para aplicar la clase activa al link correspondiente.

4. **Modal de submódulos:** La interactividad del modal (abrir/cerrar, animaciones) requiere JavaScript vanilla o Alpine.js — no necesita React.

5. **Acordeón FAQs:** Implementable con `<details>/<summary>` HTML nativo + CSS para las animaciones, o con Alpine.js para mayor control.

6. **Logo:** El archivo `GRUPO-GR-LOGO-SLOGAN.png` existe en `/src/imports/` — se referencia como imagen estática en PHP (`<img src="/assets/img/logo.png">`).

7. **Formulario de contacto:** En PHP se procesa con un script de backend + `mail()` o un servicio SMTP (PHPMailer). Validar campos: empresa, nombre, email, teléfono, mensaje.

8. **Selector de idiomas:** En PHP se implementa con sesiones (`$_SESSION['lang']`) o parámetros de URL (`?lang=en`). Los textos se almacenan en arrays de traducción o archivos `.po`.

9. **Pendiente (datos reales):** Las descripciones de los 11 submódulos son placeholders. El cliente proveerá los textos definitivos antes de la implementación final.

---

## 10. Estado Actual del Proyecto

- [x] Identidad visual completa (tokens, tipografías, paleta)
- [x] Navbar con islas flotantes + selector de idiomas + mobile drawer
- [x] Página Inicio (hero + features)
- [x] Página Servicios (2 módulos + chips + modal de submódulos)
- [x] Página Nosotros (Misión + Visión + Valores)
- [x] Página Contacto (formulario + datos de contacto)
- [x] Página FAQs (acordeón de 8 preguntas)
- [x] Footer compartido
- [x] Ruteo completo con React Router
- [ ] Textos definitivos de submódulos (pendiente del cliente)
- [ ] Integración de backend / envío de formulario
- [ ] Contenido real de sección de precios
- [ ] Assets visuales (mockup del dashboard, fotos del equipo)
- [ ] Implementación multiidioma ES/EN completa
