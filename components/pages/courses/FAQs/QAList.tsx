import { useRef } from 'react'
import { QA } from './QA'

export const QAList = () => {
  const { current: QAs } = useRef([
    {
      question: 'Actualmente no tengo un equipo ni un proyecto claro, ¿esto es para mí?',
      answer:
        'No necesitas tener un equipo o un emprendimiento o un trabajo para sumarte. El programa es para cualquier persona que no quiera seguir sintiendo que cada meta es una lucha constante, que todo le cuesta y que quiere comenzar a estar clara en cómo puede facilitar, aprovechar y disfrutar su camino hacia los objetivos de crecimiento que se plantea. Aquí vas a aprender cómo usar tus talentos innatos para accionar, lo que te ayudará a lograr de una manera más efectiva y desde el disfrute, en lugar de dedicar un esfuerzo inhumano a tratar de corregirte o de ser quien no eres creyendo que es la única manera de crecer.',
    },
    {
      question: 'Si me puedo hacer el test por mi cuenta, ¿tiene sentido que invierta en este programa?',
      answer:
        'Tiene todo el sentido. Muchísimas personas que se hacen el test luego no saben cómo aprovechar toda la información valiosa que el test te da porque no tienen el mindset desarrollado ni el conocimiento claro. Si no quieres que los resultados del test se queden en la gaveta y seguir sintiendo que tu crecimiento es una lucha en vez de un disfrute, entonces te espero en el programa :)',
    },
    {
      question: '¿Está incluido el test de talentos?',
      answer:
        'No, no está incluido y es indispensable que lo tengas. Puedes comprarlo a través de la plataforma de Gallup, en la plataforma de pago (como un adicional al taller) o haciendo clic en este enlace. Es importante que sepas que la distribución de los test se hará en un día y hora estipulados dentro del programa.',
    },
    {
      question: '¿Qué pasa si ya tomé el test de talentos CliftonStrengths? ¿Debo volver a tomarlo?',
      answer:
        'El test con el que vamos a trabajar es el completo que refleja tus 34 temas de talentos. Si tomaste el básico, podrás expandirlo. Si ya tomaste el completo y fue después de los 25 años de edad, quédate con ese reporte. No hace falta volver a tomarlo 😉',
    },
    {
      question: '¿Por cuál plataforma serán las clases?',
      answer: 'Las clases son vía Zoom, todos los miércoles desde el 2 de junio hasta el 7 de julio 2021 a las 7pm Miami/ Caracas.',
    },
    {
      question: '¿Qué pasa si vivo en Europa u otro continente o no alcanzo a entrar en la clase en vivo?',
      answer: '¡No te preocupes! Podrás verla en diferido en el módulo correspondiente dentro de la plataforma de Kajabi.',
    },
    {
      question: '¿Por cuánto tiempo estará disponible el material del programa?',
      answer: 'Tendrás acceso a todo el material hasta 3 meses después de finalizado el programa.',
    },
    {
      question: '¿Hay tareas?',
      answer:
        'Como tal, no. Sí hay workbooks que te recomiendo ampliamente desarrollar para que te adueñes realmente de tus temas de talento. La idea es que los trabajes a tu ritmo y -si así lo deseas, compartas conmigo lo que resulte de ahí (el feedback que recibirás será muy breve y por lo general con miras a alentarte a seguir recorriendo el camino).',
    },
    {
      question: '¿Recibiré acompañamiento individual?',
      answer:
        'No, el acompañamiento individual no está contemplado dentro del programa. Sin embargo, podrás adquirir sesiones de coaching adicionales a un precio especial después de que finalice el entrenamiento.',
    },

    {
      question: '¿Puedo pagar mediante otras plataformas?',
      answer:
        'Puedes pagar por PayPal (considera la comisión adicional), Zelle o Mercantil Panamá. También podrás pagar con tu tarjeta de crédito o débito a través de la plataforma de pago Stripe.',
    },

    {
      question: '¿A dónde acudo si tengo otra duda?',
      answer: 'Si tienes alguna pregunta adicional, puedes escribirme haciendo clic en este enlace.',
    },
  ])

  return (
    <dl className='mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col lg:flex-wrap'>
      {QAs.map((QAItem) => (
        <QA key={QAItem.question} question={QAItem.question} answer={QAItem.answer} />
      ))}
    </dl>
  )
}
