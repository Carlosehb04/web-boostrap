const botones = document.querySelectorAll('.btn-info');
const carouselInner = document.querySelector('#carouselModal .carousel-inner');
const carouselElement = document.getElementById('carouselModal');

let carouselInstance = null;

const galerias = {
  montana: [
    "campos/montañas-img/amanecer-en-las-montañas-2.jpg",
    "campos/montañas-img/amanecer-en-las-montañas-3.jpg",
    "campos/montañas-img/amanecer-en-las-montañas-4.jpg",
    "campos/montañas-img/amanecer-en-las-montañas.jpg"
  ],
  lago: [
    "lagos/lagos/lago_1.jpg",
    "lagos/lagos/lago_2.jpg",
    "lagos/lagos/lago_3.jpg",
    "lagos/lagos/lago_4.jpg"
  ],
  senderos: [
    "paisaje/paisajes/senderos_1.jpg",
    "paisaje/paisajes/senderos_2.jpg",
    "paisaje/paisajes/senderos_3.jpg",
    "paisaje/paisajes/senderos_4.jpg"
  ],
  paisajes: [
    "senderos/montañas/paisajes_alpinos_1.jpg",
    "senderos/montañas/paisajes_alpinos_2.jpg",
    "senderos/montañas/paisajes_alpinos_3.jpg",
    "senderos/montañas/paisajes_alpinos_4.jpg"
  ]
};

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    
    const tipo = boton.getAttribute('data-galeria');
    const imagenes = galerias[tipo];

    // 1. limpiar estado anterior
    carouselInner.innerHTML = '';

    // 2. crear slides
  imagenes.forEach((src, index) => {
  const div = document.createElement('div');
  div.classList.add('carousel-item');

  if (index === 0) {
    div.classList.add('active');
  }

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('img-wrapper');

  // imagen
  const img = document.createElement('img');
  img.src = src;
  img.className = 'img-fluid w-75';

  wrapper.appendChild(img);
  div.appendChild(wrapper);

  carouselInner.appendChild(div);
});

    // 3. destruir instancia anterior (CLAVE)
    if (carouselInstance) {
      carouselInstance.dispose();
    }

    // 4. crear nueva instancia
    carouselInstance = new bootstrap.Carousel(carouselElement, {
      interval: false
    });

  });
});