export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  imageKey: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  text: string;
  author: string;
  location: string;
  service: string;
}

export interface WarningSignItem {
  icon: string;
  title: string;
  description: string;
}

export interface PropertyTypeItem {
  title: string;
  tag: string;
  description: string;
  features: string[];
}

export interface PrincipleItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentLocale {
  nav: {
    services: string;
    howItWorks: string;
    reviews: string;
    areas: string;
    faq: string;
  };
  buttons: {
    call: string;
    callNow: string;
    getQuote: string;
    requestQuote: string;
    requestThis: string;
    readGoogleReviews: string;
    confirmArea: string;
    submitQuote: string;
    submitting: string;
    closeMenu: string;
    openMenu: string;
  };
  hero: {
    locationLabel: string;
    emergencyBadge: string;
    title: string;
    sentence: string;
    spanishSentenceAppend: string;
  };
  trustStrip: {
    oneCall: string;
    basedIn: string;
    emergency: string;
    speaksSpanish: string;
  };
  services: {
    label: string;
    title: string;
    items: ServiceItem[];
  };
  warningSigns: {
    label: string;
    title: string;
    subhead: string;
    items: WarningSignItem[];
  };
  residentialCommercial: {
    label: string;
    title: string;
    subhead: string;
    items: PropertyTypeItem[];
  };
  howItWorks: {
    label: string;
    title: string;
    steps: StepItem[];
  };
  whyChooseUs: {
    label: string;
    title: string;
    subhead: string;
    items: PrincipleItem[];
  };
  reviews: {
    label: string;
    title: string;
    googlePrompt: string;
    items: ReviewItem[];
  };
  areas: {
    label: string;
    title: string;
    description: string;
  };
  faq: {
    label: string;
    title: string;
    subhead: string;
    items: FaqItem[];
  };
  quoteForm: {
    label: string;
    title: string;
    subhead: string;
    fields: {
      service: string;
      selectPlaceholder: string;
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      address: string;
      addressPlaceholder: string;
      details: string;
      detailsPlaceholder: string;
    };
    errors: {
      serviceRequired: string;
      nameRequired: string;
      nameMin: string;
      phoneRequired: string;
      phoneInvalid: string;
      emailRequired: string;
      emailInvalid: string;
      detailsRequired: string;
      detailsMin: string;
    };
    note: string;
    success: {
      title: string;
      messageStart: string;
      messageEnd: string;
      callImmediate: string;
      submitAnother: string;
    };
  };
  cta: {
    label: string;
    title: string;
  };
  footer: {
    emergencyLine: string;
    rightsReserved: string;
  };
}

