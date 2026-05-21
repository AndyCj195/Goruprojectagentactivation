import { Outlet } from "react-router";
import { NavbarGoru } from "./components/NavbarGoru";
import { LanguageProvider } from "./context/LanguageContext";
import { Facebook, Instagram } from "lucide-react";
import { XLogo } from "./components/XLogo";

export function Root() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--bg-deep)] text-[var(--text-primary)] flex flex-col">
        <NavbarGoru />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-deep)] py-16 px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/src/imports/GRUPO-GR-LOGO-SLOGAN.png"
              alt="Goru"
              className="h-[48px] mb-3"
            />
            <p
              className="text-base text-[var(--text-muted)] max-w-[240px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Software de gestión empresarial hecho en Ecuador.
            </p>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Producto
            </h3>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-body)" }}>
              {["Servicios", "Precios", "Integraciones"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Empresa
            </h3>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-body)" }}>
              {["Nosotros", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Legal
            </h3>
            <ul className="space-y-3" style={{ fontFamily: "var(--font-body)" }}>
              {["Términos", "Privacidad"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border-default)] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-sm text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © 2026 Goru. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                aria-label="X (Twitter)"
              >
                <XLogo size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
