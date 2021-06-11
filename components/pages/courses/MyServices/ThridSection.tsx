export const ThridSection = () => {
  return (
    <section
      className='h-priceBgSpacing md:h-screen-235 w-full bg-priceMobileBg md:bg-priceBg bg-no-repeat bg-top md:bg-center bg-contain mxs:bg-cover relative'
      style={{ backgroundColor: '#d5d5d3' }}
    >
      <div className=' absolute priceTopmm-md priceTopmd-lg priceToplg-4xl priceTop4xl left-0 right-0'>
        <div className='priceMaxWidthmd-lg priceMaxWidth4xl mx-auto text-white text-center px-6'>
          <span className='font-bold text-lg lg:text-xl'>
            ¡Oh sí! Es un montón, lo sé… <br />
            Mejor te hago un resumen de TOOODO lo que tendrás
          </span>
          <br />
          <br />

          <h2 className='font-hottemp wmax-md:text-5xl priceTitlexl priceTitle4xl'>Enámorate de tu sello</h2>
          <br />

          <span className='font-semibold text-sm 3xl:text-xl'>
            Programa online de 6 semanas en donde compartiré la fórmula para potenciar tu éxito reconociendo y amando tu combinación única de talentos
          </span>

          <br className='hidden md:block' />
          <br className='hidden md:block' />
          <span className='font-semibold hidden md:inline-block 3xl:text-xl'>Incluye:</span>
          <br />

          <div className='flex flex-col justify-start items-center mt-4 xl:mt-10 md:px-10'>
            <div className='flex flex-col md:flex-row justify-start items-center md:items-start text-sm xl:text-base text-center md:text-left'>
              <ul className='w-full md:w-1/2 md:mr-10 list-none md:list-disc px-4 md:px-0 3xl:text-2xl'>
                <li className=''>
                  <b>6 sesiones en vivo de dos horas cada una para </b> ayudarte a transformar tu mindset y aprender a crecer desde tus talentos
                  innatos, sin perder tiempo y esfuerzo en corregir tus debilidades
                  <b>(valor $997)</b>
                </li>
                <br />

                <li className=''>
                  <b>6 workbooks</b> para que puedas aplicar ese paso a paso de manera intencional y puedas entender mucho mejor la filosofía de
                  talentos aplicada en ti
                  <b>(valor $297)</b>
                </li>
                <br />

                <li className=''>
                  <b>BONO: Workbook 5 pistas de talentos</b> para prepararte antes de tomar el test y ayudarte a amar tus talentos desde el primer día
                  <b>(valor $47)</b>
                </li>
                <br />

                <li className=''>
                  <b>BONO: eBook Luz y puntos ciegos.</b> Guía para reconocer limitaciones de tus talentos y asegurarte que saques todo el provecho de
                  tu potencial innato
                  <b>(valor $47)</b>
                </li>
                <br />
              </ul>

              <ul className='w-full md:w-1/2 md:mr-10 list-none md:list-disc px-4 md:px-0 3xl:text-2xl'>
                <li className=''>
                  <b>BONO: 2 masterclasses para que entiendas los 34 talentos</b> para saber en todo momento cómo vivir cada tema de talento
                  <b>(valor $297)</b>
                </li>
                <br />

                <li className=''>
                  <b>Acompañamiento por 6 semanas</b> (invaluable)
                </li>
                <br />

                <li className=''>
                  <b>2 sesiones especiales para que hagas tus asignaciones y puedas aclarar tus dudas</b>
                </li>
                <br />

                <li className=''>
                  <b>Acceso extendido por 3 meses</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
