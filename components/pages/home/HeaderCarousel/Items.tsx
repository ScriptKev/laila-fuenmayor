import Image from 'next/image'

export const Items = () => (
  <div>
    <div className='fixed h-screen w-full overflow-hidden z-0'>
      <Image alt='Mountains' src='/mountains.jpg' layout='fill' objectFit='cover' quality={100} />
    </div>
  </div>
)
