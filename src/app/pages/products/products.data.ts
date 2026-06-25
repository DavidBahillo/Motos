export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  alt: string;
  badge?: string;
  engine: string;
  power: string;
  weight: string;
  seatHeight: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'sport-r-series-600',
    name: 'Sport R-Series 600',
    description:
      'Diseñada para la pista, homologada para la calle. Pura adrenalina en dos ruedas.',
    longDescription:
      'Una superdeportiva equilibrada para quienes buscan sensaciones de circuito en uso diario. Su chasis ligero y su electrónica de asistencia te permiten atacar curvas con precisión y seguridad.',
    price: '8.999 €',
    image: '/img/moto1.jfif',
    alt: 'Moto Deportiva R-Series',
    badge: 'Novedad',
    engine: '4 cilindros, 599 cc',
    power: '118 CV',
    weight: '189 kg',
    seatHeight: '820 mm',
  },
  {
    id: 'adventure-explorer-x',
    name: 'Adventure Explorer X',
    description:
      'Domina cualquier terreno. Tu compañera ideal para viajes largos y caminos difíciles.',
    longDescription:
      'Preparada para aventura real, con postura cómoda, gran autonomía y suspensiones de largo recorrido. Perfecta para enlazar autopista, puertos de montaña y tramos de tierra sin esfuerzo.',
    price: '11.450 €',
    image: '/img/moto2.jpeg',
    alt: 'Moto Adventure Explorer',
    engine: 'Bicilíndrico, 890 cc',
    power: '105 CV',
    weight: '214 kg',
    seatHeight: '850 mm',
  },
  {
    id: 'urban-city-pro-125',
    name: 'Urban City Pro 125',
    description:
      'Ágil, económica y elegante. La solución perfecta para esquivar el tráfico diario.',
    longDescription:
      'Un scooter urbano pensado para el día a día. Bajo consumo, mantenimiento sencillo y excelente maniobrabilidad para moverte con rapidez por ciudad con máximo confort.',
    price: '3.200 €',
    image: '/img/moto3.jpg',
    alt: 'Scooter Urban City',
    engine: 'Monocilíndrico, 125 cc',
    power: '12 CV',
    weight: '128 kg',
    seatHeight: '790 mm',
  },
  {
    id: 'naked-street-700',
    name: 'Naked Street 700',
    description:
      'Potente, ligera y con un diseño agresivo. Ideal para disfrutar cada curva en ciudad y carretera.',
    longDescription:
      'Una naked polivalente con gran respuesta en medios y parte ciclo ágil. Disfruta de aceleración contundente y control total tanto en trayectos cortos como en escapadas de fin de semana.',
    price: '7.450 €',
    image: '/img/moto4.jpg',
    alt: 'Moto Naked Streetfighter',
    engine: 'Bicilíndrico, 689 cc',
    power: '74 CV',
    weight: '186 kg',
    seatHeight: '805 mm',
  },
  {
    id: 'custom-cruiser-900',
    name: 'Custom Cruiser 900',
    description:
      'Comodidad premium y estilo clásico para rutas largas. Una moto hecha para viajar sin prisas.',
    longDescription:
      'Cruiser de carácter con ergonomía relajada y gran estabilidad en carretera. Ideal para rutas largas gracias a su entrega suave de potencia y su asiento confortable para piloto y pasajero.',
    price: '9.980 €',
    image: '/img/moto5.jpg',
    alt: 'Moto Custom Cruiser',
    engine: 'V-Twin, 900 cc',
    power: '68 CV',
    weight: '236 kg',
    seatHeight: '735 mm',
  },
];
