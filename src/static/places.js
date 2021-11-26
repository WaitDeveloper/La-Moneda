const places = [
  {
    title: 'Spray FITO DEFENSA',
    imageUrl: 'https://media.tiendashoke.es/17485-tm_thickbox_default/spray-defensa-fito.jpg',
    des: 'El spray de defensa personal "FITODEFENSA-50" es uno de los aerosoles de pimienta más vendidos y uno de los productos estrella en nuestra tienda. Cientos de usuarios confían en esta poderosa arma de defensa personal y disuasión.',
    time: 1500,
    link: "https://www.tiendashoke.es/spray-pimienta-antiviolador/spray-defensa-fito",
  },
  {
    title: 'Spray Sabre Red',
    imageUrl: 'https://media1.tiendashoke.es/16297-tm_thickbox_default/spray-defensa-sabre.jpg',
    des:'El spray de defensa personal de lanzamiento en chorrode Sabre Red es un dispositivo inocuo que consiste en un envase metálico de aluminio monoblock barnizado interior y exteriormente para protegerlo de la corrosión. Este aerosol de pimienta Sabre Red, el cual presume de ser el más utilizado entre los cuerpos y fuerzas de seguridad alrededor del mundo, tiene su principal característica es el lanzamiento en forma de en chorro balístico con un gran alcance de hasta 4 metros.',
    time: 1500,
    link: "https://www.tiendashoke.es/spray-pimienta-antiviolador/spray-defensa-sabre",
  },
  {
    title: 'Mochila Mil-Tec U.S.',
    imageUrl: 'https://media2.tiendashoke.es/14811-tm_thickbox_default/mochila-mil-tec-laser-cut-36lts-negro.jpg',
    des:"Mochila MILTEC US ASSAULT Lasser Cut 36 litros negra es idónea para el uso militar completa de anclajes Molle, con dos bolsillos exteriores, un bolsillo intermedio, y un compartimento principal de gran tamaño de apertura completa.",
    time: 1500,
    link: "https://www.tiendashoke.es/mochilas-tacticas/mochila-mil-tec-laser-cut-36lts-negro"
  },
  {
    title: 'Mochila Mil-Tec U.S Assault Tactical',
    imageUrl: 'https://media1.tiendashoke.es/16423-tm_thickbox_default/mochila-miltec-us-assault-tactical-black-36-litros.jpg',
    des: 'Mochilas Mil-Tec US ASSAULT Tactical con 36 litros de capacidad fabricadas en color negro.',
    time: 1500,
    link: "https://www.tiendashoke.es/mochilas-tacticas/mochila-miltec-us-assault-tactical-black-36-litros",
  },
  {
    title: 'Pistola Glock 43 9mm pb',
    imageUrl: 'https://media.tiendashoke.es/17070-tm_thickbox_default/pistola-glock-43-9mm-pb.jpg',
    des:'Tras el gran éxito cosechado por la Glock 42 dentro del segmento de pistolas SLIM super compactas llega por fin la esperada Glock 43 fabricada en calibre 9x19. Gracias a su diseño compacto este arma puede portarse de forma oculta y segura, es muy manejable y permite una puntería fantástica y precisa para los tiradores.',
    time: 1500,
    link: "https://www.tiendashoke.es/pistolas-de-fuego/pistola-glock-43-9mm-pb",
  },
  {
    title: 'Pistola CZ SHADOW II 9mm PB',
    imageUrl: 'https://media.tiendashoke.es/16822-tm_thickbox_default/pistola-cz-shadow-ii-9mm.jpg',
    des:'La pistola CZ Shadow 2 9mm parabellum representa la nueva generación del ahora ya legendario modelo CZ 75 SP-01 Shadow. La pistola CZ Shadow II se desarrolló en colaboración con los tiradores de élite de IPSC del equipo de Česká Zbrojovka para dar un importante empuje a la velocidad y precisión del disparo en el transcurso de la competición. Así, aprovechando nuestro equipo de producción más moderno se creó una pistola que va más allá de los límites del tiro deportivo IPSC.',
    time: 1500,
    link: "https://www.tiendashoke.es/pistolas-de-fuego/pistola-cz-shadow-ii-9mm"
  },
  {
    title: 'Carabina Smith & Wesson MP15 Sport camo Kryptek cal.22',
    imageUrl: 'https://media.tiendashoke.es/15224-tm_thickbox_default/carabina-smith-wesson-mp15-sport-kryptek.jpg',
    des: 'La carabina semiautomática de Smith&Wesson modelo M&P15 en su versión sport, te garantizará la máxima fiabilidad y precisión en sus tiros gracias a su plataforma AR-15. Esta carabina es una de las más completas por su composición en la cual integra miras abatibles Magpul MBUS, cañón roscado y apagallamas, deflector de vainas para un uso ambidiestro y culata retráctil CAR de 6 posiciones.',
    time: 1500,
    link: "https://www.tiendashoke.es/carabinas/carabina-smith-wesson-mp15-sport-kryptek",
  },
  {
    title: 'Rifle CZ Scorpion Evo3 S1 Carbine 9MM',
    imageUrl: 'https://media2.tiendashoke.es/17087-tm_thickbox_default/cz-scoprion-evo3-s1-carbine-9mm.jpg',
    des:'Carabina semiautomática de alta precisión que, por su bajo peso, excelente ergonomía, extrema seguridad y una carga extraordinariamente rápida, representa un arma ideal para disciplinas actuales de tiro deportivo y también en la práctica de ocio.',
    time: 1500,
    link: "https://www.tiendashoke.es/carabinas/cz-scoprion-evo3-s1-carbine-9mm",
  },
  {
    title: 'Revolver Llama Martial 4" cal.38',
    imageUrl: 'https://media.tiendashoke.es/12388-tm_thickbox_default/revolver-llama-martial-cal38.jpg',
    des:'Revolver Llama Martial 4" cal. 38 de segunda mano. Calibre 38 Capacidad de carga. 6 Longitud del cañon: 4" Longitud total : 235mm Peso cargada: 1.126gr Mira delantera fija con 2,8mmde espesor y mira trasera micrométrica ajustable lateral y verticalmente.',
    time: 1500,
    link: "https://www.tiendashoke.es/armas-de-segunda-mano/revolver-llama-martial-cal38"
  },
  {
    title: 'Cuchillo de entrenamiento flexible ESP',
    imageUrl: 'https://media2.tiendashoke.es/14517-tm_thickbox_default/cuchillo-entrenamiento-flexible.jpg',
    des:'La versión plástica del cuchillo acometedor en la forma de puñal sirve al entrenamiento de autodefensa especial y para la realización de las situaciones simuladas. Es una versión blanda.',
    time: 1500,
    link: "https://www.tiendashoke.es/armas-entrenamiento/cuchillo-entrenamiento-flexible"
  },
  
];

export default places;
