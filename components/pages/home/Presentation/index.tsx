// import Image from 'next/image'

export const PresentationSection = () => {
  return (
    <>
      <section className='h-80 md:h-screen-25 w-full z-0 relative md:py-12 2xl:py-16 bg-presentationBg bg-right sm:bg-center bg-no-repeat bg-cover'>
        {/* <Image alt='Mountains' src='/img/homePage/presentationBg.png' layout='fill' objectFit='cover' quality={100} /> */}

        <div className='text-left pl-10 2xl:pl-48 w-170 2xl:w-5/12 h-full place-content-center hidden md:flex flex-col justify-center items-center'>
          <h2 className='text-7xl text-primary-300 font-hottemp self-start 2xl:text-9xl'>Hola soy Laila</h2>
          <br />
          <p className='text-gray-800 text-sm font-medium 2xl:text-xl'>
            Y antes de ser Coach de Fortalezas certificada por Gallup, Promotora del bienestar, multiplicadora de Empresas B y consteladora familiar,
            con más de 10 años de experiencia guiando personas a descubrir y fortalecer sus talentos, pasé gran parte de mi vida inconforme con mis
            capacidades y tratando de corregirme. <br /> <br />
            Creía que para tener éxito tenía que cambiarme. Tenía que ser más enfocada, más disciplinada, mejor ejecutora y que sólo cuando lo lograra
            iba a poder crecer. Invertí años de mi vida (y muchísima energía que no veía retribuida en logros satisfactorios para mí) haciendo
            esfuerzos sobrehumanos para lograr lo que quería, me forzaba a encajar en habilidades que no eran las que se me daban naturalmente y no
            tenía idea de mis talentos. Pensaba que eso que hacía bien era cuestión de suerte o que simplemente todos podían hacerlo igual que yo y no
            era nada especial. <br /> <br />
            Descubrir y desarrollar mis talentos cambió tanto mi vida al punto que decidí certificarme como coach de esta metodología y dedicarme a
            brindar este conocimiento vital a muchísimas personas que deseen, como yo, dejar de ir en contra de su naturaleza y comenzar a crecer de
            una manera mucho más efectiva y desde el disfrute, al reconocer su sello y brillar siendo quienes realmente son. <br />
            <br />
            Luego de haber guiado a casi 1000 personas, he creado este programa para multiplicar el alcance de este conocimiento y compartir con
            muchas más personas la fórmula que me ha llevado a pasar de “corregirme” a “brillar siendo yo”
            <br />
          </p>
          <br />
          <button className='px-14 py-3 text-white rounded-full bg-secondary-300 text-sm font-semibold 2xl:text-xl'>No estas solo, yo puedo ayudarte</button>
        </div>
      </section>

      <div className='text-center h-full place-content-center md:hidden flex-col justify-center items-center px-5 py-10'>
        <h2 className='text-7xl text-primary-300 font-hottemp self-start'>Hola soy Laila</h2>
        <br />
        <p className='text-gray-800 text-sm font-medium'>
          Y antes de ser Coach de Fortalezas certificada por Gallup, Promotora del bienestar, multiplicadora de Empresas B y consteladora familiar,
          con más de 10 años de experiencia guiando personas a descubrir y fortalecer sus talentos, pasé gran parte de mi vida inconforme con mis
          capacidades y tratando de corregirme. <br /> <br />
          Creía que para tener éxito tenía que cambiarme. Tenía que ser más enfocada, más disciplinada, mejor ejecutora y que sólo cuando lo lograra
          iba a poder crecer. Invertí años de mi vida (y muchísima energía que no veía retribuida en logros satisfactorios para mí) haciendo esfuerzos
          sobrehumanos para lograr lo que quería, me forzaba a encajar en habilidades que no eran las que se me daban naturalmente y no tenía idea de
          mis talentos. Pensaba que eso que hacía bien era cuestión de suerte o que simplemente todos podían hacerlo igual que yo y no era nada
          especial. <br /> <br />
          Descubrir y desarrollar mis talentos cambió tanto mi vida al punto que decidí certificarme como coach de esta metodología y dedicarme a
          brindar este conocimiento vital a muchísimas personas que deseen, como yo, dejar de ir en contra de su naturaleza y comenzar a crecer de una
          manera mucho más efectiva y desde el disfrute, al reconocer su sello y brillar siendo quienes realmente son. <br />
          <br />
          Luego de haber guiado a casi 1000 personas, he creado este programa para multiplicar el alcance de este conocimiento y compartir con muchas
          más personas la fórmula que me ha llevado a pasar de “corregirme” a “brillar siendo yo”
          <br />
        </p>
        <br />
      </div>
    </>
  )
}
