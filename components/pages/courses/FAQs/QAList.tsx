import { useRef } from 'react'
import { QA } from './QA'

export const QAList = () => {
  const { current: QAs } = useRef([
    { question: 'Esto es una pregunta', answer: 'Esto una respuesta' },
    { question: 'Esto es una pregunta 2', answer: 'Esto una respuesta' },
  ])

  return (
    <dl className='mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col lg:flex-row lg:flex-wrap'>
      {QAs.map((QAItem) => (
        <QA key={QAItem.question} question={QAItem.question} answer={QAItem.answer} />
      ))}
    </dl>
  )
}
