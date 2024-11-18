import { Component } from 'solid-js';
import { FiAward, FiHeart, FiThumbsUp, FiTruck } from 'solid-icons/fi';

const features = [
  {
    icon: FiAward,
    title: 'Calidad Premium',
    description: 'Materiales de primera calidad para garantizar durabilidad y comodidad.'
  },
  {
    icon: FiHeart,
    title: 'Diseño Anatómico',
    description: 'Adaptadas a tu cuerpo para máximo confort y efectividad.'
  },
  {
    icon: FiThumbsUp,
    title: 'Personalización',
    description: 'Ajustamos cada faja según tus necesidades específicas.'
  },
  {
    icon: FiTruck,
    title: 'Envío Rápido',
    description: 'Entrega a domicilio en todo el país.'
  }
];

export const Features: Component = () => {
  return (
    <section id="caracteristicas" class="section-padding bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir nuestras fajas?
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Nos destacamos por ofrecer productos de alta calidad con un servicio personalizado
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div class="p-6 rounded-lg bg-secondary hover:shadow-lg transition-shadow duration-300">
              <feature.icon size={40} class="text-primary mb-4" />
              <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
              <p class="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};