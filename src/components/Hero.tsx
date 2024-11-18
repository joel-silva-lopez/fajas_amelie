import { Component, createSignal, createEffect, onCleanup } from "solid-js";
import {
  FaBrandsFacebook,
  FaBrandsInstagram,
  FaBrandsTiktok,
} from "solid-icons/fa";
import socialMediaConfig from "../config";

const images = [
  {
    url: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tYW4lMjBmYXNoaW9ufGVufDB8fHx8MTYyMjQ5NjY2MHww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Modelo usando faja 1",
  },
  {
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tYW4lMjBmYXNoaW9ufGVufDB8fHx8MTYyMjQ5NjY2MHww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Modelo usando faja 2",
  },
  {
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tYW4lMjBmYXNoaW9ufGVufDB8fHx8MTYyMjQ5NjY2MHww&ixlib=rb-4.0.3&q=80&w=1080",
    alt: "Modelo usando faja 3",
  },
];

export const Hero: Component = () => {

  const { facebook, tiktok, instagram } = socialMediaConfig;

  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [progress, setProgress] = createSignal(0);

  createEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % images.length);
          return 0;
        }
        return prev + 2; // Increment by 2 every 100ms to complete in 5 seconds
      });
    }, 100);

    onCleanup(() => clearInterval(timer));
  });

  return (
    <section
      id="inicio"
      class="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary to-white"
    >
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h1 class="text-4xl md:text-6xl font-bold leading-tight">
              Realza tu figura con nuestras fajas
            </h1>
            <p class="text-lg text-gray-600">
              Descubre nuestra colección de fajas de alta calidad, diseñadas
              para brindarte comodidad y confianza en cada momento.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 items-center">
              <button class="btn-primary">Consulta Personalizada</button>
              <div class="flex gap-4 flex-wrap justify-center">
                <a
                  href={facebook}
                  target="_blank"
                  class="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaBrandsFacebook size={24} />
                </a>
                <a
                  href={tiktok}
                  target="_blank"
                  class="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaBrandsTiktok size={24}/>
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  class="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaBrandsInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square rounded-full bg-accent/20 absolute -z-10 w-4/5 h-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div class="relative">
              <img
                src={images[currentIndex()].url}
                alt={images[currentIndex()].alt}
                class="rounded-lg shadow-2xl w-full relative z-10 h-[500px] object-cover transition-opacity duration-500"
              />
              <div class="absolute -bottom-6 left-0 right-0 mx-4">
                <div class="bg-white p-2 rounded-full shadow-lg">
                  <div class="h-2 bg-gray-200 rounded-full">
                    <div
                      class="h-full bg-primary rounded-full transition-all duration-100"
                      style={{ width: `${progress()}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
