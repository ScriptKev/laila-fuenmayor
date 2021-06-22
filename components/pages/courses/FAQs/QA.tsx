import { useState } from 'react'

export const QA = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => setIsOpen((prevState) => !prevState)

  return (
    <div className='w-full lg:w-3/4 mx-auto shadow-md my-4 rounded-xl'>
      <div onClick={handleIsOpen} className='question-and-answer select-none cursor-pointer mx-8 my-3 px-6 py-4 rounded-lg text-sm group'>
        <dt className='question'>
          <div className='flex justify-between text-center'>
            <h5 className='text-primary-300 text-lg font-bold self-center 2xl:text-2xl w-full text-center'>{question}</h5>
            <div className='hidden md:block'>
              <span className={`${isOpen ? 'hidden' : 'block'} text-4xl text-primary-300 font-bold`}>+</span>
              <span className={`${isOpen ? 'block' : 'hidden'} text-4xl text-primary-300 font-bold`}>-</span>
              {/* <svg
                fill='currentColor'
                className={`${
                  isOpen ? 'hidden' : 'block'
                } block question-chevron group-hover:bg-gray-500 h-5 text-indigo-800 bg-gray-400 rounded-full p-1`}
                viewBox='0 0 20 20'
                version='1.1'
              >
                <g stroke='currentColor' strokeWidth='1' fill='currentColor' fillRule='evenodd'>
                  <g>
                    <polygon points='9.29289322 12.9497475 10 13.6568542 15.6568542 8 14.2426407 6.58578644 10 10.8284271 5.75735931 6.58578644 4.34314575 8'></polygon>
                  </g>
                </g>
              </svg> */}
              {/* <svg
                fill='currentColor'
                className={`question-chevron ${isOpen ? 'block' : 'hidden'} group-hover:bg-gray-500 h-5 text-indigo-800 bg-gray-400 rounded-full p-1`}
                viewBox='0 0 20 20'
                version='1.1'
              >
                <g stroke='currentColor' strokeWidth='1' fill='currentColor' fillRule='evenodd'>
                  <g>
                    <polygon points='10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12'></polygon>
                  </g>
                </g>
              </svg> */}
            </div>
          </div>
        </dt>
        <dd className={`${isOpen ? 'block' : 'hidden'} answer mt-2 leading-snug text-gray-700 font-medium`}>{answer}</dd>
      </div>
    </div>
  )
}
