import { useState } from 'react'

export const QA = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => setIsOpen((prevState) => !prevState)

  return (
    <div className='lg:w-1/2'>
      <div onClick={handleIsOpen} className='question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group'>
        <dt className='question'>
          <div className='flex justify-between'>
            <div className='text-indigo-800 font-semibold'>{question}</div>
            <div>
              <svg
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
              </svg>
              <svg
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
              </svg>
            </div>
          </div>
        </dt>
        <dd className={`${isOpen ? 'block' : 'hidden'} answer mt-2 leading-snug text-gray-700`}>{answer}</dd>
      </div>
    </div>
  )
}
