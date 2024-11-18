import { Component, createSignal } from "solid-js";
import socialMediaConfig from "../config";

const products = [
  {
    id: 1,
    name: "Faja Modeladora Clásica",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tYW4lMjBmYXNoaW9ufGVufDB8fHx8MTYyMjQ5NjY2MHww&ixlib=rb-4.0.3&q=80&w=500",
    description: "Perfecta para uso diario, brinda soporte y comodidad.",
  },
  {
    id: 2,
    name: "Faja Post-Quirúrgica",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tYW4lMjBmYXNoaW9ufGVufDB8fHx8MTYyMjQ5NjY2MHww&ixlib=rb-4.0.3&q=80&w=500",
    description: "Diseñada específicamente para recuperación post-operatoria.",
  },
  {
    id: 3,
    name: "Faja Deportiva",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d29tYW4lMjBmYXNoaW9ufGVufDB8fHx8MTYyMjQ5NjY2MHww&ixlib=rb-4.0.3&q=80&w=500",
    description: "Ideal para actividades físicas y entrenamiento.",
  },
];

export const Products: Component = () => {
  const { whatsapp } = socialMediaConfig;

  const [selectedProduct, setSelectedProduct] = createSignal<number | null>(
    null
  );

  return (
    <section id="productos" class="section-padding bg-secondary">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Productos
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra línea de fajas diseñadas para diferentes
            necesidades
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setSelectedProduct(product.id)}
              onMouseLeave={() => setSelectedProduct(null)}
            >
              <div class="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  class="w-full h-64 object-cover"
                />
                <div
                  class={`absolute inset-0 bg-primary/80 flex items-center justify-center transition-opacity duration-300 ${
                    selectedProduct() === product.id
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <a href={whatsapp} target="_blank">
                    <button class="bg-white text-primary px-6 py-2 rounded-full hover:bg-opacity-90">
                      Ver Detalles
                    </button>
                  </a>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
                <p class="text-gray-600 mb-4">{product.description}</p>
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <a href={whatsapp} target="_blank">
                    <button class="btn-primary">Comprar</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
