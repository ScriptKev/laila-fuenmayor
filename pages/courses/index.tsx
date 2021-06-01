import Head from 'next/head'

import { HeaderCarousel, FirstSection, SecondSection, ThridSection, FourthSection, FifthSection, FAQs, CTA } from 'components/pages/courses'

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Cursos - Laila Fuenmayor</title>
      </Head>

      <HeaderCarousel />
      <FirstSection />
      <SecondSection />
      <ThridSection />
      <FourthSection />
      <FifthSection />
      <FAQs />
      <CTA />
    </>
  )
}
