import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { FiMenu, FiX } from "solid-icons/fi"; // Add FiPhone import
import { BsWhatsapp } from "solid-icons/bs";
import socialMediaConfig from "../config";

export const Header: Component = () => {
  const { whatsapp } = socialMediaConfig;

  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const handleClickOutside = (event: MouseEvent) => {
    const menu = document.getElementById("mobile-menu");
    const menuButton = document.getElementById("menu-button");

    if (
      !menu?.contains(event.target as Node) &&
      !menuButton?.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleLinkClick = (event: MouseEvent) => {
    event.preventDefault();
    const targetId = (event.target as HTMLAnchorElement)
      .getAttribute("href")
      ?.substring(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      const headerOffset = 80; // Ajusta este valor según la altura de tu encabezado
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onCleanup(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  return (
    <>
      <header class="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm top-0">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <a href="#" class="text-2xl font-bold text-primary">
              Fajas Amelié
            </a>

            <nav class="hidden md:flex space-x-8">
              <a
                href="#inicio"
                class="text-gray-600 hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                Inicio
              </a>
              <a
                href="#caracteristicas"
                class="text-gray-600 hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                Características
              </a>
              <a
                href="#productos"
                class="text-gray-600 hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                Productos
              </a>
              <a
                href="#contacto"
                class="text-gray-600 hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                Contacto
              </a>
            </nav>

            <a href={whatsapp} class="hidden md:block">
              <button class="rounded-full bg-primary p-3 text-white">
                <BsWhatsapp size={24} />
              </button>
            </a>

            <button
              id="menu-button"
              class="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen())}
            >
              <span class="pointer-events-none">
                {isMenuOpen() ? <FiX size={24} /> : <FiMenu size={24} />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          class={`md:hidden absolute w-full bg-white ${
            isMenuOpen() ? "block" : "hidden"
          }`}
        >
          <div class="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#inicio"
              class="block text-gray-600 hover:text-primary"
              onClick={handleLinkClick}
            >
              Inicio
            </a>
            <a
              href="#caracteristicas"
              class="block text-gray-600 hover:text-primary"
              onClick={handleLinkClick}
            >
              Características
            </a>
            <a
              href="#productos"
              class="block text-gray-600 hover:text-primary"
              onClick={handleLinkClick}
            >
              Productos
            </a>
            <a
              href="#contacto"
              class="block text-gray-600 hover:text-primary"
              onClick={handleLinkClick}
            >
              Contacto
            </a>
          </div>
        </div>
      </header>

      <a href={whatsapp} class="fixed bottom-8 right-8 z-40 md:hidden">
        <button class="rounded-full bg-primary p-5 text-white">
          <BsWhatsapp size={45} />
        </button>
      </a>
    </>
  );
};
