import { useRef } from 'react'

const serviceList = [
  {
    title: 'Workbook: 5 Pistas para conectar con tus talentos (valor $47)',
    content:
      'Haz estos 5 ejercicios inspirados en la metodología Gallup antes de hacer el test y asegúrate de estar bien preparad@ para recibir los resultados.',
    img: '/img/coursesPage/service1.png',
  },

  {
    title: 'eBook: La luz y punto ciego de tus talentos (valor $47)',
    content:
      'Una guía especialmente diseñada para ayudarte a identificar el potencial de tus talentos y gestionar sus limitaciones, de manera que puedas aprovechar su máximo potencial y convertirlos en fortalezas',
    img: '/img/coursesPage/service2.png',
  },

  {
    title: 'Masterclass: entendiendo lo 34 temas de talento (valor $297)',
    content:
      'Una explicación detallada con datos clave de cada uno de los 34 temas de talento para que puedas entender tus talentos y los de quienes te rodean, así podrás identificar cómo puede ser que tú u otra persona esté viviendo su talento innato.',
    img: '/img/coursesPage/service3.png',
  },
]

const presentList = [
  {
    title: 'Sesiones especiales de estudio',
    content:
      'Sé que entre tantos compromisos y ocupaciones, puede que no logres sacar tiempo para hacer las asignaciones semanales correspondientes al programa. Por ello, dispondremos de 2 sesiones (en las semanas 3 y 5) para que te pongas al día y puedas aclarar cualquier duda que tengas.',
    img: '/img/coursesPage/present1.png',
  },

  {
    title: 'Comunidad de apoyo a través de Telegram/Whatsapp',
    content: 'Camina en compañía de personas que están persiguiendo el mismo crecimiento y recibe mi guía durante 6 semanas',
    img: '/img/coursesPage/present2.png',
  },

  {
    title: 'Acceso por 3 meses a todas las herramientas y clases',
    content:
      'Tómate el tiempo que necesites para integrar este nuevo conocimiento luego de terminadas las 6 semanas teniendo acceso extendido por 3 meses.',
    img: '/img/coursesPage/present3.png',
  },
]

export const SecondSection = () => {
  const { current: services } = useRef(serviceList)
  const { current: presents } = useRef(presentList)

  return (
    <section className='min-h-screen w-full bg-primary-300 text-center py-10'>
      <h3 className='text-3xl text-white font-bold 2xl:text-5xl'>
        Pero ¡ya va! <br className='md:hidden' />
        esto no es todo...
      </h3>
      <div className='w-32 h-0.5 mt-4 mx-auto bg-secondary-300'></div>
      <br />
      <span className='text-white font-light md:font-bold text-xl 2xl:text-2xl'>Reservando HOY tendrás acceso GRATIS a estos 3 súper BONOS</span>

      <div className='max-w-7xl mx-auto mt-6 px-2'>
        <div className='flex flex-col md:flex-row md:justify-center md:items-start'>
          {services.map((service) => (
            <article key={service.title} className='w-full md:w-9/12 h-full bg-transparent flex flex-col justify-start items-center md:mx-6 my-4'>
              <picture className=''>
                <img src={service.img} alt={service.title} width={380} height={300} />
              </picture>
              <br className='hidden md:block' />

              <h4 className='text-white font-bold text-lg mt-4 md:mt-0 2xl:text-2xl'>{service.title}</h4>
              <br />
              <p className='text-sm text-white 2xl:text-lg'>{service.content}</p>
            </article>
          ))}
        </div>
        <br />

        <span className='text-2xl text-white font-bold'>Y además contarás con estos 3 regalitos extra...</span>
        <div className='w-32 h-0.5 mt-4 mx-auto bg-secondary-300'></div>

        <div className='flex flex-col md:flex-row md:justify-center md:items-start mt-4'>
          {presents.map((present) => (
            <article key={present.title} className='w-full md:w-9/12 h-full bg-transparent flex flex-col justify-start items-center md:mx-6 my-4'>
              <picture className=''>
                <img src={present.img} alt={present.title} width={380} height={300} />
              </picture>
              <br className='hidden md:block' />

              <h4 className='text-white font-bold text-lg mt-4 md:mt-0 2xl:text-2xl'>{present.title}</h4>
              <br />
              <p className='text-sm text-white 2xl:text-lg'>{present.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
