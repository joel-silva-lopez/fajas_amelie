import {
  FaBrandsFacebook,
  FaBrandsInstagram,
  FaBrandsTiktok,
} from "solid-icons/fa";
import { Component } from "solid-js";
import socialMediaConfig from "../config";

export const Footer: Component = () => {

  const { facebook, tiktok, instagram } = socialMediaConfig;

  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Fajas Amelié</h3>
            <p class="text-gray-400">
              Transformando vidas con fajas de alta calidad y diseño
              personalizado.
            </p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul class="space-y-2">
              <li>
                <a href="#inicio" class="text-gray-400 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#caracteristicas"
                  class="text-gray-400 hover:text-white"
                >
                  Características
                </a>
              </li>
              <li>
                <a href="#productos" class="text-gray-400 hover:text-white">
                  Productos
                </a>
              </li>
              <li>
                <a href="#contacto" class="text-gray-400 hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Productos</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Fajas Modeladoras
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Fajas Post-Quirúrgicas
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Fajas Deportivas
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
            <div class="flex space-x-4">
              <a
                href={facebook}
                target="_blank"
                class="text-gray-400 hover:text-white"
              >
                <FaBrandsFacebook size={24} />
              </a>
              <a
                href={tiktok}
                target="_blank"
                class="text-gray-400 hover:text-white"
              >
                <FaBrandsTiktok size={24} />
              </a>
              <a
                href={instagram}
                target="_blank"
                class="text-gray-400 hover:text-white"
              >
                <FaBrandsInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8">
          <p class="text-center text-gray-400">
            © {new Date().getFullYear()} Fajas Amelié. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
