import { Component } from "solid-js";

export const Contact: Component = () => {
  return (
    <section id="contacto" class="section-padding bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas ayuda?
            </h2>
            <p class="text-gray-600">
              Estamos aquí para asesorarte en la elección de tu faja ideal
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold">Contáctanos</h3>
              <p class="text-gray-600">
                Completa el formulario y nuestro equipo se pondrá en contacto
                contigo para brindarte asesoría personalizada.
              </p>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      class="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span class="text-gray-600">+1 234 567 890</span>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      class="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span class="text-gray-600">contacto@fajasamelie.com</span>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <iframe
                class="border-2 border-gray-200 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.38751074988346!2d-107.37356155028573!3d24.788598308166172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd76d3f505d81%3A0x4c20ca4bb31fda70!2sOffice%26Confort!5e0!3m2!1ses!2smx!4v1731917114343!5m2!1ses!2smx"
                height="450"
                width="100%"
                allowfullscreen={true}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
