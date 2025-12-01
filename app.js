const { useState } = React;

// Iconos SVG personalizados
const ChevronLeft = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const GoddessCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const goddesses = [
    {
      name: "LA DONCELLA",
      subtitle: "Inocencia y Nuevos Comienzos",
      color: "from-pink-200 to-purple-200",
      textColor: "text-purple-900",
      affirmations: [
        "Abrazo cada día como una nueva oportunidad de descubrirme.",
        "Mi curiosidad es sagrada y me guía hacia experiencias enriquecedoras.",
        "Permito que mi espíritu juguetón y espontáneo florezca.",
        "Estoy abierta a la magia y las posibilidades infinitas de la vida.",
        "Confío en mi capacidad de reinventarme cuantas veces sea necesario."
      ],
      mantra: "SOY RENOVACIÓN CONSTANTE"
    },
    {
      name: "LA MADRE",
      subtitle: "Nutrición y Amor Incondicional",
      color: "from-green-200 to-emerald-300",
      textColor: "text-green-900",
      affirmations: [
        "Mi capacidad de nutrir comienza con el amor hacia mí misma.",
        "Doy desde la abundancia, no desde el sacrificio.",
        "Creo espacios seguros donde otros pueden crecer y ser auténticos.",
        "Mi amor es poderoso y transforma todo lo que toca.",
        "Me permito recibir el mismo cuidado que ofrezco a los demás."
      ],
      mantra: "NUTRO Y SOY NUTRIDA"
    },
    {
      name: "LA GUERRERA",
      subtitle: "Fuerza y Determinación",
      color: "from-red-300 to-orange-300",
      textColor: "text-red-900",
      affirmations: [
        "Soy fuerte, valiente y capaz de enfrentar cualquier desafío.",
        "Defiendo mis valores y lo que es sagrado para mí con claridad.",
        "Establezco límites saludables que honran mi energía.",
        "Mi poder no disminuye a otros, ilumina el camino.",
        "Actúo con coraje incluso cuando siento miedo."
      ],
      mantra: "SOY FUERZA CONSCIENTE"
    },
    {
      name: "LA AMANTE",
      subtitle: "Sensualidad y Placer",
      color: "from-rose-300 to-pink-400",
      textColor: "text-rose-900",
      affirmations: [
        "Habito mi cuerpo con placer y presencia total.",
        "Merezco experimentar belleza, gozo y deleite en mi vida.",
        "Mi sensualidad es una expresión sagrada de mi vitalidad.",
        "Me permito sentir profundamente sin vergüenza ni culpa.",
        "Honro mis deseos como mensajeros de mi alma."
      ],
      mantra: "CELEBRO LA VIDA A TRAVÉS DE MIS SENTIDOS"
    },
    {
      name: "LA REINA",
      subtitle: "Soberanía y Liderazgo",
      color: "from-yellow-200 to-amber-300",
      textColor: "text-amber-900",
      affirmations: [
        "Soy la soberana de mi vida y tomo decisiones con confianza.",
        "Lidero con gracia, sabiduría y compasión.",
        "Mi presencia inspira respeto y admiración naturalmente.",
        "Gobierno mi reino interior con justicia y amor.",
        "Merezco abundancia, reconocimiento y éxito."
      ],
      mantra: "SOY SOBERANA DE MI DESTINO"
    },
    {
      name: "LA SABIA",
      subtitle: "Conocimiento y Discernimiento",
      color: "from-indigo-200 to-blue-300",
      textColor: "text-indigo-900",
      affirmations: [
        "Confío en la sabiduría que habita en mi interior.",
        "Cada experiencia me ha enseñado algo valioso.",
        "Veo más allá de las apariencias y comprendo las verdades profundas.",
        "Mi perspectiva es clara, amplia y compasiva.",
        "Comparto mi conocimiento con generosidad y humildad."
      ],
      mantra: "LA VERDAD SE REVELA A TRAVÉS DE MÍ"
    },
    {
      name: "LA HECHICERA",
      subtitle: "Magia y Transformación",
      color: "from-purple-300 to-violet-400",
      textColor: "text-purple-900",
      affirmations: [
        "Soy una creadora consciente de mi realidad.",
        "Transformo los desafíos en oportunidades de evolución.",
        "Mi intuición es mi guía más confiable.",
        "Domino el arte de manifestar mis intenciones más elevadas.",
        "La magia fluye a través de mí cuando me conecto con mi poder."
      ],
      mantra: "SOY ALQUIMIA PURA"
    },
    {
      name: "LA SACERDOTISA",
      subtitle: "Espiritualidad y Misterio",
      color: "from-slate-300 to-gray-400",
      textColor: "text-slate-900",
      affirmations: [
        "Me conecto con lo sagrado en el silencio y la quietud.",
        "Confío en los misterios que aún no puedo comprender.",
        "Soy un puente entre el mundo visible y el invisible.",
        "Mi intuición profunda me guía hacia la verdad.",
        "Honro lo sagrado en mí y en todo lo que existe."
      ],
      mantra: "SOY PORTAL DE LO DIVINO"
    }
  ];

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % goddesses.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + goddesses.length) % goddesses.length);
  };

  const goddess = goddesses[currentCard];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 no-print">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2" style={{fontFamily: '"Libre Baskerville", serif'}}>
            Las 8 Diosas Interiores
          </h1>
          <p className="text-slate-600 text-lg" style={{fontFamily: '"Poppins", sans-serif'}}>
            Afirmaciones y Mantras de Poder
          </p>
        </div>

        {/* Card Container */}
        <div className="relative">
          {/* Main Card */}
          <div
            id="goddess-card"
            className={`bg-gradient-to-br ${goddess.color} rounded-3xl shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col justify-between print:shadow-none`}
          >
            {/* Card Header */}
            <div className="text-center mb-8">
              <h2 className={`text-4xl md:text-5xl font-bold ${goddess.textColor} mb-2`} style={{fontFamily: '"Libre Baskerville", serif'}}>
                {goddess.name}
              </h2>
              <p className={`text-xl md:text-2xl ${goddess.textColor} opacity-80 italic`} style={{fontFamily: '"Libre Baskerville", serif'}}>
                {goddess.subtitle}
              </p>
            </div>

            {/* Affirmations */}
            <div className="flex-grow space-y-4 mb-8">
              {goddess.affirmations.map((affirmation, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-4 shadow-md"
                >
                  <p className={`${goddess.textColor} text-base md:text-lg leading-relaxed`} style={{fontFamily: '"Poppins", sans-serif'}}>
                    • {affirmation}
                  </p>
                </div>
              ))}
            </div>

            {/* Mantra */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <p className="text-center text-sm uppercase tracking-wider text-slate-600 mb-2" style={{fontFamily: '"Poppins", sans-serif'}}>
                Mantra de Poder
              </p>
              <p className={`text-center text-2xl md:text-3xl font-bold ${goddess.textColor}`} style={{fontFamily: '"Libre Baskerville", serif'}}>
                "{goddess.mantra}"
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 no-print"
            aria-label="Tarjeta anterior"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 no-print"
            aria-label="Siguiente tarjeta"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 no-print">
          {/* Indicators */}
          <div className="flex gap-2">
            {goddesses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCard
                    ? 'bg-slate-700 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir a tarjeta ${index + 1}`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {/* Botones removidos */}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-md no-print">
          <h3 className="text-xl font-bold text-slate-800 mb-3" style={{fontFamily: '"Poppins", sans-serif'}}>
            Cómo usar tus tarjetas:
          </h3>
          <ul className="space-y-2 text-slate-600" style={{fontFamily: '"Poppins", sans-serif'}}>
            <li>• Elige una tarjeta que resuene con la energía que necesitas hoy</li>
            <li>• Lee las afirmaciones en voz alta cada mañana</li>
            <li>• Repite el mantra durante el día cuando necesites reconectar</li>
            <li>• Colócalas en tu espejo, escritorio o espacio sagrado personal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GoddessCards />);