import { useRef } from 'react'

const elementsInfo = [
  {
    title: 'Te cuesta muchísimo ver cuáles son los talentos o destrezas que puedes aportar en tus proyectos o trabajo.',
    content:
      'Sientes que cualquier cosa que haces bien es algo que cualquier otra persona haría igual por ser tan fácil. No logras reconocer en qué te diferencias de otros. Cada vez que te piden que enumeres tus fortalezas te quedas completamente en blanco y todo lo que se te ocurre te parece inútil, lugar común o poco diferenciador.',
  },
  {
    title: 'Sientes que hay demasiadas cosas que necesitas corregir antes de poder crecer.',
    content:
      'A menudo piensas que el secreto para lograr el éxito es ir trabajando poco a poco en esas debilidades que siempre has creído que te están impidiendo alcanzar el nivel de éxito que sueñas. Enfocarte en esas debilidades hace que también esperes que otros en tu equipo corrijan las suyas y la dinámica de trabajo no termina de fluir como quisieras.',
  },
  {
    title: 'Pierdes la motivación o abandonas tu objetivo por no sentirte suficientemente capaz de lograrlo.',
    content:
      'Sientes que el camino es muy difícil, que los esfuerzos que haces requieren demasiada energía y que los resultados nunca equiparan el nivel de dedicación invertido en el proceso.',
  },
]

const elementsInfo2 = [
  {
    title: '1',
    content:
      'Comienzan un proyecto, pero lo sienten muy abrumador porque sienten que requiere que cambien muchas cosas de sí mismos y terminan abandonándolo.',
  },
  {
    title: '2',
    content: 'Dejan de asumir roles, cargos u oportunidades de crecimiento por sentir que aún no son capaces de tener un buen desempeño en ellas.',
  },
  {
    title: '3',
    content:
      'Hicieron el test o identificaron sus talentos pero no conectan con ellos, no los entienden o incluso se juzgan por tener determinado talento y no otro.',
  },
]

export const InfoSection = () => {
  const { current: elements } = useRef(elementsInfo)
  const { current: elements2 } = useRef(elementsInfo2)

  return (
    <section className='min-h-screen w-full text-center py-10 px-5 md:px-10' style={{ backgroundColor: '#e4c6a4' }}>
      <h4 className='text-secondary-300 text-3xl font-bold'>
        Hay 3 razones principales que dificultan el disfrute y alcance del éxito en profesionales y emprendedores
      </h4>
      <br />
      <div className='w-32 h-0.5 mx-auto bg-primary-300'></div>
      <br />
      <span className='text-gray-700 font-medium'>¿Cuál de estas te está afectando mas en este momento?</span>

      <div className='max-w-7xl mx-auto flex flex-row flex-wrap justify-center items-start mt-4'>
        {elements.map((item) => (
          <article
            key={item.title}
            className='text-center mx-0 md:mx-4 my-4 p-4 w-full md:w-124 h-full md:h-72 rounded-2xl'
            style={{ backgroundColor: '#C2B1C4' }}
          >
            <h4 className='text-gray-700 text-lg font-semibold'>{item.title}</h4>
            <br />
            <p className='text-gray-600 text-sm font-medium'>{item.content}</p>
          </article>
        ))}
      </div>

      <br />
      <span className='text-secondary-300 text-3xl font-bold'>Lo escucho todo el tiempo</span>
      <div className='w-32 h-0.5 mt-4 mx-auto bg-primary-300'></div>
      <br />

      <p className='text-gray-700 font-medium'>
        Las personas que llegan a mí, todas tienen habilidades maravillosas y la capacidad de alcanzar cualquier cosa que se propongan.
        <br className='hidden md:inline-block' />
        Sin embargo, al no saber reconocer su manera de lograrlo se sienten estancadas, inseguras y no disfrutan el camino.
      </p>
      <br />
      <br className='md:hidden' />

      <span className='font-bold text-3xl text-primary-300'>
        Por lo general estas personas han <br /> vivido alguna de estas 3 situaciones
      </span>

      <div className='max-w-6xl mx-auto flex flex-row flex-wrap justify-center items-center mt-4'>
        {elements2.map((item) => (
          <article key={item.title} className='text-center md:mx-4 my-4 w-96 h-full md:h-44 p-4 rounded-3xl bg-primary-300 text-white'>
            <span className='font-bold text-4xl'>{item.title}</span>
            <p className='font-light mt-2'>{item.content}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
