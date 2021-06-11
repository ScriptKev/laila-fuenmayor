export const FirstSection = () => {
  return (
    <section className='h-full md:min-h-screen w-full bg-gray-100 text-center py-10 2xl:px-6'>
      <h3 className='text-3xl text-primary-300 font-bold 2xl:text-5xl'>¿Quieres conocer un pedacito de lo que vas a encontrar en el programa?</h3>
      <div className='w-32 h-0.5 mt-4 mx-auto bg-secondary-300'></div>
      <br />
      <span className='text-primary-300 text-lg font-bold 2xl:text-2xl'>¡Te lo dejo por aquí!</span>

      <div className='max-w-8xl mx-auto grid grid-cols-1 grid-row-8 lg:grid-cols-3 lg:grid-rows-3 mt-10 gap-x-5 gap-y-5 px-4'>
        <article className='col-span-2 bg-primary-300 w-full h-full md:h-104 py-4 px-4 rounded-lg flex flex-col justify-center items-center'>
          <div>
            <h4 className='font-bold text-white text-xl 2xl:text-2xl'>
              ¿Qué tal si, en vez de invertir tiempo tratando de mejorar lo que NO se te da bien, pudieras saber exactamente aquello en lo que eres
              bueno y aplicarlo a todo lo que hagas?
            </h4>
            <br />
            <p className='text-white font-medium 2xl:text-xl'>
              Aprovecha la preventa y únete a este programa de 6 semanas en vivo en el que te daré la fórmula que necesitas para identificar, amar y
              comenzar a aplicar tu combinación única de talentos.
            </p>
            <br />
            <div className='hidden px-8 py-3 bg-white bg-opacity-60 text-white rounded-full md:flex justify-center items-center w-152 2xl:w-170 mx-auto 2xl:text-xl'>
              <div className='font-bold mx-4 block'>1 dias</div>
              <div className='font-bold mx-4 block'>4 horas</div>
              <div className='font-bold mx-4 block'>12 minutos</div>
              <div className='font-bold mx-4 block'>45 segundos</div>
            </div>

            <div className='md:hidden px-8 py-3 bg-white bg-opacity-60 text-white rounded-full flex justify-center items-center'>
              <div className='font-bold mx-4 inline-block'>1 d</div>
              <div className='font-bold mx-4 inline-block'>4 h</div>
              <div className='font-bold mx-4 inline-block'>12 m</div>
              <div className='font-bold mx-4 inline-block'>45 s</div>
            </div>
            <br />
            <button className='mt-2 md:mt-4 font-semibold mx-auto px-8 py-3 text-white rounded-xl-full rounded-full bg-secondary-300 text-sm hover:bg-opacity-90 2xl:text-xl'>
              ¡Quiero aprovechar la preventa!
            </button>
          </div>
        </article>

        <article className='col-span-2 lg:col-span-1 bg-primary-300 w-full h-full lg:h-104 px-4 pb-4 pt-6 rounded-lg flex flex-col justify-start items-center'>
          <div>
            <h4 className='font-bold text-white text-xl 2xl:text-2xl'>Semana 0: Mindset de talentos (Módulo asíncrono)</h4> <br />
            <p className='text-white font-normal text-left text-sm 2xl:text-lg'>
              Rompe con viejos paradigmas que no te están dejando obtener el nivel de éxito que quieres <br />
              <br />
              Usa estas 5 pistas claves y comienza a reconocer tus talentos innatos <br />
              <br />
              Desarrolla un mindset potenciador que te guie de ahora en adelante y te ayude a desarrollar tu nivel de autoconfianza.
            </p>
          </div>
        </article>

        <article className='col-span-2 lg:col-span-1 bg-primary-300 w-full h-full lg:h-104 px-4 pb-4 pt-6 rounded-lg flex flex-col justify-start items-center'>
          <div>
            <h4 className='font-bold text-white text-xl 2xl:text-2xl'>Semana 1: La cultura de talentos (2 de junio – 7pm EST)</h4> <br />
            <p className='text-white font-normal text-left text-sm 2xl:text-lg'>
              Aprende la fórmula para fortalecer tus talentos innatos y convertirlos en herramientas que puedas usar intencionalmente en tu vida.{' '}
              <br /> <br />
              Conoce conceptos que te ayudarán a usar tu conocimiento sobre talentos como filtros en diversas situaciones.
            </p>
          </div>
        </article>

        <article className='col-span-2 lg:col-span-1 bg-primary-300 w-full h-full lg:h-104 px-4 pb-4 pt-6 rounded-lg flex flex-col justify-start items-center'>
          <div>
            <h4 className='font-bold text-white text-xl 2xl:text-2xl'>Semana 2: Conociendo tus talentos (9 de junio – 7pm EST)</h4> <br />
            <p className='text-white font-normal text-left text-sm 2xl:text-lg'>
              Conoce una nueva manera de entender y gestionar tus debilidades <br />
              <br />
              Analiza tus talentos e identifica tu manera más natural de lograr las cosas
              <br />
              <br />
              Conoce puntos claves de cada uno de lo 34 temas de talentos y comienza a reconocer en qué medida los vives
            </p>
          </div>
        </article>

        <article className='col-span-2 lg:col-span-1 bg-primary-300 w-full h-full lg:h-104 px-4 pb-4 pt-6 rounded-lg flex flex-col justify-start items-center'>
          <div>
            <h4 className='font-bold text-white text-xl 2xl:text-2xl'>Semana 3: Celebrando tus talentos (7 de julio – 7pm EST)</h4> <br />
            <p className='text-white font-normal text-left text-sm 2xl:text-lg'>
              Un viaje hacia lo aprendido y cómo se integra a partir de este momento en tu vida
              <br />
              <br />
              Crea una declaración de tu sello que te guíe de ahora en adelante
              <br />
              <br />
              Usa esta fórmula especial para comunicar tu sello a otros y reconectar contigo y con tus talentos en cualquier momento, ya sea que dudes
              de tus capacidades o que quieras reconectar con tu manera única de aportar.
            </p>
          </div>
        </article>

        <article className='col-span-2 lg:col-span-1 bg-primary-300 w-full h-full lg:h-104 px-4 pb-4 pt-6 rounded-lg flex flex-col justify-start items-center'>
          <div>
            <h4 className='font-bold text-white text-xl 2xl:text-2xl'>Semana 4: Entendiendo tus talentos (23 de junio – 7pm EST)</h4> <br />
            <p className='text-white font-normal text-left text-sm 2xl:text-lg'>
              Aprende a gestionar tus talentos reconociendo en qué momentos te están potenciando y en qué otros te están limitando.
              <br />
              <br />
              Establece exactamente cómo tu talento te ayuda a aportar a otros.
              <br />
              <br />
              Reconoce cómo generar grandeza desde quien SÍ eres.
            </p>
          </div>
        </article>

        <article className='col-span-2 lg:col-span-1 bg-primary-300 w-full h-full lg:h-104 px-4 pb-4 pt-6 rounded-lg flex flex-col justify-start items-center'>
          <div>
            <h4 className='font-bold text-white text-xl 2xl:text-2xl'>Semana 5: Amando tus talentos (30 de junio – 7pm EST)</h4> <br />
            <p className='text-white font-normal text-left text-sm 2xl:text-lg'>
              Conoce las claves para usar intencionalmente los talentos en diferentes aspectos de tu vida, incluyendo tu trabajo o emprendimiento
              <br />
              <br />
              Comprende qué significa asumir la responsabilidad de tus talentos y cómo te beneficia en tu construcción de éxito
              <br />
              <br />
              Integra nuevos conocimientos que te ayuden a sentirte en control de tu aporte y tu crecimiento desde talentos.
            </p>
          </div>
        </article>

        <article className='col-span-2 lg:col-span-1 bg-primary-300 w-full lg:h-104 px-4 pb-4 pt-6 rounded-lg flex flex-col justify-start items-center'>
          <div>
            <h4 className='font-bold text-white text-xl 2xl:text-2xl'>Semana 6: Celebrando tus talentos (7 de julio – 7pm EST)</h4> <br />
            <p className='text-white font-normal text-left text-sm 2xl:text-lg'>
              Un viaje hacia lo aprendido y cómo se integra a partir de este momento en tu vida
              <br />
              <br />
              Crea una declaración de tu sello que te guíe de ahora en adelante
              <br />
              <br />
              Usa esta fórmula especial para comunicar tu sello a otros y reconectar contigo y con tus talentos en cualquier momento, ya sea que dudes
              de tus capacidades o que quieras reconectar con tu manera única de aportar.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