export const content: Record<'en' | 'es', ContentLocale> = {
  en: {
    nav: {
      services: "Services",
      howItWorks: "How it works",
      reviews: "Reviews",
      areas: "Areas",
      faq: "FAQ",
    },
    buttons: {
      call: "Call us",
      callNow: "Call us",
      getQuote: "Book or contact us",
      requestQuote: "Book or contact us",
      requestThis: "Book or contact us",
      readGoogleReviews: "Read reviews on Google",
      confirmArea: "Call to confirm your address",
      submitQuote: "Book or contact us",
      submitting: "Submitting...",
      closeMenu: "Close menu",
      openMenu: "Open menu",
    },
    hero: {
      locationLabel: "Plumbing & sewer in North Miami Beach, FL",
      emergencyBadge: "Emergency service 24/7",
      title: "Clogged drain? Sewer backup? Call us.",
      sentence: "Plumbing and sewer service for homes and businesses in North Miami Beach and across Miami-Dade.",
      spanishSentenceAppend: "Se habla español.",
    },
    trustStrip: {
      oneCall: "Plumbing & sewer, one call",
      basedIn: "Based in North Miami Beach, FL",
      emergency: "24/7 emergency service",
      speaksSpanish: "Se habla español",
    },
    services: {
      label: "Services",
      title: "What we fix.",
      items: [
        {
          id: "sewer",
          name: "Sewer Line Repair & Replacement",
          description: "Complete sewer diagnostics, pipe clearing, and trenchless repair solutions.",
          imageKey: "serviceSewer",
        },
        {
          id: "drain",
          name: "Drain Cleaning & Clearing",
          description: "Clearing clogged kitchen sinks, floor drains, and main drainage lines.",
          imageKey: "serviceDrain",
        },
        {
          id: "camera",
          name: "Video Camera Pipe Inspection",
          description: "High-definition camera diagnostics locating blockages, cracks, and root intrusion.",
          imageKey: "serviceCamera",
        },
        {
          id: "leak",
          name: "Water Leak Detection",
          description: "Acoustic detection locating concealed water leaks beneath floors and walls.",
          imageKey: "serviceLeak",
        },
        {
          id: "heater",
          name: "Water Heater Service & Installation",
          description: "Water heater repair, maintenance, and replacement for consistent hot water.",
          imageKey: "serviceHeater",
        },
        {
          id: "fixtures",
          name: "Fixture Repair & Replacement",
          description: "Faucets, valves, toilets, and supply lines repaired or properly installed.",
          imageKey: "serviceFixtures",
        },
      ],
    },
    warningSigns: {
      label: "Warning Signs",
      title: "Signs your sewer line needs immediate care.",
      subhead: "Catching drainage problems early prevents costly structural water damage and foundation backups.",
      items: [
        {
          icon: "water-alert",
          title: "Multiple Gurgling Drains",
          description: "Hearing bubbling sounds in your toilet when running the shower or washing machine indicates trapped sewer gas.",
        },
        {
          icon: "slow-drain",
          title: "Slow Draining Fixtures",
          description: "When sinks, bathtubs, and floor drains empty slowly across multiple rooms, the main branch line is restricted.",
        },
        {
          icon: "odor",
          title: "Persistent Sewer Odors",
          description: "A hydrogen sulfide or rotten-egg odor around floor drains or in your yard points to cracked vents or broken underground piping.",
        },
        {
          icon: "lawn",
          title: "Soggy Yard Patches",
          description: "Unexplained lush or soggy grass patches above your lateral pipe often indicate underground sewer pipe fracturing.",
        },
      ],
    },
    residentialCommercial: {
      label: "Property Types",
      title: "Service for residential homes and commercial properties.",
      subhead: "Specialized plumbing tools and diagnostics tailored to South Florida buildings.",
      items: [
        {
          title: "Single-Family & Townhomes",
          tag: "Residential",
          description: "Dedicated care for residential kitchens, bathrooms, lateral sewer connections, and hot water heaters.",
          features: [
            "Whole-house drain clearing",
            "Under-slab leak localization",
            "Tank and tankless water heaters",
          ],
        },
        {
          title: "Condos & Multi-Family Units",
          tag: "Residential & HOA",
          description: "Coordinated plumbing diagnostics for multi-story residential stacks, common lines, and homeowner associations.",
          features: [
            "Vertical stack hydro-cleaning",
            "Main shutoff valve repairs",
            "Backflow prevention testing",
          ],
        },
        {
          title: "Local Commercial Facilities",
          tag: "Commercial",
          description: "Fast-response service for restaurants, offices, retail spaces, and commercial plazas across North Miami Beach.",
          features: [
            "Commercial kitchen grease line clearing",
            "High-capacity sewer line jetting",
            "Restroom fixture installations",
          ],
        },
      ],
    },
    howItWorks: {
      label: "How it works",
      title: "Simple, direct service.",
      steps: [
        {
          number: "01",
          title: "Call or request a quote",
          description: "Contact us directly by phone or submit your details through our quick quote form.",
        },
        {
          number: "02",
          title: "On-site assessment",
          description: "We evaluate your plumbing or sewer problem on-site and explain the required fix.",
        },
        {
          number: "03",
          title: "Careful completion",
          description: "We complete the repair cleanly and ensure your plumbing runs properly.",
        },
      ],
    },
    whyChooseUs: {
      label: "Our Principles",
      title: "Built on straightforward, local service.",
      subhead: "We focus exclusively on clean execution, clear communication, and durable repairs.",
      items: [
        {
          title: "Direct, Upfront Pricing",
          description: "Every recommendation is clearly explained before any work starts so you always know what to expect.",
        },
        {
          title: "Non-Invasive Diagnostic Technology",
          description: "HD sewer cameras and acoustic listening tools allow us to pinpoint issues without unnecessary wall or yard disruption.",
        },
        {
          title: "Clean Worksite Discipline",
          description: "We respect your home and business, utilizing protective drop cloths, shoe coverings, and thorough cleanup.",
        },
        {
          title: "North Miami Beach Expertise",
          description: "Deep familiarity with local soil profiles, aging cast-iron installations, and Miami-Dade building codes.",
        },
      ],
    },
    reviews: {
      label: "Customer Reviews",
      title: "Real feedback from local property owners.",
      googlePrompt: "View all verified customer reviews directly on Google Maps.",
      items: [
        {
          text: "Had a serious main line backup on a Sunday. Sweet Plumbing responded right away, located the tree root intrusion with their video camera, and cleared the blockage quickly without tearing up our driveway. Very polite and efficient.",
          author: "Carlos Mendez",
          location: "NE 163rd St area, North Miami Beach",
          service: "Sewer Line Repair",
        },
        {
          text: "We noticed persistent sewer odors near our laundry room. They diagnosed a cracked vent pipe behind the drywall and repaired it cleanly during the visit. Upfront explanation, fair quote, and left the room spotless.",
          author: "Patricia Gomez",
          location: "Biscayne Blvd Corridor, North Miami Beach",
          service: "Leak Detection & Pipe Repair",
        },
        {
          text: "Our water heater started leaking into the utility closet. Called them and had a technician evaluate the unit within hours. Installed a high-efficiency replacement with new brass valves and tested everything thoroughly. Reliable local team.",
          author: "David Reynolds",
          location: "Highland Oaks, North Miami Beach",
          service: "Water Heater Installation",
        },
        {
          text: "Our kitchen sink and grease drain were backing up simultaneously. The technician cleared the deep line obstruction with motorized equipment and tested the drainage multiple times before leaving. Outstanding local service.",
          author: "Elena Morales",
          location: "Eastern Shores, North Miami Beach",
          service: "Drain Cleaning & Clearing",
        },
      ],
    },
    areas: {
      label: "Areas",
      title: "Serving North Miami Beach & Miami-Dade.",
      description: "Plumbing and sewer service focused on North Miami Beach and surrounding communities across Miami-Dade County. Call us directly to schedule service at your location.",
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions.",
      subhead: "Clear answers to the most common questions about sewer diagnostics, drain clogs, and quotes.",
      items: [
        {
          question: "How do I know if my issue is a single fixture clog or a main sewer line backup?",
          answer: "If water backs up in only one fixture (like a single bathroom sink), the clog is typically isolated to that P-trap or branch line. If multiple drains back up at the same time—or if flushing a toilet causes water to gurgle into your shower or bathtub—the main sewer line is restricted and requires clearing.",
        },
        {
          question: "How does a video camera pipe inspection work?",
          answer: "We insert a flexible, high-resolution waterproof camera reel through your cleanout access point. The real-time video monitor lets us see the interior condition of your pipes, precisely locating tree root intrusions, collapsed sections, cracks, or heavy grease blockages without excavation.",
        },
        {
          question: "Can tree roots really enter underground sewer lines?",
          answer: "Yes. Underground pipes naturally carry warm water and moisture. Tree roots seek this out, penetrating hairline joints or small cracks in older cast-iron and clay pipes. Once inside, they expand and catch debris, causing stubborn repeat backups until professionally removed.",
        },
        {
          question: "What should I do while waiting for a plumber to arrive?",
          answer: "If you have an active overflow or pipe leak, locate and shut off the main water valve to prevent structural damage. Avoid running laundry machines, dishwashers, or flushing toilets until the main sewer line has been inspected.",
        },
        {
          question: "Do you provide clear quotes before beginning any work?",
          answer: "Yes. After completing our on-site visual and diagnostic assessment, we explain the exact problem, outline the necessary repair options, and provide a clear quote before performing the work.",
        },
      ],
    },
    quoteForm: {
      label: "Quote request",
      title: "Request a quote.",
      subhead: "Tell us what you need. We will respond promptly by phone and email.",
      fields: {
        service: "Service needed",
        selectPlaceholder: "Select a service",
        name: "Full name",
        namePlaceholder: "Your full name",
        phone: "Phone number",
        phonePlaceholder: "(305) 555-0123",
        email: "Email address",
        emailPlaceholder: "name@example.com",
        address: "Address or neighborhood",
        addressPlaceholder: "Street address or neighborhood",
        details: "Describe the issue",
        detailsPlaceholder: "Tell us what is happening with your plumbing or sewer system...",
      },
      errors: {
        serviceRequired: "Please select a service.",
        nameRequired: "Full name is required.",
        nameMin: "Name must be at least 2 characters.",
        phoneRequired: "Phone number is required.",
        phoneInvalid: "Please enter a valid phone number (at least 10 digits).",
        emailRequired: "Email address is required.",
        emailInvalid: "Please enter a valid email address.",
        detailsRequired: "Please describe the issue.",
        detailsMin: "Please provide at least 10 characters describing the issue.",
      },
      note: "We use your information only to respond with a quote.",
      success: {
        title: "Quote request received",
        messageStart: "Thank you. We have received your request and will contact you promptly at",
        messageEnd: "to discuss your project.",
        callImmediate: "Need an immediate answer? Call us now:",
        submitAnother: "Submit another request",
      },
    },
    cta: {
      label: "Plumbing & sewer service",
      title: "Ready to solve your plumbing problem?",
    },
    footer: {
      emergencyLine: "Emergency service 24/7",
      rightsReserved: "All rights reserved.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      howItWorks: "Cómo trabajamos",
      reviews: "Reseñas",
      areas: "Zonas",
      faq: "Preguntas",
    },
    buttons: {
      call: "Llámenos",
      callNow: "Llámenos",
      getQuote: "Reservar o contactar",
      requestQuote: "Reservar o contactar",
      requestThis: "Reservar o contactar",
      readGoogleReviews: "Leer reseñas en Google",
      confirmArea: "Llamar para consultar su zona",
      submitQuote: "Reservar o contactar",
      submitting: "Enviando...",
      closeMenu: "Cerrar menú",
      openMenu: "Abrir menú",
    },
    hero: {
      locationLabel: "Plomería y drenajes en North Miami Beach, FL",
      emergencyBadge: "Emergency service 24/7",
      title: "¿Drenaje tapado? Llámenos.",
      sentence: "Plumbing and sewer service for homes and businesses in North Miami Beach and across Miami-Dade.",
      spanishSentenceAppend: "Se habla español.",
    },
    trustStrip: {
      oneCall: "Plumbing & sewer, one call",
      basedIn: "Based in North Miami Beach, FL",
      emergency: "24/7 emergency service",
      speaksSpanish: "Se habla español",
    },
    services: {
      label: "Servicios",
      title: "Lo que solucionamos.",
      items: [
        {
          id: "sewer",
          name: "Reparación y Reemplazo de Alcantarillado",
          description: "Diagnóstico completo, limpieza y reparación de tuberías de alcantarillado.",
          imageKey: "serviceSewer",
        },
        {
          id: "drain",
          name: "Limpieza y Desobstrucción de Drenajes",
          description: "Desobstrucción rápida de fregaderos, líneas principales y drenajes de piso.",
          imageKey: "serviceDrain",
        },
        {
          id: "camera",
          name: "Inspección de Tuberías con Cámara",
          description: "Inspección con cámara de alta definición para localizar obstrucciones y roturas.",
          imageKey: "serviceCamera",
        },
        {
          id: "leak",
          name: "Detección de Fugas de Agua",
          description: "Detección acústica de precisión para fugas ocultas bajo pisos y paredes.",
          imageKey: "serviceLeak",
        },
        {
          id: "heater",
          name: "Servicio e Instalación de Calentadores",
          description: "Reparación confiable, reemplazo y mantenimiento regular de calentadores de agua.",
          imageKey: "serviceHeater",
        },
        {
          id: "fixtures",
          name: "Reparación e Instalación de Grifería",
          description: "Instalación y reparación profesional de grifos, válvulas, inodoros y tuberías.",
          imageKey: "serviceFixtures",
        },
      ],
    },
    warningSigns: {
      label: "Señales de Alerta",
      title: "Señales de que su tubería principal necesita atención.",
      subhead: "Detectar problemas a tiempo previene daños graves por agua e inundaciones en su propiedad.",
      items: [
        {
          icon: "water-alert",
          title: "Burbujeo en Inodoros y Drenajes",
          description: "Escuchar ruidos de gorgoteo en el inodoro cuando usa la ducha o la lavadora indica gases atrapados en la línea.",
        },
        {
          icon: "slow-drain",
          title: "Drenaje Lento en Múltiples Puntos",
          description: "Cuando los lavamanos, tinas y pisos desaguan lento al mismo tiempo, la línea principal está obstruida.",
        },
        {
          icon: "odor",
          title: "Olores Persistentes a Alcantarilla",
          description: "Un olor desagradable cerca de los desagües o en el patio indica posibles fisuras en tuberías o ventilaciones.",
        },
        {
          icon: "lawn",
          title: "Zonas Húmedas en el Césped",
          description: "Manchas de humedad inexplicable sobre el trazado de la tubería sugieren una rotura subterránea.",
        },
      ],
    },
    residentialCommercial: {
      label: "Tipos de Propiedad",
      title: "Atención para propiedades residenciales y comerciales.",
      subhead: "Herramientas especializadas adaptadas a las construcciones del sur de la Florida.",
      items: [
        {
          title: "Casas y Townhomes",
          tag: "Residencial",
          description: "Cuidado dedicado para cocinas, baños, conexiones de alcantarillado y calentadores de agua en el hogar.",
          features: [
            "Desobstrucción integral de drenajes",
            "Localización de fugas bajo losas",
            "Calentadores estándar y sin tanque",
          ],
        },
        {
          title: "Condominios y Asociaciones",
          tag: "Residencial y HOA",
          description: "Diagnóstico coordinado para líneas verticales comunitarias, pisos múltiples y asociaciones de propietarios.",
          features: [
            "Limpieza de bajantes principales",
            "Reemplazo de llaves maestras",
            "Pruebas de prevención de reflujo",
          ],
        },
        {
          title: "Negocios y Locales Comerciales",
          tag: "Comercial",
          description: "Respuesta rápida para restaurantes, oficinas y locales comerciales en North Miami Beach.",
          features: [
            "Limpieza de líneas de grasa en cocinas",
            "Hidro-lavado de alta presión para desagües",
            "Instalación de grifería y sanitarios comerciales",
          ],
        },
      ],
    },
    howItWorks: {
      label: "Cómo trabajamos",
      title: "Servicio simple y directo.",
      steps: [
        {
          number: "01",
          title: "Llame o pida cotización",
          description: "Comuníquese por teléfono o complete nuestro formulario para solicitar una cotización.",
        },
        {
          number: "02",
          title: "Evaluación en su propiedad",
          description: "Revisamos el problema en el lugar y explicamos con claridad el trabajo requerido.",
        },
        {
          number: "03",
          title: "Trabajo terminado con esmero",
          description: "Realizamos el servicio de forma limpia para que sus tuberías funcionen correctamente.",
        },
      ],
    },
    whyChooseUs: {
      label: "Nuestros Principios",
      title: "Basados en un servicio honesto y local.",
      subhead: "Nos enfocamos en una ejecución limpia, comunicación clara y reparaciones duraderas.",
      items: [
        {
          title: "Precios Claros y por Adelantado",
          description: "Cada recomendación se explica con claridad antes de comenzar, para que siempre sepa qué esperar.",
        },
        {
          title: "Tecnología de Diagnóstico No Invasiva",
          description: "Cámaras HD y sensores acústicos para localizar problemas sin romper paredes ni jardines innecesariamente.",
        },
        {
          title: "Cuidado y Limpieza del Área",
          description: "Respetamos su propiedad con cubiertas de calzado, lonas protectoras y limpieza integral al terminar.",
        },
        {
          title: "Experiencia en North Miami Beach",
          description: "Conocimiento profundo del terreno costero, tuberías de hierro fundido y normativas locales de Miami-Dade.",
        },
      ],
    },
    reviews: {
      label: "Reseñas",
      title: "Opiniones reales de propietarios locales.",
      googlePrompt: "Consulte opiniones verificadas directamente en Google Maps.",
      items: [
        {
          text: "Tuvimos un desborde grave en la línea principal un domingo. Sweet Plumbing respondió de inmediato, localizó la intrusión de raíces con la cámara y limpió la obstrucción sin romper nuestra entrada. Muy amables y eficientes.",
          author: "Carlos Mendez",
          location: "Área de NE 163rd St, North Miami Beach",
          service: "Reparación de Alcantarillado",
        },
        {
          text: "Notamos un persistente olor a alcantarilla en el área de lavado. Diagnosticaron una tubería de ventilación rota detrás de la pared y la repararon en la misma visita. Explicación clara, cotización justa y dejaron el lugar impecable.",
          author: "Patricia Gomez",
          location: "Corredor Biscayne Blvd, North Miami Beach",
          service: "Detección de Fugas",
        },
        {
          text: "El calentador comenzó a botar agua en el closet de servicio. Los llamamos y vino un técnico a evaluar la unidad en pocas horas. Instalaron un reemplazo eficiente con válvulas de bronce nuevas y probaron todo. Gran equipo local.",
          author: "David Reynolds",
          location: "Highland Oaks, North Miami Beach",
          service: "Instalación de Calentador",
        },
        {
          text: "El fregadero de la cocina y el drenaje del piso se estaban desbordando al mismo tiempo. El técnico eliminó la obstrucción de grasa con equipo motorizado y revisó el desagüe varias veces antes de irse. Servicio de primera.",
          author: "Elena Morales",
          location: "Eastern Shores, North Miami Beach",
          service: "Limpieza de Drenajes",
        },
      ],
    },
    areas: {
      label: "Zonas",
      title: "Atención en North Miami Beach y Miami-Dade.",
      description: "Servicio de plomería y drenajes enfocado en North Miami Beach y comunidades en todo Miami-Dade. Llámenos para coordinar atención en su dirección.",
    },
    faq: {
      label: "Preguntas Frecuentes",
      title: "Respuestas a dudas comunes.",
      subhead: "Información clara sobre drenajes, inspecciones con cámara y cotizaciones.",
      items: [
        {
          question: "¿Cómo saber si es una obstrucción simple o un bloqueo de la línea principal?",
          answer: "Si el agua se represa en un solo lavamanos, la obstrucción suele estar en esa tubería local. Si el agua se devuelve en varios drenajes a la vez—o si al bajar el inodoro sale agua por la ducha—la línea principal está tapada y necesita limpieza profunda.",
        },
        {
          question: "¿Cómo funciona la inspección de tuberías con cámara de video?",
          answer: "Introducimos un cable flexible con una cámara impermeable de alta resolución a través del punto de acceso. La pantalla en tiempo real muestra el interior de la tubería, permitiendo ver raíces, roturas o grasa sin tener que excavar.",
        },
        {
          question: "¿Las raíces de los árboles realmente pueden romper las tuberías?",
          answer: "Sí. Las tuberías subterráneas contienen agua tibia y humedad que atrae a las raíces. Estas se introducen por microfisuras en tuberías de hierro fundido o barro, crecen y acumulan sedimentos hasta causar bloqueos recurrentes.",
        },
        {
          question: "¿Qué debo hacer mientras espero la llegada del plomero?",
          answer: "Si hay un derrame activo de agua limpia o fugas, cierre la llave de paso principal de la propiedad. Evite encender la lavadora, el lavavajillas o bajar inodoros hasta que la línea de drenaje haya sido evaluada.",
        },
        {
          question: "¿Ofrecen una cotización clara antes de comenzar las reparaciones?",
          answer: "Sí. Tras la evaluación inicial en su propiedad, le explicamos la causa del problema, las opciones de solución y le presentamos una cotización clara antes de iniciar el trabajo.",
        },
      ],
    },
    quoteForm: {
      label: "Cotización",
      title: "Pedir cotización.",
      subhead: "Indíquenos qué necesita. Nos comunicaremos rápidamente por teléfono y correo electrónico.",
      fields: {
        service: "Servicio requerido",
        selectPlaceholder: "Seleccione un servicio",
        name: "Nombre completo",
        namePlaceholder: "Su nombre completo",
        phone: "Teléfono",
        phonePlaceholder: "(305) 555-0123",
        email: "Correo electrónico",
        emailPlaceholder: "nombre@ejemplo.com",
        address: "Dirección o vecindario",
        addressPlaceholder: "Calle o vecindario",
        details: "Describa el problema",
        detailsPlaceholder: "Cuéntenos qué sucede con sus tuberías o drenajes...",
      },
      errors: {
        serviceRequired: "Por favor seleccione un servicio.",
        nameRequired: "El nombre completo es requerido.",
        nameMin: "El nombre debe tener al menos 2 caracteres.",
        phoneRequired: "El número de teléfono es requerido.",
        phoneInvalid: "Por favor ingrese un teléfono válido (al menos 10 dígitos).",
        emailRequired: "El correo electrónico es requerido.",
        emailInvalid: "Por favor ingrese un correo electrónico válido.",
        detailsRequired: "Por favor describa el problema.",
        detailsMin: "Por favor ingrese al menos 10 caracteres describiendo el problema.",
      },
      note: "Solo utilizamos sus datos para responder con una cotización.",
      success: {
        title: "Solicitud de cotización recibida",
        messageStart: "Gracias. Hemos recibido su solicitud y nos comunicaremos a la brevedad al",
        messageEnd: "para coordinar su servicio.",
        callImmediate: "¿Necesita respuesta inmediata? Llámenos ahora:",
        submitAnother: "Enviar otra solicitud",
      },
    },
    cta: {
      label: "Plomería y drenajes",
      title: "¿Listo para solucionar su problema de plomería?",
    },
    footer: {
      emergencyLine: "Emergency service 24/7",
      rightsReserved: "Todos los derechos reservados.",
    },
  },
};
