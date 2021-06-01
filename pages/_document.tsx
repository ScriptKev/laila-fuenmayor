import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='title' content='Leila Fuenmayor' />
          <meta
            name='description'
            content='Leila Fuenmayor - Descubre y ama tanto tus talentos que puedas crecer exponencialmente, sin necesidad de corregir tus debilidades.'
          />
          <meta name='keywords' content='Leila Fuenmayor' />
          <meta name='author' content='Leila Fuenmayor' />
          <meta name='copyright' content='Leila Fuenmayor' />
          <meta name='robots' content='index' />
          <meta name='robots' content='follow' />
          <link rel='icon' href='/favicon.ico' />

          <link rel='preload' href='/fonts/hottemp/hottemp.otf' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/multi/multi_bold.otf' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/multi/multi_semibold.otf' as='font' crossOrigin='' />
          <link rel='preload' href='/fonts/multi/multi2_bold.otf' as='font' crossOrigin='' />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' rel='stylesheet' />

          <meta property='og:site_name' content='La Casa de mi Padre - Donde todos tienen un lugar' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://lcpcaracas.org/' />
          <meta property='og:title' content='La Casa de mi Padre - Donde todos tienen un lugar' />
          <meta
            property='og:description'
            content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.'
          />
          <meta property='og:image' content='https://lcpcaracas.org/img/lcp-public.jpg' />
          <meta name='twitter:image:alt' content='La Casa de mi Padre - Donde todos tienen un lugar' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://lcpcaracas.org/' />
          <meta property='twitter:title' content='La Casa de mi Padre - Donde todos tienen un lugar' />
          <meta
            property='twitter:description'
            content='Somos una iglesia cristiana, alegre, sencilla, con corazón de familia, donde todos tienen un lugar.'
          />
          <meta property='twitter:image' content='https://lcpcaracas.org/img/lcp-public.jpg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
