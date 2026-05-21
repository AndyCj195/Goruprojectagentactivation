import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Inicio } from "./pages/Inicio";
import { Servicios } from "./pages/Servicios";
import { Nosotros } from "./pages/Nosotros";
import { FAQs } from "./pages/FAQs";
import { Contacto } from "./pages/Contacto";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Inicio },
      { path: "servicios", Component: Servicios },
      { path: "nosotros", Component: Nosotros },
      { path: "faqs", Component: FAQs },
      { path: "contacto", Component: Contacto },
      { path: "*", Component: NotFound },
    ],
  },
]);
