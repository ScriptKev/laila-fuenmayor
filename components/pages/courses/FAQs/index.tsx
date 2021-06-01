import { QAList } from './QAList'

export const FAQs = () => {
  return (
    <section className='w-full h-ful bg-gray-100 py-10'>
      <h5 className='mx-auto text-center px-4 mt-12 text-2xl text-indigo-900 font-semibold'>¿Aún con indesición?</h5> <br />
      <span>Te dejo las preguntas que han tenido otras personas que he guiado...</span> <br />
      <QAList />
    </section>
  )
}
