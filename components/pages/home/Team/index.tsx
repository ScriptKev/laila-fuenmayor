import Image from 'next/image'
import { useRef } from 'react'

const teamProfiles = [
  {
    fullName: 'José Tuche',
    rol: 'Coachee',
    content:
      '“¡Ahora todo tiene sentido!”, fueron parte de mis palabras al culminar el acompañamiento que recibí de Laila. La oportunidad de conocer la cultura de talentos de Gallup (CliftonStrengths) fue buena. Sin embargo, iniciar el camino para convertir esos talentos en fortalezas con la guía de Laila fue extraordinario. Te hace sentir cómodo, te permite conocer tu sello individual y te ayuda a construir un enfoque al logro desde tus motivaciones más profundas. Pude definir aquellas habilidades innatas que estaban en mi mente, sin embargo, al no precisarlas con claridad, era poco probable usarlas a mi favor. Logré reconciliarme con características que valoraba poco y aprendí a ser más compasivo conmigo y con mi entorno. Además, comencé a utilizar mis habilidades naturales para lograr mis objetivos. Desde entonces, mi enfoque en las fortalezas ha estado presente en cada meta que me propongo y es parte de las herramientas que recomemiendo a todas las personas y organizaciones.',
    img: '/img/homePage/teamProfiles/teamProfile1.png',
  },

  {
    fullName: 'Ina Firgau',
    rol: 'Fundadora de Self Academy',
    content:
      'Conocer mis talentos fue un antes y un después en mi vida. Me permitió reconocer partes de mí que eran especiales y que podía poner al servicio de mi crecimiento y el de otros. Además descubrí que, aunque mis talentos habían estado siempre allí, yo los juzgaba, los rechazaba y hasta los daba por sentado pensando que cualquier persona era capaz de hacer lo mismo que yo, de la misma manera. Pues resultó que no, que yo tenía una forma única de aportar al mundo y reconocerla, amarla y fortalecerla me hizo sentir empoderada, auto-confiada y con ganas de comerme el mundo.',
    img: '/img/homePage/teamProfiles/teamProfile2.png',
  },

  {
    fullName: 'Eloin Lacera',
    rol: 'Diseñador Gráfico',
    content:
      '“¡Esto es realmente lo que soy!”, Después de muchos años intentando arreglar o cambiar lo que estaba mal en mi, me sentía muy frustrado por que no lograba entender que el esfuerzo que estaba haciendo por ser diferente nunca me llevaría al éxito y lo más importante “Eso no me hacia Feliz” . Cuando vi la oportunidad de conocer mis talentos de la mano de Laila no lo pensé más. saber en lo que naturalmente eres bueno te hace sentir mucho más cómodo, te permite conocer como reaccionas ante el mundo y que cada persona es especial y única. Conocer mis talentos me ayudo a comprender mejor a las personas de mi entorno y a mi familia, entendí que si nos enfocamos en potenciar eso en lo que naturalmente eres bueno y no intentar ser bueno o cambiar en lo que no se me da naturalmente me da el enfoque y la motivación necesaria para lograr todo lo que me proponga, también me permite relacionarme mejor con mi entorno, alcanzar mis metas y ser feliz sin intentar ser lo que las personas creen que debo ser.',
    img: '/img/homePage/teamProfiles/teamProfile3.png',
  },
]

export const TeamSection = () => {
  const { current: profiles } = useRef(teamProfiles)

  return (
    <section className='min-h-screen w-full pt-16 text-center bg-primary-300'>
      <h4 className='px-4 text-2xl md:text-4xl text-white font-bold'>Mira lo que otros sienten luego de aprender a amar sus talentos...</h4>
      <br />
      <div className='w-32 h-0.5 mx-auto bg-secondary-300 hidden md:inline-block'></div>

      <div>
        <div className='container px-5 pt-10 pb-0.5 md:py-24 mx-auto'>
          {profiles.map((profile, idx) => (
            <div
              key={profile.fullName}
              className={`flex ${idx === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-col items-center lg:w-5/6 mx-auto pb-10 mb-10`}
            >
              <div className='h-52 w-52 sm:w-32 sm:h-32 sm:mr-10 inline-flex flex-col items-center justify-center rounded-full flex-shrink-0'>
                <picture>
                  <Image src={profile.img} width={254} height={254} />
                </picture>

                <div>
                  <span className='text-2xl text-white font-bold'>{profile.fullName}</span> <br />
                  <small className='font-medium text-white text-base whitespace-nowrap'>{profile.rol}</small>
                </div>
              </div>

              <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
                <br />
                <p className='leading-relaxed text-base text-gray-100'>{profile.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
