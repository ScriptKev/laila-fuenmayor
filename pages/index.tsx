import Head from 'next/head'
import {
  HeaderCarousel,
  InfoSection,
  HowICanHelpYouSection,
  PresentationSection,
  TeamSection,
  ContactSection,
  NewsLetterSection,
} from 'components/pages/home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Laila Fuenmayor</title>
      </Head>

      <HeaderCarousel />
      <HowICanHelpYouSection />
      <PresentationSection />
      <InfoSection />
      <TeamSection />
      <ContactSection />
      <NewsLetterSection />
    </>
  )
}
