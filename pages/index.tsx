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
        <title>laila-fuenmayor</title>
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
