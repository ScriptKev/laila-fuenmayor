import { QAList } from './QAList'

export const FAQs = () => {
  return (
    <section className='w-full h-ful bg-gray-100 py-10 text-center'>
      <h5 className='mx-auto text-center px-4 mt-12 text-4xl text-primary-300 font-bold'>¿Aún con indesición?</h5> <br />
      <span className='mx-auto text-center px-4 mt-12 text-lg text-primary-300 font-bold'>
        Te dejo las preguntas que han tenido otras personas que he guiado...
      </span>
      <br />
      <QAList />
    </section>
  )
}
